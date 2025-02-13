import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
import Navbar from 'react-bootstrap/Navbar';
import Badge from 'react-bootstrap/Badge';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Container from 'react-bootstrap/Container';
import { LinkContainer } from 'react-router-bootstrap';
import { useContext, useEffect, useState } from 'react';
import { Store } from './Store';
import CartScreen from './screens/CartScreen';
import SigninScreen from './screens/SigninScreen';
import ShippingAddressScreen from './screens/ShippingAddressScreen';
import SignupScreen from './screens/SingupScreen';
import PaymentMethodScreen from './screens/PaymentMethodScreen';
import PlaceOrderScreen from './screens/PlaceOrderScreen';
import OrderScreen from './screens/OrderScreen';
import OrderHistoryScreen from './screens/OrderHistoryScreen';
import ProfileScreen from './screens/ProfileScreen';
import Button from 'react-bootstrap/Button';
import { getError } from './utils';
import axios from 'axios';
import SearchBox from './components/SearchBox';
import SearchScreen from './screens/SearchScreen';
import ProtectedRoute from './components/ProtectedRoute';
import DashboardScreen from './screens/DashboardScreen';
import AdminRoute from './components/AdminRoute';
import ProductListScreen from './screens/ProductListScreen';
import ProductEditScreen from './screens/ProductEditScreen';
import OrderListScreen from './screens/OrderListScreen';
import UserListScreen from './screens/UserListScreen';
import UserEditScreen from './screens/UserEditScreen';
import MapScreen from './screens/MapScreen';
// import MessengerCustomerChat from 'react-messenger-customer-chat';
import Footer from './components/Footer/Footer';
import logo from './components/Header/logobp.png';
import './App.css';
// import './index.css';

function App() {
  const { state, dispatch: ctxDispatch } = useContext(Store);
  const { fullbox, cart, userInfo } = state;
  const signoutHandler = () => {
    ctxDispatch({ type: 'USER_SIGNOUT' });
    localStorage.removeItem('userInfo');
    localStorage.removeItem('shippingAddress');
    localStorage.removeItem('paymentMethod');
    window.location.href = '/signin';
  };
  const [sidebarIsOpen, setSidebarIsOpen] = useState(false);
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const { data } = await axios.get(`/api/products/categories`);
        setCategories(data);
      } catch (err) {
        toast.error(getError(err));
      }
    };
    fetchCategories();
  }, []);
  return (
    <BrowserRouter>
      <div
        className={
          sidebarIsOpen
            ? fullbox
              ? 'site-container active-cont d-flex flex-column full-box'
              : 'site-container active-cont d-flex flex-column'
            : fullbox
            ? 'site-container d-flex flex-column full-box'
            : 'site-container d-flex flex-column'
        }
      >
        <ToastContainer position="bottom-center" limit={1} />
        <header>
          <Navbar fixed="top" bg="light" variant="light" expand="lg">
            <Container>
              <Button
                variant="light"
                onClick={() => setSidebarIsOpen(!sidebarIsOpen)}
              >
                <i className="fas fa-bars"></i>
              </Button>
              <LinkContainer to="/">
                <Navbar.Brand>
                  <img
                    src={logo}
                    width="auto"
                    height="auto"
                    className="d-inline-block align-top py-2"
                    alt="React Bootstrap logo"
                  />
                </Navbar.Brand>
              </LinkContainer>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <SearchBox />

                <Nav className="justify-content-center flex-grow-1 pe-3">
                  <Nav.Link className="text-bold fs-6" href="#action2">
                    GIỚI THIỆU
                  </Nav.Link>
                  <Nav.Link className="text-bold " href="#action3">
                    THỰC ĐƠN
                  </Nav.Link>
                  <Nav.Link className="text-bold" href="#action4">
                    KHUYẾN MÃI
                  </Nav.Link>
                  <Nav.Link className="text-bold" href="#action5">
                    LIÊN HỆ
                  </Nav.Link>
                </Nav>

                <Nav className="me-auto justify-content-end">
                  {/* icon fa */}

                  <div className="icon f_flex width">
                    <div className="cart">
                      <Link to="/cart">
                        <i className="fa fa-shopping-bag icon-circle"></i>
                        {cart.cartItems.length > 0 && (
                          <span pill bg="danger">
                            {cart.cartItems.reduce((a, c) => a + c.quantity, 0)}
                          </span>
                        )}
                      </Link>
                    </div>
                    <i className="fa fa-user icon-circle"></i>
                    {userInfo ? (
                      <NavDropdown
                        title={userInfo.name}
                        id="basic-nav-dropdown"
                      >
                        <LinkContainer to="/profile">
                          <NavDropdown.Item>
                            Thông tin người dùng
                          </NavDropdown.Item>
                        </LinkContainer>
                        <LinkContainer to="/orderhistory">
                          <NavDropdown.Item>Lịch sử mua hàng</NavDropdown.Item>
                        </LinkContainer>
                        <NavDropdown.Divider />
                        <Link
                          className="dropdown-item"
                          to="#signout"
                          onClick={signoutHandler}
                        >
                          Đăng xuất
                        </Link>
                      </NavDropdown>
                    ) : (
                      <Link className="nav-link" to="/signin">
                        Đăng nhập
                      </Link>
                    )}
                    {userInfo && userInfo.isAdmin && (
                      <NavDropdown title="Admin" id="admin-nav-dropdown">
                        <LinkContainer to="/admin/dashboard">
                          <NavDropdown.Item>Dashboard</NavDropdown.Item>
                        </LinkContainer>
                        <LinkContainer to="/admin/products">
                          <NavDropdown.Item>Sản phẩm</NavDropdown.Item>
                        </LinkContainer>
                        <LinkContainer to="/admin/orders">
                          <NavDropdown.Item>Đơn hàng</NavDropdown.Item>
                        </LinkContainer>
                        <LinkContainer to="/admin/users">
                          <NavDropdown.Item>Người dùng</NavDropdown.Item>
                        </LinkContainer>
                      </NavDropdown>
                    )}
                  </div>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </header>
        <div
          className={
            sidebarIsOpen
              ? 'active-nav side-navbar d-flex justify-content-between flex-wrap flex-column'
              : 'side-navbar d-flex justify-content-between flex-wrap flex-column'
          }
        >
          <Nav className="flex-column text-muted w-100 p-2">
            <Nav.Item>
              <strong>Danh mục</strong>
            </Nav.Item>
            {categories.map((category) => (
              <Nav.Item key={category}>
                <LinkContainer
                  to={`/search?category=${category}`}
                  onClick={() => setSidebarIsOpen(false)}
                >
                  <Nav.Link className="text-muted">{category}</Nav.Link>
                </LinkContainer>
              </Nav.Item>
            ))}
          </Nav>
        </div>
        <main>
          <Container className="mt-3">
            <Routes>
              <Route path="/product/:slug" element={<ProductScreen />} />
              <Route path="/cart" element={<CartScreen />} />
              <Route path="/search" element={<SearchScreen />} />
              <Route path="/signin" element={<SigninScreen />} />
              <Route path="/signup" element={<SignupScreen />} />
              <Route
                path="/profile"
                element={
                  <ProtectedRoute>
                    <ProfileScreen />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/map"
                element={
                  <ProtectedRoute>
                    <MapScreen />
                  </ProtectedRoute>
                }
              />
              <Route path="/placeorder" element={<PlaceOrderScreen />} />
              <Route
                path="/order/:id"
                element={
                  <ProtectedRoute>
                    <OrderScreen />
                  </ProtectedRoute>
                }
              ></Route>
              <Route
                path="/orderhistory"
                element={
                  <ProtectedRoute>
                    <OrderHistoryScreen />
                  </ProtectedRoute>
                }
              ></Route>
              <Route
                path="/shipping"
                element={<ShippingAddressScreen />}
              ></Route>
              <Route path="/payment" element={<PaymentMethodScreen />}></Route>
              {/* Admin Routes */}
              <Route
                path="/admin/dashboard"
                element={
                  <AdminRoute>
                    <DashboardScreen />
                  </AdminRoute>
                }
              ></Route>
              <Route
                path="/admin/orders"
                element={
                  <AdminRoute>
                    <OrderListScreen />
                  </AdminRoute>
                }
              ></Route>
              <Route
                path="/admin/users"
                element={
                  <AdminRoute>
                    <UserListScreen />
                  </AdminRoute>
                }
              ></Route>
              <Route
                path="/admin/products"
                element={
                  <AdminRoute>
                    <ProductListScreen />
                  </AdminRoute>
                }
              ></Route>
              <Route
                path="/admin/product/:id"
                element={
                  <AdminRoute>
                    <ProductEditScreen />
                  </AdminRoute>
                }
              ></Route>
              <Route
                path="/admin/user/:id"
                element={
                  <AdminRoute>
                    <UserEditScreen />
                  </AdminRoute>
                }
              ></Route>
              <Route path="/" element={<HomeScreen />} />
            </Routes>
          </Container>
        </main>
        {/* <MessengerCustomerChat
          pageId="1444607315772142"
          appId="233106164568098"
        /> */}
        <Footer />
      </div>
    </BrowserRouter>
  );
}
export default App;

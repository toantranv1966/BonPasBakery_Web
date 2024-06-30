import React, { useContext, useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';
import { Store } from '../Store';
import CheckoutSteps from '../components/CheckoutSteps';
import '../App.css';

export default function ShippingAddressScreen() {
  const navigate = useNavigate();
  const { state, dispatch: ctxDispatch } = useContext(Store);
  const {
    fullBox,
    userInfo,
    cart: { shippingAddress },
  } = state;
  const [fullName, setFullName] = useState(shippingAddress.fullName || '');
  const [address, setAddress] = useState(shippingAddress.address || '');
  // const [city, setCity] = useState(shippingAddress.city || '');
  const [phoneNumber, setPhoneNumber] = useState(
    shippingAddress.phoneNumber || ''
  );
  useEffect(() => {
    if (!userInfo) {
      navigate('/signin?redirect=/shipping');
    }
  }, [userInfo, navigate]);
  // const [country, setCountry] = useState(shippingAddress.country || '');
  const submitHandler = (e) => {
    e.preventDefault();
    ctxDispatch({
      type: 'SAVE_SHIPPING_ADDRESS',
      payload: {
        fullName,
        address,
        phoneNumber,
        // city,
        // postalCode,
        // country,
        location: shippingAddress.location,
      },
    });
    localStorage.setItem(
      'shippingAddress',
      JSON.stringify({
        fullName,
        address,
        phoneNumber,
        // city,
        // postalCode,
        // country,
        location: shippingAddress.location,
      })
    );
    navigate('/payment');
  };

  useEffect(() => {
    ctxDispatch({ type: 'SET_FULLBOX_OFF' });
  }, [ctxDispatch, fullBox]);

  return (
    <div className="fix-botton">
      <Helmet>
        <title>Địa chỉ giao hàng</title>
      </Helmet>

      <CheckoutSteps step1 step2></CheckoutSteps>
      <div className="container small-container">
        <h1 className="text-2xl font-medium mb-3 my-3">Địa chỉ giao hàng</h1>
        <Form onSubmit={submitHandler}>
          <Form.Group className="mb-3" controlID="fullName">
            <Form.Label>Họ tên</Form.Label>
            <Form.Control
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              required
            />
          </Form.Group>
          <Form.Group className="mb-3" controlID="address">
            <Form.Label>Địa chỉ</Form.Label>
            <Form.Control
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              required
            />
          </Form.Group>
          {/* <Form.Group className="mb-3" controlID="city">
            <Form.Label>Thành phố</Form.Label>
            <Form.Control
              value={city}
              onChange={(e) => setCity(e.target.value)}
              required
            />
          </Form.Group> */}
          <Form.Group className="mb-3" controlID="postalCode">
            <Form.Label>Số điện thoại</Form.Label>
            <Form.Control
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              required
            />
          </Form.Group>
          {/* <Form.Group className="mb-3" controlID="country">
            <Form.Label>Quốc gia</Form.Label>
            <Form.Control
              value={country}
              onChange={(e) => setCountry(e.target.value)}
              required
            />
          </Form.Group> */}
          <div className="mb-3">
            <Button
              id="chooseOnMap"
              type="button"
              variant="primary"
              onClick={() => navigate('/map')}
            >
              Chọn vị trí trên bản đồ
            </Button>
            {shippingAddress.location && shippingAddress.location.lat ? (
              <div>
                LAT:{shippingAddress.location.lat}
                LNG:{shippingAddress.location.lng}
              </div>
            ) : (
              <div>Không có vị trí</div>
            )}
          </div>
          <div className="mb-3">
            <Button variant="primary" type="submit">
              Tiếp tục
            </Button>
          </div>
        </Form>
      </div>
    </div>
  );
}

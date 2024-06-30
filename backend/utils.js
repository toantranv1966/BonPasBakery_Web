import jwt from 'jsonwebtoken';
import mg from 'mailgun-js';
export const generateToken = (user) => {
  return jwt.sign(
    {
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
    },
    process.env.JWT_SECRET,
    {
      expiresIn: '30d',
    }
  );
};

export const isAuth = (req, res, next) => {
  const authorization = req.headers.authorization;
  if (authorization) {
    const token = authorization.slice(7, authorization.length); // Bearer XXXXXX
    jwt.verify(token, process.env.JWT_SECRET, (err, decode) => {
      if (err) {
        res.status(401).send({ message: 'Token không hợp lệ' });
      } else {
        req.user = decode;
        next();
      }
    });
  } else {
    res.status(401).send({ message: 'Không có Token' });
  }
};

export const isAdmin = (req, res, next) => {
  if (req.user && req.user.isAdmin) {
    next();
  } else {
    res.status(401).send({ message: 'Admin Token không hợp lệ' });
  }
};

export const mailgun = () =>
  mg({
    apiKey: process.env.MAILGUN_API_KEY,
    domain: process.env.MAILGUN_DOMIAN,
  });

export const payOrderEmailTemplate = (order) => {
  return `<h1>Cám ơn bạn đã đặt hàng tại BonPas Bakery & Coffee,</h1>
  <p>
  Xin chào ${order.user.name}</p>
  <p>BonPas Bakery & Coffee đã xử lý xong đơn đặt hàng của bạn.</p>
  <h2>[Thông tin đơn hàng ${order._id}] (${order.createdAt
    .toString()
    .substring(0, 10)})</h2>
  <table>
  <thead>
  <tr>
  <td><strong>Sản phẩm</strong></td>
  <td><strong>Số lượng</strong></td>
  <td><strong align="right">Đơn giá</strong></td>
  </thead>
  <tbody>
  ${order.orderItems
    .map(
      (item) => `
    <tr>
    <td>${item.name}</td>
    <td align="center">${item.quantity}</td>
    <td align="right"> $${item.price.toFixed(2)}</td>
    </tr>
  `
    )
    .join('\n')}
  </tbody>
  <tfoot>
  <tr>
  <td colspan="2">Đơn giá:</td>
  <td align="right"> $${order.itemsPrice.toFixed(2)}</td>
  </tr>
  <tr>
  <td colspan="2">Giá vận chuyển:</td>
  <td align="right"> $${order.shippingPrice.toFixed(2)}</td>
  </tr>
  <tr>
  <td colspan="2"><strong>Tổng giá trị:</strong></td>
  <td align="right"><strong> $${order.totalPrice.toFixed(2)}</strong></td>
  </tr>
  <tr>
  <td colspan="2">Phương thức thanh toán:</td>
  <td align="right">${order.paymentMethod}</td>
  </tr>
  </table>
  <h2>Đơn hàng được giao đến</h2>
  <p>
  ${order.shippingAddress.fullName},<br/>
  ${order.shippingAddress.address},<br/>
  </p>
  <hr/>
  <p>
  Một lần nữa BonPas Bakery & Coffee cảm ơn quý khách!
  </p>
  `;
};

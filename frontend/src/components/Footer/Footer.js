import React from "react";
import logo from "../../components/Header/logobp.png";
import { Link } from "react-router-dom";
import './footer.css';


export default function Footer() {
  return (
    <footer className="bg-dark text-light pt-4">
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <h5>Danh Mục Món Ăn</h5>
            <ul className="list-unstyled">
              <li>Breads & Pastries</li>
              <li>Hambuger & Pizza</li>
              <li>Bánh mỳ & Bánh bao</li>
              <li>Bông lan & Bánh kem</li>
              <li>Cà phê & Thức uống khác</li>
              <li>Combo sản phẩm mới</li>
            </ul>
          </div>
          <div className="col-md-3">
            <h5>Về BonPass</h5>
            <ul className="list-unstyled">
              <li>Câu Chuyện Của Chúng Tôi</li>
              <li>Tin Khuyến Mãi</li>
              <li>Tin tức BonPas</li>
              <li>Tuyển dụng</li>
              <li>Đặt tiệc Sinh nhật</li>
            </ul>
          </div>
          <div className="col-md-3">
            <h5>Liên hệ KFC</h5>
            <ul className="list-unstyled">
              <li>Theo dõi đơn hàng</li>
              <li>Hệ Thống cửa hàng</li>
              <li>Liên hệ BonPas</li>
            </ul>
          </div>
          <div className="col-md-3">
            <h5>Chính sách</h5>
            <ul className="list-unstyled">
              <li>Chính sách hoạt động</li>
              <li>Chính sách và quy định</li>
              <li>Chính sách bảo mật thông tin</li>
            </ul>
          </div>
        </div>
        <div className="row mt-4">
          <div className="col-md-6">
            <h3 className="text-5xl font-bold">CÔNG TY TNHH ĐỒNG TIẾN</h3>
            <p>75-77-79 Phan Đăng Lưu, P. Hòa Cường Nam, Q. Hải Châu, TP.Đà Nẵng</p>
            <p>Điện thoại: (0236) 3821845 - 821849</p>
            <p>Email: sales@dongtienbakery.com.vn</p>
            <p>Mã số thuế: 0400418440</p>
            <p>Đăng ký lần đầu: 06-05-2002 - Sở kế hoạch và đầu tư TP. Đà Nẵng cấp</p>
            <p>Đăng ký thay đổi lần 2: 06-07-2022</p>
          </div>
          <div className="col-md-6 text-right">
            <a href="#"><img src="https://kfcvn-static.cognizantorderserv.com/images/email/logo_footer.png" alt="icon" className="img-fluid"/></a>
          </div>
        </div>
      </div>
      <div className="bg-dark text-light text-center py-2">
        <p>Copyright © 2024 BonPas Bakery & Coffee</p>
        <div>
          <a href="#" className="text-light mx-2"><i className="fab fa-facebook-f"></i></a>
          <a href="#" className="text-light mx-2"><i className="fab fa-instagram"></i></a>
          <a href="#" className="text-light mx-2"><i className="fab fa-twitter"></i></a>
          <a href="#" className="text-light mx-2"><i className="fab fa-youtube"></i></a>
        </div>
        <div className="mt-2">
          <a href="#"><img src="appstore.png" alt="App Store" className="img-fluid mr-2" style={{width: '100px'}} /></a>
          <a href="#"><img src="googleplay.png" alt="Google Play" className="img-fluid" style={{width: '100px'}} /></a>
        </div>
      </div>
    </footer>
  );
}

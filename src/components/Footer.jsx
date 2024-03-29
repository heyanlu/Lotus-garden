import "./Footer.css";

function Footer() {
  return (
    <footer>
      <div className="footer-image-container">
        <img
          className="footer-image"
          src="./2023-12-02.jpg"
          alt="Lotus garden map"
        />
      </div>
      <ul className="footer-menu">
        <li className="footer-menu-item">
          <div className="footer-logo-container">
            <img
              className="item-logo"
              src="./pin_drop_FILL0_wght400_GRAD0_opsz24.svg"
              alt=""
            />
          </div>
          <div className="footer-text-container">
            <p className="item-text">89 Beishan Road, Hangzhou</p>
          </div>
        </li>
        <li className="footer-menu-item">
          <div className="footer-logo-container">
            <img
              className="item-logo"
              src="./call_FILL0_wght400_GRAD0_opsz24.svg"
              alt=""
            />
          </div>
          <div className="footer-text-container">
            <p className="item-text">+86 571 8796 9691</p>
          </div>
        </li>
        <li className="footer-menu-item">
          <div className="footer-logo-container">
            <img
              className="item-logo"
              src="./mail_FILL0_wght400_GRAD0_opsz24.svg"
              alt=""
            />
          </div>
          <div className="footer-text-container">
            <p className="item-text">quyuanfenghe@hangzhou.gov.cn</p>
          </div>
        </li>
      </ul>
      <ul className="footer-social-media">
        <div className="social-media-icon-container">
          <a className="social-media-icon" href="https://www.facebook.com">
            <i className="gg-facebook"></i>
          </a>
        </div>
        <div className="social-media-icon-container">
          <a className="social-media-icon" href="https://www.youtube.com">
            <i className="gg-youtube"></i>
          </a>
        </div>
        <div className="social-media-icon-container">
          <a className="social-media-icon" href="https://www.instagram.com">
            <i className="gg-instagram"></i>
          </a>
        </div>
        <div className="social-media-icon-container">
          <a className="social-media-icon" href="https://www.twitter.com">
            <i className="gg-twitter"></i>
          </a>
        </div>
      </ul>
      <p className="footer-copyright">&copy; 2023 All Rights Reserved</p>
    </footer>
  );
}

export default Footer;

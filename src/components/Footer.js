import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";


const Footer = () => {
  const currYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-content">
        <h2 className="footer-brand">Restaurant</h2>
        <p className="footer-text">
          © {currYear} — Built with 💗 by Sayak. All rights reserved.
        </p>
        <div className="footer-icons">
          <a href="https://github.com/" target="_blank" rel="noreferrer">
            <FaGithub />
          </a>
          <a href="https://linkedin.com/" target="_blank" rel="noreferrer">
            <FaLinkedin />
          </a>
          <a href="https://twitter.com/" target="_blank" rel="noreferrer">
            <FaTwitter />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import React from 'react';
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container container">
        <h1 className="footer__title">Kuptsov</h1>

        <ul className="footer__list">
          <li>
            <a href="#about" className="footer__link">About</a>
          </li>
        </ul>

        <div className="footer__social">
          <a href="https://t.me/LexKaufmann" className="footer__social-link" target='_blank' rel="noreferrer">
          <i class="bx bxl-telegram"></i>
          </a>

          <a href="https://vk.com/id774996480" className="footer__social-link" target='_blank' rel="noreferrer">
          <i class="bx bxl-vk"></i>
          </a>

          <a href="https://github.com/LexKOV" className="footer__social-link" target='_blank' rel="noreferrer">
          <i class="bx bxl-github"></i>
          </a>
        </div>

        <span className="footer__copy">&#169; Crypticalcoder. All rights reserved</span>
      </div>
    </footer>
  )
}

export default Footer
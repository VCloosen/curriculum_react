import React from "react";
import style from "./footer.module.scss";
import {Row} from 'reactstrap';
import {Col} from 'reactstrap';
function Footer() {
  return (
    
    <footer className={style.footer}> 
      <Row className="mt-4 m-2">
        <Col md={3}>
          <h6>Réseaux sociaux</h6>
          <ul className={style.socialMedias}>
            <li>
              <a
                href="https://www.linkedin.com/in/cloosen-vicky-98742347/"
                target="_blank"
              >
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/vicky.cloo/?hl=fr" target="_blank"> 
                <FontAwesomeIcon icon={faInstagram} />
              </a>
            </li>
            <li>
              <a href="https://github.com/VCloosen" target="_blank">
                <FontAwesomeIcon icon={faGithub} />
              </a>
            </li>
          </ul>
        </Col>
        <Col md={3}>
          <h6>Termes</h6>
          <ul className={style.terms}>
            <li>
              <NavLink to="/terms">Termes</NavLink>
            </li>
            <li>
              <NavLink to="/confidentiality">Confidentialté</NavLink>
            </li>
          </ul>
        </Col>
      </Row>
    </footer>
  );
}
export default Footer;

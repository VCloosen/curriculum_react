import React from "react";
import style from './header.module.scss';
function Header() {
  return (
    <section id={style.about} className="container-fluid">
        <div className="row">
            <div className={`col-md-6 ${style.flexEnd}`}>
                <div className={style.profilePicture}>
                    <img src="images/vickycloosen.jpg" alt="Vicky"/>
                </div>
            </div>
            <div className={`col-md-6 ${style.flexStart}`}>
                <div className={`${style.headingContainer} ${style.flex}`}>
                    <h1>Vicky Cloosen</h1>
                    <h3>Senior Project Manager
                        <br/>and Junior Web Integrator
                    </h3>
                </div>
            </div>
        </div>
    </section>
  );
}
export default Header;
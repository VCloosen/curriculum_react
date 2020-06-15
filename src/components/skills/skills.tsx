import React from "react";
import style from './skills.module.scss';
function Skills() {
  return (
        <section id="skills">
        <div className="line-divider-grey"></div>
        <div className="title">
            <h2>Skills</h2>
        </div>
        <div className="content flex">
            <div className="category">
                <div className="languages flex">
                    <h5>Languages</h5>
                    <ul>
                        <li><b>French </b>: <br/> mother tongue</li>
                        <li><b>Dutsch</b> : B2 (+)</li>
                        <li><b>English</b> : B2 </li>
                    </ul>
                </div>
                <div className="software flex">
                    <h5>Software</h5>
                    <ul>
                        <li>Daily use</li>
                        <li>
                            <img src="images/logo-word.png" alt="Word" className="icone-software"/>
                            <img src="images/logo-excel.png" alt="Excel" className="icone-software"/><br/>
                            <img src="images/logo-powerpoint.png" alt="PowerPoint" className="icone-software"/>
                            <img src="images/logo-keynotes.png" alt="KeyNotes" className="icone-software"/>
                        </li>
                    </ul>
                </div>
                <div className="pm flex">
                    <h5>Project <br/>tools</h5>
                    <ul>
                        <li>Daily use</li>
                        <li><img src="images/logo-jira.png" alt="Jira" className="icone-software"/>
                            <img src="images/logo-teams.png" alt="Teams" className="icone-software"/>
                        </li>
                    </ul>
                </div>
                <div className="web flex">
                    <h5>Web integration</h5>
                    <ul>
                        <li>Basis knowledge</li>
                        <li><img src="images/logo-html.png" alt="Html" className="icone-web"/>
                            <img src="images/logo-css.png" alt="CSS" className="icone-web"/>
                            <img src="images/logo-javascript.jpg" alt="JS" className="icone-web"/><br/>
                            <img src="images/logo-jquery.jpg" alt="JQuery" className="icone-web"/>
                            <img src="images/logo-bootstrap.png" alt="Bootstrap" className="icone-web"/>

                        </li>
                    </ul>

                </div>
                <div className="design flex">
                    <h5>Design</h5>
                    <ul>
                        <li>Basis knowledge</li>
                        <li>
                            <img src="images/logo-indesign.png" alt="InDesign" className="icone-web"/>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </section>
  );
}
export default Skills;
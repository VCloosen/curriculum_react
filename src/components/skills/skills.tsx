import React from "react";
import style from './skills.module.scss';
function Skills() {
  return (
        <section id="skills">
        <div className="line-divider-grey"></div>
        <div className="title">
            <h2>Skills</h2>
        </div>
        <div className={`flex ${style.content}`}>
            <div className={style.category}> 
                <div className={`flex ${style.languages}`}>
                    <h5>Languages</h5>
                    <ul>
                        <li><b>French </b>: <br/> mother tongue</li>
                        <li><b>Dutsch</b> : B2 (+)</li>
                        <li><b>English</b> : B2 </li>
                    </ul>
                </div>
                <div className={`flex ${style.software}`}>
                    <h5>Software</h5>
                    <ul>
                        <li>Daily use</li>
                        <li>
                            <img src="images/logo-word.png" alt="Word" className={style.iconeSoftware}/>
                            <img src="images/logo-excel.png" alt="Excel" className={style.iconeSoftware}/><br/>
                            <img src="images/logo-powerpoint.png" alt="PowerPoint" className={style.iconeSoftware}/>
                            <img src="images/logo-keynotes.png" alt="KeyNotes" className={style.iconeSoftware}/>
                        </li>
                    </ul>
                </div>
                <div className={`flex ${style.pm}`}>
                    <h5>Project <br/>tools</h5>
                    <ul>
                        <li>Daily use</li>
                        <li><img src="images/logo-jira.png" alt="Jira" className={style.iconeSoftware}/>
                            <img src="images/logo-teams.png" alt="Teams" className={style.iconeSoftware}/>
                        </li>
                    </ul>
                </div>
                <div className={`flex ${style.web}`}>
                    <h5>Web integration</h5>
                    <ul>
                        <li>Basis knowledge</li>
                        <li><img src="images/logo-html.png" alt="Html" className={style.iconeSoftware}/>
                            <img src="images/logo-css.png" alt="CSS" className={style.iconeSoftware}/>
                            <img src="images/logo-javascript.jpg" alt="JS" className={style.iconeSoftware}/><br/>
                            <img src="images/logo-jquery.jpg" alt="JQuery" className={style.iconeSoftware}/>
                            <img src="images/logo-bootstrap.png" alt="Bootstrap" className={style.iconeSoftware}/>

                        </li>
                    </ul>

                </div>
                <div className={`flex ${style.design}`}>
                    <h5>Design</h5>
                    <ul>
                        <li>Basis knowledge</li>
                        <li>
                            <img src="images/logo-indesign.png" alt="InDesign" className={style.iconeSoftware}/>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </section>
  );
}
export default Skills;
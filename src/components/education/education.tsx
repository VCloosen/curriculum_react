import React from "react";
import style from './education.module.scss';
function Education() {
  return (
        <section id={style.education}>
        <div className={style.heading}>
            <h2>Studies and trainings</h2>
        </div>
        <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
            <ol className="carousel-indicators">
                <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                <li data-target=" #carouselExampleIndicators" data-slide-to="2"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
            </ol>
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <div className="education-block">
                        <h5>2007-2001</h5>
                        <h4>
                        <b>CESS</b> in Science & Foreign Languages</h4>
                        <span className="glyphicon glyphicon-education"></span>
                        <h3>Collège Saint-Stanislas in Mons(Be)</h3>
                    </div>
                </div>
                <div className="carousel-item">
                    <div className="education-block">
                        <h5>2007-2008 & 2009-2010</h5>
                        <h4><b>Bachelor</b> in Communication
                        </h4>
                        <h4>
                            <b>Bi-diploma </b>with KHM</h4>
                        <h3>Helha in Tournai(Be)</h3>
                    </div>
                </div>
                <div className="carousel-item">
                    <div className="education-block ">
                        <h5>2008-2009</h5>
                        <h4><b>Bachelor</b> in Communication Management
                        </h4>
                        <h4><b>Bi-diploma </b> with Helha</h4>
                        <h3>KHM in Mechelen(Be)</h3>
                    </div>
                </div>
                <div className="carousel-item">
                    <div className="education-block">
                        <h5>May-June 2020</h5>
                        <h4><b>Online training </b>: <br/>"Formation complète développeur web"</h4>
                        <h3>Udemy</h3>
                    </div>
                </div>
            </div>
            <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                <span className="carousel-control-prev-icon"></span>
                <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                <span className="carousel-control-next-icon"></span>
                <span className="sr-only">Next</span>
            </a>
        </div>
    </section>
  );
}
export default Education;
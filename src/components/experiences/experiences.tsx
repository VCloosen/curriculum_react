import React from "react";
import style from "./experiences.module.scss";
function Experiences() {
  return (
    <section id={style.experiences}>
      <div className={`${style.experiencesContainer} ${style.flex}`}>
        <h2>Discover my professional path</h2>
      </div>
      <ul className={style.timeline}>
        <li>
          <div className={`${style.timelineBadge} ${style.flex}`}>
            <svg
              className="bi bi-briefcase "
              width="1em "
              height="1em "
              viewBox="0 0 16 16 "
              fill="currentColor "
              xmlns="http://www.w3.org/2000/svg "
            >
              <path
                fill-rule="evenodd "
                d="M0 12.5A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-6h-1v6a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5v-6H0v6z "
              />
              <path
                fill-rule="evenodd "
                d="M0 4.5A1.5 1.5 0 0 1 1.5 3h13A1.5 1.5 0 0 1 16 4.5v2.384l-7.614 2.03a1.5 1.5 0 0 1-.772 0L0 6.884V4.5zM1.5 4a.5.5 0 0 0-.5.5v1.616l6.871 1.832a.5.5 0 0 0 .258 0L15 6.116V4.5a.5.5 0 0 0-.5-.5h-13zM5
        2.5A1.5 1.5 0 0 1 6.5 1h3A1.5 1.5 0 0 1 11 2.5V3h-1v-.5a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5V3H5v-.5z "
              />
            </svg>
          </div>
          <div className={style.timelinePanelContainer1}>
            <div className={style.timelinePanel}>
              <div className={style.timelineHeading}>
                <p>
                  <svg
                    className="bi bi-calendar-check"
                    width="1em"
                    height="1em"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd "
                      d="M10.854 7.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 9.793l2.646-2.647a.5.5 0 0 1 .708 0z"
                    />
                    <path
                      fill-rule="evenodd "
                      d="M1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1zm1-3a2 2 0 0 0-2 2v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2H2z"
                    />
                    <path
                      fill-rule="evenodd "
                      d="M3.5 0a.5.5 0 0 1 .5.5V1a.5.5 0 0 1-1 0V.5a.5.5 0 0 1 .5-.5zm9 0a.5.5 0 0 1 .5.5V1a.5.5 0 0 1-1 0V.5a.5.5 0 0 1 .5-.5z"
                    />
                  </svg>{" "}
                  Today-August 2018
                </p>
                <h3>Famous Grey</h3>
                <h4>Account Manager</h4>
                <h6>
                  <svg
                    className="bi bi-arrow-down-circle-fill "
                    width="1em "
                    height="1em "
                    viewBox="0 0 16 16 "
                    fill="currentColor "
                    xmlns="http://www.w3.org/2000/svg "
                  >
                    <path
                      fill-rule="evenodd "
                      d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 5a.5.5 0 0 0-1 0v4.793L5.354 7.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 9.793V5z "
                    />
                  </svg>
                </h6>
              </div>
              <div className={style.timelineBody}>
                <p>Clients from the mobility and telecom sectors.</p>
                <p>Daily project and client management.</p>
                <p>
                  Various types of campaign: POS, TV, Radio, Printing,
                  Displaying, Bannering (DCO), Digital, Social Media
                </p>
                <p>Budget management</p>
              </div>
            </div>
          </div>
        </li>
        <li>
          <div className={`${style.timelineBadge} ${style.flex}`}>
            <svg
              className="bi bi-briefcase-fill "
              width="1em "
              height="1em "
              viewBox="0 0 16 16 "
              fill="currentColor "
              xmlns="http://www.w3.org/2000/svg "
            >
              <path
                fill-rule="evenodd "
                d="M0 12.5A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5V6.85L8.129 8.947a.5.5 0 0 1-.258 0L0 6.85v5.65z "
              />
              <path
                fill-rule="evenodd "
                d="M0 4.5A1.5 1.5 0 0 1 1.5 3h13A1.5 1.5 0 0 1 16 4.5v1.384l-7.614 2.03a1.5 1.5 0 0 1-.772 0L0 5.884V4.5zm5-2A1.5 1.5 0 0 1 6.5 1h3A1.5 1.5 0 0 1 11 2.5V3h-1v-.5a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5V3H5v-.5z "
              />
            </svg>
          </div>
          <div className={style.timelinePanelContainerInverted1}>
            <div className={style.timelinePanel}>
              <div className={style.timelineHeading}>
                <p>
                  <svg
                    className="bi bi-calendar-check "
                    width="1em "
                    height="1em "
                    viewBox="0 0 16 16 "
                    fill="currentColor "
                    xmlns="http://www.w3.org/2000/svg "
                  >
                    <path
                      fill-rule="evenodd "
                      d="M10.854 7.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 9.793l2.646-2.647a.5.5 0 0 1 .708 0z "
                    />
                    <path
                      fill-rule="evenodd "
                      d="M1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1zm1-3a2 2 0 0 0-2 2v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2H2z "
                    />
                    <path
                      fill-rule="evenodd "
                      d="M3.5 0a.5.5 0 0 1 .5.5V1a.5.5 0 0 1-1 0V.5a.5.5 0 0 1 .5-.5zm9 0a.5.5 0 0 1 .5.5V1a.5.5 0 0 1-1 0V.5a.5.5 0 0 1 .5-.5z "
                    />
                  </svg>{" "}
                  August-January 2018
                </p>
                <h3>Havas Worldwide Brussels</h3>
                <h4>Account Manager</h4>
                <h6>
                  <svg
                    className="bi bi-arrow-down-circle-fill"
                    width="1em"
                    height="1em"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 5a.5.5 0 0 0-1 0v4.793L5.354 7.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 9.793V5z"
                    />
                  </svg>
                </h6>
              </div>
              <div className={style.timelineBody}>
                <p>
                  Several clients from the FMCG, bank and automotive sectors
                </p>
                <p>Daily project and client management.</p>
                <p>
                  Various types of campaign : POS, displaying, radio, TV and
                  bannering.
                </p>
                <p>Budget management</p>
              </div>
            </div>
          </div>
        </li>
        <li>
          <div className={`${style.timelineBadge} ${style.flex}`}>
            <svg
              className="bi bi-briefcase-fill "
              width="1em "
              height="1em "
              viewBox="0 0 16 16 "
              fill="currentColor "
              xmlns="http://www.w3.org/2000/svg "
            >
              <path
                fill-rule="evenodd "
                d="M0 12.5A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5V6.85L8.129 8.947a.5.5 0 0 1-.258 0L0 6.85v5.65z "
              />
              <path
                fill-rule="evenodd "
                d="M0 4.5A1.5 1.5 0 0 1 1.5 3h13A1.5 1.5 0 0 1 16 4.5v1.384l-7.614 2.03a1.5 1.5 0 0 1-.772 0L0 5.884V4.5zm5-2A1.5 1.5 0 0 1 6.5 1h3A1.5 1.5 0 0 1 11 2.5V3h-1v-.5a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5V3H5v-.5z "
              />
            </svg>
          </div>
          <div className={style.timelinePanelContainer2}>
            <div className={style.timelinePanel}>
              <div className={style.timelineHeading}>
                <p>
                  <svg
                    className="bi bi-calendar-check "
                    width="1em "
                    height="1em "
                    viewBox="0 0 16 16 "
                    fill="currentColor "
                    xmlns="http://www.w3.org/2000/svg "
                  >
                    <path
                      fill-rule="evenodd "
                      d="M10.854 7.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 9.793l2.646-2.647a.5.5 0 0 1 .708 0z "
                    />
                    <path
                      fill-rule="evenodd "
                      d="M1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1zm1-3a2 2 0 0 0-2 2v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2H2z "
                    />
                    <path
                      fill-rule="evenodd "
                      d="M3.5 0a.5.5 0 0 1 .5.5V1a.5.5 0 0 1-1 0V.5a.5.5 0 0 1 .5-.5zm9 0a.5.5 0 0 1 .5.5V1a.5.5 0 0 1-1 0V.5a.5.5 0 0 1 .5-.5z "
                    />
                  </svg>{" "}
                  2017-2013
                </p>
                <h3>Havas Worldwide Brussels</h3>
                <h4>Account Executive</h4>
                <h6>
                  <svg
                    className="bi bi-arrow-down-circle-fill "
                    width="1em "
                    height="1em "
                    viewBox="0 0 16 16 "
                    fill="currentColor "
                    xmlns="http://www.w3.org/2000/svg "
                  >
                    <path
                      fill-rule="evenodd "
                      d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 5a.5.5 0 0 0-1 0v4.793L5.354 7.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 9.793V5z "
                    />
                  </svg>
                </h6>
              </div>
              <div className={style.timelineBody}>
                <p>
                  Several clients from FMCG, bank, entertainment, automotive
                  sectors.
                </p>
                <p>Daily project and client management.</p>
                <p>
                  Various types of campaign : POS, displaying, radio, TV and
                  bannering.
                </p>
                <p>Budget management</p>
              </div>
            </div>
          </div>
        </li>
        <li>
          <div className={`${style.timelineBadge} ${style.flex}`}>
            <svg
              className="bi bi-briefcase-fill "
              width="1em "
              height="1em "
              viewBox="0 0 16 16 "
              fill="currentColor "
              xmlns="http://www.w3.org/2000/svg "
            >
              <path
                fill-rule="evenodd "
                d="M0 12.5A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5V6.85L8.129 8.947a.5.5 0 0 1-.258 0L0 6.85v5.65z "
              />
              <path
                fill-rule="evenodd "
                d="M0 4.5A1.5 1.5 0 0 1 1.5 3h13A1.5 1.5 0 0 1 16 4.5v1.384l-7.614 2.03a1.5 1.5 0 0 1-.772 0L0 5.884V4.5zm5-2A1.5 1.5 0 0 1 6.5 1h3A1.5 1.5 0 0 1 11 2.5V3h-1v-.5a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5V3H5v-.5z "
              />
            </svg>
          </div>
          <div className={style.timelinePanelContainerInverted2}>
            <div className={style.timelinePanel}>
              <div className={style.timelineHeading}>
                <p>
                  <svg
                    className="bi bi-calendar-check "
                    width="1em "
                    height="1em "
                    viewBox="0 0 16 16 "
                    fill="currentColor "
                    xmlns="http://www.w3.org/2000/svg "
                  >
                    <path
                      fill-rule="evenodd "
                      d="M10.854 7.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 9.793l2.646-2.647a.5.5 0 0 1 .708 0z "
                    />
                    <path
                      fill-rule="evenodd "
                      d="M1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1zm1-3a2 2 0 0 0-2 2v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2H2z "
                    />
                    <path
                      fill-rule="evenodd "
                      d="M3.5 0a.5.5 0 0 1 .5.5V1a.5.5 0 0 1-1 0V.5a.5.5 0 0 1 .5-.5zm9 0a.5.5 0 0 1 .5.5V1a.5.5 0 0 1-1 0V.5a.5.5 0 0 1 .5-.5z "
                    />
                  </svg>{" "}
                  2013-2010
                </p>
                <h3>The Retail Company</h3>
                <h4>Account Executive</h4>
                <h6>
                  <svg
                    className="bi bi-arrow-down-circle-fill "
                    width="1em "
                    height="1em "
                    viewBox="0 0 16 16 "
                    fill="currentColor "
                    xmlns="http://www.w3.org/2000/svg "
                  >
                    <path
                      fill-rule="evenodd "
                      d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 5a.5.5 0 0 0-1 0v4.793L5.354 7.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 9.793V5z "
                    />
                  </svg>
                </h6>
              </div>
              <div className={style.timelineBody}>
                <p>Daily project management.</p>
                <p>
                  Supervising of folder creation : from briefing till printing.
                </p>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </section>
  );
}
export default Experiences;

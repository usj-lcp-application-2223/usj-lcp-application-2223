import React, { MutableRefObject, useEffect, useRef, useState } from "react";
import Container from "./Container";
import MainWrapper from "./MainWrapper";
import createPersistedState from "use-persisted-state";
const useDarkModeState = createPersistedState("darkMode");
interface StartPageProps {}

const StartPage: React.FC<StartPageProps> = (props) => {
  const [darkMode, setDarkMode] = useDarkModeState(
    (JSON.parse(localStorage.getItem("darkMode") as string) as boolean) || false
  );
  const isTouch: MutableRefObject<boolean> = useRef(
    "ontouchstart" in document.documentElement
  );
  useEffect(() => {
    if (darkMode) {
      (document.getElementById("background") as HTMLElement).style.filter =
        "brightness(0.2)";
    } else {
      (document.getElementById("background") as HTMLElement).style.filter =
        "brightness(0.8)";
    }
  }, [darkMode]);
  return (
    <>
      <MainWrapper>
        <Container>
          <div className="text-center d-flex flex-column justify-content-center">
            <br></br>
            <h1 className="fs-1">
              Local Committee President Application Package 22/23
            </h1>
            <h4>AIESEC in University of Sri Jayewardenepura</h4>
            <br></br>
            <a
              href="#responsibilities"
              className="btn-start border border-2 border-white my-3 py-2 px-3 rounded-3">
              {isTouch.current ? `Swipe to Start ` : `Click to Start `}
              <i
                className="fas fa-angle-right "
                style={{ fontSize: "1rem" }}></i>
            </a>
            <br></br>
            <div className="form-check form-switch w-100">
              <div className="m-auto switch-width">
                <input
                  onChange={(params) => {
                    setDarkMode(params.target.checked);
                  }}
                  className="form-check-input"
                  type="checkbox"
                  id="flexSwitchCheckDefault"
                  checked={darkMode}
                />
                <label
                  className="form-check-label"
                  htmlFor="flexSwitchCheckDefault">
                  Dark Mode
                </label>
              </div>
            </div>
            <br></br>
            <span style={{ fontSize: "0.7rem" }}>
              Utilize Top Navigation bar for quick navigation
            </span>
            <br></br>
          </div>
        </Container>
      </MainWrapper>
    </>
  );
};

export default StartPage;

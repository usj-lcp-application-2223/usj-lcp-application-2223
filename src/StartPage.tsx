import React from "react";
import Container from "./Container";
import MainWrapper from "./MainWrapper";

interface StartPageProps {}

const StartPage: React.FC<StartPageProps> = (props) => {
  return (
    <>
      <MainWrapper>
        <div
          className="text-center d-flex flex-column justify-content-center"
          style={{ height: "100vh", margin: "auto" }}>
          <Container>
            <div
              className="text-center d-flex flex-column justify-content-center"
              style={{ height: "60vh" }}>
              <h1 className="fs-1">
                Local Committee President Application Package 22/23
              </h1>
              <h4>AIESEC in University of Sri Jayewardenepura</h4>
              <button className="btn-start border border-2 border-white my-3 py-2 px-3 rounded-3">
                Click to Start{" "}
                <i
                  className="fas fa-angle-right "
                  style={{ fontSize: "12px" }}></i>
              </button>
            </div>
          </Container>
        </div>
      </MainWrapper>
    </>
  );
};

export default StartPage;

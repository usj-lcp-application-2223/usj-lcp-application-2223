import React from "react";
import Container from "../common/Container";
import MainWrapper from "../common/MainWrapper";

interface ReferencesProps {}

const References: React.FC<ReferencesProps> = (props) => {
  const LCPs = [
    [
      `13/14`,
      `Udayanga Weerarathne `,
      `udayanga.weerarathne@gmail.com`,
      `+9471 824 1584`,
    ],
    [`14/15`, `Shamlin Meedin`, `shamlinmeedin@gmail.com`, `+49 1529 7360472`],
    [
      `15/16`,
      `Kalpa Nallahandi`,
      `kalpanallahandi92@gmail.com`,
      `+94 71 305 4801`,
    ],
    [
      `16/17`,
      `Chiranga Gunasinghe`,
      `chirangag@brandix.com`,
      `+94 71 575 5473`,
    ],
    [`17/18`, `Anosha Rangalla`, `anosharangalla@gmail.com`, `+94 76 216 3475`],
    [
      `18/19`,
      `Heshini Hettiarachchi`,
      `heshini.hettiarachchi@gmail.com`,
      `+94 77 691 3793`,
    ],
    [
      `19/20`,
      `Dilushini Douglas`,
      `dilushini.douglas3@aiesec.net`,
      `+94 77 895 0003`,
    ],
    [
      `20/21`,
      `Kamesha Samaranayake`,
      `kamesha.samaranayake@aiesec.net`,
      `+94 76 910 1225`,
    ],
    ["21/22", "Vikum Wijekoon", "vikum.wijekoon@aiesec.net", "+94 77 102 2135"],
  ];
  return (
    <>
      <MainWrapper>
        <Container>
          <h3 className="text-center">Local Committee Presidents</h3>
          <br></br>
          <div className="table-responsive">
            <table className="table table-bordered text-white">
              <thead>
                <tr>
                  <th scope="col">Term</th>
                  <th scope="col">LCP</th>
                  <th scope="col">Email </th>
                  <th scope="col">Contact No. </th>
                </tr>
              </thead>
              <tbody>
                {LCPs.map((value, index) => (
                  <tr key={`tr-${index}`}>
                    {value.map((innerValue, innerIndex) => (
                      <td
                        key={`td-${index}-${innerIndex}`}
                        style={{ whiteSpace: "nowrap" }}>
                        {innerValue}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Container>
        <br></br>
        <br></br>
        <Container>
          <h3 className="text-center">References</h3>
          <br></br>
          <div className="d-flex justify-content-center flex-column ">
            <a
              href="https://docs.google.com/document/d/1j48H2seMKlMsoDU4BQFZLYiwuPoyMqDjwwEz792iwS8/edit?usp=sharing"
              target="_blank"
              className="btn-primary btn m-auto mb-4"
              style={{ width: "fit-content", fontSize: "0.8rem" }}>
              Google Doc Questionnaire
            </a>
            <a
              href="https://drive.google.com/drive/folders/1ltw1xKAVskCLC4wB9mMXXzshwfbSXzLO?usp=sharing"
              target="_blank"
              className="btn-primary btn m-auto mb-4"
              style={{ width: "fit-content", fontSize: "0.8rem" }}>
              Refreshed AIESEC Way
            </a>
            <a
              href="https://drive.google.com/drive/folders/1C9lqEsiib97Scm_Ev_mbORyHrA-jmgJh?usp=sharing"
              target="_blank"
              className="btn-primary btn m-auto mb-4"
              style={{ width: "fit-content", fontSize: "0.9rem" }}>
              Compendium of AIESEC in USJ
            </a>
            <a
              href="https://docs.google.com/document/d/1gfGUmZilmN8b96jW4fNi9qAjfh7SSJafEKNNDQuURjg/edit?usp=sharing"
              target="_blank"
              className="btn-primary btn m-auto mb-4"
              style={{ width: "fit-content", fontSize: "0.9rem" }}>
              Compendium of AIESEC in Sri Lanka
            </a>
            <a
              href="https://docs.google.com/presentation/d/1mH6sPqWkhKMQmU5PoI0_uIgWLJGXEqV3OHV72QH45Js/edit?usp=sharing"
              target="_blank"
              className="btn-primary btn m-auto mb-4"
              style={{ width: "fit-content", fontSize: "0.9rem" }}>
              OD Model of AIESEC in Sri Lanka
            </a>
          </div>
        </Container>
        <br></br>
        <br></br>
        <Container>
          <div className="text-center">
            <h3>BEST OF LUCK!</h3>
            <br></br>
            <p>For further clarifications please contact</p>
            <p>
              <strong style={{ fontSize: "1.1rem" }}>Vikum Wijekoon</strong>
              <div>Local Committee President</div>
              <div>AIESEC in University of Sri Jayewardenepura</div>
              <div>vikum.wijekoon@aiesec.net</div>
              <div>+94 77 102 2135</div>
            </p>
          </div>
        </Container>
      </MainWrapper>
    </>
  );
};

export default References;

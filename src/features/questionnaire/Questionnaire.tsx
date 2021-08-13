import React from "react";
import Container from "../common/Container";
import MainWrapper from "../common/MainWrapper";

interface QuestionnaireProps {}

const Questionnaire: React.FC<QuestionnaireProps> = (props) => {
  const personalData = [
    "Name",
    "Date of Birth",
    "Nationality",
    "Address",
    "Mobile",
    "AIESEC email",
    "Personal email",
    "LinkedIn profile",
    "Youtube video link",
  ];
  const generalQuestions = [
    `What is AIESEC for you?`,
    `What motivated you to apply for the position of Local Committee President?`,
    `What have you gained through the AIESEC experience? What is the transformation AIESEC has brought upon in yourself?`,
    `Define the perfect EB.`,
    `What type of leadership do you want to demonstrate? How would you manage an EB according to your leadership style?`,
    `Explain the impact of the new AIESEC way and how it can augment the culture of AIESEC in USJ.`,
    `Explain AIESEC 2025 and its relevance for AIESEC in USJ.`,
    `What is your understanding on the accountability of the Executive Board on Local Committee performance?`,
    `AIESEC is rapidly changing on a global scale. In what ways would you implement the changes that are being brought forth and mention further improvements that AIESEC in USJ can implement to stay ahead of the curve. (Consider the possibilities such as a sudden switch to an ELD focus instead of BD and EwA focus etc.)`,
    `What is your opinion on sustainability? Please describe how you’re going to maintain operational and financial sustainability throughout the term. (consider MXP under operational sustainability)`,
  ];
  const specificQuestions = [
    `What does the position of LCP mean to you?`,
    "What is LCP’s role in governance and legality of the organization’s operations?",
    `Critically evaluate the performance of AIESEC in USJ Sri Lanka in the past 5 years.`,
    [`discuss GCPs and BCPs.`, `perform a SWOT analysis for the LC.`],
    `Prepare a roadmap for the entity. Identify your 3 main focus areas as the LCP for the term 22/23 according to your road map and elaborate on your strategies for the focus areas.`,
    `Propose the EB structure for the term 22/23.`,
    `Considering iGV, iGTe, iGTa, oGV, oGTe & oGTa activities in the term 22/23,`,
    [
      `What would be your goals / targets?`,
      `What are your plans and strategies to achieve your goals / targets?`,
      `Take 3 main IR partners and 3 product partners/EEs for ELD products and state what can be done to improve the partnership.`,
      `Explain the synergy among Front Office and Back Office functions.`,
    ],
    `Considering MXP, H4TF, EwA & PD Activities in the term 22/23,`,
    [
      `What would be your goals / targets?`,
      `What are your plans and strategies to achieve your goals / targets?`,
      `What would be your strategies to establish and utilize sustainable and long lasting partnerships?`,
      `What would be your action steps to uplift the member motivation and give the best membership experience for the AIESECers of USJ?`,
    ],
    `Elaborate on the EwA and BD initiatives that you propose to execute during the term 22/23. Specify the action steps that you would take to innovate in these initiatives.`,
    `What action steps would you take to quantifiably track and monitor the growth of LC’s PDI and HDI of the OD Model of AIESEC Sri Lanka to ensure that they improve together? `,
    `How important is it for AIESEC to be externally relevant? Propose initiatives AIESEC in USJ can take to boost its PR presence amidst its key external stakeholders (Partners, University, General public etc. ).`,
    `What are your strategies for Marketing and DXP functions? How would you innovate in these areas?`,
    ` “Blank Paper Challenge”– Express how you want to see AIESEC in USJ on the day you finish your LCP term, by compacting your ideas into one white paper. Attach the picture of the paper in the application.`,
  ];
  return (
    <>
      <MainWrapper>
        <Container>
          <h3 className="text-center">Candidate Profile</h3>
          <br></br>
          <div className="row row-cols-2 ">
            <div className="col-5 col-sm-6 flex-grow-1 p-0  ps-2  py-2 mx-md-2">
              <ul className="m-0">
                {personalData.map((value, index) => (
                  <li
                    key={index}
                    style={{
                      marginBottom: `${
                        personalData.length === index + 1 ? "0" : "0.5rem"
                      }`,
                    }}>{`${value}:`}</li>
                ))}
              </ul>
            </div>
            <div className="col-6 col-sm-5 col-md-4 col-xl-4 col-xxl-3 d-flex justify-content-end align-items-center py-2 p-0 pe-2 mx-md-2">
              <div
                style={{ aspectRatio: "35 / 45", maxHeight: "100%" }}
                className=" w-100 border-3 border-white border d-flex justify-content-center align-items-center">
                <span className="text-center">Insert Picture Here</span>
              </div>
            </div>
          </div>
          <br></br>
          <br></br>
          <ol className="p-2 m-1 mx-md-2">
            <li className="mb-4">Give a brief introduction about yourself.</li>
            <li>
              Please provide details of your academic achievements, studies
              completed and other relevant information regarding your academic
              background.
            </li>
            <div className="table-responsive">
              <table className="table table-bordered text-white">
                <thead>
                  <tr>
                    <th scope="col">Duration</th>
                    <th scope="col">Academic Level</th>
                    <th scope="col">Institute</th>
                    <th scope="col">Notable Achievements</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td style={{ height: "2rem" }}></td>
                    <td></td>
                    <td></td>
                    <td></td>
                  </tr>
                </tbody>
              </table>
            </div>
            <br></br>
            <li>
              Please give details of all relevant practical and professional
              work experience in chronological order (starting with the most
              recent). Indicate whether it was Full-time, Vacation work or
              another type of position.
            </li>
            <div className="table-responsive">
              <table className="table table-bordered text-white">
                <thead>
                  <tr>
                    <th scope="col">Duration</th>
                    <th scope="col">Employer / Organization</th>
                    <th scope="col">
                      Description of the role / Responsibilities
                    </th>
                    <th scope="col">
                      Experience & Knowledge gained, Notable Achievements
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td style={{ height: "2rem" }}></td>
                    <td></td>
                    <td></td>
                    <td></td>
                  </tr>
                </tbody>
              </table>
            </div>
            <br></br>
            <br></br>
            <h4 className="mb-3">AIESEC Experience</h4>

            <li>
              List all positions held and for which year, your key achievements
              and your key learnings.
            </li>
            <div className="table-responsive">
              <table className="table table-bordered text-white">
                <thead>
                  <tr>
                    <th scope="col">Duration</th>
                    <th scope="col">Position & Country</th>
                    <th scope="col">
                      Description of the role / Responsibilities
                    </th>
                    <th scope="col">
                      Notable Achievements and Measurable Results
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td style={{ height: "2rem" }}></td>
                    <td></td>
                    <td></td>
                    <td></td>
                  </tr>
                </tbody>
              </table>
            </div>
            <br></br>
            <li>
              Please list the National and International Meetings / Conferences
              you have attended in the table below, your role, what you
              contributed and what you've learned.
            </li>
            <div className="table-responsive">
              <table className="table table-bordered text-white">
                <thead>
                  <tr>
                    <th scope="col">Duration</th>
                    <th scope="col">Meeting / Conference & Country</th>
                    <th scope="col">Role (Delegate, OC, Faci, Chair, etc.) </th>
                    <th scope="col">Key Contributions </th>
                    <th scope="col">Key Learning </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td style={{ height: "2rem" }}></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                  </tr>
                </tbody>
              </table>
            </div>
            <br></br>
            <br></br>
            <h4 className="mb-3">Timeline (Personal Availability)</h4>
            <li className="mb-4">
              Please mention all the co-curricular activities, extracurricular
              activities, all other activities that you will be involved in.abs
              (Clubs / Societies / Professional exams / Part time, full time job
              etc.)
            </li>
            <li>
              Please type in the appropriate time box any academic /
              professional exams (e.g. Semester end exams, Chartered, CIM, CIMA
              etc.) and other events (e.g. weddings, tournaments etc.) that may
              hinder your active involvement.
            </li>
            <div className="table-responsive">
              <table className="table table-bordered text-white">
                <thead>
                  <tr>
                    <th scope="col">Activity</th>
                    <th scope="col">Transition</th>
                    <th scope="col">EB Term</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td></td>
                    <td className="p-0 m-0">
                      <table className="table table-bordered text-white m-0">
                        <thead>
                          <tr>
                            <th scope="col">Oct</th>
                            <th scope="col">Nov</th>
                            <th scope="col">Dec</th>
                            <th scope="col">Jan</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td style={{ height: "3rem" }}></td>
                            <td></td>
                            <td></td>
                            <td></td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                    <td className="p-0 m-0">
                      <table className="table table-bordered text-white m-0">
                        <thead>
                          <tr>
                            <th scope="col">Feb</th>
                            <th scope="col">Mar</th>
                            <th scope="col">Apr</th>
                            <th scope="col">May</th>
                            <th scope="col">Jun</th>
                            <th scope="col">Jul</th>
                            <th scope="col">Aug</th>
                            <th scope="col">Sep</th>
                            <th scope="col">Oct</th>
                            <th scope="col">Nov</th>
                            <th scope="col">Dec</th>
                            <th scope="col">Jan</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td style={{ height: "3rem" }}></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </ol>
        </Container>
        <br></br>
        <br></br>
        <Container>
          <h3 className="text-center">General Questions</h3>
          <ol className="p-2 m-1 mx-md-2">
            {generalQuestions.map((value, index) => (
              <li key={index} className="mt-4">
                {value}
              </li>
            ))}
          </ol>
        </Container>
        <br></br>
        <br></br>
        <Container>
          <h3 className="text-center">Specific Questions</h3>
          <ol className="p-2 m-1 mx-md-2">
            {specificQuestions.map((value, index) =>
              Array.isArray(value) ? (
                <ol type="a">
                  {value.map((innerValue, innerIndex) => (
                    <li key={`${index}-${innerIndex}`} className="mb-1 sub-li">
                      {innerValue}
                    </li>
                  ))}
                </ol>
              ) : (
                <li key={index} className="mt-4">
                  {value}
                </li>
              )
            )}
          </ol>
          <div className="sub-li text-center my-3">
            ··································· End of Questionnaire
            ···································
          </div>
        </Container>
      </MainWrapper>
    </>
  );
};

export default React.memo(Questionnaire);

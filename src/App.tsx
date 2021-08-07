import React from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import Container from "./Container";
import MainWrapper from "./MainWrapper";
import StartPage from "./StartPage";
import ReactFullpage from "@fullpage/react-fullpage";

function App() {
  return (
    <div>
      <div className="background">
        {/* <div style={{ height: "100vh", width: "100vw" }} className="test"></div> */}
      </div>
      <div className="app">
        <Switch>
          <Route path="/view/">
            <ReactFullpage
              //fullpage options
              scrollHorizontally={
                false
              } /* Because we are using the extension */
              licenseKey={"YOUR_KEY_HERE"}
              scrollingSpeed={1000} /* Options here */
              render={({ state, fullpageApi }) => {
                return (
                  <ReactFullpage.Wrapper>
                    <div className="section">
                      <p>Section 1 (welcome to fullpage.js)</p>
                      <MainWrapper>
                        <Container>
                          <ol>
                            <li>Walk the dog</li>
                            <li>Fold laundry</li>
                            <li>
                              Go to the grocery and buy:
                              <ul>
                                <li>Milk</li>
                                <li>Bread</li>
                                <li>Cheese</li>
                              </ul>
                            </li>
                            <li>Mow the lawn</li>
                            <li>Make dinner</li>
                            <li>Walk the dog</li>
                            <li>Fold laundry</li>
                            <li>
                              Go to the grocery and buy:
                              <ul>
                                <li>Milk</li>
                                <li>Bread</li>
                                <li>Cheese</li>
                              </ul>
                            </li>
                            <li>Mow the lawn</li>
                            <li>Make dinner</li>
                            <li>Walk the dog</li>
                            <li>Fold laundry</li>
                            <li>
                              Go to the grocery and buy:
                              <ul>
                                <li>Milk</li>
                                <li>Bread</li>
                                <li>Cheese</li>
                              </ul>
                            </li>
                            <li>Mow the lawn</li>
                            <li>Make dinner</li>;<li>Walk the dog</li>
                            <li>Fold laundry</li>
                            <li>
                              Go to the grocery and buy:
                              <ul>
                                <li>Milk</li>
                                <li>Bread</li>
                                <li>Cheese</li>
                              </ul>
                            </li>
                            <li>Mow the lawn</li>
                            <li>Make dinner</li>;<li>Walk the dog</li>
                            <li>Fold laundry</li>
                            <li>
                              Go to the grocery and buy:
                              <ul>
                                <li>Milk</li>
                                <li>Bread</li>
                                <li>Cheese</li>
                              </ul>
                            </li>
                            <li>Mow the lawn</li>
                            <li>Make dinner</li>;<li>Walk the dog</li>
                            <li>Fold laundry</li>
                            <li>
                              Go to the grocery and buy:
                              <ul>
                                <li>Milk</li>
                                <li>Bread</li>
                                <li>Cheese</li>
                              </ul>
                            </li>
                            <li>Mow the lawn</li>
                            <li>Make dinner</li>;<li>Walk the dog</li>
                            <li>Fold laundry</li>
                            <li>
                              Go to the grocery and buy:
                              <ul>
                                <li>Milk</li>
                                <li>Bread</li>
                                <li>Cheese</li>
                              </ul>
                            </li>
                            <li>Mow the lawn</li>
                            <li>Make dinner</li>;<li>Walk the dog</li>
                            <li>Fold laundry</li>
                            <li>
                              Go to the grocery and buy:
                              <ul>
                                <li>Milk</li>
                                <li>Bread</li>
                                <li>Cheese</li>
                              </ul>
                            </li>
                            <li>Mow the lawn</li>
                            <li>Make dinner</li>;
                          </ol>
                        </Container>
                      </MainWrapper>
                      <button onClick={() => fullpageApi.moveSectionDown()}>
                        Click me to move down
                      </button>
                    </div>
                    <div className="section">
                      <MainWrapper>
                        <Container>
                          <ol>
                            <li>Walk the dog</li>
                            <li>Fold laundry</li>
                            <li>
                              Go to the grocery and buy:
                              <ul>
                                <li>Milk</li>
                                <li>Bread</li>
                                <li>Cheese</li>
                              </ul>
                            </li>
                            <li>Mow the lawn</li>
                            <li>Make dinner</li>
                            <li>Walk the dog</li>
                            <li>Fold laundry</li>
                            <li>
                              Go to the grocery and buy:
                              <ul>
                                <li>Milk</li>
                                <li>Bread</li>
                                <li>Cheese</li>
                              </ul>
                            </li>
                            <li>Mow the lawn</li>
                            <li>Make dinner</li>
                            <li>Walk the dog</li>
                            <li>Fold laundry</li>
                            <li>
                              Go to the grocery and buy:
                              <ul>
                                <li>Milk</li>
                                <li>Bread</li>
                                <li>Cheese</li>
                              </ul>
                            </li>
                            <li>Mow the lawn</li>
                            <li>Make dinner</li>;<li>Walk the dog</li>
                            <li>Fold laundry</li>
                            <li>
                              Go to the grocery and buy:
                              <ul>
                                <li>Milk</li>
                                <li>Bread</li>
                                <li>Cheese</li>
                              </ul>
                            </li>
                            <li>Mow the lawn</li>
                            <li>Make dinner</li>;<li>Walk the dog</li>
                            <li>Fold laundry</li>
                            <li>
                              Go to the grocery and buy:
                              <ul>
                                <li>Milk</li>
                                <li>Bread</li>
                                <li>Cheese</li>
                              </ul>
                            </li>
                            <li>Mow the lawn</li>
                            <li>Make dinner</li>;<li>Walk the dog</li>
                            <li>Fold laundry</li>
                            <li>
                              Go to the grocery and buy:
                              <ul>
                                <li>Milk</li>
                                <li>Bread</li>
                                <li>Cheese</li>
                              </ul>
                            </li>
                            <li>Mow the lawn</li>
                            <li>Make dinner</li>;<li>Walk the dog</li>
                            <li>Fold laundry</li>
                            <li>
                              Go to the grocery and buy:
                              <ul>
                                <li>Milk</li>
                                <li>Bread</li>
                                <li>Cheese</li>
                              </ul>
                            </li>
                            <li>Mow the lawn</li>
                            <li>Make dinner</li>;<li>Walk the dog</li>
                            <li>Fold laundry</li>
                            <li>
                              Go to the grocery and buy:
                              <ul>
                                <li>Milk</li>
                                <li>Bread</li>
                                <li>Cheese</li>
                              </ul>
                            </li>
                            <li>Mow the lawn</li>
                            <li>Make dinner</li>;
                          </ol>
                        </Container>
                      </MainWrapper>
                      <p>Section 2</p>
                    </div>
                  </ReactFullpage.Wrapper>
                );
              }}
            />
          </Route>
          <Route path="/">
            <StartPage></StartPage>
          </Route>
        </Switch>
      </div>
    </div>
  );
}

export default App;

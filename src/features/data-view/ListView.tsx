import React, {
  ReactChild,
  ReactChildren,
  ReactElement,
  ReactNode,
} from "react";
import { useMemo } from "react";
import { isString } from "util";
import Container from "../common/Container";
import MainWrapper from "../common/MainWrapper";
import GoogleDocLink from "./GoogleDocLink";
import Timeline from "./Timeline";

interface ListViewProps {
  data: Array<IListView>;
}
export type IListView = {
  title: string;
  data: (string | (string | string[])[] | undefined)[];
  isChild?: boolean;
};
const ListView: React.FC<ListViewProps> = (props) => {
  return (
    <>
      <MainWrapper>
        {props.data.map((listArray: IListView, listIndex: number) => (
          <React.Fragment key={`fragment-${listIndex}`}>
            <Container key={`container-${listIndex}`}>
              <h3 style={{ textAlign: "center" }} key={`h3-${listIndex}`}>
                {listArray.title}
              </h3>
              <br key={`br1-${listIndex}`}></br>
              <ul style={{ paddingLeft: "1rem" }} key={`ul-${listIndex}`}>
                {listArray.data.map(
                  (
                    innerListArray: string | (string | string[])[] | undefined,
                    innerListIndex: number
                  ) => {
                    if (innerListArray === undefined) return null;
                    if (typeof innerListArray === "string")
                      return (
                        <li key={`main-li-${listIndex}-${innerListIndex}`}>
                          <span
                            className="li-span"
                            key={`li-span-${listIndex}-${innerListIndex}`}>
                            {innerListArray}
                          </span>
                        </li>
                      );
                    if (Array.isArray(innerListArray)) {
                      return (
                        <ol key={`ol-${listIndex}-${innerListIndex}`}>
                          {innerListArray.map(
                            (
                              innerInnerList: string | string[],
                              innerInnerIndex: number
                            ) => {
                              if (typeof innerInnerList === "string")
                                return (
                                  <li
                                    className="sub-li"
                                    key={`sub-li-${listIndex}-${innerListIndex}-${innerInnerIndex}`}>
                                    <span
                                      className="li-span"
                                      key={`li-span-${listIndex}-${innerListIndex}-${innerInnerIndex}`}>
                                      {innerInnerList}
                                    </span>
                                  </li>
                                );
                              if (Array.isArray(innerInnerList)) {
                                return (
                                  <ul
                                    key={`ul-${listIndex}-${innerListIndex}-${innerInnerIndex}`}>
                                    {innerInnerList.map(
                                      (value: string, index: number) => (
                                        <li
                                          className="sub-li"
                                          key={`sub-li-${listIndex}-${innerListIndex}-${innerInnerIndex}-${index}`}>
                                          <span
                                            className="li-span"
                                            key={`li-span-${listIndex}-${innerListIndex}-${innerInnerIndex}-${index}`}>
                                            {" "}
                                            {value}
                                          </span>
                                        </li>
                                      )
                                    )}
                                  </ul>
                                );
                              }
                            }
                          )}
                        </ol>
                      );
                    }
                  }
                )}
              </ul>
              {listArray.isChild ? (
                listIndex == 1 ? (
                  <GoogleDocLink key={`google doc`}></GoogleDocLink>
                ) : (
                  <div key={`fragment2-${listIndex}`} className="mb-3">
                    <br key={`br2-${listIndex}`}></br>

                    <Timeline key={`frag3-${listIndex}`}></Timeline>
                  </div>
                )
              ) : null}
            </Container>
            <br key={`br3-${listIndex}`}></br>
            <br key={`br4-${listIndex}`}></br>
          </React.Fragment>
        ))}
      </MainWrapper>
    </>
  );
};

export default React.memo(ListView);

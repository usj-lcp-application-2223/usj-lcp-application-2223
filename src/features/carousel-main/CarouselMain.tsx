import React, { MutableRefObject, useEffect } from "react";
import Foreword from "../common/Preface";
import StartPage from "../common/StartPage";
import ListView, { IListView } from "../data-view/ListView";
import Questionnaire from "../questionnaire/Questionnaire";
import References from "../references/References";

interface CarouselMainProps {
  pages: Array<Array<IListView>>;
  nameList: string[];
}

const CarouselMain: React.FC<CarouselMainProps> = (props) => {
  return (
    <>
      <div
        className="main-carousel"
        data-flickity={JSON.stringify({
          cellAlign: "left",
          contain: true,
          adaptiveHeight: true,
          hash: true,
          pageDots: false,
        })}>
        <div className="carousel-cell" id="start">
          <StartPage></StartPage>
        </div>
        <div className="carousel-cell" id="preface">
          <Foreword></Foreword>
        </div>
        {props.pages.map((value, index) => (
          <div
            className="carousel-cell"
            id={props.nameList[index + 2]}
            key={`div-main-car-${index}`}>
            <ListView data={value}></ListView>
          </div>
        ))}
        <div className="carousel-cell" id="questionnaire">
          <Questionnaire></Questionnaire>
        </div>
        <div className="carousel-cell" id="references">
          <References></References>
        </div>
      </div>
    </>
  );
};

export default CarouselMain;

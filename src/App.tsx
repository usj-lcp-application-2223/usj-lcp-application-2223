import React, { MutableRefObject, useLayoutEffect, useRef } from "react";
import "./App.css";
import CarouselMain from "./features/carousel-main/CarouselMain";
import { IListView } from "./features/data-view/ListView";
import packageData from "./features/data-view/packageData";
import eligibilityData from "./features/data-view/eligibilityData";
import responsibilitiesData from "./features/data-view/responsibilitiesData";

function setBtnBackground(
  element: HTMLElement,
  ref: MutableRefObject<null | HTMLElement>
) {
  if (ref?.current !== null) {
    ref.current.children[0].classList.remove("btn-tab-active");
  }
  element?.children[0].classList.add("btn-tab-active");
  if (element !== undefined) {
    ref.current = element;
  }
}
function selectNavItem(
  index: number,
  ref: MutableRefObject<null | HTMLElement>
) {
  //@ts-ignore
  const flkty = new Flickity(".carousel-nav");
  flkty.select(index);
  const selected: HTMLElement = flkty.selectedElement;
  // if (selected !== ref.current) {
  setBtnBackground(selected, ref);
  // }
}
function App() {
  const ref: MutableRefObject<null | HTMLElement> = useRef(null);
  const isTouch: MutableRefObject<boolean> = useRef(
    "ontouchstart" in document.documentElement
  );
  const dataList: MutableRefObject<Array<Array<IListView>>> = useRef([
    responsibilitiesData,
    eligibilityData,
    packageData,
  ]);
  useLayoutEffect(() => {
    //@ts-ignore
    const nav = new Flickity(".carousel-nav", {
      asNavFor: "main-carousel",
      prevNextButtons: false,
      pageDots: false,
    });
    const startLocation = window.location.hash.slice(1);
    selectNavItem(nameList.indexOf(startLocation), ref);
    //@ts-ignore
    const main = new Flickity(".main-carousel", {
      cellAlign: "left",
      contain: true,
      adaptiveHeight: true,
      hash: true,
      pageDots: false,
      prevNextButtons: !isTouch.current,
      draggable: isTouch.current,
    });

    if (isTouch) {
      main.on("dragEnd", () => {
        selectNavItem(main.selectedIndex, ref);
      });
    }
    main.on("change", (index: number) => {
      selectNavItem(index, ref);
    });

    nav.on(
      "staticClick",
      function (
        event: any,
        pointer: any,
        cellElement: HTMLElement,
        cellIndex: number
      ) {
        selectNavItem(cellIndex, ref);
        if (main.selectedIndex !== cellIndex) {
          main.select(cellIndex);
        }
      }
    );
  }, []);

  const nameList = [
    "start",
    "preface",
    "responsibilities",
    "eligibility",
    "guidelines",
    "questionnaire",
    "references",
  ];

  return (
    <div>
      <div id="background"></div>
      <div className="app">
        <div className="car-nav-container">
          <div
            className="carousel-nav"
            data-flickity={JSON.stringify({
              asNavFor: "main-carousel",
              prevNextButtons: false,
              pageDots: false,
            })}>
            {nameList.map((value: string, index: number) => (
              <div className="carousel-cell tab px-1" key={`div-nav-${index}`}>
                <a
                  key={`a-nav-${index}`}
                  href={`#${value}`}
                  // onClick={() => selectNavItem(index)}
                  id={`tab-${index}`}
                  className="btn btn-tab my-3 py-2 px-3 rounded-3 mx-1">
                  {value.charAt(0).toUpperCase() + value.slice(1)}
                </a>
              </div>
            ))}
          </div>
        </div>
        <CarouselMain
          nameList={nameList}
          pages={dataList.current}></CarouselMain>
      </div>
    </div>
  );
}

export default App;

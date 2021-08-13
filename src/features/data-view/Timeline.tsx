import React, { ReactElement } from "react";
const dateTimes = [
  { item: "Application Release", date: "11th Aug 2021" },
  { item: "Application Closing", date: "04th Sep 2021" },
  { item: "Candidate Announcement", date: "05th Sep 2021" },
  { item: "Election", date: "19th Sep 2021" },
  { item: "LCP Announcement", date: "19th Sep 2021" },
];

const Timeline = (): ReactElement => {
  return (
    <React.Fragment>
      <div className="container-md ">
        <ul className="my-0 list-group col-md-8 m-auto rounded-3">
          {dateTimes.map((value, index) => (
            <li
              className="my-0 list-group-item bg-dark d-flex justify-content-between"
              key={`datetimes-li-${index}`}>
              <span className="py-1 px-1" key={`datetimes-span-1-${index}`}>
                {value.item}
              </span>
              <span
                className="bg-red py-1 rounded-2 px-2 text-center col-xxl-4 col-md-5 col-sm-6 col-6 d-flex justify-content-center align-items-center"
                key={`datetimes-span-2-${index}`}>
                {value.date}
              </span>
            </li>
          ))}
        </ul>
      </div>
      <br></br>
      <div className="px-2 w-100 text-center" style={{ fontSize: "0.8rem" }}>
        Please note that the above dates are tentative and can be subjected to
        change
      </div>
    </React.Fragment>
  );
};

export default Timeline;

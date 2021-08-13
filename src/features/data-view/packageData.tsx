import { IListView } from "./ListView";
import react from "react";
import Timeline from "./Timeline";

const packageDetails: IListView = {
  title: "Application Package",
  data: [
    `should consist of minimum 20 pages in PDF format. You may use diagrams or visuals and follow the given format to fill the application.`,

    [
      `Cover Page (1 page)`,
      `Executive Summary (1 page)`,
      `Personal Information (3 pages)`,
      `Application Questionnaire (14 pages)`,
      [`General Questions`, `Specific Questions`],
      `Blank Paper Challenge (1 page)`,
    ],

    `CV (Maximum 2 pages)`,

    `Video of maximum 5 minutes about`,
    ,
    [
      `Yourself`,
      `Why you are applying for the LCP position`,
      `Key focus areas`,
      `What makes you the ideal character for this position`,
    ],
    `Should be uploaded to YouTube on or before the application deadline, with the title “AIESEC in USJ – LCP candidate 22/23 - <First Name Last Name>’’ (i.e. AIESEC in USJ – LCP Candidate 22/23 Vikum Wijekoon) and should be accessible to anyone with the link (unlisted/public). Mention the video link separately in a PDF and include it with the package.`,
    `Endorsement Letters (PDF Format) from`,

    ,
    [
      ` Home LC Alumni
            `,
      ` Home LC Full Member
            `,
      ` MC Alumni / Current MC / Current LB of AIESEC in Sri Lanka except your home LC
            `,
    ],
    ` Full Membership Confirmation from MCVP PM`,
  ],
};

const guidelines: IListView = {
  title: "Application Guidelines",
  data: [
    `The application should be packaged into Zip file`,
    `Application should be named as “FirstName_LastName_LCP_2022_23.zip”
        (i.e. Vikum_Wijekoon_LCP_2022_23.zip)`,
    `Application should be sent to vikum.wijekoon@aiesec.net on or before 04th of September 2021, 2359 hours.`,
    `No late or incomplete applications will be accepted.`,
    `For further information please refer to section 5 of the Local Committee Compendium`,
  ],
  isChild: true,
};
const electionProcess: IListView = {
  title: "Election Process",
  data: [
    `Election will be on the 19th of Septemeber 2021 from 9 a.m. onwards (Please note that due to volatile situation in the country, dates could be subject to change).`,
    `Each candidate shall be allowed a speech of 7 minutes.`,
    `There will be question and answer round for each LCP candidate, immediately after their speech for maximum 15 minutes.`,
    `There will be question and answer round by a panel consisting of externals for each LCP candidate, after their speech for maximum 30 minutes.`,
    `Voting shall be conducted by secret ballot.`,
    `There will be a closing speech of 3 Minutes done by each candidate.`,
  ],
  isChild: true,
};
const packageData = [packageDetails, guidelines, electionProcess];
export default packageData;

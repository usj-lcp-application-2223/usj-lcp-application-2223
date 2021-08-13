import React from "react";

interface GoogleDocLinkProps {}

const GoogleDocLink: React.FC<GoogleDocLinkProps> = (props) => {
  return (
    <>
      <div className="d-flex justify-content-center flex-column mb-3">
        <div className="p-2 w-100 text-center" style={{ fontSize: "0.8rem" }}>
          You can utilize the Google Doc given in the link below to answer the
          Questionnaire
        </div>
        <a
          href="https://docs.google.com/document/d/1j48H2seMKlMsoDU4BQFZLYiwuPoyMqDjwwEz792iwS8/edit?usp=sharing"
          target="_blank"
          className="btn-primary btn m-auto"
          style={{ width: "fit-content", fontSize: "0.9rem" }}>
          Google Doc Questionnaire
        </a>
      </div>
    </>
  );
};

export default GoogleDocLink;

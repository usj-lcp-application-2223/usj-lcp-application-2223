import React, { ReactChild, ReactChildren, ReactNode } from "react";
import { useMemo } from "react";
import { isString } from "util";
import Container from "./Container";
import MainWrapper from "./MainWrapper";
import image from "../../signature vikum.png";
import vikum from "../../vikum.jpg";
const Preface: React.FC = (props) => {
  return (
    <>
      <MainWrapper>
        <Container>
          <div style={{ whiteSpace: "pre-line" }}>
            <h3 style={{ textAlign: "center" }}>Message from the LCP</h3>
            <br></br>
            <div className="d-flex justify-content-center">
              <img
                src={vikum}
                style={{
                  width: "250px",
                  margin: "auto",
                  borderRadius: "8px",
                }}></img>
            </div>
            <br></br>
            <p
              style={{
                textAlign: "justify",
              }}>{`I want to congratulate you on your decision to apply for the position of Local Committee President of AIESEC in University of Sri Jayewardenepura. This will be your first step in an arduous but a fulfilling voyage through which you will discover capabilities of yours that you’ve never dreamt of having in order to lead the next generation of AIESECers of AIESEC in USJ. I, for one, am excited to see the outcome of your journey as you navigate through the deep waters of the application process. If you were to succeed, you would be the sole person responsible for the entity and for any decision taken within, your vision would direct the local committee to achieve its goals, you would also be accountable for maintaining the image of AIESEC, to make AIESEC relevant to the society and for the impact created for the society and most of all you would manage a competent Executive Board to manage operations from the forefront. It sounds like a lot, but how can anyone grow if they don’t push their boundaries?
    
    Life of a Local Committee President is never easy, but from the way I see it, it is a position that allows you to be the best version of yourself and propel your leadership skills to heights unimaginable. As someone who has been in various positions of leadership throughout my life, I can assure you that this will be one of the best opportunities you will ever have, not just for being a better leader but also to be a better human being. You will emerge from the end of it with a broader perspective for life, an unwithering focus and a relentless passion, a head full of knowledge, know-hows and wisdom and most of all, a better understanding of yourself and your capabilities. And the path for all of it is laid out here for you, it's your chance to take it up as I and all my predecessors did. All that stands in your way is one decision, a decision that can change your life and many others, and taking that decision is up to you. No matter how hard the road seems from here, once you take that decision, you will have the courage and drive needed to get through. If you were to succeed, it will be up to you to deliver the promises made to all the stakeholders of the entity and to inspire the passionate membership of AIESEC in USJ to be better leaders, and I request you to surpass I and all my predecessors and take this incredible organization to unprecedented heights. 
    
    Finally, always remember that your job is not to be the perfect candidate, they don’t exist. Your job is to be the best candidate, so whenever doubt is growing in your heart, remember those words, be fearless and push through the challenge. So now, if you’re up for it, let’s make some history shall we?
    
    Wishing you the best of luck for the process and for an amazing time ahead!
    `}</p>
            <br></br>
            <div className="d-flex justify-content-end flex-column align-items-end">
              <img src={image} style={{ width: "200px" }}></img>
              <p className="text-end">{`Vikum Wijekoon
              Local Committee President 21.22
              AIESEC in University of Sri Jayewardenepura
              `}</p>
            </div>
          </div>
        </Container>
        <br></br>
        <br></br>
        <br></br>
      </MainWrapper>
    </>
  );
};

export default React.memo(Preface);

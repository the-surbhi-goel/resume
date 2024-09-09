import React from "react";
import TimelineItem from "../common/TimelineItem";
import "../common/TimelineItem.css";

export default function Education() {
  const eduList = [
    {
      text: "M.M. University (Mullana)",
      text2:
        "Subjects: Data Structure, Discrete mathematics, Internet Fundamentals, Computer Graphics etc",
      date: "2011-14",
      category: {
        tag: "B.Tech CSE",
        color: "#018f69",
      }
    },
    {
      text: "M.M. University (Mullana)",
      text2:
        "Subjects: Object-Oriented Programming using C++, C, Java, Internet Fundamentals, Discrete Structure etc",
      date: "2008-11",
      category: {
        tag: "Diploma CSE",
        color: "#018f69",
      }
    },
  ];

  return (
    <>
      {eduList.length > 0 && (
        <div className="timeline-container">
          {eduList.map((data, idx) => (
            <TimelineItem data={data} key={idx} />
          ))}
        </div>
      )}
      ;
    </>
  );
}

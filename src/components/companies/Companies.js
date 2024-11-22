import React, { useState } from "react";
import COMPANY_LIST from "../../constants/CompList";
import TimelineItem from "../common/TimelineItem";
import "../common/TimelineItem.css";
import "./companies.css";

export default function Companies(props) {
  const [selectedCompany, setSelectedCompany] = useState(null);

  const readMore = (data) => {
    let tempData = { ...data, link: { readMore: true } };
    setSelectedCompany(tempData);
  };

  return (
    <>
      {COMPANY_LIST.length > 0 && (
        <div className="company-container">
          <div className={`timeline-container ${props.theme.mode}-container ` + (selectedCompany ? "multi-company" : "w-100")}>
            {COMPANY_LIST.map((data, idx) => (
              <TimelineItem
                theme={props.theme}
                singleItem={false}
                readMore={readMore}
                data={data}
                key={idx}
              />
            ))}
          </div>
          {selectedCompany && (
            <div className="selected-company">
              <TimelineItem
                theme={props.theme}
                singleItem={true}
                data={selectedCompany}
                readLess={() => {
                  setSelectedCompany(null);
                }}
              />
            </div>
          )}
        </div>
      )}
      ;
    </>
  );
}

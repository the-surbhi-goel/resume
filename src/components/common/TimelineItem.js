import React from "react";
import PropTypes from "prop-types";
import "./TimelineItem.css";

TimelineItem.prototype = {
  data: PropTypes.object.isRequired,
  singleItem: PropTypes.bool,
};

export default function TimelineItem(props) {
  const { data, readLess, readMore, singleItem } = props;

  return (
    <div
      className={"timeline-item " + (singleItem ? "single-timeline-item" : "")}
      style={{ width: props.width }}
    >
      <div className="timeline-item-content">
        <span className="tag" style={{ background: data.category.color }}>
          {data.category.tag}
        </span>
        <time>{data.date}</time>
        <p>{data.text}</p>
        <p className="text2">{data.text2}</p>

        {data.link && !data.link.readMore && (
          <span
            className="read-more"
            onClick={() => {
              readMore(data);
            }}
          >
            Read More
          </span>
        )}

        {data.link && data.link.readMore && (
          <>
            <ul>
              {data.list.map((liData, i) => (
                <li key={i}>{liData}</li>
              ))}
            </ul>

            {data.projects && (
              <>
                <h5>Project Work:</h5>
                <ul className="project-list">
                  {data.projects.map((project, i) => (
                    <li key={i}>
                      <b>{project.name} : </b> {project.desc}
                    </li>
                  ))}
                </ul>
              </>
            )}

            <span
              className="read-less"
              onClick={() => {
                readLess(data);
              }}
            >
              Read Less
            </span>
          </>
        )}
        {!singleItem && <span className="circle" />}
      </div>
    </div>
  );
}

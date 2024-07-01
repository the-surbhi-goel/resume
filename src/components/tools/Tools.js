import React from "react";
import PropTypes from "prop-types";
import TOOLS from "../../constants/ToolList";
import "./Tools.css";

export default function Tools(props) {
  return (
    <div className="p-4">
      <div className="row">
        {TOOLS.map((tool) => {
          return (
            <div key={tool.name} className="col-lg-4 mt-5 text-center">
              <img
                src={require(`../../assets/images/${tool.imageName}`)}
                className="card-img-top"
                alt="not available"
                style={{ minHeight: "160px" }}
              />
              <h2 className={`mt-3 text-${props.theme.text}`}>{tool.name}</h2>
            </div>
          );
        })}
      </div>
    </div>
  );
}

Tools.propTypes = {
  theme: PropTypes.object.isRequired,
};

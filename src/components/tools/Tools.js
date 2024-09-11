import React from "react";
import PropTypes from "prop-types";
import TOOLS from "../../constants/ToolList";
import ImageWithName from "../common/ImageWithName";

export default function Tools(props) {
  return (
    <div className="p-4">
      <div className="row">
        {TOOLS.map((tool) => {
          return (
            <div key={tool.name} className="col-lg-4 col-6 mt-5 text-center">
              <ImageWithName
                theme={props.theme}
                name={tool.name}
                imageName={require(`../../assets/images/tools/${tool.imageName}`)}
              />
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

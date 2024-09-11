import React from "react";
import PropTypes from "prop-types";
import OS from "../../constants/OSList";
import ImageWithName from "../common/ImageWithName";

export default function OperatingSystem(props) {
  return (
    <div className="p-4">
      <div className="row">
        <div className="col-lg-2"></div>
        {OS.map((os) => {
          return (
            <div key={os.name} className="col-lg-4 col-6 mt-5 text-center">
              <ImageWithName
                theme={props.theme}
                name={os.name}
                imageName={require(`../../assets/images/os/${os.imageName}`)}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}

OperatingSystem.propTypes = {
  theme: PropTypes.object.isRequired,
};

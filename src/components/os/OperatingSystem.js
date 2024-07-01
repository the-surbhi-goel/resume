import React from "react";
import PropTypes from "prop-types";
import OS from "../../constants/OSList";
import "./OperatingSystem.css";

export default function OperatingSystem(props) {
  return (
    <div className="p-4">
      <div className="row">
        <div className="col-lg-2"></div>
        {OS.map((os) => {
          return (
            <div key={os.name} className="col-lg-4 mt-5 text-center">
              <img
                src={require(`../../assets/images/os/${os.imageName}`)}
                className="card-img-top"
                alt="not available"
                style={{ minHeight: "160px" }}
              />
              <h2 className={`mt-3 text-${props.theme.text}`}>{os.name}</h2>
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

import React from "react";
import PropTypes from "prop-types";
import SKILLS from "../../constants/Skills";
import ImageWithName from "../common/ImageWithName";

export default function Skills(props) {
  return (
    <div className="p-4">
      <div className="row">
        {/* <div className="col-lg-2"></div> */}
        {SKILLS.map((skill) => {
          return (
            <div key={skill.name} className="col-md-3 col-6 mt-5 text-center">
              <ImageWithName
                theme={props.theme}
                name={skill.name}
                imageName={require(`../../assets/images/skills/${skill.imageName}`)}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}

Skills.propTypes = {
  theme: PropTypes.object.isRequired,
};

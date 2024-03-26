import React, { Component } from "react";

class Skills extends Component {
  renderSkills(skillsArray) {
    return skillsArray.map((skill, i) => (
      <li className="list-inline-item mx-3" key={i}>
        <span>
          <div className="text-center skills-tile">
            <i className={skill.class} style={{ fontSize: "220%" }}>
              <p className="text-center" style={{ fontSize: "30%", marginTop: "4px" }}>
                {skill.name}
              </p>
            </i>
          </div>
        </span>
      </li>
    ));
  }

  render() {
    let skills, sectionName;
    const { theme } = this.props;
    
    if (this.props.sharedSkills && this.props.resumeBasicInfo) {
      sectionName = this.props.resumeBasicInfo.section_name.skills;
      
      if (theme === "light" && this.props.sharedSkills.frontend) {
        skills = this.renderSkills(this.props.sharedSkills.frontend);
      } else if (theme === "dark" && this.props.sharedSkills.backend) {
        skills = this.renderSkills(this.props.sharedSkills.backend);
      }
    }

    return (
      <section id="skills">
        <div className="col-md-12">
          <div className="col-md-12">
            <h1 className="section-title">
              <span className="text-white">{sectionName}</span>
            </h1>
          </div>
          <div className="col-md-12 text-center">
            <ul className="list-inline mx-auto skill-icon">{skills}</ul>
          </div>
        </div>
      </section>
    );
  }
}

export default Skills;

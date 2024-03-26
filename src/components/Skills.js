import React, { Component } from "react";

class Skills extends Component {
  renderSkills(skills) {
    return skills.map((skill, i) => (
      <li className="list-inline-item mx-3" key={i}>
        <span>
          <div className="text-center skills-tile">
            <i className={skill.class} style={{ fontSize: "220%" }}>
              <p
                className="text-center"
                style={{ fontSize: "30%", marginTop: "4px" }}
              >
                {skill.name}
              </p>
            </i>
          </div>
        </span>
      </li>
    ));
  }

  render() {
    let frontendSkills, backendSkills;
    if (this.props.sharedSkills && this.props.resumeBasicInfo) {
      var sectionName = this.props.resumeBasicInfo.section_name.skills;
      
      if (this.props.sharedSkills.frontend) {
        frontendSkills = this.renderSkills(this.props.sharedSkills.frontend);
      }
      
      if (this.props.sharedSkills.backend) {
        backendSkills = this.renderSkills(this.props.sharedSkills.backend);
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
            <h2>Frontend Skills</h2>
            <ul className="list-inline mx-auto skill-icon">{frontendSkills}</ul>
            <h2>Backend Skills</h2>
            <ul className="list-inline mx-auto skill-icon">{backendSkills}</ul>
          </div>
        </div>
      </section>
    );
  }
}

export default Skills;

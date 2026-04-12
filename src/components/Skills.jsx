import React, { Component } from "react";

class Skills extends Component {
    getSkillLabel(level, theme) {
        const numericLevel = Number(level);

        if (numericLevel >= 86) {
            return theme === "light" ? "Go-to for shipped UI work" : "Go-to for production work";
        }

        if (numericLevel >= 78) {
            return theme === "light" ? "Used often in frontend builds" : "Used often in backend and automation work";
        }

        return theme === "light" ? "Part of my regular stack" : "Part of my regular engineering stack";
    }

    renderSkills(skillsArray) {
        return skillsArray.map((skill) => (
            <article
                className="skills-tile"
                key={skill.name}
                style={{ "--skill-level": `${skill.level}%` }}
            >
                <i className={`${skill.class} skills-tile__icon`}></i>
                <h3 className="skills-tile__name">{skill.name}</h3>
                <div className="skills-meter" aria-hidden="true">
                    <span style={{ width: `${skill.level}%` }}></span>
                </div>
                <p className="skills-tile__meta">
                    {this.getSkillLabel(skill.level, this.props.theme)}
                </p>
            </article>
        ));
    }

    render() {
        const { theme, sharedSkills, resumeBasicInfo } = this.props;

        const sectionName = resumeBasicInfo?.section_name.skills;
        const intro =
            theme === "light"
                ? "The tools I lean on when the work needs a strong interface, clear interaction design, and quick iteration."
                : "The tools I reach for when the job is automation, backend logic, data handling, or operational reliability.";

        let skills = null;
        if (sharedSkills) {
            if (theme === "light" && sharedSkills.frontend) {
                skills = this.renderSkills(sharedSkills.frontend);
            } else if (theme === "dark" && sharedSkills.backend) {
                skills = this.renderSkills(sharedSkills.backend);
            }
        }

        return (
            <section id="skills" className="section-block section-block--skills">
                <div className="section-shell">
                    <div className="section-heading">
                        <p className="section-kicker">Tooling</p>
                        <h2 className="section-title">{sectionName}</h2>
                        <p className="section-intro">{intro}</p>
                    </div>
                    <div className="skills-grid">{skills}</div>
                </div>
            </section>
        );
    }
}

export default Skills;

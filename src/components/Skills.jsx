import React, { Component } from "react";

class Skills extends Component {
    getSkillLabel(level) {
        const numericLevel = Number(level);

        if (numericLevel >= 86) {
            return "Go-to for production work";
        }

        if (numericLevel >= 78) {
            return "Used often in shipped work";
        }

        return "Part of my regular stack";
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
                    {this.getSkillLabel(skill.level)}
                </p>
            </article>
        ));
    }

    render() {
        const { sharedSkills, resumeBasicInfo } = this.props;

        const sectionName = resumeBasicInfo?.section_name.skills;
        const frontendLabel =
            resumeBasicInfo?.section_name.skills_frontend || "Frontend & Product";
        const backendLabel =
            resumeBasicInfo?.section_name.skills_backend || "Backend & Systems";
        const intro =
            "The full toolbox: interface and product tools on one side, automation, data, and backend tools on the other. Most projects here use both.";

        return (
            <section id="skills" className="section-block section-block--skills">
                <div className="section-shell">
                    <div className="section-heading">
                        <p className="section-kicker">Tooling</p>
                        <h2 className="section-title">{sectionName}</h2>
                        <p className="section-intro">{intro}</p>
                    </div>
                    {sharedSkills?.frontend ? (
                        <div className="skills-group">
                            <h3 className="skills-group__title">
                                {frontendLabel}
                            </h3>
                            <div className="skills-grid">
                                {this.renderSkills(sharedSkills.frontend)}
                            </div>
                        </div>
                    ) : null}
                    {sharedSkills?.backend ? (
                        <div className="skills-group">
                            <h3 className="skills-group__title">
                                {backendLabel}
                            </h3>
                            <div className="skills-grid">
                                {this.renderSkills(sharedSkills.backend)}
                            </div>
                        </div>
                    ) : null}
                </div>
            </section>
        );
    }
}

export default Skills;

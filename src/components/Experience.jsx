import React, { Component } from "react";
import Badge from "react-bootstrap/Badge";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLaptopCode } from "@fortawesome/free-solid-svg-icons";

class Experience extends Component {
    render() {
        const { resumeBasicInfo, resumeExperience, theme } = this.props;
        const sectionName = resumeBasicInfo?.section_name.experience;
        const intro =
            theme === "light"
                ? "Experience told through delivery, calmer workflows, and the part of engineering work that makes teams easier to support."
                : "Experience told through integration depth, automation, and the ability to move quickly across complex technical environments.";

        const work = resumeExperience?.map((role, index) => {
            const description =
                theme === "light"
                    ? role.frontDescription || role.description
                    : role.backDescription || role.description;
            const mainTech = role.mainTech.map((technology) => (
                <Badge pill className="main-badge" key={`${role.company}-${technology}`}>
                    {technology}
                </Badge>
            ));

            const tech = role.technologies.map((technology) => (
                <Badge
                    pill
                    className="experience-badge"
                    key={`${role.company}-${technology}`}
                >
                    {technology}
                </Badge>
            ));

            return (
                <article
                    className="experience-card"
                    key={`${role.company}-${index}`}
                >
                    <div className="experience-card__rail">
                        <span className="experience-card__icon">
                            <FontAwesomeIcon icon={faLaptopCode} />
                        </span>
                    </div>
                    <div className="experience-card__content">
                        <div className="experience-card__top">
                            <p className="experience-card__date">{role.years}</p>
                            <div className="experience-topics">{mainTech}</div>
                        </div>
                        <h3 className="experience-card__title">{role.title}</h3>
                        <h4 className="experience-card__company">{role.company}</h4>
                        {role.scope ? (
                            <p className="experience-scope">{role.scope}</p>
                        ) : null}
                        <p className="experience-description">{description}</p>
                        {role.highlights?.length ? (
                            <ul className="experience-highlights">
                                {role.highlights.map((highlight) => (
                                    <li key={`${role.company}-${highlight}`}>
                                        {highlight}
                                    </li>
                                ))}
                            </ul>
                        ) : null}
                        <div className="experience-tags">{tech}</div>
                    </div>
                </article>
            );
        });

        return (
            <section
                id="experience"
                className="section-block section-block--experience"
            >
                <div className="section-shell">
                    <div className="section-heading">
                        <p className="section-kicker">Experience</p>
                        <h2 className="section-title">{sectionName}</h2>
                        <p className="section-intro">{intro}</p>
                    </div>
                    <div className="experience-list">{work}</div>
                </div>
            </section>
        );
    }
}

export default Experience;

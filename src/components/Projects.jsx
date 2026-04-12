import React, { Component } from "react";
import ProjectDetailsModal from "./ProjectDetailsModal";

class Projects extends Component {
    constructor(props) {
        super(props);
        this.state = {
            deps: {},
            detailsModalShow: false,
        };
    }

    render() {
        const { theme, resumeProjects, resumeBasicInfo } = this.props;
        const openDetailsModal = (data) => {
            this.setState({ detailsModalShow: true, deps: data });
        };

        const closeDetailsModal = () =>
            this.setState({ detailsModalShow: false });

        const sectionName = resumeBasicInfo?.section_name.projects;
        const intro =
            theme === "light"
                ? "Public projects that show the product-facing side of my work: thoughtful interfaces, clear operator flows, and full-stack builds that feel easy to trust."
                : "Public projects that show the systems-facing side of my work: automation, state handling, integration logic, and tools built to reduce noise."
        ;
        const orderedProjects = [...(resumeProjects || [])].sort((left, right) => {
            const leftRank = theme === "light" ? left.frontRank : left.backRank;
            const rightRank = theme === "light" ? right.frontRank : right.backRank;

            return (leftRank || 99) - (rightRank || 99);
        });
        const projects = orderedProjects.map((project) => {
            const eyebrow =
                theme === "light"
                    ? project.frontLabel || "Selected project"
                    : project.backLabel || "Selected project";
            const description =
                theme === "light"
                    ? project.frontDescription || project.description
                    : project.backDescription || project.description;
            const cardDescription =
                description.length > 190
                    ? `${description.slice(0, 187).trimEnd()}...`
                    : description;

            return (
            <div className="project-grid__item" key={project.title}>
                <button
                    type="button"
                    className="project-card"
                    onClick={() => openDetailsModal(project)}
                >
                    <div className="project-card__media">
                        <img src={project.images[0]} alt={project.title} />
                        <span className="project-card__badge">
                            {project.startDate}
                        </span>
                    </div>
                    <div className="project-card__body">
                        <p className="project-card__eyebrow">{eyebrow}</p>
                        <h3 className="project-card__title">{project.title}</h3>
                        <p className="project-card__summary">{cardDescription}</p>
                        {project.impact ? (
                            <p className="project-card__impact">{project.impact}</p>
                        ) : null}
                        <ul className="project-card__stack">
                            {project.technologies.slice(0, 4).map((technology) => (
                                <li key={`${project.title}-${technology.name}`}>
                                    {technology.name}
                                </li>
                            ))}
                        </ul>
                        <span className="project-card__cta">
                            View details
                            <i className="fas fa-arrow-right"></i>
                        </span>
                    </div>
                </button>
            </div>
            );
        });

        return (
            <section
                id="portfolio"
                className="section-block section-block--portfolio"
            >
                <div className="section-shell">
                    <div className="section-heading">
                        <p className="section-kicker">Selected Work</p>
                        <h2 className="section-title">{sectionName}</h2>
                        <p className="section-intro">{intro}</p>
                    </div>
                    <div className="project-grid">{projects}</div>
                    <ProjectDetailsModal
                        show={this.state.detailsModalShow}
                        onHide={closeDetailsModal}
                        data={this.state.deps}
                        theme={theme}
                    />
                </div>
            </section>
        );
    }
}

export default Projects;

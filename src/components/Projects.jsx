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
        const { resumeProjects, resumeBasicInfo } = this.props;
        const openDetailsModal = (data) => {
            this.setState({ detailsModalShow: true, deps: data });
        };

        const closeDetailsModal = () =>
            this.setState({ detailsModalShow: false });

        const sectionName = resumeBasicInfo?.section_name.projects;
        const intro =
            "Public projects across both sides of the work: product interfaces, developer tooling, data pipelines, and the AI guardrails that keep all of it trustworthy.";
        const orderedProjects = [...(resumeProjects || [])].sort(
            (left, right) => (left.rank || 99) - (right.rank || 99)
        );
        const projects = orderedProjects.map((project) => {
            const eyebrow = project.label || "Selected project";
            const description = project.summary || project.description;
            const cardDescription =
                description.length > 190
                    ? `${description.slice(0, 187).trimEnd()}...`
                    : description;

            return (
                <div className="project-grid__item" key={project.title}>
                    <button
                        className="project-card"
                        onClick={() => openDetailsModal(project)}
                        type="button"
                    >
                        <div className="project-card__media">
                            <img alt={project.title} src={project.images[0]} />
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
                className="section-block section-block--portfolio"
                id="portfolio"
            >
                <div className="section-shell">
                    <div className="section-heading">
                        <p className="section-kicker">Selected Work</p>
                        <h2 className="section-title">{sectionName}</h2>
                        <p className="section-intro">{intro}</p>
                    </div>
                    <div className="project-grid">{projects}</div>
                    <ProjectDetailsModal
                        data={this.state.deps}
                        onHide={closeDetailsModal}
                        show={this.state.detailsModalShow}
                    />
                </div>
            </section>
        );
    }
}

export default Projects;

import React, { Component } from "react";
import { Modal } from "react-bootstrap";
import AwesomeSlider from "react-awesome-slider";
import AwesomeSliderStyles from "../scss/light-slider.module.scss";
import AwesomeSliderStyles2 from "../scss/dark-slider.module.scss";
import "react-awesome-slider/dist/custom-animations/scale-out-animation.css";

class ProjectDetailsModal extends Component {
    render() {
        const project = this.props.data;

        if (!project) {
            return null;
        }

        const theme = this.props.theme || "light";
        const title = project.title;
        const description =
            theme === "light"
                ? project.frontDescription || project.description
                : project.backDescription || project.description;
        const url = project.url;
        const label =
            theme === "light"
                ? project.frontLabel || "Selected project"
                : project.backLabel || "Selected project";
        const imageSources = project.images || [];
        const images =
            imageSources.map((image, index) => (
                <div data-src={image} key={`${project.title}-${index}`} />
            ));
        const highlights =
            project.highlights?.map((highlight) => (
                <li key={`${project.title}-${highlight}`}>{highlight}</li>
            )) || [];
        const technologies =
            project.technologies?.map((technology) => (
                <li
                    className="project-modal__tech-item"
                    key={`${project.title}-${technology.name}`}
                >
                    <i className={technology.class}></i>
                    <span>{technology.name}</span>
                </li>
            )) || [];

        return (
            <Modal
                {...this.props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
                className="modal-inside"
            >
                <button
                    aria-label="Close project details"
                    className="modal-close"
                    onClick={this.props.onHide}
                    type="button"
                >
                    <i className="fas fa-times close-icon"></i>
                </button>
                <div className="project-modal">
                    {imageSources.length > 1 ? (
                        <div className="project-modal__slider">
                            <div className="slider-tab">
                                <span
                                    className="iconify slider-iconfiy"
                                    data-icon="emojione:red-circle"
                                    data-inline="false"
                                ></span>
                                <span
                                    className="iconify slider-iconfiy"
                                    data-icon="twemoji:yellow-circle"
                                    data-inline="false"
                                ></span>
                                <span
                                    className="iconify slider-iconfiy"
                                    data-icon="twemoji:green-circle"
                                    data-inline="false"
                                ></span>
                            </div>
                            <AwesomeSlider
                                cssModule={[AwesomeSliderStyles, AwesomeSliderStyles2]}
                                animation="scaleOutAnimation"
                                className="slider-image"
                            >
                                {images}
                            </AwesomeSlider>
                        </div>
                    ) : (
                        <div className="project-modal__cover">
                            <div className="slider-tab">
                                <span
                                    className="iconify slider-iconfiy"
                                    data-icon="emojione:red-circle"
                                    data-inline="false"
                                ></span>
                                <span
                                    className="iconify slider-iconfiy"
                                    data-icon="twemoji:yellow-circle"
                                    data-inline="false"
                                ></span>
                                <span
                                    className="iconify slider-iconfiy"
                                    data-icon="twemoji:green-circle"
                                    data-inline="false"
                                ></span>
                            </div>
                            <img
                                src={imageSources[0]}
                                alt={title}
                                className="project-modal__cover-image"
                            />
                        </div>
                    )}
                    <div className="project-modal__body">
                        <div className="project-modal__heading">
                            <div>
                                <span className="project-modal__eyebrow">{label}</span>
                                <h3>{title}</h3>
                            </div>
                            {url ? (
                                <a
                                    className="link-href"
                                    href={url}
                                    rel="noopener noreferrer"
                                    target="_blank"
                                >
                                    Open project
                                    <i className="fas fa-external-link-alt"></i>
                                </a>
                            ) : null}
                        </div>
                        <p className="modal-description">{description}</p>
                        {project.impact ? (
                            <p className="project-modal__impact">{project.impact}</p>
                        ) : null}
                        {highlights.length ? (
                            <div className="project-modal__details">
                                <h4>What this shows</h4>
                                <ul className="project-modal__highlights">
                                    {highlights}
                                </ul>
                            </div>
                        ) : null}
                        <ul className="project-modal__tech-list">
                            {technologies}
                        </ul>
                    </div>
                </div>
            </Modal>
        );
    }
}

export default ProjectDetailsModal;

import React, { Component } from "react";
import { Icon } from "@iconify/react";
import reactIcon from "@iconify/icons-logos/react";
import pythonIcon from "@iconify/icons-logos/python";
import typescriptIcon from "@iconify/icons-logos/typescript-icon";

class About extends Component {
    render() {
        const { sharedBasicInfo, resumeBasicInfo } = this.props;

        const profilepic = sharedBasicInfo
            ? `images/${sharedBasicInfo.image}`
            : "";
        const sectionName = resumeBasicInfo?.section_name.about;
        const hello = resumeBasicInfo?.description_header;
        const about = resumeBasicInfo?.description;

        const stack = [
            { icon: reactIcon, label: "React" },
            { icon: typescriptIcon, label: "TypeScript" },
            { icon: pythonIcon, label: "Python" },
        ];

        const focusLabel = "Product, systems, and AI tooling work";

        return (
            <section className="section-block section-block--about" id="about">
                <div className="section-shell">
                    <div className="section-heading">
                        <p className="section-kicker">Profile</p>
                        <h2 className="section-title">{sectionName}</h2>
                        <p className="section-intro">
                            A public-facing snapshot of how I think, build, and
                            make technical work feel clearer for the people
                            around it.
                        </p>
                    </div>

                    <div className="about-grid">
                        <div className="about-profile-card">
                            <div className="about-profile-card__photo">
                                <img alt="Steven Espinoza" src={profilepic} />
                            </div>
                            <p className="about-profile-card__label">
                                {focusLabel}
                            </p>
                            <div className="about-stack-strip">
                                {stack.map((item) => (
                                    <div
                                        className="about-stack-chip"
                                        key={item.label}
                                    >
                                        <Icon
                                            icon={item.icon}
                                            className="about-stack-chip__icon"
                                        />
                                        <span>{item.label}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="about-story-card">
                            <div aria-hidden="true" className="window-dots">
                                <span className="window-dot window-dot--red"></span>
                                <span className="window-dot window-dot--yellow"></span>
                                <span className="window-dot window-dot--green"></span>
                            </div>
                            <div className="about-story-card__body">
                                <p className="about-greeting">{hello}</p>
                                <p className="about-story-card__copy">{about}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default About;

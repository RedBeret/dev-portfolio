import React, { Component } from "react";
import { Icon } from "@iconify/react";
import reactIcon from "@iconify/icons-logos/react";
import cssIcon from "@iconify/icons-logos/css-3";
import pythonIcon from "@iconify/icons-logos/python";
import flaskIcon from "@iconify/icons-logos/flask";
import sqliteIcon from "@iconify/icons-logos/sqlite";
import javascriptIcon from "@iconify/icons-logos/javascript";

class About extends Component {
    render() {
        const { theme, sharedBasicInfo, resumeBasicInfo } = this.props;

        const profilepic = sharedBasicInfo
            ? `images/${sharedBasicInfo.image}`
            : "";
        const sectionName = resumeBasicInfo?.section_name.about;
        const hello = resumeBasicInfo?.description_header;
        const about = resumeBasicInfo?.description;

        const stack =
            theme === "light"
                ? [
                      { icon: reactIcon, label: "React" },
                      { icon: javascriptIcon, label: "JavaScript" },
                      { icon: cssIcon, label: "CSS" },
                  ]
                : [
                      { icon: flaskIcon, label: "Flask" },
                      { icon: pythonIcon, label: "Python" },
                      { icon: sqliteIcon, label: "SQLite" },
                  ];

        const focusLabel =
            theme === "light"
                ? "Product, UI, and full-stack work"
                : "Automation, backend, and systems work";

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

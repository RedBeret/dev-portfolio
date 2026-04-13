import React, { Component } from "react";

class Credentials extends Component {
    render() {
        const { resumeCredentials } = this.props;

        if (!resumeCredentials) {
            return null;
        }

        return (
            <section
                className="section-block section-block--credentials"
                id="credentials"
            >
                <div className="section-shell">
                    <div className="section-heading">
                        <p className="section-kicker">Credentials</p>
                        <h2 className="section-title">Education and Certifications</h2>
                        <p className="section-intro">
                            Formal training, certifications, and learning
                            milestones that support the work shown across the
                            rest of the portfolio.
                        </p>
                    </div>
                    <div className="credentials-grid">
                        <article className="credential-panel">
                            <div aria-hidden="true" className="window-dots">
                                <span className="window-dot window-dot--red"></span>
                                <span className="window-dot window-dot--yellow"></span>
                                <span className="window-dot window-dot--green"></span>
                            </div>
                            <div className="credential-panel__body">
                                <h3>Education</h3>
                                {resumeCredentials.education.map((education) => (
                                    <div
                                        className="credential-item"
                                        key={`${education.degree}-${education.year}`}
                                    >
                                        <div>
                                            <h4>{education.degree}</h4>
                                            <p>{education.school}</p>
                                        </div>
                                        <span>{education.year}</span>
                                    </div>
                                ))}
                            </div>
                        </article>

                        <article className="credential-panel">
                            <div aria-hidden="true" className="window-dots">
                                <span className="window-dot window-dot--red"></span>
                                <span className="window-dot window-dot--yellow"></span>
                                <span className="window-dot window-dot--green"></span>
                            </div>
                            <div className="credential-panel__body">
                                <h3>Certifications</h3>
                                {resumeCredentials.certifications.map((certification) => (
                                    <div
                                        className="credential-item"
                                        key={`${certification.title}-${certification.year}`}
                                    >
                                        <div>
                                            <h4>{certification.title}</h4>
                                            <p>{certification.issuer}</p>
                                        </div>
                                        <span>{certification.year}</span>
                                    </div>
                                ))}
                            </div>
                        </article>
                    </div>
                </div>
            </section>
        );
    }
}

export default Credentials;

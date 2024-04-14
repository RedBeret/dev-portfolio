import React, { Component } from 'react';

class Credentials extends Component {
    render() {
        const { resumeCredentials, theme } = this.props;
        const cardClass = theme === "dark" ? "card dark" : "card light";

        if (!resumeCredentials) {
            return <div>Loading...</div>; 
        }

        return (
            <section id="about" className="credentials">
                <div className="container">
                    <h1 className="section-title">Credentials</h1>
                    <div className="row center mx-auto mb-5">
                        <div className="col-md-8 center">
                            <div className="col-md-10">
                                <div className={cardClass}>
                                    <div className="card-header">
                                        <span className="iconify" data-icon="emojione:red-circle" data-inline="false"></span>
                                        &nbsp; 
                                        <span className="iconify" data-icon="twemoji:yellow-circle" data-inline="false"></span>
                                        &nbsp; 
                                        <span className="iconify" data-icon="twemoji:green-circle" data-inline="false"></span>
                                    </div>
                                    <div className="card-body font-trebuchet text-justify ml-3 mr-3" 
                                         style={{ height: "auto", fontSize: "132%", lineHeight: "200%" }}>
                                        <h2>Education</h2>
                                        {resumeCredentials.education.map((edu, index) => (
                                            <div key={index} className="credential-details">
                                                <h3>{edu.degree}</h3>
                                                <p>{edu.school} - {edu.year}</p>
                                            </div>
                                        ))}
                                        <br />
                                        <h2>Certifications</h2>
                                        {resumeCredentials.certifications.map((cert, index) => (
                                            <div key={index} className="credential-details">
                                                <h3>{cert.title}</h3>
                                                <p>{cert.issuer} - {cert.year}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Credentials;

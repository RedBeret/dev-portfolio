import React, { Component } from 'react';

class Credentials extends Component {
    render() {
        const education = [
            { degree: "Bachelor of Science in Business Administration", school: "Focus: Computer Information Systems, California State University, Fresno", year: "2013" },
            { degree: "Software Engineering Certificate, Flatiron School", year: "2024" },
            { degree: "25B MOS Qualified, IT Specialist, U.S. Army Cyber Center of Excellence", year: "2016" }
        ];

        const certifications = [
            { title: "AWS Certified Solutions Architect", issuer: "Amazon Web Services", year: "2021" },
            { title: "CompTIA Security+ (Sec+)", issuer: "CompTIA", year: "2022" },
            { title: "Certified ScrumMaster (CSM), Scrum Alliance D-A-CH e.V.", year: "2023" },
            { title: "AWS Certified Cloud Practitioner", issuer: "Amazon Web Services", year: "2024" },
            { title: "CCNA, Cisco", year: "2022" },
            { title: "CompTIA Security+ ce Certification, CompTIA", year: "2016" },
            { title: "Disciplined Agile Scrum Master (DASM), Project Management Institute", year: "2022" }
        ];

        const { theme } = this.props; // Ensure this prop is being passed from App.js
        const cardClass = theme === "dark" ? "card dark" : "card light"; 
        return (
            <section id="about" className="credentials">
                <div className="container">
                    <h1 className="section-title">Credentials</h1>
                    <div className="row center mx-auto mb-5">
                        <div className="col-md-8 center">
                            <div className="col-md-10">
                                <div className="card">
                                    <div className="card-header">
                                        <span
                                            className="iconify"
                                            data-icon="emojione:red-circle"
                                            data-inline="false"
                                        ></span>{" "}
                                        &nbsp;{" "}
                                        <span
                                            className="iconify"
                                            data-icon="twemoji:yellow-circle"
                                            data-inline="false"
                                        ></span>{" "}
                                        &nbsp;{" "}
                                        <span
                                            className="iconify"
                                            data-icon="twemoji:green-circle"
                                            data-inline="false"
                                        ></span>
                                    </div>
                                    <div
                                        className="card-body font-trebuchet text-justify ml-3 mr-3"
                                        style={{
                                            height: "auto",
                                            fontSize: "132%",
                                            lineHeight: "200%",
                                        }}
                                    >   
                                        <h2>Education</h2>
                                        {education.map((edu, index) => (
                                            <div key={index} className="credential-details">
                                                <h3>{edu.degree}</h3>
                                                <p>{edu.school} - {edu.year}</p>
                                            </div>
                                        ))}
                                        <br />
                                        <h2>Certifications</h2>
                                        {certifications.map((cert, index) => (
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

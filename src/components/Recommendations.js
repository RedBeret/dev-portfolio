import React, { Component } from "react";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp } from "@fortawesome/free-solid-svg-icons";

class Experience extends Component {
    render() {
        const { resumeRecommendations } = this.props;

        let sectionName = "Recommendations from LinkedIn";

        const recommendationElements = resumeRecommendations?.map((rec, i) => {
            return (
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    date={rec.date}
                    iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
                    icon={<FontAwesomeIcon icon={faThumbsUp} />}
                    key={`recommendation-${i}`}
                >
                    <h3 className="vertical-timeline-element-title">{rec.title}</h3>
                    <h4 className="vertical-timeline-element-subtitle">{rec.author}</h4>
                    <p>{rec.text}</p>
                </VerticalTimelineElement>
            );
        });

        return (
            <section id="resume" className="pb-5">
                <div className="col-md-12 mx-auto">
                    <div className="col-md-12">
                        <h1 className="section-title" style={{ color: "black" }}>
                            <span className="text-black" style={{ textAlign: "center" }}>
                                {sectionName}
                            </span>
                        </h1>
                    </div>
                </div>
                <div className="col-md-8 mx-auto">
                    <VerticalTimeline>
                        {recommendationElements}
                        <VerticalTimelineElement
                            iconStyle={{ background: "#2d708f", color: "#fff", textAlign: "center" }}
                            icon={<i className="fas fa-hourglass-start mx-auto experience-icon"></i>}
                        />
                    </VerticalTimeline>
                </div>
            </section>
        );
    }
}

export default Experience;

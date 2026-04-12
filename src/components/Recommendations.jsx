import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp } from "@fortawesome/free-solid-svg-icons";

class Recommendations extends Component {
    render() {
        const recommendationCards = this.props.resumeRecommendations?.map(
            (recommendation, index) => (
                <article
                    className="recommendation-card"
                    key={`recommendation-${index}`}
                >
                    <div className="recommendation-card__icon">
                        <FontAwesomeIcon icon={faThumbsUp} />
                    </div>
                    <p className="recommendation-card__text">
                        "{recommendation.text}"
                    </p>
                    <div className="recommendation-card__meta">
                        <strong>{recommendation.author}</strong>
                        <span>{recommendation.date}</span>
                    </div>
                </article>
            )
        );

        return (
            <section
                id="recommendations"
                className="section-block section-block--recommendations"
            >
                <div className="section-shell">
                    <div className="section-heading">
                        <p className="section-kicker">Recommendations</p>
                        <h2 className="section-title">What People Have Said</h2>
                        <p className="section-intro">
                            A few recommendations that speak to how I work with
                            teams, guide projects, and help other people do
                            their best work.
                        </p>
                    </div>
                    <div className="recommendations-grid">
                        {recommendationCards}
                    </div>
                </div>
            </section>
        );
    }
}

export default Recommendations;

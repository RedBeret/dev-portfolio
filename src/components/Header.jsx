import React, { Component } from "react";
import { Typewriter } from "react-simple-typewriter";
import Switch from "react-switch";

const FOCUS = {
    kicker: "Engineering Leadership / Forward-Deployed AI",
    primaryTitle: "Technical Lead / Engineering Manager",
    focusLine: "Leading AI-forward engineering teams while still shipping the hard parts myself",
    fit: "Engineering leadership, AI delivery, and forward-deployed teams",
    summary:
        "I lead a team of engineers building AI and data tooling for regulated, air-gapped, high-trust environments, and I stay hands-on with the hardest parts of the work.",
    secondary:
        "Equally comfortable setting direction for a team and going forward-deployed myself when the work is messy, high-stakes, and needs to be trustworthy.",
    panelTitle: "Now: leading AI and developer tooling for secure environments",
    panelText:
        "Recent work spans forward-deployed AI delivery, data quality pipelines, evaluation harnesses, and agent guardrails, built where reliability and protecting sensitive data matter most.",
    proofPoints: [
        {
            value: "150+",
            label: "platforms worked across",
        },
        {
            value: "Hundreds",
            label: "of isolated, secure enterprise environments",
        },
        {
            value: "Lead + Build",
            label: "coordinates 15+ engineers and still ships code",
        },
    ],
};

class Header extends Component {
    constructor() {
        super();
        this.state = {
            checked: false,
        };
        this.onThemeSwitchChange = this.onThemeSwitchChange.bind(this);
    }

    onThemeSwitchChange(checked) {
        this.setState({ checked }, () => {
            document.body.setAttribute(
                "data-theme",
                checked ? "dark" : "light"
            );
            this.props.toggleTheme();
        });
    }

    render() {
        let name = "";
        let titles = [];
        let social = [];

        if (this.props.sharedData) {
            name = this.props.sharedData.name;
            social = this.props.sharedData.social || [];
            titles = this.props.sharedData.titles || [];
        }

        const rotatingTitles = titles.slice(1).length ? titles.slice(1) : titles;
        const linkedin =
            social.find((network) => network.name === "linkedin")?.url || "#footer";
        const socialLinks = social.map((network) => (
            <a
                aria-label={network.name}
                className="hero-social-link"
                href={network.url}
                key={network.name}
                rel="noopener noreferrer"
                target="_blank"
            >
                <i className={network.class}></i>
            </a>
        ));

        return (
            <header className="hero" id="home">
                <div className="section-shell hero-shell">
                    <div className="hero-copy">
                        <p className="hero-kicker">{FOCUS.kicker}</p>
                        <h1 className="hero-title mb-0">
                            <span className="hero-title__name">{name}</span>
                            <span className="hero-title__role-static">
                                {FOCUS.primaryTitle}
                            </span>
                            <span className="hero-title__role">
                                {rotatingTitles.length ? (
                                    <Typewriter
                                        cursor
                                        cursorStyle="|"
                                        delaySpeed={1150}
                                        deleteSpeed={100}
                                        loop={Infinity}
                                        typeSpeed={230}
                                        words={rotatingTitles}
                                    />
                                ) : null}
                            </span>
                        </h1>
                        <p className="hero-description">
                            Public portfolio for AI-forward engineering,
                            forward-deployed delivery, and the kind of team
                            leadership that helps real teams ship software they
                            can trust.
                        </p>
                        <div className="hero-proof-strip">
                            {FOCUS.proofPoints.map((point) => (
                                <div
                                    className="hero-proof-card"
                                    key={`${point.value}-${point.label}`}
                                >
                                    <strong>{point.value}</strong>
                                    <span>{point.label}</span>
                                </div>
                            ))}
                        </div>
                        <div className="hero-actions">
                            <a
                                className="hero-button hero-button--primary"
                                href="#portfolio"
                            >
                                View selected work
                            </a>
                            <a
                                className="hero-button hero-button--secondary"
                                href={linkedin}
                                rel="noopener noreferrer"
                                target="_blank"
                            >
                                Connect on LinkedIn
                            </a>
                        </div>
                        <div className="hero-meta">
                            <div className="hero-meta-card">
                                <span className="hero-meta-card__label">
                                    Right now
                                </span>
                                <strong>{FOCUS.focusLine}</strong>
                                <p>{FOCUS.summary}</p>
                            </div>
                            <div className="hero-meta-card">
                                <span className="hero-meta-card__label">
                                    Best fit
                                </span>
                                <strong>{FOCUS.fit}</strong>
                                <p>{FOCUS.secondary}</p>
                            </div>
                        </div>
                    </div>

                    <aside className="hero-panel">
                        <div aria-hidden="true" className="window-dots">
                            <span className="window-dot window-dot--red"></span>
                            <span className="window-dot window-dot--yellow"></span>
                            <span className="window-dot window-dot--green"></span>
                        </div>
                        <div className="hero-panel__mode">
                            <div>
                                <p className="hero-panel__eyebrow">
                                    Current focus
                                </p>
                                <h2>{FOCUS.panelTitle}</h2>
                                <p>{FOCUS.panelText}</p>
                            </div>
                        </div>
                        <div className="hero-panel__switch">
                            <div>
                                <p className="hero-panel__switch-label">
                                    Appearance
                                </p>
                                <p className="hero-panel__switch-copy">
                                    {this.state.checked
                                        ? "Dark mode on - same story, easier on the eyes."
                                        : "Light mode on - flip it if you prefer dark."}
                                </p>
                            </div>
                            <Switch
                                checked={this.state.checked}
                                onChange={this.onThemeSwitchChange}
                                offColor="#0f8b8d"
                                onColor="#182635"
                                className="react-switch"
                                aria-label="Toggle dark mode"
                                width={88}
                                height={38}
                                uncheckedIcon={
                                    <span className="toggle-icon toggle-icon--left">
                                        <i className="fas fa-sun"></i>
                                    </span>
                                }
                                checkedIcon={
                                    <span className="toggle-icon toggle-icon--right">
                                        <i className="fas fa-moon"></i>
                                    </span>
                                }
                                id="icon-switch"
                            />
                        </div>
                        <div className="hero-social-links">{socialLinks}</div>
                    </aside>
                </div>
            </header>
        );
    }
}

export default Header;

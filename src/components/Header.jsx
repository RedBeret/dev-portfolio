import React, { Component } from "react";
import { Typewriter } from "react-simple-typewriter";
import Switch from "react-switch";

class Header extends Component {
    constructor() {
        super();
        this.state = {
            checked: false,
            theme: "light",
            themeIcon: "images/icons/front.png",
        };
        this.onThemeSwitchChange = this.onThemeSwitchChange.bind(this);
    }

    onThemeSwitchChange(checked) {
        this.setState({ checked }, () => {
            this.setTheme();
            this.props.toggleTheme();
        });
    }

    setTheme() {
        const dataThemeAttribute = "data-theme";
        const body = document.body;
        const newTheme =
            body.getAttribute(dataThemeAttribute) === "dark" ? "light" : "dark";

        body.setAttribute(dataThemeAttribute, newTheme);
        this.setState({
            theme: newTheme,
            themeIcon:
                newTheme === "light"
                    ? "images/icons/front.png"
                    : "images/icons/backend.png",
        });
    }

    getFocusCopy() {
        return this.state.theme === "light"
            ? {
                  kicker: "Frontend / Product Work",
                  primaryTitle: "Technical Lead / Software Engineer",
                  focusLine:
                      "UI clarity, product instinct, and polished interactions",
                  fit: "Strong fit for product, platform, and developer-experience teams",
                  summary:
                      "This view pushes the product, interface, and full-stack side of my work to the front.",
                  secondary:
                      "Switch views anytime to bring the systems, automation, and integration-heavy parts forward instead.",
                  panelTitle: "Showing the product-facing side of my work",
                  panelText:
                      "Project notes, skills, and experience details lean toward frontend craft, UX fluency, and full-stack collaboration.",
                  proofPoints: [
                      {
                          value: "150+",
                          label: "platforms worked across",
                      },
                      {
                          value: "Hundreds",
                          label: "of isolated enterprise environments",
                      },
                      {
                          value: "AI + Full Stack",
                          label: "public work in Python, React, and TypeScript",
                      },
                  ],
              }
            : {
                  kicker: "Backend / Systems Work",
                  primaryTitle: "Technical Lead / Systems Engineer",
                  focusLine:
                      "Automation, operational tooling, and resilient systems thinking",
                  fit: "Strong fit for tooling, infrastructure, and workflow-heavy engineering work",
                  summary:
                      "This view brings forward the work centered on automation, process design, and maintainable technical systems.",
                  secondary:
                      "The same portfolio is still here, just with the emphasis shifted toward backend, platform, and operational depth.",
                  panelTitle: "Showing the systems-facing side of my work",
                  panelText:
                      "Project notes, skills, and experience details lean toward Python, automation, backend thinking, and operational design.",
                  proofPoints: [
                      {
                          value: "150+",
                          label: "platforms worked across",
                      },
                      {
                          value: "Hundreds",
                          label: "of isolated enterprise environments",
                      },
                      {
                          value: "Automation",
                          label: "workflow, tooling, and integration-heavy delivery",
                      },
                  ],
              };
    }

    renderSwitchLabel() {
        return this.state.theme === "light"
            ? "Switch to the backend and systems view"
            : "Switch to the frontend and product view";
    }

    render() {
        let name = "";
        let titles = [];
        let social = [];

        if (this.props.sharedData) {
            name = this.props.sharedData.name;
            social = this.props.sharedData.social || [];
            titles =
                this.state.theme === "light"
                    ? this.props.sharedData["titles-front"]
                    : this.props.sharedData["titles-back"];
        }

        const focus = this.getFocusCopy();
        const rotatingTitles = titles.slice(1).length ? titles.slice(1) : titles;
        const linkedin =
            social.find((network) => network.name === "linkedin")?.url || "#footer";
        const socialLinks = social.map((network) => (
            <a
                key={network.name}
                href={network.url}
                target="_blank"
                rel="noopener noreferrer"
                className="hero-social-link"
                aria-label={network.name}
            >
                <i className={network.class}></i>
            </a>
        ));

        return (
            <header id="home" className="hero">
                <div className="section-shell hero-shell">
                    <div className="hero-copy">
                        <p className="hero-kicker">{focus.kicker}</p>
                        <h1 className="hero-title mb-0">
                            <span className="hero-title__name">{name}</span>
                            <span className="hero-title__role-static">
                                {focus.primaryTitle}
                            </span>
                            <span className="hero-title__role">
                                <Typewriter
                                    words={rotatingTitles}
                                    loop={Infinity}
                                    cursor
                                    cursorStyle="|"
                                    typeSpeed={230}
                                    deleteSpeed={100}
                                    delaySpeed={1150}
                                />
                            </span>
                        </h1>
                        <p className="hero-description">
                            Public portfolio for practical software, automation,
                            and systems-minded product work that feels calm,
                            useful, and easy for real teams to trust.
                        </p>
                        <div className="hero-proof-strip">
                            {focus.proofPoints.map((point) => (
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
                            <a href="#portfolio" className="hero-button hero-button--primary">
                                View selected work
                            </a>
                            <a
                                href={linkedin}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hero-button hero-button--secondary"
                            >
                                Connect on LinkedIn
                            </a>
                        </div>
                        <div className="hero-meta">
                            <div className="hero-meta-card">
                                <span className="hero-meta-card__label">
                                    Right now
                                </span>
                                <strong>{focus.focusLine}</strong>
                                <p>{focus.summary}</p>
                            </div>
                            <div className="hero-meta-card">
                                <span className="hero-meta-card__label">
                                    Best fit
                                </span>
                                <strong>{focus.fit}</strong>
                                <p>{focus.secondary}</p>
                            </div>
                        </div>
                    </div>

                    <aside className="hero-panel">
                        <div className="window-dots" aria-hidden="true">
                            <span className="window-dot window-dot--red"></span>
                            <span className="window-dot window-dot--yellow"></span>
                            <span className="window-dot window-dot--green"></span>
                        </div>
                        <div className="hero-panel__mode">
                            <div className="hero-panel__icon-wrap">
                                <img
                                    src={this.state.themeIcon}
                                    alt=""
                                    className="hero-panel__icon"
                                />
                            </div>
                            <div>
                                <p className="hero-panel__eyebrow">
                                    Current view
                                </p>
                                <h2>{focus.panelTitle}</h2>
                                <p>{focus.panelText}</p>
                            </div>
                        </div>
                        <div className="hero-panel__switch">
                            <div>
                                <p className="hero-panel__switch-label">
                                    Switch views
                                </p>
                                <p className="hero-panel__switch-copy">
                                    {this.renderSwitchLabel()}
                                </p>
                            </div>
                            <Switch
                                checked={this.state.checked}
                                onChange={this.onThemeSwitchChange}
                                offColor="#0f8b8d"
                                onColor="#182635"
                                className="react-switch"
                                width={88}
                                height={38}
                                uncheckedIcon={
                                    <span className="toggle-icon toggle-icon--left">
                                        FE
                                    </span>
                                }
                                checkedIcon={
                                    <span className="toggle-icon toggle-icon--right">
                                        BE
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

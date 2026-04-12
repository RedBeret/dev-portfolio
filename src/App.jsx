import React, { Component } from "react";
import "./App.scss";
import Header from "./components/Header";
import Footer from "./components/Footer";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Blog from "./components/Blog";
import Recommendations from "./components/Recommendations";
import Credentials from "./components/Credentials";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            theme: "light",
            resumeData: {},
            sharedData: {},
        };
    }

    toggleTheme = () => {
        this.setState((prevState) => ({
            theme: prevState.theme === "light" ? "dark" : "light",
        }));
    };

    applyPickedLanguage(pickedLanguage, oppositeLangIconId) {
        this.swapCurrentlyActiveLanguage(oppositeLangIconId);
        document.documentElement.lang = pickedLanguage;

        const resumePath =
            document.documentElement.lang === window.$primaryLanguage
                ? "res_primaryLanguage.json"
                : "res_secondaryLanguage.json";

        this.loadResumeFromPath(resumePath);
    }

    swapCurrentlyActiveLanguage(oppositeLangIconId) {
        const pickedLangIconId =
            oppositeLangIconId === window.$primaryLanguageIconId
                ? window.$secondaryLanguageIconId
                : window.$primaryLanguageIconId;

        document
            .getElementById(oppositeLangIconId)
            .removeAttribute("filter", "brightness(40%)");
        document
            .getElementById(pickedLangIconId)
            .setAttribute("filter", "brightness(40%)");
    }

    componentDidMount() {
        this.loadSharedData();
        this.applyPickedLanguage(
            window.$primaryLanguage,
            window.$secondaryLanguageIconId
        );
    }

    loadResumeFromPath(path) {
        fetch(path, { cache: "no-store" })
            .then((response) => {
                if (!response.ok) {
                    throw new Error(`Failed to load ${path}`);
                }
                return response.json();
            })
            .then((data) => this.setState({ resumeData: data }))
            .catch((error) =>
                console.error("Error loading resume data:", error)
            );
    }

    loadSharedData() {
        fetch("portfolio_shared_data.json")
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Failed to load shared portfolio data");
                }
                return response.json();
            })
            .then((data) => {
                this.setState({ sharedData: data });
                if (data.basic_info?.name) {
                    document.title = `${data.basic_info.name}`;
                }
            })
            .catch((error) =>
                console.error("Error loading shared data:", error)
            );
    }

    render() {
        const { theme } = this.state;

        return (
            <div className={`app-shell ${theme}`}>
                <Header
                    sharedData={this.state.sharedData.basic_info}
                    toggleTheme={this.toggleTheme}
                />

                <div className="language-bar">
                    <div className="section-shell">
                        <div className="language-bar__inner">
                            <span className="language-bar__label">Language</span>
                            <button
                                type="button"
                                className="language-pill"
                                aria-label="Switch to English"
                                onClick={() =>
                                    this.applyPickedLanguage(
                                        window.$primaryLanguage,
                                        window.$secondaryLanguageIconId
                                    )
                                }
                            >
                                <span
                                    className="iconify language-pill__icon"
                                    data-icon="twemoji-flag-for-flag-united-states"
                                    data-inline="false"
                                    id={window.$primaryLanguageIconId}
                                ></span>
                                <span>EN</span>
                            </button>
                            <button
                                type="button"
                                className="language-pill"
                                aria-label="Switch to Spanish"
                                onClick={() =>
                                    this.applyPickedLanguage(
                                        window.$secondaryLanguage,
                                        window.$primaryLanguageIconId
                                    )
                                }
                            >
                                <span
                                    className="iconify language-pill__icon"
                                    data-icon="twemoji-flag-for-flag-mexico"
                                    data-inline="false"
                                    id={window.$secondaryLanguageIconId}
                                ></span>
                                <span>ES</span>
                            </button>
                        </div>
                    </div>
                </div>

                <main className="site-main">
                    <About
                        theme={theme}
                        resumeBasicInfo={this.state.resumeData.basic_info}
                        sharedBasicInfo={this.state.sharedData.basic_info}
                    />
                    <Projects
                        theme={theme}
                        resumeProjects={this.state.resumeData.projects}
                        resumeBasicInfo={this.state.resumeData.basic_info}
                    />
                    <Skills
                        theme={theme}
                        sharedSkills={this.state.sharedData.skills}
                        resumeBasicInfo={this.state.resumeData.basic_info}
                    />
                    <Experience
                        theme={theme}
                        resumeExperience={this.state.resumeData.experience}
                        resumeBasicInfo={this.state.resumeData.basic_info}
                    />
                    <Credentials
                        theme={theme}
                        resumeCredentials={this.state.resumeData.credentials}
                    />
                    <Recommendations
                        theme={theme}
                        resumeRecommendations={this.state.resumeData.recommendations}
                    />
                    <Blog />
                </main>

                <Footer sharedBasicInfo={this.state.sharedData.basic_info} />
            </div>
        );
    }
}

export default App;

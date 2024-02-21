// App.js
import React, { Component } from "react";
import $ from "jquery";
import "./App.scss";
import Header from "./components/Header";
import Footer from "./components/Footer";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

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
        var resumePath =
            document.documentElement.lang === window.$primaryLanguage
                ? `res_primaryLanguage.json`
                : `res_secondaryLanguage.json`;
        this.loadResumeFromPath(resumePath);
    }

    swapCurrentlyActiveLanguage(oppositeLangIconId) {
        var pickedLangIconId =
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
        $.ajax({
            url: path,
            dataType: "json",
            cache: false,
            success: function (data) {
                this.setState({ resumeData: data });
            }.bind(this),
            error: function (xhr, status, err) {
                alert(err);
            },
        });
    }

    loadSharedData() {
        $.ajax({
            url: `portfolio_shared_data.json`,
            dataType: "json",
            cache: false,
            success: function (data) {
                this.setState({ sharedData: data }, () => {
                    if (this.state.sharedData.basic_info) {
                        document.title = `${this.state.sharedData.basic_info.name}`;
                    }
                });
            }.bind(this),
            error: function (xhr, status, err) {
                console.error(err);
            },
        });
    }

    render() {
        const { theme } = this.state;

        return (
            <div className={theme}>
                <Header
                    sharedData={this.state.sharedData.basic_info}
                    toggleTheme={this.toggleTheme}
                />

                <div className="col-md-12 mx-auto text-center language">
                    <div
                        onClick={() =>
                            this.applyPickedLanguage(
                                window.$primaryLanguage,
                                window.$secondaryLanguageIconId
                            )
                        }
                        style={{ display: "inline" }}
                    >
                        <span
                            className="iconify language-icon mr-5"
                            data-icon="twemoji-flag-for-flag-united-states"
                            data-inline="false"
                            id={window.$primaryLanguageIconId}
                        ></span>
                    </div>
                    <div
                        onClick={() =>
                            this.applyPickedLanguage(
                                window.$secondaryLanguage,
                                window.$primaryLanguageIconId
                            )
                        }
                        style={{ display: "inline" }}
                    >
                        <span
                            className="iconify language-icon"
                            data-icon="twemoji-flag-for-flag-mexico"
                            data-inline="false"
                            id={window.$secondaryLanguageIconId}
                        ></span>
                    </div>
                </div>
                <About
                    theme={theme}
                    toggleTheme={this.toggleTheme}
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
                <Footer sharedBasicInfo={this.state.sharedData.basic_info} />
            </div>
        );
    }
}

export default App;

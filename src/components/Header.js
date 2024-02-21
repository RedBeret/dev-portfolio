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
            this.props.toggleTheme(); // Invoke toggleTheme function from props
        });
    }

    setTheme() {
        var dataThemeAttribute = "data-theme";
        var body = document.body;
        var newTheme =
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

    renderSwitchLabel() {
        const { theme } = this.state;
        let switchLabel =
            theme === "light"
                ? "Switch to dark mode for backend expertise"
                : "Switch to light mode for frontend focus";
        let textColor = theme === "light" ? "#555" : "#E0E0E0";
        return (
            <p
                style={{
                    fontSize: "1.2rem",
                    fontWeight: "normal",
                    marginTop: "10px",
                    color: textColor,
                    textAlign: "center",
                }}
            >
                {switchLabel}
            </p>
        );
    }

    render() {
        let name = "";
        let titles = [];
        if (this.props.sharedData) {
            name = this.props.sharedData.name;
            titles =
                this.state.theme === "light"
                    ? this.props.sharedData["titles-front"]
                    : this.props.sharedData["titles-back"];
        }

        return (
            <header
                id="home"
                style={{ height: window.innerHeight - 140, display: "block" }}
            >
                <div className="row aligner" style={{ height: "100%" }}>
                    <div className="col-md-12">
                        <div>
                            <img
                                src={this.state.themeIcon}
                                alt="Theme Icon"
                                style={{ width: 50, height: 50 }}
                            />
                            <br />
                            <h1 className="mb-0">
                                <div>{name}</div>
                                <div className="text-cyan-500">
                                    <Typewriter
                                        words={titles}
                                        loop={Infinity}
                                        cursor
                                        cursorStyle="|"
                                        typeSpeed={240}
                                        deleteSpeed={100}
                                        delaySpeed={1000}
                                    />
                                </div>
                            </h1>
                            <Switch
                                checked={this.state.checked}
                                onChange={this.onThemeSwitchChange}
                                offColor="#327190"
                                onColor="#353535"
                                className="react-switch mx-auto"
                                width={90}
                                height={40}
                                uncheckedIcon={
                                    <span
                                        className="iconify"
                                        data-icon="twemoji:crescent-moon"
                                        data-inline="false"
                                        style={{
                                            display: "block",
                                            height: "100%",
                                            fontSize: 25,
                                            textAlign: "end",
                                            marginLeft: "20px",
                                            color: "#353239",
                                        }}
                                    ></span>
                                }
                                checkedIcon={
                                    <span
                                        className="iconify"
                                        data-icon="noto-v1:sun-with-face"
                                        data-inline="false"
                                        style={{
                                            display: "block",
                                            height: "100%",
                                            fontSize: 25,
                                            textAlign: "end",
                                            marginLeft: "10px",
                                            color: "#353239",
                                        }}
                                    ></span>
                                }
                                id="icon-switch"
                            />
                            {this.renderSwitchLabel()}{" "}
                        </div>
                    </div>
                </div>
            </header>
        );
    }
}

export default Header;

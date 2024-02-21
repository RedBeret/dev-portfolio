import React from "react";
import { createRoot } from "react-dom/client";
import "./index.scss";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import "bootstrap/dist/css/bootstrap.min.css";
window.$primaryLanguage = "en";
window.$secondaryLanguage = "es";
window.$primaryLanguageIconId = "primary-lang-icon";
window.$secondaryLanguageIconId = "secondary-lang-icon";

const container = document.getElementById("root");
if (container) {
    const root = createRoot(container);
    root.render(<App />);
} else {
    console.error("Failed to find the root element");
}

serviceWorker.register();

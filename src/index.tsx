import React from "react";
import ReactDOM from "react-dom";
import Poll from "./components/Poll";
import "./index.css";

const mountWidget = (
    elementId: string,
    questions: { question: string; options: string[] }[],
    design: "buttons" | "pacman"
) => {
    ReactDOM.render(
        <React.StrictMode>
            <Poll questions={questions} design={design} />
        </React.StrictMode>,
        document.getElementById(elementId)
    );
};

window.mountWidget = mountWidget;
export { mountWidget };

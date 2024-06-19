import React from "react";
import ReactDOM from "react-dom";
import Poll from "./components/Poll";
import "./index.css";
import HorizontalMoodBar from "./components/HorizontalMoodBar";

type Question = {
    question: string;
    options: string[];
};

const mountWidget = (
    elementId: string,
    questions: Question[],
    design: "buttons" | "smiley-slider" | "speedometer"
) => {
    ReactDOM.render(
        <React.StrictMode>
            <Poll questions={questions} design={design} />
            <HorizontalMoodBar />
        </React.StrictMode>,
        document.getElementById(elementId)
    );
};

export { mountWidget };

// For development purposes, render the poll widget directly
if (document.getElementById("root")) {
    mountWidget(
        "root",
        [
            {
                question: "How do you feel today?",
                options: [
                    "Brilliant! I have so much energy",
                    "Always can be worse.",
                    "Please, end my misery.",
                ],
            },
            {
                question: "How do you like the Opinary test?",
                options: [
                    "It was great and so challenging.",
                    "Not bad, but you can improve.",
                    "It was a nightmare, never again.",
                ],
            },
        ],
        "speedometer"
    );
}

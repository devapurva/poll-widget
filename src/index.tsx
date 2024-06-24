import React from "react";
import { createRoot } from "react-dom/client";
import Poll from "./components/Poll";
import "./index.css";

// Default questions for local testing
const defaultQuestions = [
    {
        question: "How do you feel today?",
        options: [
            {
                text: "Brilliant! I have so much energy",
                percentage: 23,
            },
            {
                text: "Always can be worse.",
                percentage: 10,
            },
            {
                text: "Please, end my misery.",
                percentage: 67,
            },
        ],
    },
    {
        question: "How do you like the Opinary test?",
        options: [
            {
                text: "It was great and so challenging.",
                percentage: 25,
            },
            {
                text: "Not bad, but you can improve.",
                percentage: 32,
            },
            {
                text: "It was a nightmare, never again.",
                percentage: 43,
            },
        ],
    },
];

const mountWidget = (
    elementId: string,
    questions: {
        question: string;
        options: { text: string; percentage: number }[];
    }[] = defaultQuestions,
    design: "buttons" | "bubbles" = "bubbles"
) => {
    const container = document.getElementById(elementId);
    if (container) {
        const root = createRoot(container);
        root.render(
            <React.StrictMode>
                <Poll questions={questions} design={design} />
            </React.StrictMode>
        );
    }
};

// Mount the widget on the 'root' element for local testing
document.addEventListener("DOMContentLoaded", () => {
    mountWidget("poll-widget-container"); // Ex: mountWidget("poll-widget-container");
});

window.mountWidget = mountWidget;
export { mountWidget };

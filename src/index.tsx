import React from "react";
import { createRoot } from "react-dom/client";
import Poll from "./components/Poll";
import "./index.css";

// Default questions for local testing
const defaultQuestions = [
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
];

const mountWidget = (
    elementId: string,
    questions: { question: string; options: string[] }[] = defaultQuestions,
    design: "buttons" | "pacman" = "pacman"
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
    mountWidget("root");
});

window.mountWidget = mountWidget;
export { mountWidget };

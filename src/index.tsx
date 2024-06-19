import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Poll from "./components/Poll";

const questions = [
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

const container = document.getElementById("root");
const root = createRoot(container!);

root.render(
    <React.StrictMode>
        <Poll questions={questions} design="pacman" />
    </React.StrictMode>
);

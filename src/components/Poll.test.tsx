import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Poll from "./Poll";

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

describe("Poll Component", () => {
    test("renders poll question and options", () => {
        render(<Poll questions={questions} design="pacman" />);

        expect(screen.getByText("How do you feel today?")).toBeInTheDocument();
        expect(
            screen.getByText("Brilliant! I have so much energy")
        ).toBeInTheDocument();
        expect(screen.getByText("Always can be worse.")).toBeInTheDocument();
        expect(screen.getByText("Please, end my misery.")).toBeInTheDocument();
    });

    test("changes question on next button click", () => {
        render(<Poll questions={questions} design="pacman" />);

        fireEvent.click(screen.getByText("Next Question"));

        expect(
            screen.getByText("How do you like the Opinary test?")
        ).toBeInTheDocument();
    });

    test("registers a vote", () => {
        render(<Poll questions={questions} design="pacman" />);

        fireEvent.click(screen.getByText("Brilliant! I have so much energy"));

        expect(
            screen.getByText("You voted for: Brilliant! I have so much energy")
        ).toBeInTheDocument();
    });
});

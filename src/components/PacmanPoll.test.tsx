import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import PacmanPoll from "./PacmanPoll";

const options = [
    "Brilliant! I have so much energy",
    "Always can be worse.",
    "Please, end my misery.",
];

describe("PacmanPoll Component", () => {
    test("renders pacman poll question and options", () => {
        render(
            <PacmanPoll
                question="How do you feel today?"
                options={options}
                handleVote={jest.fn()}
                currentVotes={0}
            />
        );

        expect(screen.getByText("How do you feel today?")).toBeInTheDocument();
        expect(
            screen.getByText("Brilliant! I have so much energy")
        ).toBeInTheDocument();
        expect(screen.getByText("Always can be worse.")).toBeInTheDocument();
        expect(screen.getByText("Please, end my misery.")).toBeInTheDocument();
    });

    test("moves pacman to selected option", () => {
        render(
            <PacmanPoll
                question="How do you feel today?"
                options={options}
                handleVote={jest.fn()}
                currentVotes={0}
            />
        );

        fireEvent.click(screen.getByText("Brilliant! I have so much energy"));

        // Test if pacman moved to the correct position
        // You can customize this based on your implementation details
        // Example:
        const pacman = screen.getByAltText("Pac-Man");
        expect(pacman).toHaveStyle("left: 15%");
    });

    test("displays selected vote", () => {
        render(
            <PacmanPoll
                question="How do you feel today?"
                options={options}
                handleVote={jest.fn()}
                currentVotes={0}
            />
        );

        fireEvent.click(screen.getByText("Brilliant! I have so much energy"));

        expect(
            screen.getByText("You voted for: Brilliant! I have so much energy")
        ).toBeInTheDocument();
    });
});

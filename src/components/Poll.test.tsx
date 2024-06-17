import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import Poll from "./Poll";

test("renders poll question and options", async () => {
    render(
        <Poll
            question="How do you feel today?"
            options={[
                "Brilliant! I have so much energy",
                "Always can be worse.",
                "Please, end my misery.",
            ]}
        />
    );

    expect(
        await screen.findByText("How do you feel today?")
    ).toBeInTheDocument();
    expect(
        await screen.findByText("Brilliant! I have so much energy")
    ).toBeInTheDocument();
    expect(await screen.findByText("Always can be worse.")).toBeInTheDocument();
    expect(
        await screen.findByText("Please, end my misery.")
    ).toBeInTheDocument();
});

test("increments vote count on button click", async () => {
    render(
        <Poll
            question="How do you feel today?"
            options={[
                "Brilliant! I have so much energy",
                "Always can be worse.",
                "Please, end my misery.",
            ]}
        />
    );

    const button = await screen.findByText("Brilliant! I have so much energy");
    userEvent.click(button);

    expect(await screen.findByText("1")).toBeInTheDocument();
});

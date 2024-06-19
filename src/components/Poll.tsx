import React, { useState } from "react";
import SmileySlider from "./SmileySlider";
import Speedometer from "./Speedometer";

type PollProps = {
    questions: { question: string; options: string[] }[];
    design: "buttons" | "smiley-slider" | "speedometer";
};

const Poll: React.FC<PollProps> = ({ questions, design }) => {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const currentQuestion = questions[currentQuestionIndex];

    const [votes, setVotes] = useState<number[]>(() => {
        const savedVotes = localStorage.getItem(currentQuestion.question);
        return savedVotes
            ? JSON.parse(savedVotes)
            : new Array(currentQuestion.options.length).fill(0);
    });

    const handleVote = (index: number) => {
        const newVotes = [...votes];
        newVotes[index] += 1;
        setVotes(newVotes);
        localStorage.setItem(
            currentQuestion.question,
            JSON.stringify(newVotes)
        );
    };

    const handleNextQuestion = () => {
        setCurrentQuestionIndex(
            (prevIndex) => (prevIndex + 1) % questions.length
        );
        const nextQuestion =
            questions[(currentQuestionIndex + 1) % questions.length];
        const nextVotes = localStorage.getItem(nextQuestion.question);
        setVotes(
            nextVotes
                ? JSON.parse(nextVotes)
                : new Array(nextQuestion.options.length).fill(0)
        );
    };

    const renderButtons = () => (
        <>
            {currentQuestion.options.map((option, index) => (
                <div key={index} style={{ marginBottom: "10px" }}>
                    <button
                        style={{
                            backgroundColor: "#007BFF",
                            color: "#fff",
                            padding: "10px 20px",
                            borderRadius: "5px",
                            cursor: "pointer",
                        }}
                        onClick={() => handleVote(index)}
                    >
                        {option}
                    </button>
                    <span style={{ marginLeft: "10px" }}>{votes[index]}</span>
                </div>
            ))}
        </>
    );

    const renderSmileySlider = () => <SmileySlider onRate={handleVote} />;

    const renderSpeedometer = () => <Speedometer onRate={handleVote} />;

    return (
        <div
            style={{
                padding: "20px",
                backgroundColor: "#f3f3f3",
                borderRadius: "5px",
                boxShadow: "0 0 10px rgba(0,0,0,0.1)",
            }}
        >
            <h2 style={{ fontSize: "1.5rem", marginBottom: "10px" }}>
                {currentQuestion.question}
            </h2>
            {design === "buttons" && renderButtons()}
            {design === "smiley-slider" && renderSmileySlider()}
            {design === "speedometer" && renderSpeedometer()}
            <button
                onClick={handleNextQuestion}
                style={{
                    marginTop: "20px",
                    padding: "10px 20px",
                    backgroundColor: "#28a745",
                    color: "#fff",
                    borderRadius: "5px",
                    cursor: "pointer",
                }}
            >
                Next Question
            </button>
        </div>
    );
};

export default Poll;

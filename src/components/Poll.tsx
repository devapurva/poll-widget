import React, { useState, useEffect } from "react";
import PacmanPoll from "./PackmanPoll";

type PollProps = {
    questions: { question: string; options: string[] }[];
    design: "buttons" | "pacman";
};

const Poll: React.FC<PollProps> = ({ questions, design }) => {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const currentQuestion = questions[currentQuestionIndex];

    // Store votes for all questions
    const [votes, setVotes] = useState<number[][]>(() => {
        const savedVotes = questions.map((q) =>
            JSON.parse(localStorage.getItem(q.question) || "[]")
        );
        return savedVotes.length > 0
            ? savedVotes
            : questions.map((q) => new Array(q.options.length).fill(0));
    });

    // Get current question votes
    const currentVotes = votes[currentQuestionIndex];

    const handleVote = (index: number) => {
        const newVotes = [...votes];
        newVotes[currentQuestionIndex][index] += 1;
        setVotes(newVotes);
        localStorage.setItem(
            currentQuestion.question,
            JSON.stringify(newVotes[currentQuestionIndex])
        );
    };

    const handleNextQuestion = () => {
        setCurrentQuestionIndex(
            (prevIndex) => (prevIndex + 1) % questions.length
        );
    };

    return (
        <div
            style={{
                padding: "20px",
                backgroundColor: "black",
                borderRadius: "5px",
                boxShadow: "0 0 10px rgba(0,0,0,0.1)",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
            }}
        >
            {design === "pacman" && (
                <PacmanPoll
                    question={currentQuestion.question}
                    options={currentQuestion.options}
                    handleVote={handleVote}
                    currentVotes={currentVotes}
                />
            )}
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

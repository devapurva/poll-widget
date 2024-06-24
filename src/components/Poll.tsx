import React, { useState } from "react";
import BubblePoll from "./BubblePoll";

type PollProps = {
    questions: {
        question: string;
        options: { text: string; percentage: number }[];
    }[];
    design: "buttons" | "bubbles";
};

const Poll: React.FC<PollProps> = ({ questions, design }) => {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const currentQuestion = questions[currentQuestionIndex];

    const handleNextQuestion = () => {
        setCurrentQuestionIndex(
            (prevIndex) => (prevIndex + 1) % questions.length
        );
    };

    return (
        <div
            style={{
                padding: "20px",
                backgroundColor: "#f3f3f3",
                borderRadius: "5px",
                boxShadow: "0 0 10px rgba(0,0,0,0.1)",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
            }}
        >
            {design === "bubbles" && (
                <BubblePoll
                    question={currentQuestion.question}
                    options={currentQuestion.options}
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

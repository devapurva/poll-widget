import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

type PollProps = {
    question: string;
    options: string[];
};

const Poll: React.FC<PollProps> = ({ question, options }) => {
    const [votes, setVotes] = useState<number[]>(() => {
        const savedVotes = localStorage.getItem(question);
        return savedVotes
            ? JSON.parse(savedVotes)
            : new Array(options.length).fill(0);
    });

    const handleVote = (index: number) => {
        const newVotes = [...votes];
        newVotes[index] += 1;
        setVotes(newVotes);
        localStorage.setItem(question, JSON.stringify(newVotes));
    };

    return (
        <motion.div
            className="p-4 bg-gray-100 rounded shadow-md"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <motion.h2
                className="text-xl mb-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.5 }}
            >
                {question}
            </motion.h2>
            {options.map((option, index) => (
                <motion.div
                    key={index}
                    className="mb-2"
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 * index, duration: 0.5 }}
                >
                    <button
                        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                        onClick={() => handleVote(index)}
                    >
                        {option}
                    </button>
                    <span className="ml-2">{votes[index]}</span>
                </motion.div>
            ))}
        </motion.div>
    );
};

export default Poll;

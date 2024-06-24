import React, { useState, useEffect, useCallback } from "react";
import styled from "@emotion/styled";

const PollContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const Maze = styled.div`
    display: flex;
    position: relative;
    width: 400px;
    height: 200px;
    background-color: white;
`;

const Bubble = styled.img<{ position: number }>`
    position: absolute;
    bottom: 10px;
    left: ${(props) => props.position}%;
    transition: left 0.5s ease-in-out;
    width: 40px;
    height: 40px;
    z-index: 10;
    animation: bubble-animation 0.5s steps(2) infinite;
    box-shadow: 0 45px 10px rgba(0, 0, 0, 0.5); /* Adding shadow */
`;

type BubblePollProps = {
    question: string;
    options: string[];
    handleVote: (index: number) => void;
    currentVotes: any;
};

const BubblePoll: React.FC<BubblePollProps> = ({
    question,
    options,
    handleVote,
    currentVotes,
}) => {
    return (
        <PollContainer>
            <h2
                style={{
                    color: "white",
                }}
            >
                {question}
            </h2>
            Bubble Poll Widget
            {/* {vote && (
                <p
                    style={{
                        color: "white",
                        zIndex: 20,
                    }}
                >
                    You voted for: {vote}
                </p>
            )} */}
        </PollContainer>
    );
};

export default BubblePoll;

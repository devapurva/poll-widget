import React, { useState, useEffect, useCallback } from "react";
import styled from "@emotion/styled";
import { pacmanClosedImage, pacmanOpenImage, pelletImage } from "../assets";

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

const Pacman = styled.img<{ position: number }>`
    position: absolute;
    bottom: 10px;
    left: ${(props) => props.position}%;
    transition: left 0.5s ease-in-out;
    width: 40px;
    height: 40px;
    z-index: 10;
    animation: pacman-animation 0.5s steps(2) infinite;
    box-shadow: 0 45px 10px rgba(0, 0, 0, 0.5); /* Adding shadow */

    @keyframes pacman-animation {
        0% {
            content: url(${pacmanOpenImage});
        }
        50% {
            content: url(${pacmanClosedImage});
        }
        100% {
            content: url(${pacmanOpenImage});
        }
    }
`;

const Pellet = styled.img<{ position: number; visible: boolean }>`
    position: absolute;
    bottom: 10%;
    left: ${(props) => props.position}%;
    width: 20px;
    height: 20px;
    z-index: 1;
    opacity: ${(props) => (props.visible ? 1 : 0.3)};
    cursor: pointer;
`;

type PacmanPollProps = {
    question: string;
    options: string[];
    handleVote: (index: number) => void;
    currentVotes: any;
};

const PacmanPoll: React.FC<PacmanPollProps> = ({
    question,
    options,
    handleVote,
    currentVotes,
}) => {
    const [position, setPosition] = useState(0);
    const [vote, setVote] = useState<string | null>(null);
    const [pelletsVisible, setPelletsVisible] = useState<boolean[]>(
        options.map(() => true)
    );

    const handleVoteInternal = (index: number) => {
        setPosition(index * 33 + 15);
        setVote(options[index]);
        handleVote(index);
        setTimeout(() => {
            setPelletsVisible((prevVisible) =>
                prevVisible.map((visible, i) => (i === index ? false : visible))
            );
        }, 500); // Match this with the transition duration
    };

    const handleKeyDown = useCallback(
        (event: KeyboardEvent) => {
            if (event.key === "ArrowRight") {
                setPosition((prev) => Math.min(prev + 33, 66));
            } else if (event.key === "ArrowLeft") {
                setPosition((prev) => Math.max(prev - 33, 0));
            }
        },
        [setPosition]
    );

    useEffect(() => {
        window.addEventListener("keydown", handleKeyDown);
        return () => {
            window.removeEventListener("keydown", handleKeyDown);
        };
    }, [handleKeyDown]);

    useEffect(() => {
        const index = Math.floor(position / 33);
        if (position % 33 === 0 && index < options.length) {
            setVote(options[index]);
            setTimeout(() => {
                setPelletsVisible((prevVisible) =>
                    prevVisible.map((visible, i) =>
                        i === index ? false : visible
                    )
                );
            }, 500); // Match this with the transition duration
        }
    }, [position, options]);

    return (
        <PollContainer>
            <h2
                style={{
                    color: "white",
                }}
            >
                {question}
            </h2>
            <Maze>
                <Pacman position={position} alt="Pac-Man" />
                {options.map((option, index) => (
                    <Pellet
                        key={option}
                        src={pelletImage}
                        position={index * 33 + 15}
                        alt="Pellet"
                        visible={pelletsVisible[index]}
                        onClick={() => handleVoteInternal(index)}
                    />
                ))}
            </Maze>
            {vote && (
                <p
                    style={{
                        color: "white",
                        zIndex: 20,
                    }}
                >
                    You voted for: {vote}
                </p>
            )}
        </PollContainer>
    );
};

export default PacmanPoll;

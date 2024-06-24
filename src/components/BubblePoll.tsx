import React, { useState } from "react";
import styled from "@emotion/styled";

type BubblePollProps = {
    question: string;
    options: { text: string; percentage: number }[];
};

const BubbleContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: 20px;
    padding: 20px;
`;

const Bubble = styled.div<{ selected: boolean; fillPercentage: number }>`
    width: 100px;
    height: 100px;
    border-radius: 50%;
    background-color: #e0e0e0;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    position: relative;
    overflow: hidden;
    transition: transform 0.3s ease;
    transform: ${(props) => (props.selected ? "scale(1.1)" : "none")};

    &:hover {
        transform: scale(1.1);
    }

    &::after {
        content: "";
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: ${(props) => props.fillPercentage}%;
        background-color: #00bcd4;
        transition: height 0.5s ease;
        z-index: 1;
    }
`;

const BubbleText = styled.div`
    z-index: 2;
    text-align: center;
    font-size: 16px;
    color: #333;
`;

const BubblePoll: React.FC<BubblePollProps> = ({ question, options }) => {
    const [selectedOption, setSelectedOption] = useState<number | null>(null);

    const handleBubbleClick = (index: number) => {
        setSelectedOption(index);
    };

    return (
        <div>
            <h2>{question}</h2>
            <BubbleContainer>
                {options.map((option, index) => (
                    <Bubble
                        key={index}
                        selected={selectedOption === index}
                        fillPercentage={
                            selectedOption === index ? option.percentage : 0
                        }
                        onClick={() => handleBubbleClick(index)}
                    >
                        <BubbleText>{option.text}</BubbleText>
                    </Bubble>
                ))}
            </BubbleContainer>
        </div>
    );
};

export default BubblePoll;

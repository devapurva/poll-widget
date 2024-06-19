import React, { useState } from "react";
import styled from "@emotion/styled";

const BarContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    max-width: 400px;
    margin: 20px auto;
`;

const BarSegment = styled.div<{ active: boolean }>`
    width: 20%;
    height: 50px;
    background-color: ${(props) => (props.active ? "#4caf50" : "#ddd")};
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: background-color 0.3s ease;

    &:hover {
        background-color: #4caf50;
    }
`;

const Emoji = styled.span`
    font-size: 1.5rem;
`;

const HorizontalMoodBar: React.FC = () => {
    const [activeSegment, setActiveSegment] = useState<number | null>(null);

    const emojis = ["😢", "🙁", "😐", "🙂", "😁"];

    const handleSegmentClick = (index: number) => {
        setActiveSegment(index);
    };

    return (
        <BarContainer>
            {emojis.map((emoji, index) => (
                <BarSegment
                    key={index}
                    active={index === activeSegment}
                    onClick={() => handleSegmentClick(index)}
                >
                    <Emoji>{emoji}</Emoji>
                </BarSegment>
            ))}
        </BarContainer>
    );
};

export default HorizontalMoodBar;

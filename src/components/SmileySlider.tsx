import React, { useState } from "react";
import styled from "@emotion/styled";

const SliderWrapper = styled.div`
    display: flex;
    align-items: center;
`;

const Slider = styled.input`
    appearance: none;
    width: 200px;
    height: 10px;
    background: #ddd;
    outline: none;
    opacity: 0.7;
    transition: opacity 0.2s;

    &::-webkit-slider-thumb {
        appearance: none;
        width: 30px;
        height: 30px;
        background: url('data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-smile"%3E%3Ccircle cx="12" cy="12" r="10"%3E%3C/circle%3E%3Cpath d="M8 14s1.5 2 4 2 4-2 4-2"%3E%3C/path%3E%3Cline x1="9" y1="9" x2="9.01" y2="9"%3E%3C/line%3E%3Cline x1="15" y1="9" x2="15.01" y2="9"%3E%3C/line%3E%3C/svg%3E')
            no-repeat center;
        cursor: pointer;
    }

    &::-moz-range-thumb {
        width: 30px;
        height: 30px;
        background: url('data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-smile"%3E%3Ccircle cx="12" cy="12" r="10"%3E%3C/circle%3E%3Cpath d="M8 14s1.5 2 4 2 4-2 4-2"%3E%3C/path%3E%3Cline x1="9" y1="9" x2="9.01" y2="9"%3E%3C/line%3E%3Cline x1="15" y1="9" x2="15.01" y2="9"%3E%3C/line%3E%3C/svg%3E')
            no-repeat center;
        cursor: pointer;
    }
`;

const Smiley = styled.div<{ rating: number }>`
    font-size: 2rem;
    transition: all 0.3s;
    color: ${(props) =>
        props.rating < 3 ? "red" : props.rating < 7 ? "orange" : "green"};
`;

const SmileySlider: React.FC<{ onRate: (rating: number) => void }> = ({
    onRate,
}) => {
    const [rating, setRating] = useState(5);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const newRating = parseInt(event.target.value, 10);
        setRating(newRating);
        onRate(newRating);
    };

    const getSmiley = (rating: number) => {
        if (rating < 3) return "😠";
        if (rating < 7) return "😐";
        return "😊";
    };

    return (
        <SliderWrapper>
            <Smiley rating={rating}>{getSmiley(rating)}</Smiley>
            <Slider
                type="range"
                min="1"
                max="10"
                value={rating}
                onChange={handleChange}
            />
        </SliderWrapper>
    );
};

export default SmileySlider;

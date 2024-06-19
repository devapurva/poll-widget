import React, { useState, useRef, useEffect } from "react";
import styled from "@emotion/styled";

const SpeedometerWrapper = styled.div`
    position: relative;
    width: 300px;
    height: 150px;
    background: conic-gradient(red, red, orange, yellow, green);
    border-radius: 150px 150px 0 0;
    overflow: hidden;
`;

const Needle = styled.div<{ angle: number }>`
    position: absolute;
    bottom: 0;
    left: 50%;
    width: 2px;
    height: 100%;
    background: black;
    transform-origin: bottom;
    transform: rotate(${(props) => props.angle}deg);
    transition: transform 0.3s;
`;

const DraggableArea = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
`;

const SpeedometerLabels = styled.div`
    position: absolute;
    top: 50%;
    width: 100%;
    text-align: center;
    transform: translateY(-50%);
    font-size: 0.8rem;
`;

const SpeedometerLabel = styled.div<{ angle: number }>`
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%) rotate(${(props) => props.angle}deg);
    transform-origin: bottom;
`;

const labels = [
    { text: "Worst Pain", angle: -90, color: "red" },
    { text: "Very Severe Pain", angle: -54, color: "orange" },
    { text: "Severe Pain", angle: -18, color: "yellow" },
    { text: "Moderate Pain", angle: 18, color: "green" },
    { text: "Mild Pain", angle: 54, color: "green" },
    { text: "No Pain", angle: 90, color: "green" },
];

const Speedometer: React.FC<{ onRate: (rating: number) => void }> = ({
    onRate,
}) => {
    const [rating, setRating] = useState(5);
    const [angle, setAngle] = useState(0);
    const draggableRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        window.addEventListener("mousemove", handleMouseMove);
        window.addEventListener("mouseup", handleMouseUp);

        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
            window.removeEventListener("mouseup", handleMouseUp);
        };
    }, [onRate]);

    const handleMouseMove = (event: MouseEvent) => {
        if (!draggableRef.current) return;

        const rect = draggableRef.current.getBoundingClientRect();
        const centerX = rect.width / 2;
        const centerY = rect.height;
        const x = event.clientX - rect.left - centerX;
        const y = centerY - event.clientY + rect.top;
        const newAngle = Math.atan2(x, y) * (180 / Math.PI);

        if (newAngle >= -90 && newAngle <= 90) {
            setAngle(newAngle);
            const newRating = Math.round(((newAngle + 90) / 180) * 10);
            setRating(newRating);
            onRate(newRating);
        }
    };

    const handleMouseUp = () => {
        window.removeEventListener("mousemove", handleMouseMove);
        window.removeEventListener("mouseup", handleMouseUp);
    };

    const handleMouseDown = () => {
        window.addEventListener("mousemove", handleMouseMove);
        window.addEventListener("mouseup", handleMouseUp);
    };

    return (
        <div>
            <SpeedometerWrapper
                ref={draggableRef}
                onMouseDown={handleMouseDown}
            >
                <Needle angle={angle} />
                <DraggableArea />
                <SpeedometerLabels>
                    {labels.map((label) => (
                        <SpeedometerLabel key={label.text} angle={label.angle}>
                            <div style={{ color: label.color }}>
                                {label.text}
                            </div>
                        </SpeedometerLabel>
                    ))}
                </SpeedometerLabels>
            </SpeedometerWrapper>
        </div>
    );
};

export default Speedometer;

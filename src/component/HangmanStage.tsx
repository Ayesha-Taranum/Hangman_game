import React from 'react';

const HEAD = (
    <div style={{
        width: '30px',
        height: '30px',
        borderRadius: '100%',
        border: '5px solid black',
        position: 'absolute',
        top: '45px',
        right: '-20px'
    }} />
);

const BODY = (
    <div style={{
        width: '10px',
        height: '80px',
        background: 'black',
        position: 'absolute',
        top: '75px',
        right: '0'
    }} />
);

const RIGHT_ARM = (
    <div
        style={{
            width: "60px",
            height: "8px",
            background: "black",
            position: "absolute",
            top: "100px",
            right: "-60px",
            rotate: "-30deg",
            transformOrigin: "left bottom",
            borderRadius: '12px'
        }}
    />
);

const LEFT_ARM = (
    <div
        style={{
            width: "60px",
            height: "8px",
            background: "black",
            position: "absolute",
            top: "100px",
            right: "10px",
            rotate: "30deg",
            transformOrigin: "right bottom",
            borderRadius: '12px'
        }}
    />
);

const RIGHT_LEG = (
    <div
        style={{
            width: "70px",
            height: "8px",
            background: "black",
            position: "absolute",
            top: "140px",
            right: "-60px",
            rotate: "60deg",
            transformOrigin: "left bottom",
            borderRadius: '12px'
        }}
    />
);

const LEFT_LEG = (
    <div
        style={{
            width: "70px",
            height: "8px",
            background: "black",
            position: "absolute",
            top: "140px",
            right: 0,
            rotate: "-60deg",
            transformOrigin: "right bottom",
            borderRadius: '12px'
        }}
    />
);

const BODY_PARTS = [HEAD, BODY, RIGHT_ARM, LEFT_ARM, RIGHT_LEG, LEFT_LEG];

type HangmanDrawProps = {
    numberOfGuess: number
};

const HangmanStage = ({ numberOfGuess }: HangmanDrawProps) => {
    return (
        <div style={{ position: 'relative', height: '200px', marginBottom: '1rem' }}>
            {BODY_PARTS.slice(0, numberOfGuess)}
            <div style={{
                height: '50px',
                width: '10px',
                background: 'black',
                position: 'absolute',
                top: '0',
                right: '0',
                borderRadius: '12px'
            }} />
            <div style={{
                height: '10px',
                width: '150px',
                background: 'black',
                marginLeft: '80px'
            }} />
            <div style={{
                height: '300px',
                width: '10px',
                background: 'black',
                marginLeft: '80px'
            }} />
            <div style={{
                height: '10px',
                width: '200px',
                background: 'black',
                borderRadius: '12px'
            }} />
        </div>
    );
};

export default HangmanStage;

// src/components/Game4App.js
import { useState } from 'react';

const Game4App = ({ onFinish }) => {
    const [score, setScore] = useState(0);
    const [clicks, setClicks] = useState(0);
    const maxClicks = 10;

    const handleClick = () => {
        if (clicks < maxClicks) {
            setScore(score + Math.floor(Math.random() * 10 + 1));
            setClicks(clicks + 1);
        }
    };

    const handleEnd = () => {
        if (onFinish) onFinish();
    };

    return (
        <div className="fade-in">
            <h2>🎮 TapMonster</h2>
            <p>画面をタップしてモンスターを倒そう！！</p>
            <div style={{ fontSize: '5em', margin: '1em 0' }}>
                👾
            </div>
            <button onClick={handleClick} style={{ padding: '1em 2em', fontSize: '1.2em' }}>
                モンスターを攻撃！
            </button>
            <p>スコア: <strong>{score}</strong></p>
            <p>残りタップ数: {maxClicks - clicks}</p>
            {clicks === maxClicks && (
                <div className="button-group" style={{ marginTop: '2em' }}>
                    <button onClick={handleEnd}>ゲーム終了</button>
                </div>
            )}
        </div>
    );
};

export default Game4App;

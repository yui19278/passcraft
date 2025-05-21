import { useEffect, useState } from 'react';
import './Game4.css';

const monsterList = [
    { name: "スライム", hp: 5, score: 10, emoji: "🟢" },
    { name: "ゴブリン", hp: 10, score: 20, emoji: "👹" },
    { name: "ドラゴン", hp: 20, score: 40, emoji: "🐉" }
];

const Game4 = () => {
    const [step, setStep] = useState("intro");
    const [permissions, setPermissions] = useState({
        notification: true,
        location: true,
        camera: true,
        contacts: true,
        media: true,
        battery: true,
    });

    const handleCheckboxChange = (key) => {
        setPermissions(prev => ({ ...prev, [key]: !prev[key] }));
    };

    const Game4App = ({ onFinish }) => {
        const [score, setScore] = useState(0);
        const [currentMonster, setCurrentMonster] = useState(generateMonster());
        const [currentHP, setCurrentHP] = useState(currentMonster.hp);
        const [timeLeft, setTimeLeft] = useState(30);

        function generateMonster() {
            const index = Math.floor(Math.random() * monsterList.length);
            return monsterList[index];
        }

        useEffect(() => {
            if (timeLeft <= 0) {
                if (onFinish) onFinish(score);
                return;
            }
            const timer = setInterval(() => {
                setTimeLeft(prev => prev - 1);
            }, 1000);
            return () => clearInterval(timer);
        }, [timeLeft, onFinish, score]);

        const handleClick = () => {
            const attack = Math.floor(Math.random() * 4) + 1;
            const newHP = currentHP - attack;
            if (newHP <= 0) {
                setScore(score + currentMonster.score);
                const newMonster = generateMonster();
                setCurrentMonster(newMonster);
                setCurrentHP(newMonster.hp);
            } else {
                setCurrentHP(newHP);
            }
        };

        return (
            <div className="fade-in">
                <h2>🎮 TapMonster 改</h2>
                <p>制限時間内にできるだけ多くのモンスターを倒そう！</p>
                <div style={{ fontSize: '5em', margin: '1em 0' }}>{currentMonster.emoji}</div>
                <p><strong>{currentMonster.name}</strong>（HP: {currentHP}）</p>
                <button onClick={handleClick} style={{ padding: '1em 2em', fontSize: '1.2em' }}>
                    攻撃！
                </button>
                <p>スコア: <strong>{score}</strong></p>
                <p>残り時間: {timeLeft} 秒</p>
            </div>
        );
    };

    if (step === "intro") {
        return (
            <div className="game-container fade-in">
                <h2>📂 あなたのデータ，見られてます．</h2>
                <p className="question-text">
                    ゲームアプリをインストールするとき，<br />
                    「アクセス許可」って確認してる…？
                </p>
                <hr />
                <p>
                    今日はISLから新作のゲームがリリースされるよ！<br />
                    発売前から物凄い話題だったね！何でも，新しい機能がいっぱいあるみたい…？
                </p>
                <p>早速インストールして始めよう！</p>
                <div className="button-group">
                    <button onClick={() => setStep("permissions")}>アプリをインストール</button>
                </div>
            </div>
        );
    }

    if (step === "permissions") {
        return (
            <div className="game-container fade-in">
                <h2>このアプリにアクセス許可を与えてください</h2>
                <hr />
                <p className="question-text">
                    快適なプレイ体験のために，以下の権限を許可してください．
                </p>
                <div className="permission-box">
                    <ul>
                        {Object.keys(permissions).map(key => (
                            <li key={key}>
                                {permissions[key] ? `✔️ ${key} を許可` : `❌ ${key} を許可しない`}
                            </li>
                        ))}
                    </ul>
                </div>
                <p>※これらの情報はゲームプレイの最適化に使用されます.</p>
                <div className="button-group">
                    <button onClick={() => setStep("editPermissions")}>アクセス許可を変更する</button>
                    <button onClick={() => setStep("gameplay")}>同意してゲームを始める</button>
                </div>
            </div>
        );
    }

    if (step === "editPermissions") {
        return (
            <div className="game-container fade-in">
                <h2>アクセス許可を変更</h2>
                <hr />
                <form className="permission-form">
                    {[
                        { key: 'notification', label: '通知の送信' },
                        { key: 'location', label: '位置情報の取得' },
                        { key: 'camera', label: 'カメラの使用' },
                        { key: 'contacts', label: '連絡先へのアクセス' },
                        { key: 'media', label: '写真・動画ライブラリへのアクセス' },
                        { key: 'battery', label: 'バッテリー使用状況の確認' }
                    ].map(({ key, label }) => (
                        <label key={key} className="checkbox-item">
                            <input
                                type="checkbox"
                                checked={permissions[key]}
                                onChange={() => handleCheckboxChange(key)}
                            />
                            <span className="checkmark"></span>
                            {label}
                        </label>
                    ))}
                </form>
                <div className="button-group">
                    <button onClick={() => setStep("permissions")}>変更を保存して戻る</button>
                </div>
            </div>
        );
    }

    if (step === "gameplay") {
        return <Game4App onFinish={() => setStep("summary")} />;
    }

    if (step === "summary") {
        return (
            <div className="game-container fade-in">
                <h2>おわりに</h2>
                <hr />
                <p>
                    楽しいアプリ体験の裏で，あなたの個人情報が知らぬ間にアプリに渡っていたかもしれないね．
                    ゲームの内容に気を取られて，過剰なアクセス許可をそのまま許可してしまった人もいるんじゃない…？
                </p>
                <div className="summary-points">
                    <ul>
                        <li>必要以上の権限を要求するアプリには注意！</li>
                        <li>写真や位置情報，連絡先はプライバシーの宝庫．</li>
                        <li>セキュリティより「便利さ」や「手軽さ」を優先してしまいがち．</li>
                        <li>アプリをインストールする前に，アクセス権限をしっかり確認しよう！</li>
                    </ul>
                </div>
                <p>
                    少しの「確認」であなたの情報を守ることができるよ．<br />
                    これからはセキュリティの視点も持ってアプリを遊ぼう！
                </p>
                <div className="button-group">
                    <button onClick={() => window.location.href = "/webapp/app"}>ホームに戻る</button>
                </div>
            </div>
        );
    }

    return (
        <div className="game-container fade-in">
            <h2>予期しないエラーが発生しました</h2>
        </div>
    );
};

export default Game4;

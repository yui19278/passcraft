import React, { useState } from 'react';
import './Game1.css';

const Game1 = () => {
    const [accountName, setAccountName] = useState('');
    const [password, setPassword] = useState('');
    const [feedback, setFeedback] = useState('');
    const [strengthReason, setStrengthReason] = useState('');

    // パスワード強度判定
    const checkPasswordStrength = (password) => {
        const lengthCriteria = password.length >= 8;
        const numberCriteria = /\d/.test(password);
        const uppercaseCriteria = /[A-Z]/.test(password);
        const specialCharCriteria = /[!@#$%^&*(),.?":{}|<>]/.test(password);

        if (lengthCriteria && numberCriteria && uppercaseCriteria && specialCharCriteria) {
            return { strength: '強い', reason: 'いいね！十分に強いパスワードです！' };
        } else if (lengthCriteria && (numberCriteria || uppercaseCriteria)) {
            return { strength: '中程度', reason: '少し工夫できるといいね！記号や大文字を加えるとより強くなるよ！' };
        } else {
            return { strength: '弱い', reason: 'パスワードが短すぎるかな？？．8文字以上で，数字や記号を加えて強化しよう！' };
        }
    };

    const handleSubmit = () => {
        const passwordStrength = checkPasswordStrength(password);
        setFeedback(passwordStrength.strength);
        setStrengthReason(passwordStrength.reason);
    };

    return (
        <div className="game-container">
            <h1>新SNS「FriendNest」へようこそ！</h1>
            <p>安全なパスワードを設定して、楽しいSNSライフを始めましょう！</p>

            <div className="form-group">
                <label>アカウント名</label>
                <input
                    type="text"
                    value={accountName}
                    onChange={(e) => setAccountName(e.target.value)}
                    placeholder="アカウント名を入力"
                />
            </div>

            <div className="form-group">
                <label>パスワード</label>
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="パスワードを入力"
                />
            </div>

            <button onClick={handleSubmit}>アカウント作成</button>

            {feedback && (
                <div className="feedback">
                    <h3>パスワード強度: {feedback}</h3>
                    <p>{strengthReason}</p>
                </div>
            )}
        </div>
    );
};

export default Game1;

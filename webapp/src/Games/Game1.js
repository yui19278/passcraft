import React, { useState } from 'react';
import './Game1.css';

const Game1 = () => {
    const [step, setStep] = useState(1);
    const [accountName, setAccountName] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [feedback, setFeedback] = useState('');
    const [strengthReason, setStrengthReason] = useState('');
    const [errors, setErrors] = useState({ accountName: false, password: false, message: '' });

    const checkPasswordStrength = (password) => {
        const lengthCriteria = password.length >= 8;
        const numberCriteria = /\d/.test(password);
        const uppercaseCriteria = /[A-Z]/.test(password);
        const specialCharCriteria = /[!@#$%^&*(),.?":{}|<>]/.test(password);

        if (lengthCriteria && numberCriteria && uppercaseCriteria && specialCharCriteria) {
            return { strength: '強い', reason: 'いいね！十分に強いパスワードだよ！' };
        } else if (lengthCriteria && (numberCriteria || uppercaseCriteria)) {
            return { strength: '中程度', reason: '少し工夫できるといいね！記号や大文字を加えるとより強くなるよ！' };
        } else {
            return { strength: '弱い', reason: 'パスワードが短すぎるかな？？8文字以上で，数字や記号を加えて強化しよう！' };
        }
    };

    const handleSubmit = () => {
        const hasAccountError = accountName.trim() === '';
        const hasPasswordError = password.trim() === '';

        if (hasAccountError || hasPasswordError) {
            setErrors({
                accountName: hasAccountError,
                password: hasPasswordError,
                message: 'アカウント名とパスワードを入力してください。'
            });
            return;
        }

        setErrors({ accountName: false, password: false, message: '' });
        const result = checkPasswordStrength(password);
        setFeedback(result.strength);
        setStrengthReason(result.reason);
        setStep(3);
    };

    const togglePasswordView = () => {
        setShowPassword(!showPassword);
    };

    return (
        <div className="game-container">
            {step === 1 && (
                <div className="welcome-screen">
                    <h1>ようこそ！FriendNestへ！</h1>
                    <p>新しいSNSの世界が始まります．アカウントを作成して冒険を始めよう！</p>
                    <button onClick={() => setStep(2)}>はじめる</button>
                </div>
            )}

            {step === 2 && (
                <div className="form-screen">
                    <h2>アカウント作成</h2>

                    {errors.message && (
                        <p className="error-message">{errors.message}</p>
                    )}

                    <label>アカウント名</label>
                    <input
                        type="text"
                        value={accountName}
                        onChange={(e) => setAccountName(e.target.value)}
                        placeholder="アカウント名を入力"
                        className={errors.accountName ? 'input-error' : ''}
                    />

                    <label>パスワード</label>
                    <div className="password-container">
                        <input
                            type={showPassword ? 'text' : 'password'}
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="パスワードを入力"
                            className={errors.password ? 'input-error' : ''}
                        />
                        <button type="button" className="eye-button" onClick={togglePasswordView}>
                            <i className={`fa ${showPassword ? 'fa-eye-slash' : 'fa-eye'}`}></i>
                        </button>
                    </div>

                    <button onClick={handleSubmit}>アカウント作成</button>
                </div>
            )}

            {step === 3 && (
                <div className="feedback-screen">
                    <h3>パスワード強度: {feedback}</h3>
                    <p>{strengthReason}</p>
                    <button onClick={() => setStep(2)}>もう一度試す</button>
                </div>
            )}
        </div>
    );
};

export default Game1;

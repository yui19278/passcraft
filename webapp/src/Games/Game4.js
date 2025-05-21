import { useEffect, useState } from 'react';
import './Game4.css';

const Game4 = () => {
  const [questions, setQuestions] = useState([]);
  const [originalQuestions, setOriginalQuestions] = useState([]);
  const [current, setCurrent] = useState(0);
  const [step, setStep] = useState('loading');
  const [result, setResult] = useState(null);
  const [isCorrect, setIsCorrect] = useState(null);
  const [score, setScore] = useState(0);
  const [history, setHistory] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch(`${process.env.PUBLIC_URL}/permissions.json`)
      .then((res) => {
        if (!res.ok) throw new Error();
        return res.json();
      })
      .then((data) => {
        const withIndex = data.map((q, i) => ({ ...q, originalIndex: i }));
        setQuestions(withIndex);
        setOriginalQuestions(withIndex);
        setLoading(false);
        setStep('intro');
      })
      .catch(() => {
        setError(true);
        setLoading(false);
        setStep('error');
      });
  }, []);

  const handleAnswer = (userAnswer) => {
    const q = questions[current];
    const correct = userAnswer === q.isSafe;
    setResult(correct ? '✅ 正解！' : '❌ 不正解！');
    setIsCorrect(correct);
    if (correct) setScore(score + 1);

    setHistory((prev) => [
      ...prev,
      {
        index: q.originalIndex,
        userAnswer,
        correctAnswer: q.isSafe,
        explanation: q.explanation,
        context: q.context
      }
    ]);
    setStep('result');
  };

  const nextQuestion = () => {
    if (current + 1 < questions.length) {
      setCurrent(current + 1);
      setStep('question');
      setResult(null);
    } else {
      setStep('finish');
    }
  };

  const startReviewMode = () => {
    const wrongIndexes = history
      .filter((h) => h.userAnswer !== h.correctAnswer)
      .map((h) => h.index);

    const uniqueIndexes = [...new Set(wrongIndexes)];
    const reviewQuestions = uniqueIndexes.map((i) => ({
      ...originalQuestions[i],
      originalIndex: i
    }));

    if (reviewQuestions.length === 0) {
      setStep('done');
    } else {
      setQuestions(reviewQuestions);
      setCurrent(0);
      setScore(0);
      setHistory([]);
      setStep('question');
    }
  };

  if (loading) return <div className="game-container">読み込み中...</div>;
  if (error) return <div className="game-container">エラー：問題が読めませんでした</div>;

  const q = questions[current];

  return (
    <div className="game-container">
      {step === 'intro' && (
        <div className="fade-in">
          <h1>アプリの権限クイズ</h1>
          <p className="question-text">
            アプリのインストール時に表示されるアクセス権限、ちゃんと確認してる？<br />
            このクイズで自分の判断力を試してみよう！
          </p>
          <button onClick={() => setStep('question')}>スタート！</button>
        </div>
      )}

      {step === 'question' && (
        <div className="fade-in">
          <h2>権限クイズ（{current + 1} / {questions.length}）</h2>
          <p style={{ fontStyle: "italic", marginBottom: "1em", color: "#555" }}>
            想定アプリ：{q.context}
          </p>
          <div className="permission-box">
            <ul>
              {q.permissions.map((perm, i) => (
                <li key={i}>{perm}</li>
              ))}
            </ul>
          </div>
          <div className="button-group">
            <button className="safe-button" onClick={() => handleAnswer(true)}>妥当な権限</button>
            <button className="danger-button" onClick={() => handleAnswer(false)}>過剰な権限</button>
          </div>
        </div>
      )}

      {step === 'result' && (
        <div className="fade-in">
          <div className={`feedback-box ${isCorrect ? '' : 'error'}`}>
            <h3>{result}</h3>
            <p>{q.explanation}</p>
          </div>
          <button onClick={nextQuestion}>
            {current + 1 === questions.length ? '結果を見る' : '次の問題へ'}
          </button>
        </div>
      )}

      {step === 'finish' && (
        <div className="fade-in">
          <h2>おつかれさま！</h2>
          <p>スコア：<strong>{score} / {questions.length}</strong></p>
          <hr />
          <h3>解答履歴：</h3>
          <ul style={{ textAlign: "left", padding: "0 1em" }}>
            {history.map((item, i) => (
              <li key={i} style={{ marginBottom: "1em" }}>
                <strong>【問題{item.index + 1}】</strong>（{item.context}）<br />
                {item.userAnswer === item.correctAnswer ? "✅ 正解" : "❌ 不正解"}<br />
                {item.explanation}
              </li>
            ))}
          </ul>
          <div className="button-group">
            <button onClick={() => window.location.href = "/webapp/app"}>ホームに戻る</button>
            <button onClick={startReviewMode}>復習する</button>
          </div>
        </div>
      )}

      {step === 'done' && (
        <div className="fade-in">
          <h2>復習終了！完璧だね！ </h2>
          <button onClick={() => window.location.href = "/webapp/app"}>ホームに戻る</button>
        </div>
      )}
    </div>
  );
};

export default Game4;

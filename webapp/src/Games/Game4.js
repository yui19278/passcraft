import { useState } from "react";
import "./Game4.css";
import Game4App from "./Game4App";

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
    setPermissions((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  if (step === "intro") {
    return (
      <div className="game-container fade-in">
        <h2>📂 あなたのデータ，見られてます．</h2>
        <p className="question-text">
          ゲームアプリをインストールするとき，
          <br />
          「アクセス許可」って確認してる…？
        </p>
        <hr />
        <p>
          今日はISLから新作のゲームがリリースされるよ！
          <br />
          発売前から物凄い話題だったね！何でも，新しい機能がいっぱいあるみたい…？
        </p>
        <p>早速インストールして始めよう！</p>
        <div className="button-group">
          <button onClick={() => setStep("permissions")}>
            アプリをインストール
          </button>
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
            <li>
              {permissions.notification
                ? "✔️ 通知の送信を許可"
                : "❌ 通知の送信を許可しない"}
            </li>
            <li>
              {permissions.location
                ? "✔️ 位置情報の取得を許可"
                : "❌ 位置情報の取得を許可しない"}
            </li>
            <li>
              {permissions.camera
                ? "✔️ カメラの使用を許可"
                : "❌ カメラの使用を許可しない"}
            </li>
            <li>
              {permissions.contacts
                ? "✔️ 連絡先へのアクセスを許可"
                : "❌ 連絡先へのアクセスを許可しない"}
            </li>
            <li>
              {permissions.media
                ? "✔️ 写真・動画ライブラリへのアクセスを許可"
                : "❌ 写真・動画ライブラリへのアクセスを許可しない"}
            </li>
            <li>
              {permissions.battery
                ? "✔️ バッテリー使用状況の確認を許可"
                : "❌ バッテリー使用状況の確認を許可しない"}
            </li>
          </ul>
        </div>
        <p>※これらの情報はゲームプレイの最適化に使用されます.</p>
        <div className="button-group">
          <button onClick={() => setStep("editPermissions")}>
            アクセス許可を変更する
          </button>
          <button onClick={() => setStep("gameplay")}>
            同意してゲームを始める
          </button>
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
            { key: "notification", label: "通知の送信" },
            { key: "location", label: "位置情報の取得" },
            { key: "camera", label: "カメラの使用" },
            { key: "contacts", label: "連絡先へのアクセス" },
            { key: "media", label: "写真・動画ライブラリへのアクセス" },
            { key: "battery", label: "バッテリー使用状況の確認" },
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
          <button onClick={() => setStep("permissions")}>
            変更を保存して戻る
          </button>
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
            <li>
              セキュリティより「便利さ」や「手軽さ」を優先してしまいがち．
            </li>
            <li>
              アプリをインストールする前に，アクセス権限をしっかり確認しよう！
            </li>
          </ul>
        </div>
        <p>
          少しの「確認」であなたの情報を守ることができるよ．
          <br />
          これからはセキュリティの視点も持ってアプリを遊ぼう！
        </p>
        <div className="button-group">
          <button onClick={() => (window.location.href = "/webapp/app")}>
            ホームに戻る
          </button>
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

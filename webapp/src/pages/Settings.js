// import React from "react";

// function Settings() {
// 　return (
//     <div>
//     　<h2>設定ページ</h2>
//     　<p>ここでは，Webアプリの設定を行います．</p>
//     </div>
// 　);
// }

// export default Settings;

const handleReset = async () => {
    if(!window.confirm("ランキングをリセットしますか？")) return;
    const response = await fetch('/api/reset', {method : 'DELETE'});
    if(!response.ok) {
        alert("ランキングをリセットしました");
    } else {
        alert("ランキングのリセットに失敗しました");
    }
};

<button onClick={handleReset}>ランキングをリセット</button>
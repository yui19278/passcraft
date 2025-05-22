const express = require("express");
const cors = require("cors");
const path = require("path");
require("dotenv").config();

const app = express();
const PORT1 = 5001;

app.use(cors());
app.use(express.json());

// 🎁 webapp（home.html）を提供
app.get("/webapp", (req, res) => {
    res.sendFile(path.join(__dirname, "../webapp/public/home.html"));
});


// 🎁 Reactアプリ（/app）を提供（webapp）
app.use("/webapp/app", express.static(path.join(__dirname, "../webapp/build")));

// 🎁 任意のルートが一致しない場合はReactアプリのindex.htmlを提供（webapp）
app.get("/webapp/app/*", (req, res) => {
    res.sendFile(path.join(__dirname, "../webapp/build/index.html"));
});

// 🎁 サーバー起動 (webapp)
app.listen(PORT1, () => {
    console.log(`✅ webapp server running on http://localhost:${PORT1}/webapp`);
});

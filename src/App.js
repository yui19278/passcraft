import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js"; // BootstrapのJSファイルをインポート
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Layout from "./components/Layout"; // Layoutをインポート
import Game1 from './Games/Game1'; // ゲームページ
import Game2 from './Games/Game2'; // ゲームページ
import Game3 from './Games/Game3'; // ゲームページ
import Game4 from './Games/Game4'; // ゲームページ
import './index.css';
import MainApp from './pages/MainApp'; // MainAppをインポート
import Ranking from "./pages/Ranking"; // アナリティクスページ用コンポーネント
import Settings from "./pages/Settings"; // アナリティクスページ用コンポーネント


export default function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/webapp/App" element={<MainApp />} />
          <Route path="/webapp/ranking" element={<Ranking />} />
          <Route path="/webapp/settings" element={<Settings />} />
          <Route path="/webapp/game1" element={<Game1 />} />
          <Route path="/webapp/game2" element={<Game2 />} />
          <Route path="/webapp/game3" element={<Game3 />} />
          <Route path="/webapp/game4" element={<Game4 />} />
        </Routes>
      </Layout>
    </Router>
  );
}
import { faChartLine, faCog, faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";

export default function Navigation() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top"> {/* fixed-top を追加 */}
            <div className="container-fluid">
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav" style={{ flexGrow: 1 }}>
                    <ul className="navbar-nav me-auto">
                        <li className="nav-item">
                            <Link className="nav-link" to="/webapp/App">
                                <FontAwesomeIcon icon={faHome} /> ホーム
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/webapp/ranking">
                                <FontAwesomeIcon icon={faChartLine} /> ランキング発表！
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/webapp/settings">
                                <FontAwesomeIcon icon={faCog} /> 設定ページ
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

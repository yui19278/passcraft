import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { FaEnvelope, FaKey } from 'react-icons/fa'; // FaKey = 🔑, FaEnvelope = 📧
import CardComponent from '../components/CardComponent';

const MainApp = () => {
    return (
        <div style={{ overflowX: "hidden" }}>
            <div className="container mt-4 mb-4" style={{ paddingBottom: "10px" }}>
                <h2>ようこそ！情報セキュリティ研究室へ！</h2>
                <hr />
                <p>ここでは，ゲームを通して<strong>情報セキュリティ</strong>の啓発活動を行います．<br />全４つのシナリオに挑戦しよう！🎶</p>
                <p>シナリオ①：パスワードの強度判定<br />シナリオ②：フィッシングメールの判別<br />シナリオ③：Coming soon...<br />シナリオ④：Coming soon...</p>
            </div>

            {/* カードセクション */}
            <Container>
                <Row className="justify-content-center">
                    <Col md={3}>
                        <CardComponent
                            title="シナリオ①"
                            description="新SNS「FriendNest」へようこそ！"
                            route="/webapp/app/game1"
                            icon={<FaKey />}
                        />
                    </Col>
                    <Col md={3}>
                        <CardComponent
                            title="シナリオ②"
                            description="怪しいメールが届いたかも...？"
                            route="/webapp/app/game2"
                            icon={<FaEnvelope />}
                        />
                    </Col>
                    <Col md={3}>
                        <CardComponent
                            title="シナリオ③"
                            description="Coming soon..."
                            route="/webapp/app/game3"
                            icon="🕵️"
                        />
                    </Col>
                    <Col md={3}>
                        <CardComponent
                            title="シナリオ④"
                            description="Coming soon..."
                            route="/webapp/app/game4"
                            icon="💻"
                        />
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default MainApp;

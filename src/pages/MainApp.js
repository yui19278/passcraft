import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import CardComponent from '../components/CardComponent';

const MainApp = () => {
    return (
        <div style={{ overflowX: "hidden" }}>
            <div className="container mt-4 mb-4" style={{ paddingBottom: "40px" }}>
                <h2>ようこそ！情報セキュリティ研究室へ！🙌</h2>
                <p>ここでは，ゲームを通して<strong>情報セキュリティ</strong>の啓発活動を行います．</p>
                <p>全４つのシナリオに挑戦しよう！🎶</p>
            </div>

            {/* カードセクション */}
            <Container>
                <Row className="justify-content-center">
                    <Col md={3}>
                        <CardComponent
                            title="シナリオ①"
                            description="『新SNS「FriendNest」へようこそ！』"
                            route="/webapp/game1"
                            icon="👋"
                        />
                    </Col>
                    <Col md={3}>
                        <CardComponent
                            title="シナリオ②"
                            description="『緊急！パスワード変更のお願い』"
                            route="/webapp/game2"
                            icon="🔒"
                        />
                    </Col>
                    <Col md={3}>
                        <CardComponent
                            title="シナリオ③"
                            description="『脆弱パスワード発見チャレンジ』"
                            route="/webapp/game3"
                            icon="🕵️"
                        />
                    </Col>
                    <Col md={3}>
                        <CardComponent
                            title="シナリオ④"
                            description="『クラッキングデモ：あなたのパスワードは大丈夫？』"
                            route="/webapp/game4"
                            icon="💻"
                        />
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default MainApp;

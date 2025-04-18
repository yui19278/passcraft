import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom'; // React RouterのuseNavigateをインポート
import './CardComponent.scss';

const CardComponent = ({ title, description, route, icon }) => {
    const navigate = useNavigate();
    const handleButtonClick = () => {
        navigate(route);
    };

    return (
        <Card className="cards">
            <div className="icon">{icon}</div>
            <div className="info">
                <Card.Title className="title">{title}</Card.Title>
                <Card.Text className="lead">{description}</Card.Text>
                <Button className="btn" onClick={handleButtonClick}>ゲームへ</Button>
            </div>
            <div className="divider"></div>
        </Card>
    );
};

export default CardComponent;

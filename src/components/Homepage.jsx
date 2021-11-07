import React from 'react';
import millify from 'millify';
import {Typography, Row, Col, Statistics } from 'antd';
import { Link } from 'react-router-dom';

const { Title } = Typography;

function Homepage() {
    return (
        <>
        <Title level={2} className="heading">
            Global Crypto Stats
        </Title>
        </>
    )
}

export default Homepage;


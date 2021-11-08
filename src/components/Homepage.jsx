import React from 'react';
import millify from 'millify';
import {Typography, Row, Col, Statistic } from 'antd';
import { Link } from 'react-router-dom';

import { useGetCryptosQuery } from '../services/cryptoApi';

const { Title } = Typography;

function Homepage() {
    const { data, isFetching } = useGetCryptosQuery();

    console.log(data);

    return (
        <>
        <Title level={2} className="heading">
            Global Crypto Stats
            
        </Title>
        <Row>
            <Col span={12} ><Statistic title="Total cryptocurrencies" value="5" /></Col>
            <Col span={12} ><Statistic title="Total exchanges" value="5" /></Col>
            <Col span={12} ><Statistic title="Total market cap" value="5" /></Col>
            <Col span={12} ><Statistic title="Total 24h volume" value="5" /></Col>
            <Col span={12} ><Statistic title="Total markets" value="5" /></Col>
        </Row>
        </>
    )
}

export default Homepage;


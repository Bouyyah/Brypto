import React, { useState, useEffect } from 'react';
import millify from 'millify';
import { Link } from 'react-router-dom';
import { Card, Row, Col, Input} from 'antd';

import { useGetCryptosQuery } from '../services/cryptoApi';

function Cryptocurrencies({ simplified }) {
    const count = simplified ? 10 : 100;
    const { data: cryptosList ,isFetching } = useGetCryptosQuery(count);
    const [cryptos, setCryptos] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {

        const filteredData = cryptosList?.data?.coins.filter( coin => coin.name.toLowerCase().includes(searchTerm.toLocaleLowerCase()));
        setCryptos(filteredData);

    }, [cryptosList, searchTerm]);
    
    if(isFetching) return 'loading...';

    return (
        <>
        { simplified || 
            <div className="search-crypto">
                <Input placeholder="Search cryptocurrency" onChange={ e => setSearchTerm(e.target.value)}/>
            </div> 
        }
        
        <Row gutter={[32, 32]} className="crypto-card-container">
            {cryptos?.map( crypto => (
                <Col xs={24} sm={12} lg={6} className="crypto-card" key={crypto.id}>
                    <Link to={`/crypto/${crypto.uuid}`}>
                        <Card 
                            title={`${crypto.rank}. ${crypto.name}`} 
                            extra={<img className="crypto-image" src={crypto.iconUrl}/>}
                            hoverable
                        >
                            <p>Price: {millify(crypto.price)}</p>
                            <p>Market cap: {millify(crypto.marketCap)}</p>
                            <p>Daily change: {millify(crypto.change)}%</p>


                        </Card>
                    </Link>
                </Col>
            ))}
        </Row>
        </>
    )
}

export default Cryptocurrencies;

import React from 'react';
import { Container, Row, Col } from "react-bootstrap";

import MainNav from './MainNav';

const DashBoard = () => {
    return (
        <>
            <MainNav />
            <Container fluid>
                <Row>
                    <Col md={3}>1 of 2</Col>
                    <Col md={9}>2 of 2</Col>
                </Row>
            </Container>
        </>
    );
};

export default DashBoard;
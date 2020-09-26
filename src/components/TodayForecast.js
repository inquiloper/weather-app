import React from 'react';
import { Col, Row } from 'react-bootstrap';
import styled from 'styled-components';

const ForecastContainer = styled(Col)`
    background-color: var(--main-background-secondary-color);
`;

class TodayForecast extends React.Component {
    render() {
        return (
            <>
                <ForecastContainer>
                    <Row className="mt-5">
                        <Col className=" d-flex justify-content-center">
                            <img id="today-forecast-img" src="https://www.metaweather.com/static/img/weather/lc.svg"/>
                        </Col>
                    </Row>
                    <Row>
                        <Col className="d-flex">
                            <p className="today-forecast-temp text-center">15</p>
                            <p className="align-self-end today-forecast-temp-unit">°C</p>
                        </Col>
                    </Row>
                </ForecastContainer>
            </>
        );
    }
}

export default TodayForecast;
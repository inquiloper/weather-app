import React from 'react';
import { Col, Row } from 'react-bootstrap';
import styled from 'styled-components';

const Container = styled.div`
  background-color: var(--main-background-secondary-color);
  padding: 0.9rem 0;
`;

const ForecastTitle = styled.p`
  margin:0;
`;

const ForecastIcon = styled.img`
  max-width: 40%;
  text-align: center;
  display: inline-block;
`;

const ForecastTemp = styled.p`
  color: ${props => (props.minTemp ? `var(--secondary-font-color)` : `var(--main-font-color)`) }
`;

class WeekDayForecast extends React.Component {
    render() {
        return (
          <Container>
            <Row>
              <Col>
                <ForecastTitle className="text-center">Tomorrow</ForecastTitle>
              </Col>
            </Row>
            <Row>
              <Col className="d-flex justify-content-center mt-3">
                <ForecastIcon src="https://www.metaweather.com/static/img/weather/lr.svg"/>
              </Col>
            </Row>
            <Row className="mt-4">
              <Col className="d-flex justify-content-center">
                <ForecastTemp>16 C</ForecastTemp>
                <ForecastTemp className="ml-3" minTemp>11 C</ForecastTemp>
              </Col>
            </Row>
          </Container>
        );
    }
}

export default WeekDayForecast;
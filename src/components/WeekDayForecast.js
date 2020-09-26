import React from 'react';
import { Col, Row } from 'react-bootstrap';

class WeekDayForecast extends React.Component {
    render() {
        return (
          <div className="weekday-forecast-container">
            <Row>
              <Col>
                <p className="text-center forecast-title">Tomorrow</p>
              </Col>
            </Row>
            <Row>
              <Col className="d-flex justify-content-center mt-3">
                <img className="forecast-icon" src="https://www.metaweather.com/static/img/weather/lr.svg"/>
              </Col>
            </Row>
            <Row className="mt-4">
              <Col className="d-flex justify-content-center">
                <p className="max-temp">16 C</p>
                <p className="min-temp ml-3">11 C</p>
              </Col>
            </Row>
          </div>
        );
    }
}

export default WeekDayForecast;
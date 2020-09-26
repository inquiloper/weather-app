import React from 'react';
import { Button, Col, Row } from 'react-bootstrap';
import WeekDayForecast from './WeekDayForecast';
import TodayHighlight from './TodayHighlight';

class WeatherForecast extends React.Component {
    render() {
        return (
            <Col sm="9" id="weather-forecast-container">
              <Row>
                <Col className=" d-flex mt-4 justify-content-end">
                  <Button>C</Button>
                  <Button>F</Button>
                </Col>
              </Row>
              <Row className="mt-4 ml-4 mr-4 justify-content-between">
                  <Col>
                    <WeekDayForecast/>
                  </Col>
                  <Col>
                    <WeekDayForecast/>
                  </Col>
                  <Col>
                    <WeekDayForecast/>
                  </Col>
                  <Col>
                    <WeekDayForecast/>
                  </Col>
                  <Col>
                    <WeekDayForecast/>
                  </Col>
              </Row>
              <Row className="mt-5 ml-4">
                <Col>
                  <h4>Today's Highlights</h4>
                </Col>
              </Row>
              <Row className="mt-4 ml-4 mr-4">
                <Col sm="6">
                  <TodayHighlight title="Wind status"></TodayHighlight>
                </Col>
                <Col sm="6">
                  <TodayHighlight title="Humidity"></TodayHighlight>
                </Col>
              </Row>
            </Col>
        );
    }
}

export default WeatherForecast;
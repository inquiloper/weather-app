import React from 'react';
import { Button, Col, Row } from 'react-bootstrap';
import WeekDayForecast from './WeekDayForecast';
import TodayHighlight from './TodayHighlight';
import TodayHighlightGrid from './TodayHighlightGrid';

import styled from 'styled-components';

const WeatherForecastContainer = styled(Col)`
  background-color: var(--main-background-color);
  padding: 2rem 10rem;
`;


class WeatherForecast extends React.Component {
    render() {
        return (
            <WeatherForecastContainer sm="9">
              <Row>
                <Col className=" d-flex mt-4 justify-content-end">
                  <Button>C</Button>
                  <Button>F</Button>
                </Col>
              </Row>
              <Row className="mt-4 justify-content-between">
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
              <Row className="mt-5">
                <Col>
                  <h4>Today's Highlights</h4>
                </Col>
              </Row>
              <Row className="mt-4">
                <Col>
                  <TodayHighlightGrid></TodayHighlightGrid>
                </Col>
              </Row>
            </WeatherForecastContainer>
        );
    }
}

export default WeatherForecast;
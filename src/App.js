import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';
import TodayForecast from './components/TodayForecast';
import WeatherForecast from './components/WeatherForecast';
import GlobalStyle from './assets/styles/globalStyles';

function App() {
  return (
    <>
        <GlobalStyle/>
        <Container fluid className="vh-100">
          <Row className="vh-100">
            <TodayForecast/>
            <WeatherForecast/>
          </Row>
        </Container>
    </>
  );
}

export default App;

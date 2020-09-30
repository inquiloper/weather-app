import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row } from 'react-bootstrap';
import TodayForecast from './components/TodayForecast';
import WeatherForecast from './components/WeatherForecast';
import GlobalStyle from './assets/styles/globalStyles';
import Drawer from './components/Drawer';
import LocationSearcher from './components/LocationSearcher';

class App extends React.Component{

  constructor(props) {
    super(props);
    this.state = {
      isDrawerOpen: false
    }

    this.toggleDrawer = this.toggleDrawer.bind(this);
  }

  toggleDrawer() {
    this.setState({isDrawerOpen: !this.state.isDrawerOpen});
  }

  render() {
    return (
      <>
          <GlobalStyle/>
          <Container fluid className="vh-100">
            <Row className="vh-100">
              <Drawer toggleDrawer={this.toggleDrawer} isOpened={this.state.isDrawerOpen} className="vh-100">
                <LocationSearcher></LocationSearcher>
              </Drawer>
              <TodayForecast toggleDrawer={this.toggleDrawer}/>
              <WeatherForecast/>
            </Row>
          </Container>
      </>
    );
  }
}

export default App;

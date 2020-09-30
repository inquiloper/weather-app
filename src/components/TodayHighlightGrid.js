import React from 'react';
import styled from 'styled-components';
import HumidityBar from './HumidtyBar';
import TodayHighlight from './TodayHighlight';
import TodayHighlighText from './TodayHighlighText';

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 3rem;
`;
class TodayHighlightGrid extends React.Component {
    render() {
        return (
            <>
              <Grid>
                <TodayHighlight title="Wind Status" text={<TodayHighlighText text="7" unit="mph"/>} />
                <TodayHighlight title="Humidity" 
                  text={<TodayHighlighText text="84" unit="%" />}
                  extra={<HumidityBar/>}
                />
                <TodayHighlight 
                  title="Visibility"
                  text={<TodayHighlighText text="6,4" unit="miles" />}/>
                <TodayHighlight 
                  title="Air Presurre"
                  text={<TodayHighlighText text="998" unit="mb"/>}/>
              </Grid>
            </>
        );
    }
}

export default TodayHighlightGrid;
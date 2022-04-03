import React from 'react';
import '../style/Dashboard.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import PageNavbar from './PageNavbar';
import { Jumbotron } from 'react-bootstrap';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import vaccineData from './samplevaccinedata.json';
import check from './check.png';

export default class Home extends React.Component {
  constructor(props) {
    super(props);

    // The state maintained by this React Component. 
    this.state = {
      timeline: [],
    };

  };

  // React function that is called when the page load.
  componentDidMount() {
    this.setState({
      timeline : 
      <VerticalTimeline>
        {vaccineData.map((row) => (
          <VerticalTimelineElement
            className="vertical-timeline-element--work" 
            contentStyle={{ background: 'rgb(250, 250, 250)', color: '#000' }}
            contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
            date={row.date}
            iconStyle={{ background: 'rgb(0, 250, 0)', color: '#000' }}

          >
          <h3 className="vertical-timeline-element-title">{row.id}</h3>
          <h4 className="vertical-timeline-element-subtitle">{row.type}</h4>
          <p> {row.notes} </p>
            
          </VerticalTimelineElement>
        ))}
        </VerticalTimeline>
    });
    
  };

  render() {    
    return (
      <div className="Home">
        <PageNavbar active="home" />
        <Jumbotron>
        {this.state.timeline}
        </Jumbotron>

      </div>
    );
  };
};


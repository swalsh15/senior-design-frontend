import React from 'react';
import '../style/Dashboard.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import PageNavbar from './PageNavbar';
import Collapsable from './Collapsable';
import { Jumbotron } from 'react-bootstrap';
import { MdCheckCircle } from "react-icons/md";
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import './Diagram.css';

import vaccineData from './samplevaccinedata.json';

export default class Diagram extends React.Component {
  constructor(props) {
    super(props);

    // The state maintained by this React Component. 
    this.state = {
      timeline: [],
      open: false,
    };

  };

  toggle() {
    this.setState({
      open: !this.state.open
    });
    console.log(this.state.open);
  }

  // React function that is called when the page load.
  componentDidMount() {
    this.setState({
      timeline : 
      <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work" 
            contentStyle={{ background: 'rgb(250, 250, 250)', color: '#000' }}
            contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
            iconStyle={{ background: 'rgb(0, 250, 0)', color: '#000'}}
            icon={<MdCheckCircle class="icon"></MdCheckCircle>}  
          >
          <h3 className="vertical-timeline-element-title">Raw Material</h3>
          <p><b>Verified:</b> Purchased by manufacturer 20383 on 3/21/2022.</p> 
          <p><b>Verified:</b> Added into vaccine batch 93482 on 3/23/2022.</p>       
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work" 
            contentStyle={{ background: 'rgb(250, 250, 250)', color: '#000' }}
            contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
            iconStyle={{ background: 'rgb(0, 250, 0)', color: '#000' }}
            icon={<MdCheckCircle class="icon"></MdCheckCircle>}
          >
          <h3 className="vertical-timeline-element-title">Vaccine Batch</h3>
          <p><b>Verified:</b> Produced on 3/23/2022.</p>  
          <p><b>Verified:</b> Purchased by government on 3/23/2022.</p>  
            
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work" 
            contentStyle={{ background: 'rgb(250, 250, 250)', color: '#000' }}
            contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
            iconStyle={{ background: 'rgb(0, 250, 0)', color: '#000' }}
            icon={<MdCheckCircle class="icon"></MdCheckCircle>}
          >
          <h3 className="vertical-timeline-element-title">Vaccine Shipment</h3>
          <div style={{borderTop: "2px solid #fff", marginLeft: 20, marginRight: 20}}></div>
          <p><b>Verified:</b> Shipped to hospital 325415 on 3/24/22.</p>  
          <p><b>Verified:</b> Temperature checked on 3/24/22.</p>  
          <p><b>Verified:</b> Arrived at hospital on 3/25/22.</p>  
            
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work" 
            contentStyle={{ background: 'rgb(250, 250, 250)', color: '#000' }}
            contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
            iconStyle={{ background: 'rgb(0, 250, 0)', color: '#000' }}
            icon={<MdCheckCircle class="icon"></MdCheckCircle>}
          >
          <h3 className="vertical-timeline-element-title">Vaccine Dose</h3>
          <p><b>Verified:</b> Administered to you on 3/27/22.</p>   
            
          </VerticalTimelineElement>
        </VerticalTimeline>
    });
    
  };

  render() {    
    return (
      <div className="Diagram">
        <PageNavbar active="diagram" />
        <Jumbotron>
            <div class="secureTopMessage">
                <div class="topMessageText">
                <h3><b>Name:</b> Jane Singer</h3>
                <h3><b>Birthdate:</b> 5/17/1992</h3>
                <h3><b>Vaccine Verification Status:</b> Verified</h3>
                <p>See timeline below for more information.</p>
                </div>
            </div>
            <br></br>
        {this.state.timeline}
        </Jumbotron>

      </div>
    );
  };
};


import React from 'react';
import '../style/Dashboard.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import PageNavbar from './PageNavbar';
import { Jumbotron } from 'react-bootstrap';
//import { Button } from '@material-ui/core';
import { QrReader } from 'react-qr-reader';
import './Scanner.css';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import vaccineData from './samplevaccinedata.json';
import Button from '@mui/material/Button';
import { MdCheckCircle } from "react-icons/md";



export default class Chains extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
        link: "",
        qr : null,
        top_summary: null, 
        timeline: null,
        button: <h3 class="scanMessage">Scan your vaccine card below.</h3>
    };
    this.handleClick = this.handleClick.bind(this);
    this.clickButton = this.clickButton.bind(this);

  };

  // React function that is called when the page load.
  componentDidMount() {
    this.setState({
        link: "",
        top_summary: null,
        timeline: null,
        button: <h3 class="scanMessage">Scan your vaccine card below.</h3>,
        qr:  
        <QrReader className='qr'
        onResult={(result, error) => {
        if (!!result) {
            this.handleClick(result);
        }

        if (!!error) {
            console.info(error);
        }
        }}
        />
    });
  };
    
  // sample state change function
  handleClick(event) {
    this.setState({
        link: "",
        top_summary:
        <div class="secureTopMessage">
                <div class="topMessageText">
                <h3><b>Name:</b> Jane Singer</h3>
                <h3><b>Birthdate:</b> 5/17/1992</h3>
                <h3><b>Vaccine Verification Status:</b> Verified</h3>
                <p>See timeline below for more information.</p>
                </div>
            </div>, 
        qr: null,
        button:  
        <Button variant="outlined" onClick={this.clickButton}>Scan New Card</Button>,
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
  }

  clickButton(event) {
    this.setState({
        top_summary: null,
        timeline: null,
        button: <h3 class="scanMessage">Scan your vaccine card below.</h3>,
        qr:  
        <QrReader className='qr'
        onResult={(result, error) => {
        if (!!result) {
            this.handleClick(result);
        }

        if (!!error) {
            console.info(error);
        }
        }}
        />
    });
  }


  render() {
   
    return (
      <div className="Scanner">
        <PageNavbar active="scanner" />
        <Jumbotron>
          
            {this.state.button}
            {this.state.qr}
            <h1>{this.state.link}</h1>
            {this.state.top_summary}
            <br></br>
            {this.state.timeline}
    
        </Jumbotron>
      </div>
    );
  };
};

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



export default class Chains extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
        link: "",
        qr : null,
        timeline: null,
        button: <h1>Scan vaccine card please.</h1>
    };
    this.handleClick = this.handleClick.bind(this);
    this.clickButton = this.clickButton.bind(this);

  };

  // React function that is called when the page load.
  componentDidMount() {
    this.setState({
        link: "",
        timeline: null,
        button: <h1>Scan vaccine card please.</h1>,
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
        qr: null,
        button:  
        <Button variant="outlined" onClick={this.clickButton}>Scan new card.</Button>,
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
  }

  clickButton(event) {
    this.setState({
        timeline: null,
        button: <h1>Scan vaccine card please.</h1>,
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
            {this.state.timeline}
    
        </Jumbotron>
      </div>
    );
  };
};

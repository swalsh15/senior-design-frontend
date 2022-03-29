import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card } from 'react-bootstrap';

export default class BestCityRows extends React.Component {
	/* ---- Q3b (Best Movies) ---- */
	render() {
		return (
			<div className="movieResults" onClick={this.props.onClick}>
				<Card className="text-center" border="primary" style={{ width: '18rem' }}>
					<Card.Body>
						<Card.Title>{this.props.city}</Card.Title>
						<Card.Text>
							<div className="rating">
							<div className="stars">{Array(Math.floor(this.props.avg)).fill(<span>
											<img src="https://img.icons8.com/officexs/16/000000/filled-star.png"/>
										 </span>)}</div>
							</div>
						</Card.Text>
						<Card.Text>
							<small className="text-muted">{this.props.count} Businesses</small>
						</Card.Text>
					</Card.Body>
				</Card>
			</div>
		);
	};
};

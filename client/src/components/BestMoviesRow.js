import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Badge, Toast} from 'react-bootstrap';

export default class BestGenreRow extends React.Component {
	/* ---- Q3b (Best Movies) ---- */
	render() {
		return (
			<div className="movieResults" onClick={this.props.onClick}>

			<Toast>
				<Toast.Header closeButton={false}>
					<strong className="mr-auto"><div className="title">{this.props.name}</div></strong>
					{ <small> <div className="stars">{Array(Math.floor(this.props.stars)).fill(<span>
									<img src="https://img.icons8.com/officexs/16/000000/filled-star.png"/>
								 </span>)}</div></small> }
				</Toast.Header>
				<Toast.Body>
				<div className="id">
				<img src="https://img.icons8.com/material/24/000000/taxi-location.png"/>
				 {this.props.address}</div>
				<div>
					{this.props.categories.map((answer, i) => {
           // Return the element. Also pass key
					 return (
						 <div><Badge variant="primary"> {answer}</Badge> </div>

					 )
        })}


				</div>

				</Toast.Body>
			</Toast>





				<br></br>
			</div>
		);
	};
};

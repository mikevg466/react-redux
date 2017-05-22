import React from 'react';
import {Link} from 'react-router';

export default function Stations (props) {
	console.log(props);
	console.log(props.stations);
	return (<div>
		      <h3>Stations</h3>
		      <div className="list-group">
		      {
		        props.stations && Object.keys(props.stations).map(station => {
		          return (
		            <div className="list-group-item" key={station}>
		              <Link to={'fill/me/in/later'}>{station}</Link>
		            </div>
		          );
		        })
		      }
		      </div>
		    </div>)

}

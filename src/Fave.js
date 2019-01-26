import React, { Component } from 'react'

class Fave extends Component{
	handleClick = (e) => {
		 e.stopPropagation()
		  console.log('Handling Fave click!')

		  this.props.onFaveToggle();
	}

	// constructor(){
	// 	super()
	// 	this.state = {
			
	// 	}
	// }
	render(){
		const queueClass = this.props.isFave ? "remove_from_queue" : "add_to_queue"
		return(
		<div className={`film-row-fave ${queueClass}`} onClick={this.handleClick}>
			<p className="material-icons">{queueClass}</p>
		</div>
		)
	}
}


export default Fave;
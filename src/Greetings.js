import React, { Component } from 'react';

export default class Greetings extends Component
{

	constructor()
	{
		super()
		this.state=
		{
			name:0
		}
	}
	increaseNumber=()=>
	{
		this.setState({
           name : this.state.name+1

			})
	}
 decreaseNumber=()=>
	{
		this.setState({
           name : this.state.name-1
			})
	}
	render()
	{
		return(
			<div>
	    <h1> { this.state.name }</h1>
	    <button onClick={ this.increaseNumber }>Increase</button>
	    <button onClick={ this.decreaseNumber }>Decrease</button>
			</div>


			)
	}
}
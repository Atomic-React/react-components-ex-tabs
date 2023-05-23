import './Button.css';
import React, { Component } from 'react';

class Button extends Component {

	render() {

		const { variant = 'primary', children, ...rest } = this.props;

		return (
			<button className={`btn btn--${variant}`} {...rest}>{ children }</button>
		);
	}
}

export default Button;
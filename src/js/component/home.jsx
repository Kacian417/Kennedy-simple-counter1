import React from "react";
import Proptypes from 'prop-types';
import SimpleCounter from "./simpleCounter";
import PropTypes from "prop-types";


function calculateSeconds(aCounter, placeValue) {
	return Math.floor(aCounter / placeValue) % 10;
}

//create your first component
const Home = (props) => {
	return (
		<>
			<SimpleCounter
				thousandsDigit = {calculateSeconds(props.counter, 1000)}
				hundredsDigit = {calculateSeconds(props.counter, 100)}
				tensDigit = {calculateSeconds(props.counter, 10)}
				onesDigit = {calculateSeconds(props.counter, 1)}
			/>
		</>
	);
};

export default Home;

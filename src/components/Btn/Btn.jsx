import React from 'react';
import './btn.css';
// const
import constants from '../../constants/constants';

const Btn = ({ submit, text }) => {
	return (
		<>
			<button className='confirmation-btn' onClick={submit}>
				{text}
			</button>
		</>
	);
};

export default Btn;

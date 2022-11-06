import React from 'react';

const CardBack = ({ cvc }) => {
	return (
		<div className='card-back'>
			<span className='back-number'>{cvc ? cvc : '000'}</span>
		</div>
	);
};

export default CardBack;

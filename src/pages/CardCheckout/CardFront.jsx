import React from 'react';
// Icon
import CardIcon from '../../images/card-logo.svg';

const CardFront = ({ values }) => {
	return (
		<div className='card-front'>
			<img src={CardIcon} alt={'Card icon'} className='card-icon' />
			<div className='card-number'>
				{values.cardNr ? values.cardNr : '0000 0000 0000 0000'}
			</div>
			<span className='card-name'>
				{values.name ? values.name : 'Jane Appleesed'}
			</span>
			<span className='card-expire'>
				{values.monthValid ? values.monthValid : '00'}/
				{values.yearValid ? values.yearValid : '00'}
			</span>
		</div>
	);
};

export default CardFront;

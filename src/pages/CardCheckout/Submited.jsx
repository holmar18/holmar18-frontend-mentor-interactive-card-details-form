import React from 'react';
// Components
import { Btn } from '../../components/Btn';
// Icon
import { BsCheckLg } from 'react-icons/bs';
// Const
import Constants from '../../constants/constants';

const Submited = ({ submit }) => {
	return (
		<>
			<div className='submitMsg-text-container'>
				<div className='submit-circle'>
					<BsCheckLg />
				</div>
				<div>
					<h1>{Constants.submited.thanks}</h1>
				</div>
				<div>
					<p>{Constants.submited.ad}</p>
				</div>
			</div>
			<Btn submit={submit} text={Constants.btns.cont} />
		</>
	);
};

export default Submited;

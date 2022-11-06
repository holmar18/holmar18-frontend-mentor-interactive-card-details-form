import React from 'react';
import './cardCheckout.css';
// Const
import Constants from '../../constants/constants';
// Components
import { FormInput } from '../../components/FormInput';
import { DoubleFormInput } from '../../components/FormInput';
import { Btn } from '../../components/Btn';
import CardFront from './CardFront';
import CardBack from './CardBack';
import Submited from './Submited';
// hooks
import { useCardFormLogic } from '../../hooks/useCardFormLogic';

const CardCheckout = () => {
	const {
		values,
		setFuncs,
		handleCreditCardInput,
		handleNumbersInput,
		errors,
		errorMsg,
		submit,
		submited,
	} = useCardFormLogic();

	return (
		<div className='main-container'>
			<section className='cards-container'>
				<CardFront values={values} />
				<CardBack cvc={values.cvc} />
			</section>
			<section className='inputs-container'>
				{!submited ? (
					<>
						<FormInput
							placeholder={Constants.placeholders.name}
							label={Constants.labels.cname}
							value={values.name}
							setFunction={setFuncs.setName}
							isError={errors.name}
							type={'text'}
							errorMsg={errorMsg}
							style={{
								width: '100%',
							}}
						/>
						<FormInput
							placeholder={Constants.placeholders.cardNr}
							label={Constants.labels.cnr}
							value={values.cardNr}
							setFunction={handleCreditCardInput}
							type={'text'}
							isError={errors.cardNr}
							errorMsg={errorMsg}
							maxlength={'19'}
							style={{
								width: '100%',
							}}
						/>
						<div className='smaller-input-container'>
							<DoubleFormInput
								placeholder={[
									Constants.placeholders.expdateMonth,
									Constants.placeholders.expdateYear,
								]}
								label={Constants.labels.expd}
								value={[values.monthValid, values.yearValid]}
								setFunction={handleNumbersInput}
								valtype={['monthValid', 'yearValid']}
								type={'text'}
								isError={[errors.monthValid, errors.yearValid]}
								errorMsg={errorMsg}
								maxlength={'2'}
								style={{
									width: '50%',
								}}
							/>
							<FormInput
								placeholder={Constants.placeholders.cvc}
								label={Constants.labels.cvc}
								value={values.cvc}
								setFunction={setFuncs.setCvc}
								type={'text'}
								isError={errors.cvc}
								errorMsg={errorMsg}
								maxlength={'3'}
								style={{
									width: '50%',
									marginLeft: 'auto',
								}}
							/>
						</div>
						<Btn submit={submit} text={Constants.btns.conf} />
					</>
				) : (
					<section className='submitMsg-container'>
						<Submited submit={submit} />
					</section>
				)}
			</section>
		</div>
	);
};

export default CardCheckout;

import React from 'react';
import './cardCheckScreen.css';
// Icon
import CardIcon from '../../images/card-logo.svg';
import { BsCheckLg } from 'react-icons/bs';
// Const
import Constants from '../../constants/constants';
// Components
import { FormInput } from '../../components/FormInput';
import { DoubleFormInput } from '../../components/FormInput';
import { Btn } from '../../components/Btn';
// hooks
import { useCardFormLogic } from '../../hooks/useCardFormLogic';

const CardCheckScreen = () => {
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
				<div className='card-back'>
					<span className='back-number'>{values.cvc ? values.cvc : '000'}</span>
				</div>
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
					<>
						<section className='submitMsg-container'>
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
						</section>
					</>
				)}
			</section>
		</div>
	);
};

export default CardCheckScreen;

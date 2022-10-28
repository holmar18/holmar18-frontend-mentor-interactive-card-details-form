import { useState, useEffect } from 'react';
// Constants
import constants from '../../constants/constants';

const useCardFormLogic = () => {
	const [name, setName] = useState('');
	const [cardNr, setCardNr] = useState('');
	const [monthValid, setMonthValid] = useState('');
	const [yearValid, setYearValid] = useState('');
	const [cvc, setCvc] = useState('');
	const [errorMsg, setErrorMsg] = useState('');
	const [errors, setErrors] = useState({
		name: false,
		cardNr: false,
		monthValid: false,
		yearValid: false,
		cvc: false,
	});
	const [submited, setSubmited] = useState(false);
	const vals = [name, cardNr, monthValid, yearValid, cvc];
	const valsName = ['name', 'cardNr', 'monthValid', 'yearValid', 'cvc'];

	useEffect(() => {
		// When any of the state changes checks the input errors and removes them if any is active
		handleRemoveErrors();
	}, [name, cardNr, monthValid, yearValid, cvc]);

	/**
	 *  Submits the form, checks for errors before.
	 */
	const submit = () => {
		var emptyInp = errorsEmptyErrors();
		if (emptyInp) {
			var name = errorsName();
			if (name) {
				var cardNrlen = errorsCardNumberLength();
				if (cardNrlen && name) {
					setSubmited(true);
				}
			}
		}
	};

	/**
	 * Checks if the credit card input contains 19 letters
	 * 3 spaces and 16 numbers
	 *
	 * @returns true/false
	 */
	const errorsCardNumberLength = () => {
		if (cardNr.length !== 19) {
			setErrors({
				...errors,
				cardNr: true,
			});
			setErrorMsg(constants.errors.cardLength);
			return false;
		}
		return true;
	};

	/**
	 * Will return true if name contains only letters and spaces
	 * Will return false if it contains numbers
	 * @returns true/false
	 */
	const errorsName = () => {
		if (/^[A-Za-z\s]*$/.test(name)) {
			return true;
		}
		setErrors({
			...errors,
			name: true,
		});

		setErrorMsg(constants.errors.name);

		return false;
	};

	/**
	 * Checks if all the input fields are filled if they are returns True
	 * if some of them are not filled returns true
	 * @returns true/false
	 */
	const errorsEmptyErrors = () => {
		var err = {};
		for (var i = 0; i < vals.length; i++) {
			if (vals[i] === '') {
				err[`${valsName[i]}`] = true;
			}
		}

		// if err is been populated it means there are empty inputs
		if (Object.keys(err).length > 0) {
			setErrors({
				...err,
			});
			setErrorMsg(constants.errors.blank);
			return false;
		}
		return true;
	};

	/**
	 * removes any error messages if they are active
	 */
	const handleRemoveErrors = () => {
		for (var key of Object.keys(errors)) {
			// Only update state if any error is set. Then set them all to false and break
			// so no additional state update occurs.
			if (errors[key]) {
				setErrors({
					name: false,
					cardNr: false,
					monthValid: false,
					yearValid: false,
					cvc: false,
				});
				break;
			}
		}
	};

	// Adds one space after each four letters to look like a credit card number
	const handleCreditCardInput = (value) => {
		let newVal = value
			.replace(/[^\dA-Z]/g, '')
			.replace(/(.{4})/g, '$1 ')
			.trim();
		setCardNr(newVal);
	};

	// Only allows numbers to be inputed into MM/YY field
	const handleNumbersInput = (val, type) => {
		if (/^\d+$/.test(val) && type === 'monthValid') {
			setMonthValid(val);
		} else if (/^\d+$/.test(val) && type === 'yearValid') {
			setYearValid(val);
		}
	};

	return {
		values: {
			name: name,
			cardNr: cardNr,
			monthValid: monthValid,
			yearValid: yearValid,
			cvc: cvc,
		},
		setFuncs: {
			setName: setName,
			setMonthValid: setMonthValid,
			setYearValid: setYearValid,
			setCvc: setCvc,
		},
		handleCreditCardInput: handleCreditCardInput,
		handleNumbersInput: handleNumbersInput,
		errors: errors,
		errorMsg: errorMsg,
		submit: submit,
		submited: submited,
	};
};

export default useCardFormLogic;

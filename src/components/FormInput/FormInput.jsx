import React from 'react';
import './formInput.css';

const FormInput = ({
	placeholder,
	label,
	isError,
	errorMsg,
	style,
	labelStyle,
	value,
	setFunction,
	type,
	maxlength,
}) => {
	return (
		<div className='forminput-container' style={{ ...style }}>
			{label && (
				<label className='forminput-label' style={{ ...labelStyle }}>
					{label}
				</label>
			)}
			<input
				type={type}
				placeholder={placeholder}
				className='forminput'
				value={value}
				onChange={(e) => setFunction(e.target.value)}
				maxLength={maxlength ? maxlength : '100'}
				style={isError ? { border: '1px solid red' } : null}
			/>
			{isError && <label className='forminput-errMsg'>{errorMsg}</label>}
		</div>
	);
};

export default FormInput;

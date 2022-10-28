import React from 'react';

const DoubleFormInput = ({
	placeholder,
	label,
	isError,
	errorMsg,
	style,
	labelStyle,
	setFunction,
	valtype,
	value,
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
			<div className='doubleInput-container'>
				<input
					type={type}
					placeholder={placeholder[0]}
					className='forminput'
					value={value[0]}
					onChange={(e) => setFunction(e.target.value, valtype[0])}
					style={isError[0] ? { border: '1px solid red' } : null}
					maxLength={maxlength}
				/>
				<input
					type={type}
					placeholder={placeholder[1]}
					className='forminput'
					value={value[1]}
					onChange={(e) => setFunction(e.target.value, valtype[1])}
					style={isError[1] ? { border: '1px solid red' } : null}
					maxLength={maxlength}
				/>
			</div>
			{isError[0] || isError[1] ? (
				<label className='forminput-errMsg'>{errorMsg}</label>
			) : null}
		</div>
	);
};

export default DoubleFormInput;

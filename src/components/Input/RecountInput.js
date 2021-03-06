import React, { useState } from 'react';
import RecountTooltip from "../Tooltip/RecountTooltip";

function RecountInput(props) {

	/*
	 * (@string) value - pre-defined input value
	 * (@string) label - input element label text
	 * (@string) customClass - custom class applied to input wrapper
	 * (@string) inputType - type of input element (text, number, etc)
	 * (@function) onChange - function to call when input value changes
	 * (@function) onBlur - function to call when user blur input
	 */

	const [inputFocus, setInputFocus] = useState(props.value ? props.value : null);
	const [inputFilled, setInputFilled] = useState(!!props.value);

	/*
	 * handleChange - call props function on input change
	 */
	function handleChange(event) {

		const val = event.target.value;
		setInputFilled(val.length > 0);
		if (props.onChange) {
			props.onChange(val);
		}
	}


	/*
	 * handleFocus - handle focus / blur events
	 */
	function handleFocus(focus) {
		setInputFocus(focus);

		if (props.onBlur) {
			props.onBlur();
		}
	}

	return (
		<div className={ 'sq-input-wrapper ' + props.customClass +
			 (inputFocus ? ' input-focus' : '') +
			 (inputFilled ? ' input-filled' : '') +
			 (props.invalid ? ' input-invalid' : '') }
			 >

			<label className={'input-label'}>
				{props.label &&
					<p className={'label-text'}>{ props.label }</p>
				}
				<div className={'input-wrapper'}>
					<input className={'sq-input'}
						   defaultValue={ props.value || '' }
						   type={ props.inputType ? props.inputType : 'text' }
						   onFocus={ () => handleFocus(true) }
						   onBlur={ () => handleFocus(false) }
						   onChange={ (e) => handleChange(e) }
					/>
					{props.invalid &&
						<RecountTooltip type={ 'error' }
								   position={ props.tooltipPosition }>
							<p>{ props.errorText }</p>
						</RecountTooltip>
					}
				</div>
			</label>
		</div>
	);
}

export default RecountInput;

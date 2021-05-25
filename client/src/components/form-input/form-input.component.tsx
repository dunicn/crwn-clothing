import React from 'react';

import './form-input.styles.scss';

interface FormInputInterface {
  [x: string]: any;
  handleChange?: (event?: any) => any;
  label: string;
}

const FormInput: React.FC<FormInputInterface> = ({
  handleChange,
  label,
  ...otherProps
}) => (
  <div className='group'>
    <input className='form-input' onChange={handleChange} {...otherProps} />
    {label ? (
      <label
        className={`${
          otherProps.value.length ? 'shrink' : ''
        } form-input-label`}
      >
        {label}
      </label>
    ) : null}
  </div>
);

export default FormInput;

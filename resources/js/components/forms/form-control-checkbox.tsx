import React, { PropsWithChildren } from 'react';

interface Props {
  label?: string;
  isRequired?: boolean;
}

const FormControlCheckbox = ({
  children,
  label,
  isRequired,
}: PropsWithChildren<Props>) => {
  return (
    <div className="form-control">
      <label className="label cursor-pointer">
        <span className="label-text">
          {label} {isRequired && <span className="text-error">*</span>}
        </span>
        {children}
      </label>
    </div>
  );
};

export default FormControlCheckbox;

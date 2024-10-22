import React, { PropsWithChildren } from 'react';

interface Props {
  label?: string;
  errorMessage?: string;
  isRequired?: boolean;
}

const FormControl = ({
  children,
  label,
  errorMessage,
  isRequired,
}: PropsWithChildren<Props>) => {
  return (
    <label className="form-control w-full">
      <div className="label !pb-0">
        <span className="label-text">
          {label}
          {isRequired && <span className="text-error">*</span>}
        </span>
      </div>

      {children}

      {errorMessage && (
        <div className="label">
          <span className="label-text-alt text-error">*{errorMessage}</span>
        </div>
      )}
    </label>
  );
};

export default FormControl;

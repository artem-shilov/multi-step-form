import React, { FC } from 'react';
import { StepProps } from '../Form';

const OtherStep: FC<StepProps> = ({ data, updateFields, handleSubmit }) => {
  return (
    <div className="step-content">
      <form onSubmit={handleSubmit}>
        <label htmlFor="bday" className="form-label">
          Enter your date of birth:
        </label>
        <input
          className="bday"
          autoFocus
          type="date"
          id="bday"
          name="bday"
          value={data.birthday}
          onChange={(e) => updateFields({ ...data, birthday: e.target.value })}
        />
      </form>
    </div>
  );
};

export default OtherStep;

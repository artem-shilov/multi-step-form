import React, { FC } from 'react';
import { StepProps } from '../Form';

const PersonalInfoStep: FC<StepProps> = ({ data, updateFields, handleSubmit }) => {
  return (
    <div className="step-content">
      <form onSubmit={handleSubmit}>
        <input
          className="form-input"
          autoFocus
          type="text"
          placeholder="Name..."
          value={data.name}
          onChange={(e) => updateFields({ ...data, name: e.target.value })}
        />

        <input
          className="form-input"
          type="text"
          placeholder="Surname..."
          value={data.surname}
          onChange={(e) => updateFields({ ...data, surname: e.target.value })}
        />

        <input
          className="form-input"
          type="text"
          placeholder="UserName..."
          value={data.username}
          onChange={(e) => updateFields({ ...data, username: e.target.value })}
        />
      </form>
    </div>
  );
};

export default PersonalInfoStep;

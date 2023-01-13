import React, { FC, FormEvent, useState } from 'react';
import AccountDetailsStep from './Components/AccountDetailsStep';
import OtherStep from './Components/OtherStep';
import PersonalInfoStep from './Components/PersonalInfoStep';

interface InputValueProps {
  email: string;
  password: string;
  name: string;
  surname: string;
  username: string;
  birthday: string;
}
export interface StepProps {
  data: InputValueProps;
  updateFields: (fields: InputValueProps) => void;
  handleSubmit: (e: FormEvent) => void;
}

const Form: FC = () => {
  const [step, setStep] = useState(0);
  const [inputData, setInputData] = useState<InputValueProps>({
    email: '',
    password: '',
    name: '',
    surname: '',
    username: '',
    birthday: '',
  });

  function updateFields(fields: InputValueProps) {
    setInputData((prev) => {
      return { ...prev, ...fields };
    });
  }
  const titles = ['Account Details', 'Personal Info', 'Other'];

  const StepDisplay = () => {
    if (step === 0) {
      return (
        <AccountDetailsStep
          data={inputData}
          updateFields={updateFields}
          handleSubmit={handleSubmit}
        />
      );
    } else if (step === 1) {
      return (
        <PersonalInfoStep
          data={inputData}
          updateFields={updateFields}
          handleSubmit={handleSubmit}
        />
      );
    } else {
      return <OtherStep data={inputData} updateFields={updateFields} handleSubmit={handleSubmit} />;
    }
  };
  const next = () => {
    setStep(step + 1);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    next();
  };

  const progress = Math.round(((step + 1) / titles.length) * 100);

  return (
    <>
      <div id="overlay" className="modal-overlay">
        <div className="modal-body">
          <div className="progress">
            <div style={{ width: `${progress}%` }} className="progress__inner"></div>
          </div>
          <h1 className="step-title"> {titles[step]}</h1>

          <div>{StepDisplay()}</div>
          <div className="step-buttons">
            {step !== 0 && <button onClick={() => setStep(step - 1)}>Back</button>}
            <button
              type="submit"
              onClick={() => (step == titles.length - 1 ? alert('form submitted') : next())}
            >
              {step == titles.length - 1 ? 'Submit' : 'Next'}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Form;

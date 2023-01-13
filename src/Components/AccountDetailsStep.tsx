import React, { FC, useState } from 'react';
import { StepProps } from '../Form';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';

const AccountDetailsStep: FC<StepProps> = ({ data, updateFields, handleSubmit }: StepProps) => {
  const [showPassword, setShowPassword] = useState(false);
  const togglePassword = () => {
    setShowPassword(!showPassword);
  };
  const [email, setEmail] = useState('');
  const [emailDirty, setEmailDirty] = useState(false);
  const [emailError, setEmailError] = useState('email cannot be empty');

  const validateEmail = (e: any) => {
    setEmail(e.target.value);
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (!re.test(String(e.target.value).toLowerCase())) {
      setEmailError('uncorrect email');
    } else {
      setEmailError('');
    }
  };

  return (
    <div className="step-content">
      <form onSubmit={handleSubmit}>
        <input
          className="form-input"
          type="email"
          autoFocus
          required
          placeholder="Email..."
          value={data.email}
          onChange={(e) => updateFields({ ...data, email: e.target.value })}
        />

        <div className="password">
          <input
            id="password"
            required
            type={showPassword ? 'text' : 'password'}
            placeholder="Password.."
            value={data.password}
            onChange={(e) => updateFields({ ...data, password: e.target.value })}
          />
          {showPassword ? (
            <AiOutlineEye className="btn-password" onClick={togglePassword} />
          ) : (
            <AiOutlineEyeInvisible className="btn-password" onClick={togglePassword} />
          )}
        </div>
      </form>
    </div>
  );
};

export default AccountDetailsStep;

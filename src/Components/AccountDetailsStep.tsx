import React, { FC, useState } from 'react';
import { StepProps } from '../Form';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';

const AccountDetailsStep: FC<StepProps> = ({ data, updateFields, handleSubmit }: StepProps) => {
  const [showPassword, setShowPassword] = useState(false);
  const togglePassword = () => {
    setShowPassword(!showPassword);
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

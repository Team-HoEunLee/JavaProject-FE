import { useState } from 'react';
import { Logo } from '../../assets/Auth/index';
import Input from '../../components/Auth/Input';
import Button from '../../components/Auth/Button';
import { AuthSignUp } from '../../constants/index';
import { useNavigate } from 'react-router-dom';
import { InputFormStore } from 'stores/InputFormStore';

const SignUp = () => {
  const navigate = useNavigate();
  const { form, changeForm } = InputFormStore();
  const [error, setError] = useState<boolean>(false);

  const handleClickNext = () => {
    if (form.password !== form.passwordCheck) {
      setError(true);
    } else {
      navigate('/signUpNext');
    }
  };

  return (
    <div className="w-full h-screen flex justify-center items-center bg-auth bg-cover">
      <div className="flex flex-col gap-14 p-16 rounded-3xl bg-white">
        <div className="flex flex-col justify-center items-center h-20">
          <Logo />
          <p className="text-regular12">회원가입</p>
        </div>
        <div className="flex flex-col gap-2.5">
          {AuthSignUp.map((value, index) => (
            <Input
              key={index}
              name={value.name}
              value={form[value.name] || ''}
              icon={value.icon}
              placeholder={value.placeholder}
              onChange={changeForm}
            />
          ))}
        </div>
        <div className="flex flex-col gap-4">
          <Button text="다음" onClick={handleClickNext} />
          <a href="/login" className="flex justify-center gap-1">
            <p className="text-medium12 text-gray500">이미 계정이 있으신가요?</p>
            <p className="text-medium12">로그인</p>
          </a>
        </div>
      </div>
    </div>
  );
};

export default SignUp;

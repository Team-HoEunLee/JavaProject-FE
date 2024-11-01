import { useState } from 'react';
import { Logo } from '../../assets/Auth/index';
import Input from '../../components/Auth/Input';
import Button from '../../components/Auth/Button';
import { AuthSignUp } from '../../constants/index';
import { useNavigate } from 'react-router-dom';
import { useAuthStore } from 'stores/useAuthStore';

const SignUp = () => {
  const navigate = useNavigate();
  const { form, setForm } = useAuthStore();
  const [error, setError] = useState<boolean>(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm(name, value);
  };

  const handleClickNext = () => {
    if (form.password !== form.passwordCheck) {
      setError(true);
    }
    navigate('/signUpNext');
    console.log(form);
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
              onChange={handleChange}
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

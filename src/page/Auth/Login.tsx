import { Logo } from '../../assets/Auth/index';
import Input from '../../components/Auth/Input';
import Button from 'components/Auth/Button';
import { AuthLogin } from '../../constants/index';
import { useNavigate } from 'react-router-dom';
import { InputFormStore } from 'stores/InputFormStore';
import { login } from 'utils/api/auth';
import { setToken } from 'utils/api/function/TokenManage';

const Login = () => {
  const navigate = useNavigate();
  const { form, changeForm } = InputFormStore();

  const handleLogin = () => {
    const data = {
      account: form.account,
      password: form.password,
    };
    const test = login();
    console.log(test);
  };

  return (
    <div className="w-full h-screen flex justify-center items-center bg-auth bg-cover">
      <div className="flex flex-col gap-14 p-16 rounded-3xl bg-white">
        <div className="flex flex-col justify-center items-center h-20">
          <Logo />
          <p className="text-regular12">로그인</p>
        </div>
        <div className="flex flex-col gap-2.5">
          {AuthLogin.map((value, index) => (
            <Input
              key={index}
              name={value.name}
              icon={value.icon}
              placeholder={value.placeholder}
              onChange={changeForm}
            />
          ))}
        </div>
        <div className="flex flex-col gap-4">
          <Button text="Login" onClick={handleLogin} />
          <a href="/signUp" className="flex justify-center gap-1">
            <p className="text-medium12 text-gray500">다영이 처음이신가요?</p>
            <p className="text-medium12">회원가입</p>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Login;

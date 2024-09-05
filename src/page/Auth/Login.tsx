import { Logo } from '../../assets/Auth/index';
import Input from '../../components/Auth/Input';
import Button from '../../components/Auth/Button';
import { AuthLogin } from '../../constants/index';

const Login = () => {
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
            />
          ))}
        </div>
        <div className="flex flex-col gap-4">
          <Button text="Login" />
          <div className="flex justify-center gap-1">
            <p className="text-medium12 text-gray500">다영이 처음이신가요?</p>
            <p className="text-medium12">회원가입</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

import { Logo } from '../../assets/Auth/index';
import { SvgTest } from '../../assets/Auth/index';
import { SvgTest2 } from '../../assets/Auth/index';
import Input from '../../components/Auth/Input';
import Button from 'components/Auth/Button';
import { AuthLogin } from '../../constants/index';
import { InputFormStore } from 'stores/InputFormStore';
import { useLogin } from 'utils/api/auth';

const JobisLogin = () => {
  const { form, changeForm } = InputFormStore();

  const handleLogin = () => {
    const data = {
      account: form.account,
      password: form.password,
    };
    const test = useLogin();
    console.log(test);
  };

  return (
    <div className="w-full h-screen flex justify-center items-center bg-jobisGray20 bg-cover">
      <div className="shadow-md w-[400px] h-[440px] bg-white rounded-2xl pt-[36px] pb-[36px] pr-[32px] pl-[32px] flex flex-col gap-[16px]">
        <div className="flex flex-col items-center">
          <p className="text-2xl font-bold text-primary20">로그인</p>
        </div>
        <div className="flex flex-col gap-2.5"></div>
      </div>
    </div>
  );
};

export default JobisLogin;

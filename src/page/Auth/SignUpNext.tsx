import { Logo, Bag, ArrowDown } from '../../assets/Auth/index';
import Input from '../../components/Auth/Input';
import Button from '../../components/Auth/Button';
import MajorSubjectTag from 'components/Common/MajorSubjectTag';
import { AuthSignUpNext } from '../../constants/index';
import { useNavigate } from 'react-router-dom';

const SignUpNext = () => {
  const navigate = useNavigate();

  return (
    <div className="w-full h-screen flex justify-center items-center bg-auth bg-cover">
      <div className="flex flex-col gap-14 p-16 rounded-3xl bg-white">
        <div className="flex flex-col justify-center items-center h-20">
          <Logo />
          <p className="text-regular12">회원가입</p>
        </div>
        <div className="flex flex-col gap-2.5">
          {AuthSignUpNext.map((value, index) => (
            <Input
              key={index}
              name={value.name}
              icon={value.icon}
              placeholder={value.placeholder}
            />
          ))}
          <div className="w-full flex py-3.5 px-1.5 items-center border-gray300 border-b gap-2">
            <Bag />
            <p className="w-full text-regular14 text-gray700">전공을 선택해주세요 (선택)</p>
            <ArrowDown />
          </div>
          <div className="w-full flex gap-2">
            <MajorSubjectTag text="프론트엔드" />
            <MajorSubjectTag text="디자인" />
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <Button text="회원가입" onClick={() => navigate('/login')} />
          <a href="/login" className="flex justify-center gap-1">
            <p className="text-medium12 text-gray500">이미 계정이 있으신가요?</p>
            <p className="text-medium12">로그인</p>
          </a>
        </div>
      </div>
    </div>
  );
};

export default SignUpNext;

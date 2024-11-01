import { useState, useRef, useEffect } from 'react';
import { Logo, Bag, ArrowDown } from '../../assets/Auth/index';
import Input from '../../components/Auth/Input';
import Button from '../../components/Auth/Button';
import MajorSubjectTag from 'components/Common/MajorSubjectTag';
import Options from 'components/Auth/Options';
import { AuthSignUpNext, Major } from '../../constants/index';
import { useNavigate } from 'react-router-dom';
import { useCheckedList } from 'components/Hooks/useCheckedList';
import { useAuthStore } from 'stores/useAuthStore';

const SignUpNext = () => {
  const navigate = useNavigate();
  const [openOption, setOpenOption] = useState<boolean>(false);
  const modalRef = useRef<HTMLDivElement>(null);

  const { form, setForm } = useAuthStore();
  const { checkedList, handleChange: checkListHandleChange, handleReset } = useCheckedList();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm(name, value);
  };

  const modalOutSideClick = (e: any) => {
    if (modalRef.current === e.target) {
      setOpenOption(false);
    }
  };

  useEffect(() => {
    console.log(checkedList);
  }, [checkedList]);

  const handleLogin = () => {
    console.log(form);
    navigate('/login');
  };

  return (
    <div
      className="w-full h-screen flex justify-center items-center bg-auth bg-cover"
      ref={modalRef}
      onClick={(e) => modalOutSideClick(e)}
    >
      <div className="flex relative flex-col gap-14 p-16 rounded-3xl bg-white">
        <div className="flex flex-col justify-center items-center h-20">
          <Logo />
          <p className="text-regular12">회원가입</p>
        </div>
        <div className="flex flex-col gap-2.5">
          {AuthSignUpNext.map((value, index) => (
            <Input
              key={index}
              name={value.name}
              value={form[value.name] || ''}
              icon={value.icon}
              placeholder={value.placeholder}
              onChange={handleChange}
            />
          ))}
          <div
            className="w-full flex py-3.5 px-1.5 items-center border-gray300 border-b gap-2"
            onClick={() => setOpenOption(!openOption)}
          >
            <Bag />
            <p className="w-full text-regular14 text-gray700">전공을 선택해주세요 (선택)</p>
            <ArrowDown />
          </div>
          {openOption ? (
            <div className="w-44 h-48 absolute right-5 bottom-16 bg-white rounded-md border border-gray400 overflow-scroll">
              {Major.map((value, index) => (
                <Options
                  key={index}
                  text={value}
                  selected={checkedList.includes(value)}
                  onClick={() => checkListHandleChange(value)}
                />
              ))}
            </div>
          ) : (
            <></>
          )}
          <div className="w-80 flex flex-wrap gap-2">
            {checkedList.map((value, index) => (
              <MajorSubjectTag key={index} text={value} />
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <Button text="회원가입" onClick={handleLogin} />
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

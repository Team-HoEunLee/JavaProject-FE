import { useState, useRef } from 'react';
import { Logo, Bag, ArrowDown } from '../../assets/Auth/index';
import Input from '../../components/Auth/Input';
import Button from '../../components/Auth/Button';
import MajorSubjectTag from 'components/Common/MajorSubjectTag';
import Options from 'components/Auth/Options';
import { AuthSignUpNext, UserMajorValues } from '../../constants/index';
import { useNavigate } from 'react-router-dom';
import { useCheckedList } from 'components/Hooks/useCheckedList';
import { InputFormStore } from 'stores/InputFormStore';
import { useSignUp } from 'utils/api/auth';
import { SignupRequest } from 'models/auth';

const SignUpNext = () => {
  const navigate = useNavigate();
  const [openOption, setOpenOption] = useState<boolean>(false);
  const modalRef = useRef<HTMLDivElement>(null);

  const { mutate } = useSignUp();
  const { form, changeForm, resetForm } = InputFormStore();
  const { checkedList, handleChange: checkListHandleChange } = useCheckedList();
  const { accountId, password, name, introduction } = form;

  const modalOutSideClick = (e: any) => {
    if (modalRef.current === e.target) {
      setOpenOption(false);
    }
  };

  const handleSignUp = () => {
    const data: SignupRequest = {
      accountId,
      password,
      name,
      introduction,
      areaId: checkedList,
    };
    try {
      mutate(data);
      navigate('/login');
      resetForm();
    } catch (error) {
      console.log(data);
    }
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
              onChange={changeForm}
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
              {UserMajorValues.map((value, index) => (
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
          <Button text="회원가입" onClick={handleSignUp} />
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

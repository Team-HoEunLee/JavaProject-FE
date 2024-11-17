import { useState } from 'react';
import { ReactComponent as Logo } from '../../assets/Common/Logo.svg';
import { Profile } from '../../assets/Main';
import Button from 'components/Auth/Button';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  //나중에 고쳐야 됨 (로그인 시 / 어드민일 경우 조건)
  const navigation = useNavigate();

  const [isLogin, setIsLogin] = useState(true);
  const [isAdmin, setIsAdmin] = useState(false);
  return (
    <div className="w-full p-[12px] px-[55px] flex justify-between border-b border-gray200">
      <div onClick={() => navigation('/main')}>
        <Logo />
      </div>
      {!isLogin ? (
        <Button text="로그인" />
      ) : (
        <div className="flex gap-[20px]">
          {isAdmin && <Button text="문제 추가" />}
          <div className="flex items-center gap-[8px]" onClick={() => navigation('/user')}>
            <Profile />
            <p className="text-medium16 text-gray800">홍길동님</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;

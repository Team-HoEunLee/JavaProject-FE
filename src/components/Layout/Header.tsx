import { useState } from 'react';
import { ReactComponent as Logo } from '../../assets/Common/Logo.svg';
import { Profile } from '../../assets/Main';
import Button from 'components/Auth/Button';

const Header = () => {
  const [isLogin, setIsLogin] = useState(false);
  return (
    <div className="flex justify-center p-[12px]">
      <div className="w-[1302px] flex justify-between">
        <Logo />
        {!isLogin ? (
          <Button text="로그인" />
        ) : (
          <div className="flex gap-[8px]">
            <Button text="문제 추가" />
            <div className="flex items-center gap-[8px]">
              <Profile />
              <p className="text-medium16 text-gray800">홍길동님</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;

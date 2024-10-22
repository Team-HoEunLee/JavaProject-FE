import { Edit, Tier, Back } from '../../assets/User';
import SolveList from 'components/User/SolveList';
import ProblemTag from 'components/User/ProblemTag';
import ProgressBar from 'components/User/ProgressBar';
import Header from 'components/Layout/Header';

const relatedField: string[] = ['백엔드', '데브옵스'];

const MyPage = () => {
  return (
    <div className="w-full h-screen flex flex-col items-center">
      <div className="w-full h-[9%] flex">
        <Header />
      </div>
      <div className="w-[1920px] h-[375px] flex relativ ">
        <Back />
      </div>
      <div className="w-[72%] h-screen flex flex-row gap-[100px] inset-y-[20%] absolute">
        <div className="w-[35%] h-full flex flex-col gap-[30px] rounded-[8px] border-[1px] border-gray200 items-center bg-white">
          <div className="w-[90%] flex flex-col items-center pt-[30px]">
            <div className="w-[100px] h-[100px] flex items-center justify-center rounded-[50px] border-[1px] border-purple50  bg-white">
              <Tier />
            </div>
          </div>
          <div className="w-[90%] h-fit flex flex-col items-center">
            <p className="text-[48px] text-semi48 text-black">드림핵호</p>
          </div>
          <div className="w-[90%] flex flex-col items-center">
            <p className="text-medium16 text-gray800">자기소개가 없습니다.</p>
          </div>
          <div className="w-[90%] h-[20px] flex flex-col items-center justify-center rounded-[16px]">
            <div className="flex flex-row justify-center items-center gap-[10px]">
              <div className="flex text-semi14 text-gray800">Lv.1</div>
              <div className="w-[300px] flex">
                <ProgressBar percent={25} />
              </div>
              <div className="flex text-semi14 text-gray800">20/80</div>
            </div>
          </div>
          <div className="w-[90%] flex">
            <button className="w-[100%] h-[56px] flex flex-row items-center justify-center gap-[10px] rounded-[8px] border-[1px] border-purple50 bg-main100">
              <div className="w-[20px] h-[20px] flex">
                <Edit />
              </div>
              <p className="text-medium16 text-purple300">내 프로필 수정</p>
            </button>
          </div>
          <div className="w-[90%] flex flex-col">
            <SolveList />
          </div>
        </div>
        <div className="h-full flex-grow flex flex-row relative">
          <div className="w-full h-[calc(100%-20%)] absolute inset-y-[20%] flex flex-grow flex-col items-center rounded-[8px] border-[1px] border-gray200 bg-white">
            <div className="w-[91%] pt-[40px] flex flex-col flex-grow gap-[30px]">
              <div className="bg-white flex">
                <p className="text-bold24">내 정보</p>
              </div>
              <div className="h-[130px] flex flex-row gap-[30px] bg-white">
                <div className="w-[34%] flex flex-col items-center h-full rounded-[10px] border-[1px] border-gray200">
                  <div className="w-full pl-[20px] pt-[20px] flex flex-col items-start text-medium16 text-gray800 gap-[15px]">
                    <p className="flex">Level</p>
                    <div className="flex flex-row gap-[20px]">
                      <div className="text-semi52 text-black">1</div>
                      <div className="pt-[5px] flex flex-col gap-[15px]">
                        <div className="w-[120px]">
                          <ProgressBar percent={35} />
                        </div>
                        <div className="flex flex-row justify-between">
                          <div className="text-medium14 text-purple200">35.0%</div>
                          <div className="text-medium14 text-gray400">28/80</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-[34%] flex flex-col items-center h-full rounded-[10px] border-[1px] border-gray200">
                  <div className="pt-[20px] text-medium16 text-gray800">Rank</div>
                  <div className="pt-[15px] text-bold40 text-black">#48567</div>
                </div>
                <div className="w-[34%] flex flex-col items-center h-full rounded-[10px] border-[1px] border-gray200">
                  <div className="pt-[20px] text-medium16 text-gray800">Total</div>
                  <div className="pt-[15px] text-bold40 text-black">1378점</div>
                </div>
              </div>
              <div className=" flex flex-col rounded-[10px] border-[1px] border-gray200 gap-[10px]">
                <div className="h-[35px] flex items-center rounded-t-[10px] bg-gray200">
                  <p className="pl-[20px] text-medium14 text-gray800">풀이한 문제</p>
                </div>
                <div className="pl-[15px] pr-[20px] text-semi14 text-purple200 leading-5">
                  1013 2034 1013 2034 21013 2034 2034 1013 2034 1013 2034 2034 1013 2034 1013 2034
                  2034 1013 2034 1013 2034 2034 1013 2034 1013 2034 2034 1013 2034 1013 2034 2034
                  1013 2034 1013 2034 2034 1013 2034 1013 2034 2034 1013 2034 1013 2034 2034 1013
                  2034 1013 2034 2034 1013 2034 1013 2034 2034 1013 2034 1013 2034 2034 1013 2034
                  1013 2034 2034 1013 2034 1013 2034 2034 1013 2034 1013 2034 42034 1013 2034 1013
                  2034 2034 1013 2034 1013 2034
                </div>
                <div></div>
              </div>
              <div className="h-[155px] flex flex-col gap-[30px]">
                <div className="flex flex-col gap-[10px]">
                  <div className="h-[34px] text-bold24">개인정보</div>
                  <div className="h-[1px] bg-gray200"></div>
                </div>
                <div className="h-[24px] flex flex-row">
                  <p className="w-[300px] text-medium16 text-gray900">닉네임</p>
                  <p className="text-medium16 text-gray900">드림핵호</p>
                </div>
                <div className="h-[24px] flex flex-row">
                  <p className="w-[300px] text-medium16 text-gray900">전공</p>
                  <div className="h-[26px] flex flex-wrap gap-[7px]">
                    {relatedField.map((value, index) => (
                      <ProblemTag key={index} text={value} />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyPage;

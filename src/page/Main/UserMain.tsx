import {
  MainItemsCategory,
  QuestionKeyword,
  MainTableHeader,
  QuestionListDummyValue,
  RankingListDummyValue,
} from '../../constants/index';
import { Reset } from '../../assets/Main/index';
import Search from 'components/Main/Search';
import KeywordTag from 'components/Common/KeywordTag';
import Level from '../../components/Common/Level';
import QuestionList from 'components/Main/QuestionList';
import RankingList from 'components/Main/RankingList';

const UserMain = () => {
  return (
    <div className="w-full h-screen flex justify-center">
      <div className="w-[1302px] flex flex-col gap-[48px]">
        <div className="flex gap-[34px]">
          {MainItemsCategory.map((value, index) => (
            <div
              key={index}
              className={`w-[300px] h-[280px] relative pt-[32px] pl-[25px] pb-[10px] pr-[10px] rounded-xl ${value.backColor}`}
            >
              <p className="w-[140px] text-bold24 text-white">{value.title}</p>
              <div className="absolute right-[10px] bottom-[10px]">
                <value.icon />
              </div>
            </div>
          ))}
        </div>
        <div className="flex gap-[20px]">
          <div className="w-[968px] flex flex-col gap-[24px]">
            <Search />
            <div className="py-[24px] px-[40px] flex flex-col gap-[20px] border border-gray400 rounded-md">
              {QuestionKeyword.map((value, index) => (
                <div key={index} className="flex">
                  <p className="w-[100px] text-bold16 text-gray900">{value.title}</p>
                  <div className="w-full flex flex-wrap gap-[10px]">
                    {value.keywords.map((keyword, keywordIndex) => (
                      <KeywordTag key={keywordIndex} text={keyword} />
                    ))}
                    {value.name === 'Level' ? <Level /> : <></>}
                  </div>
                </div>
              ))}
            </div>
            <div className="flex flex-col gap-[8px]">
              <div className="w-full flex justify-between">
                <p className="text-medium16 text-gray900">
                  총 <span className="text-bold16 text-main200">100</span>개의 문제가 있습니다
                </p>
                <div className="flex items-center gap-2">
                  <p className="text-medium14 text-gray900">초기화</p>
                  <Reset />
                </div>
              </div>
              <div className="flex flex-col">
                <div className="flex px-[30px] py-2 gap-[50px] rounded-[8px] bg-main200">
                  {MainTableHeader.map((value, index) => (
                    <p key={index} className={`text-medium16 text-white ${value.width}`}>
                      {value.text}
                    </p>
                  ))}
                </div>
                {QuestionListDummyValue.map((value, index) => (
                  <QuestionList
                    key={index}
                    checked={value.checked}
                    title={value.title}
                    felid={value.felid}
                    level={value.level}
                    avgScore={value.avgScore}
                  />
                ))}
              </div>
            </div>
          </div>
          <div className="w-[300px] flex flex-col p-[20px] gap-[10px]">
            <p className="text-semi18 text-main200">랭킹 TOP 10</p>
            <hr className="border-gray700" />
            {RankingListDummyValue.map((value, index) => (
              <RankingList key={index} number={index} name={value.name} score={value.score} />
            ))}

            <hr className="border-gray700" />
            <RankingList number={1245} name="히히" score={0} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserMain;

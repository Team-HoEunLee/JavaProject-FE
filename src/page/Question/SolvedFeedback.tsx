const SolvedFeedback = () => {
  return (
    <div className="w-full h-screen flex justify-center">
      <div className="w-[1302px] flex justify-between">
        <div className="w-[980px] flex flex-col gap-[42px]">
          <div className="flex flex-col gap-[8px]">
            <p className="text-semi20">풀이한 문제</p>
            <div className="py-[8px] px-[20px] border-l-[2px]">
              <p className="text-medium16 text-gray900">HTTP와 HTTPS의 차이점에 대해 서술하시오</p>
            </div>
          </div>
          <div className="flex flex-col gap-[8px]">
            <p className="text-semi20">나의 풀이</p>
            <div className="py-[32px] px-[24px] border border-gray400 rounded-[8px]">
              <p className="text-medium16 text-gray900 leading-[180%]">
                HTTP는 Hyper Text Transfer Protocol의 약자로 HTML 문서나 JSON 데이터를 클라이언트와
                서버에서 주고 받을 수 있도록 만든 통신 규약이다 HTTPS는 HTTP를 보안상으로 더
                강화시킨 것으로 신뢰성이 보장되고 더 안전하게 데이터를 주고 받을 수 있도록 만든다
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-[8px]">
            <p className="text-semi20">AI 피드백</p>
            <div className="py-[32px] px-[24px] border border-gray400 rounded-[8px]">
              <p className="text-medium16 text-gray900 leading-[180%]">
                답변은 기본적인 차이점을 잘 설명하고 있으나, 좀 더 구체적인 정보를 추가하면
                좋겠습니다. 다음과 같은 사항을 포함할 수 있습니다: 암호화: HTTPS는 SSL/TLS(보안 소켓
                계층/전송 계층 보안)를 사용하여 데이터 전송을 암호화합니다. 이로 인해 데이터가 전송
                중에 도청이나 변조로부터 보호됩니다. 반면 HTTP는 암호화 없이 데이터를 전송합니다.
                데이터 무결성: HTTPS는 데이터 전송 중 무결성을 유지하여 데이터가 중간에 변경되지
                않았음을 보장합니다. 인증: HTTPS는 서버의 신원을 인증할 수 있는 인증서를 사용합니다.
                이를 통해 클라이언트는 연결된 서버가 실제로 자신이 의도한 서버임을 확인할 수
                있습니다. 포트 번호: HTTP는 기본적으로 포트 80을 사용하고, HTTPS는 포트 443을
                사용합니다. 이러한 추가 정보를 통해 HTTP와 HTTPS의 차이점을 더욱 명확히 이해하고
                설명할 수 있습니다.
              </p>
            </div>
          </div>
        </div>
        <div className="w-[280px] flex flex-col p-[20px] gap-[32px]">
          <div className="flex flex-col py-[4px] gap-[40px] border-b border-gray400">
            <p className="text-medium16">임다영 님</p>
          </div>
          <div className="flex flex-col gap-[12px]">
            <div className="flex flex-col gap-2">
              <p className="text-bold40">40%</p>
              <p className="text-medium14 text-gray800">AI가 비교한 풀이 정답률</p>
            </div>
            <p className="text-semi16 text-gray800">
              총 <span className="text-main300">20점</span>을 획득하였습니다
            </p>
          </div>
          <div className="flex flex-col px-[12px] py-[20px] bg-main100">
            <p className="text-medium14 text-gray800">이 문제를 20000명이 풀이하였습니다</p>
            <p className="text-medium14 text-gray800">사용자의 평균 점수는 40점 입니다</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SolvedFeedback;

import TextBox from 'components/Question/TextBox';
import BarGraph from 'components/Question/BarGraph';

const SolvedFeedback = () => {
  return (
    <div className="w-full h-screen flex justify-center">
      <div className="w-[1302px] flex justify-between">
        <div className="w-[980px] flex flex-col gap-[42px]">
          <div className="flex flex-col gap-[8px]">
            <p className="text-semi20">면접 질문</p>
            <div className="py-[8px] px-[20px] border-l-[2px]">
              <p className="text-medium16">HTTP와 HTTPS의 차이점에 대해 서술하시오</p>
            </div>
          </div>
          <TextBox
            title="나의 답변"
            content="HTTP는 Hyper Text Transfer Protocol의 약자로 HTML 문서나 JSON 데이터를 클라이언트와 서버에서 주고 받을 수 있도록 만든 통신 규약이다 HTTPS는 HTTP를 보안상으로 더 강화시킨 것으로 신뢰성이 보장되고 더 안전하게 데이터를 주고 받을 수 있도록 만든다"
          />

          <TextBox
            title="AI 피드백"
            content="                답변은 기본적인 차이점을 잘 설명하고 있으나, 좀 더 구체적인 정보를 추가하면
                좋겠습니다. 다음과 같은 사항을 포함할 수 있습니다: 암호화: HTTPS는 SSL/TLS(보안 소켓
                계층/전송 계층 보안)를 사용하여 데이터 전송을 암호화합니다. 이로 인해 데이터가 전송
                중에 도청이나 변조로부터 보호됩니다. 반면 HTTP는 암호화 없이 데이터를 전송합니다.
                데이터 무결성: HTTPS는 데이터 전송 중 무결성을 유지하여 데이터가 중간에 변경되지
                않았음을 보장합니다. 인증: HTTPS는 서버의 신원을 인증할 수 있는 인증서를 사용합니다.
                이를 통해 클라이언트는 연결된 서버가 실제로 자신이 의도한 서버임을 확인할 수
                있습니다. 포트 번호: HTTP는 기본적으로 포트 80을 사용하고, HTTPS는 포트 443을
                사용합니다. 이러한 추가 정보를 통해 HTTP와 HTTPS의 차이점을 더욱 명확히 이해하고
                설명할 수 있습니다."
          />

          <TextBox
            title="모범답안"
            content="HTTP와 HTTPS는 웹에서 데이터를 전송하는 두 가지 주요 프로토콜입니다. HTTP는
                Hypertext Transfer Protocol의 약자로, 데이터를 암호화하지 않고 평문으로 전송합니다.
                이로 인해 데이터가 전송되는 동안 중간에서 패킷 스니핑과 같은 공격에 노출될 수
                있으며, 제3자가 데이터를 쉽게 읽거나 변조할 수 있는 위험이 있습니다. 기본적으로
                HTTP는 80번 포트를 사용하여 웹 서버와 클라이언트 간의 통신을 수행합니다. 또한,
                HTTP는 인증 기능을 제공하지 않기 때문에 사용자는 접속하는 웹사이트의 신뢰성을 확인할
                방법이 없습니다. 반면, HTTPS는 Hypertext Transfer Protocol Secure의 약자로,
                SSL(Secure Sockets Layer) 또는 TLS(Transport Layer Security) 프로토콜을 사용하여
                데이터를 암호화합니다. 이를 통해 전송되는 데이터는 암호화되어 중간에서 제3자가
                데이터를 가로채거나 읽는 것이 어렵습니다. HTTPS는 443번 포트를 사용하며, 데이터를
                전송하기 전에 암호화하여 무결성을 보장합니다. 또한, 웹사이트의 신뢰성을 검증하기
                위해 SSL/TLS 인증서를 사용하며, 이는 공인된 인증 기관(CA)에 의해 발급됩니다.
                인증서가 유효하면 브라우저는 사용자에게 웹사이트의 신뢰성을 보장합니다. 브라우저에서
                HTTP와 HTTPS의 차이를 인식할 수 있으며, HTTP 주소는 http://로 시작하고 브라우저에
                보안 경고를 표시할 수 있는 반면, HTTPS 주소는 https://로 시작하고 자물쇠 아이콘과
                같은 보안 아이콘이 표시됩니다. HTTPS는 보안성 강화로 인해 검색 엔진 최적화(SEO)에서
                더 높은 순위를 받을 가능성이 높으며, 많은 사용자들이 개인 정보 보호와 보안이 강화된
                HTTPS 사이트를 선호합니다. 그러나 HTTPS는 암호화 과정으로 인해 약간의 성능 저하가
                발생할 수 있지만, 현대의 기술로 인해 이 차이는 점점 줄어들고 있습니다. 결론적으로,
                HTTP는 데이터 전송의 기본 프로토콜로, 보안성 측면에서 한계가 있지만, HTTPS는
                암호화와 인증을 통해 데이터의 안전성을 높이고 웹사이트의 신뢰성을 강화합니다. 따라서
                HTTPS는 개인 정보와 민감한 데이터가 오가는 웹사이트에서 필수적으로 사용되어야
                합니다."
          />
        </div>
        <div className="w-[280px] flex flex-col p-[20px] gap-[32px]">
          <div className="flex flex-col py-[4px] gap-[40px] border-b border-gray400">
            <p className="text-semi16">임다영 님</p>
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
          <div className="flex flex-col px-[12px] py-[20px] rounded-[8px] bg-main100">
            <p className="text-medium14 text-gray700">
              이 문제를 <span className="text-gray900">20000명</span>이 풀이하였습니다
            </p>
            <p className="text-medium14 text-gray700">
              사용자의 평균 점수는 <span className="text-gray900">40점</span>입니다
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SolvedFeedback;

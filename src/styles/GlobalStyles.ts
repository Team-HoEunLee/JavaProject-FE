import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    @font-face {
        font-family: 'Pretendard-Light';
        src: url('https://fastly.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Regular.woff') format('woff');
        font-weight: 300;
    }
    @font-face {
        font-family: 'Pretendard-Regular';
        src: url('https://fastly.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Regular.woff') format('woff');
        font-weight: 400;
    }
    @font-face {
        font-family: 'Pretendard-Medium';
        src: url('https://fastly.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Regular.woff') format('woff');
        font-weight: 500;
    }
    @font-face {
        font-family: 'Pretendard-SemiBold';
        src: url('https://fastly.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Regular.woff') format('woff');
        font-weight: 600;
    }
    @font-face {
        font-family: 'Pretendard-Bold';
        src: url('https://fastly.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Regular.woff') format('woff');
        font-weight: 700;
    }
  body {
    font-family: Arial, sans-serif;
    -webkit-touch-callout: none;
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    border: 0;    
    font-family: "Pretendard-Medium";
    line-height: 1;
  }
`;

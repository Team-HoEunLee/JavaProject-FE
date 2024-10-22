import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from '../page/Auth/Login';
import SignUp from '../page/Auth/SignUp';
import SignUpNext from '../page/Auth/SignUpNext';
import Main from '../page/Main/UserMain';
import QuestionSolving from 'page/Question/QuestionSolving';
import SolvedFeedback from 'page/Question/SolvedFeedback';
import MyPage from 'page/User/MyPage';
import WriteQuestion from 'page/Admin/WriteQuestion';
import Layout from 'components/Layout';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/signUpNext" element={<SignUpNext />} />
        <Route path="/main" element={<Main />} />
        <Route path="/solve" element={<QuestionSolving />} />
        <Route path="/feedback" element={<SolvedFeedback />} />
        <Route path="/writeQuestion" element={<WriteQuestion />} />
        <Route path="/user" element={<MyPage />} />
        <Route path="/" element={<Layout />}>
          <Route path="/main" element={<Main />} />
          <Route path="/solve" element={<QuestionSolving />} />
          <Route path="/feedback" element={<SolvedFeedback />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from '../page/Auth/Login';
import SignUp from '../page/Auth/SignUp';
import SignUpNext from '../page/Auth/SignUpNext';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/signUpNext" element={<SignUpNext />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;

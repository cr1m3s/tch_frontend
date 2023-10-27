import { Routes, Route } from 'react-router-dom';
import { PublicRoute, ProtectedRoute } from './routes';
import { useEffect } from 'react';
import { GlobalStyles } from './styles/GlobalStyles.styled';
import { FontStyles } from './styles/FontStyles';
import { useAuthStore } from './store/auth';

import SharedLayout from './components/SharedLayout';
import RegisterPage from './pages/RegisterPage';
import LoginPage from './pages/LoginPage';
import ConditionsPage from './pages/ConditionsPage';
import CongratsPage from './pages/CongratsPage';
import PolicyPage from './pages/PolicyPage';
import NotFoundPage from './pages/NotFoundPage';
import ChangeEmailPage from './pages/ChangeEmailPage';
import ResetPasswordPage from './pages/ResetPasswordPage';
import ChangePasswordPage from './pages/ChangePasswordPage';
import CreateNewPasswordPage from './pages/CreateNewPasswordPage';
import CoursesPage from './pages/CoursesPage';
import ProfilePage from './pages/ProfilePage';
import MyAdvertPage from './pages/MyAdvertPage';


const App = () => {
  const { isAuth, setToken, refresh, token } = useAuthStore();


  useEffect(() => {
    const fetchUserData = async () => {
      await refresh();
    };

    if (token) fetchUserData();
  }, [refresh, token]);

  useEffect(() => {
    const urlSearchParams = new URLSearchParams(window.location.search);
    const googleToken = urlSearchParams.get('token');

    if (googleToken) {
      setToken(googleToken);
    }
  }, [setToken]);

  return (
    <>
      <GlobalStyles />
      <FontStyles />
      <Routes>
        <Route path='/' element={<SharedLayout />}>
          <Route index element={<CoursesPage />} />
          
          <Route
            path='/my-advert'
            element={
              <ProtectedRoute
                component={<MyAdvertPage />}
                isAllowed={isAuth}                
              />}
          />

          <Route
            path='/profile'
            element={
              <ProtectedRoute
                component={<ProfilePage />}
                isAllowed={isAuth}                
              />}
          />
          
          <Route
            path='/register'
            element={
              <PublicRoute
                redirectTo='/login'
                component={<RegisterPage />}
                restricted
              />
              
            }
          />

          <Route path='/login' element={<LoginPage />} />

          <Route path='/change-email' element={<ChangeEmailPage />} />
          <Route path='/reset-password' element={<ResetPasswordPage />} />
          <Route path='/change-password' element={<ChangePasswordPage />} />
          <Route path='/create-password' element={<CreateNewPasswordPage />} />

          <Route path='/conditions' element={<ConditionsPage />} />
          <Route path='/policy' element={<PolicyPage />} />
          <Route path='/success' element={<CongratsPage />} />
          <Route path='*' element={<NotFoundPage />} />
        </Route>
      </Routes>
    </>
  )
}


export default App;
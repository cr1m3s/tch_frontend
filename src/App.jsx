import { Routes, Route } from "react-router-dom";
import { PublicRoute } from "./routes";
import { useEffect } from "react";
import { GlobalStyles } from './styles/GlobalStyles.styled';
import { FontStyles } from "./styles/FontStyles";
import { useAuthStore } from "./store/auth";

import SharedLayout from "./components/SharedLayout";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import ConditionsPage from "./pages/ConditionsPage";
import CongratsPage from "./pages/CongratsPage";
import PolicyPage from "./pages/PolicyPage";
import NotFoundPage from "./pages/NotFoundPage";
import ChangeEmailPage from "./pages/ChangeEmailPage";
import ResetPasswordPage from "./pages/ResetPasswordPage";
import ChangePasswordPage from "./pages/ChangePasswordPage";
import CreateNewPasswordPage from "./pages/CreateNewPasswordPage";
import CoursesPage from "./pages/CoursesPage";


const App = () => {
  const isAuth = useAuthStore((state) => state.isAuth);
  const refresh = useAuthStore((state) => state.refresh);
  const setToken = useAuthStore((state) => state.setToken);
  const token = useAuthStore((state) => state.token);
  console.log(isAuth);
  console.log(token);

  useEffect(() => {
    const fetchUserData = async () => {
      await refresh();
    };

    if (token) fetchUserData();
  }, [refresh, token]);

  useEffect(() => {
    const urlSearchParams = new URLSearchParams(window.location.search);
    const googleToken = urlSearchParams.get('token');
    console.log('googleToken:', googleToken);

    if (googleToken) {
      setToken(googleToken);
    }
  }, [setToken])

  return (
    <>
      <GlobalStyles />
      <FontStyles />
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<CoursesPage />} />
          
          <Route
            path="/register"
            element={
              <PublicRoute
                redirectTo='/login'
                component={<RegisterPage />}
                restricted
              />
              
            }
          />

          <Route
            path="/login"
            element={
              <PublicRoute
                redirectTo='/'
                isAuthenticated={isAuth}
                component={<LoginPage />}
                restricted
              />
            }
          />

          <Route path="/change-email" element={<ChangeEmailPage />} />
          <Route path="/reset-password" element={<ResetPasswordPage />} />
          <Route path="/change-password" element={<ChangePasswordPage />} />
          <Route path="/create-password" element={<CreateNewPasswordPage />} />

          <Route path="/conditions" element={<ConditionsPage />} />
          <Route path="/policy" element={<PolicyPage />} />
          <Route path="/success" element={<CongratsPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </>
  )
}


export default App;
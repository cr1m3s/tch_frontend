import { Routes, Route } from "react-router-dom";
import { PublicRoute, PrivatRoute } from "./routes";
import { useEffect, useState } from "react";
import { GlobalStyles } from './styles/GlobalStyles.styled';
import { FontStyles } from "./styles/FontStyles";
import {
  getUser,
  setDataToLocalStorage,
  getDataFromLocalStorage
} from "./services";

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
  const [isLoggedIn, setIsloggedIn] = useState(false);
  

  useEffect(() => {
    if ((typeof getDataFromLocalStorage("token")) === "string") {
      setIsloggedIn(true);
      return;
    }

    setIsloggedIn(false);
  }, []);

  useEffect(() => {
    const fetchUserData = async () => {
      const response = await getUser();

      if (response === "failed") {
        setIsloggedIn(false);
      }
    }

    fetchUserData();
  }, []);

  useEffect(() => {
    const urlSearchParams = new URLSearchParams(window.location.search);
    const googleToken = urlSearchParams.get('token');


    if (googleToken) {
      setDataToLocalStorage("token", googleToken);
    }
  }, [])

  return (
    <>
      <GlobalStyles />
      <FontStyles />
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route
            index
            element={
              <PrivatRoute
                isAuthenticated={isLoggedIn}
                redirectTo="/login"
                component={<CoursesPage isLoggedIn={isLoggedIn} />}
              />
            }
          />
          
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
                isAuthenticated={isLoggedIn}
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
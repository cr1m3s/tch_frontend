import { Routes, Route } from "react-router-dom";
import { GlobalStyles } from './styles/GlobalStyles.styled';
import { FontStyles } from "./styles/FontStyles";
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


function App() {
  return (
    <>
      <GlobalStyles />
      <FontStyles />

      <Routes>
        <Route path="/" element={<SharedLayout/>}>
          <Route index element={<>home page</>} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage/>} />
          <Route path="/change-email" element={<ChangeEmailPage />} />
          <Route path="/reset-password" element={<ResetPasswordPage />} />
          <Route path="/change-password" element={<ChangePasswordPage />} />

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
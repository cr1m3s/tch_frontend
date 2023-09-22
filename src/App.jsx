
// import { Button } from './components/Button/Button';
import { Routes, Route } from "react-router-dom";
import { GlobalStyles } from './styles/GlobalStyles.styled';
import SharedLayout from "./components/SharedLayout";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import ConditionsPage from "./pages/ConditionsPage";



function App() {
  return (
    <>
      <GlobalStyles />

      <Routes>
        <Route path="/" element={<SharedLayout/>}>
          <Route index element={<>home page</>} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage/>} />
          
          <Route path="/conditions" element={<ConditionsPage />} />
        </Route>

      </Routes>


        {/* <Button variant="secondary" size="fluid" icon="arrow" iconPosition="right" >Button</Button> */}

    </>
  )
}

export default App;

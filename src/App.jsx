
import { Button } from './components/Button/Button';
import { GlobalStyles } from './styles/GlobalStyles.styled';
function App() {
  return (
    <>
      <GlobalStyles />
      <div style={{ padding: "120px" }}>
        <Button variant="primary" disabled size="big" icon="arrow" iconPosition="right" >Button</Button>
      </div>
    </>
  )
}

export default App

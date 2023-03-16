import './App.css';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
const App = () => {
  const navigate = useNavigate();
  return (
    <div className='App'>
      <h1>home page</h1>
      <Button style={{width:"100%"}} onClick={()=>navigate("create")}>next</Button>
    </div>
  )
}

export default App;
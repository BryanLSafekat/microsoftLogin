import "./App.css";
import axios from "axios";
import { Button } from 'react-bootstrap';
import MicrosoftLogin from 'reactjs-social-login';

function App() {
  const handleLogin = async (data) => {
    try {
      const response = await axios.get("http://localhost:3001/auth");
      console.log("Acceso Token: ", response.data);
    } catch (error) {
      console.log("Error: ", error);
    }
  };
  return (
    <>
      <header>
        <h1>Autenticación Microsoft</h1>
        <button onClick={handleLogin}>Login with Microsoft</button>
      </header>
    </>
  );
}

export default App;

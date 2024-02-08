import "./App.css";
import axios from "axios";
import { MicrosoftLoginButton } from "react-social-login-buttons";

function App() {
  const handleMicrosoftResponse = async (data) => {
    try {
      const response = await axios.get(
        `http://localhost:8080/auth?code=${data.code}`
      );
      console.log("Access Token:", response.data);
    } catch (error) {
      console.log("Error:", error);
    }
  };

  return (
    <>
      <h1>Autenticación Microsoft</h1>
      <MicrosoftLoginButton onClick={handleMicrosoftResponse} />
    </>
  );
}

export default App;

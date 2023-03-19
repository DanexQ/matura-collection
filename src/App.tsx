import styled from "styled-components";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <div>
      <Navbar />
      <SomeContent>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam.
      </SomeContent>
    </div>
  );
}

export default App;

const SomeContent = styled.div`
  height: 200vh;
`;

import Pages from "./pages/Pages";
import Category from "./components/Category";
import { BrowserRouter } from "react-router-dom";
import Search from "./components/Search";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { GiKnifeFork } from "react-icons/gi";
import "./App.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav>
          <GiKnifeFork />
          <Logo to={"/"}>Delicious Foods</Logo>
        </Nav>
        <Search />
        <Category />
        <Pages />
      </BrowserRouter>
    </div>
  );
}

const Logo = styled(Link)`
  text-decoration: none;
  font-size: 1rem;
  font-weight: 600;
  font-family: "Lobster Two", cursive;
  color: white;
`;

const Nav = styled.div`
  padding: 1.7rem;
  display: flex;
  justify-content: flex-start;
  align-item: center;
  position: fixed;
  z-index: 100;
  opacity: 0.9;
  background: #313131;
  color: white;
  width: 100%;
  left: 0;
  top: 0;
  svg {
    font-size: 2rem;
  }

  @media (max-width: 768px) {
    justify-content: center;
    padding: 1.4rem;
  }
`;

export default App;

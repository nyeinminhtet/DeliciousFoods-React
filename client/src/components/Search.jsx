import React, { useState } from "react";
import styled from "styled-components";
import { FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Search = () => {
  const [input, setInput] = useState("");
  const navigate = useNavigate();

  const submit = (e) => {
    e.preventDefault();
    navigate("/searched/" + input);
    setInput("");
  };
  return (
    <FormStyle onSubmit={submit}>
      <div>
        <FaSearch></FaSearch>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
      </div>
    </FormStyle>
  );
};
const FormStyle = styled.form`
  margin: 0rem 10rem;
  margin-top: 10rem;

  div {
    position: relative;
    width: 100%;
  }
  input {
    boder: none;
    background: linear-gradient(35deg, #494949, #313131);
    font-size: 1.5rem;
    color: white;
    padding: 1rem 3rem;
    border-radius: 1rem;
    outline: none;
    width: 100%;
  }
  svg {
    position: absolute;
    left: 0;
    top: 50%;
    transform: translate(100%, -50%);
    color: white;
  }
  @media (max-width: 768px) {
    width: 100%;
    margin-left: 0.5rem;
    input {
      padding: 0.5rem 2.5rem;
      font-size: 1.2rem;
      width: 100%;
    }
  }
`;

export default Search;

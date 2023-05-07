import styled from "styled-components";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Config } from "../config/config";

import React from "react";

const Recipe = () => {
  const params = useParams();
  const [details, setDetails] = useState({});
  const [activeStep, setActiveStep] = useState("instructions");

  useEffect(() => {
    getDetail();
  }, [params.name]);

  const getDetail = async () => {
    const response = await fetch(
      `https://api.spoonacular.com/recipes/${params.name}/information?apiKey=${Config.apiBaseUrl}`
    );
    const data = await response.json();
    setDetails(data);
  };
  return (
    <DetailWrapper>
      <div>
        <h2>{details.title}</h2>
        <img src={details.image} alt="" />
      </div>
      <Info>
        <Button
          className={activeStep === "instructions" ? "active" : ""}
          onClick={() => setActiveStep("instructions")}
        >
          Instructions
        </Button>
        <Button
          className={activeStep === "ingredients" ? "active" : ""}
          onClick={() => setActiveStep("ingredients")}
        >
          Ingredients
        </Button>
        {activeStep === "instructions" && (
          <div>
            <h3 dangerouslySetInnerHTML={{ __html: details.summary }}></h3>
            <h3 dangerouslySetInnerHTML={{ __html: details.instructions }}></h3>
          </div>
        )}
        {activeStep === "ingredients" && (
          <ul>
            {details.extendedIngredients.map((item) => (
              <li key={item.id}>{item.original}</li>
            ))}
          </ul>
        )}
      </Info>
    </DetailWrapper>
  );
};

const DetailWrapper = styled.div`
  margin-top: 10rem;
  margin-bottom: 5rem;
  display: flex;
  .active {
    background: linear-gradient(35deg, #494949, #313131);
    color: white;
  }
  h2 {
    font-size: 2rem;
    line-height: 1rem;
    margin-bottom: 2rem;
  }
  ul {
    margin-top: 2rem;
  }
  img {
    max-width: 400px;
  }
  @media (max-width: 768px) {
    margin-top: 3rem;
    margin-bottom: 4rem;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    h2 {
      font-size: 1.2rem;
      margin-left: 1rem;
    }
    img {
      object-fit: cover;
      max-width: 300px;
    }
    ul {
      margin-top: 1rem;
      height: 100vh;
    }
  }
`;

const Button = styled.button`
  padding: 1rem 2rem;
  color: #313131;
  background: white;
  border: 2px solid black;
  margin-right: 2rem;
  font-weight: 600;
  cursor: pointer;

  @media (max-width: 768px) {
    padding: 1rem;
  }
  @media (min-width: 768px) {
    margin-right: 2rem;
    padding: 0.6rem;
  }
`;
const Info = styled.div`
  margin-left: 10rem;
  h3 {
    font-size: 1rem;
  }

  @media (max-width: 768px) {
    margin-left: 2rem;
    margin-top: 1rem;
  }
  @media (min-width: 768px) {
    margin-left: 1rem;
  }
`;

export default Recipe;

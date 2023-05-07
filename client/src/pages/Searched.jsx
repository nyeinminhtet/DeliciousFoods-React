import React, { useState, useEffect } from "react";
import { Config } from "../config/config";
import { Link, useParams } from "react-router-dom";
import styled from "styled-components";

function Searched() {
  const [searchRecipe, setSearchRecipe] = useState([]);
  const param = useParams();

  useEffect(() => {
    getSearched(param.search);
  }, [param.search]);

  const getSearched = async (name) => {
    const response = await fetch(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=${Config.apiBaseUrl}&number=9&query=${name}`
    );
    const recipe = await response.json();
    setSearchRecipe(recipe.results);
  };

  return (
    <Grid>
      {searchRecipe.map((item) => {
        return (
          <Link to={"/recipe/" + item.id}>
            <Card key={item.id}>
              <img src={item.image} />
              <h4>{item.title}</h4>
            </Card>
          </Link>
        );
      })}
    </Grid>
  );
}
const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
  grid-grap: 3rem;
`;

const Card = styled.div`
  img {
    width: 90%;
    border-radius: 2rem;
  }
  a {
    text-decoration: none;
  }
  h4 {
    text-align: center;
    padding: 1rem;
  }
`;

export default Searched;

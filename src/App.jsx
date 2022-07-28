import React, { useEffect } from "react";

const API_URL = "http://www.omdbapi.com/?i=tt3896198&apikey=ce110aaa";

const App = () => {
  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();
    console.log(data);
  };
  useEffect(() => {
    searchMovies("ajab prem ki gazab kahani");
  }, []);
  return <div>App</div>;
};

export default App;

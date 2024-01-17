import React, { useState } from "react";
import { Box } from "@mui/material";
import Herobanner from "../Components/Herobanner";
import SearchExercises from "../Components/SearchExercises";
import Exercises from "../Components/Exercises";

const Home = () => {
  const [bodyPart, setBodyPart] = useState('all')
  const [Exercise, setExercise] = useState([])

  return (
    <Box>
      <Herobanner />

      <SearchExercises setExercise={setExercise} 
      bodyPart={bodyPart} 
      setBodyPart={setBodyPart}/>

      <Exercises 
      Exercise ={Exercise} />
      setExercise={setExercise} 
      bodyPart={bodyPart} 
    </Box>
  );
};

export default Home;

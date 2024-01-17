import { Pagination } from "@mui/material/Pagination";
import { Box, Stack, Typography } from "@mui/material";
import { exerciseOptions, fetchData } from "../utils/fetchData";
import { useEffect, useState } from "react";
import ExerciseCard from "./ExerciseCard";


const Exercises = ({Exercise, setExercise, bodyPart }) => {
  console.log(Exercise)

  return (
    <Box id="Exercise"
    sx={{mt: { lg: '110px'}}}
    mt='50px'
    p="20px">
      <Typography variant="h3" mb="46px">Showing Results
      </Typography>
      <Stack direction="row" sx={{gap: {lg:'110px', xs:'50px'}}}
      flexWrap="wrap" justifyContent='center'>
        {Exercise.map((exercise, index)=> <ExerciseCard key={index} exercise={exercise}/>)}
      </Stack>
    </Box>
  )
};

export default Exercises;

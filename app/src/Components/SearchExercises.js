import React from "react";
import { useState, useEffect } from "react";
import { Box, Typography, TextField, Stack, Button } from "@mui/material";
import { fetchData, exerciseOptions } from "../utils/fetchData";
import HorizontalScrolBar from "./HorizontalScrolBar";

const SearchExercises = ({setExercise,bodyPart,setBodyPart}) => {
  const [search,setSearch]=useState('')
  const [bodyParts, setBodyParts] = useState([])

  useEffect(()=>{
    const fetchExercises = async()=> {
      const bodyPartsData = await fetchData('https://exercisedb.p.rapidapi.com/exercises/bodyPartList', exerciseOptions)
      
      setBodyParts(['all', ...bodyPartsData])
    }

    fetchExercises()
  },[])



  const searchHandler = async()=> {
    if(search) {
      const exerciseData = await fetchData('https://exercisedb.p.rapidapi.com/exercises', exerciseOptions)
      console.log(exerciseData)
      
      const searchedExercises = exerciseData.filter((item)=> {
        item.bodypart.toLowerCase().includes(search) 
        || item.equipment.toLowerCase().includes(search) 
        || item.name.toLowerCase().includes(search) 
        || item.target.toLowerCase().includes(search)
      }
      )
      setSearch('')
      setExercise(searchedExercises)
    }
  }



  return (
    <Stack padding={10} justifyContent="center" alignItems="center" mt="5px">
      <Typography
        fontWeight="900px"
        mb={3}
        sx={{ fontSize: { lg: "50px", xs: "30px" } }}
      >
        Awesome Exercises You <br /> Should Know
      </Typography>
      <Box mb="72px" position="relative">
        <TextField
          sx={{
            input: {
              fontWeight: "700",
              border: "none",
              borderRadius: "4px",
            },
            width: { lg: "800px", xs: "350px" },
            backgroundColor: "#fff",
            borderRadius: "30px",
          }}
          height="76px"
          value={search}
          placeholder="Search Exercises"
          onChange={(e) => {setSearch(e.target.value.toLowerCase())}}
          type="text"
        />
        <Button
          className="search-btn"
          sx={{
            bgcolor: "#ff2625",
            color: "#fff",
            width: { lg: "175px", xs: "100px" },
            fontSize: { lg: "20px", xs: "14px" },
            height: "50px",
            position: "absolute",
          }}
          onClick={searchHandler}
        >
          Search
        </Button>
      </Box>
      <Box sx={{position:'ralative',width:"100%" ,p:'20px'}}>
            <HorizontalScrolBar data={bodyParts} bodyPart={bodyPart} setBodyPart={setBodyPart}/>
      </Box>
    </Stack>
  );
};

export default SearchExercises;

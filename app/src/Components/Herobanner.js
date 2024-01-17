import React from "react";
import { Stack, Typography, Box, Button, Hidden } from "@mui/material";
import banner from "../assets/images/gym_fitness.jpg";

const Herobanner = () => {
  return (
    <Box
      sx={{ mt: { lg: "212px", xs: "70px" }, ml: { sm: "50px" } }}
      position="relative"
      p="20px"
    >
      <Typography color="#FF2625" fontWeight="600px" fontSize="26px" mb={4}>
        Fitness Club
      </Typography>
      <Typography
        fontWeight={700}
        sx={{ fontSize: { lg: "44px", xs: "40px" } }}
        mb={3}
      >
        Sweat,Smile <br /> And Repeat
      </Typography>
      <Typography fontSize={22} lineHeight="35px" mb={4}>
        Check out the most effective exercises
      </Typography>
      <Button
        variant="contained"
        color="error"
        href="#exercises"
        sx={{ backgroundColor: "#FF2625", padding: "9px" }}
      >
        Expplore Exercises
      </Button>
      <Typography
        color={"#FF2625"}
        fontWeight={700}
        fontSize={300}
        sx={{
          opacity: 0.1,
          display: { lg: "block", xs: "none" },
        }}
      >
        Exercise
      </Typography>
      <img src={banner} alt="banner" className="hero-banner-img" />
    </Box>
  );
};

export default Herobanner;

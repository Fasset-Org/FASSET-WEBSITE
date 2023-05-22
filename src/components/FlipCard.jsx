import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent, Stack, Typography } from "@mui/material";

const FlipCard = ({ value, definition }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const MotionStack = motion(Stack);
  const MotionTypography = motion(Typography);

  // useEffect(() => {
  //   return () => {
  //     setIsFlipped(false);
  //   };
  // });

  const flipVariants = {
    front: {
      rotateY: 0,
      opacity: 1
      // transition: { duration: 0.5 }
    },
    back: {
      opacity: 1,
      transition: { duration: 2 }
    }
  };

  const textFilpVariants = {
    front: {
      rotateY: 0,
      opacity: 1
      // transition: { duration: 0.5 }
    },
    back: {
      rotateY: 180,
      opacity: 1
      // transition: { duration: 0.5 }
    }
  };

  return (
    <MotionStack
      // onMouseOver={() => setIsFlipped(true)}
      // onMouseLeave={() => setIsFlipped(false)}
      variants={flipVariants}
      animate={isFlipped ? "back" : "front"}
      initial={"front"}
      // whileInView={() => {
      //   setIsFlipped(true);
      //   return "back";
      // }}
      sx={{ perspective: 1000, height: 210 }}
    >
      <Card
        className="flip-card"
        sx={{ width: "100%", height: "100%" }}
        component={Stack}
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        <CardContent sx={{ textAlign: "center" }}>
          {!isFlipped ? (
            <Typography
              fontSize={20}
              fontWeight="bolder"
              textTransform="uppercase"
              fontFamily="Helvetica Neue"
              textAlign="center"
              sx={{ color: "primary.main" }}
            >
              {value}
            </Typography>
          ) : (
            <MotionTypography
              variants={textFilpVariants}
              // animate={isFlipped ? "back" : "front"}
              sx={{ rotateY: 180 }}
            >
              {definition}
            </MotionTypography>
          )}
        </CardContent>
      </Card>
    </MotionStack>
  );
};

export default FlipCard;

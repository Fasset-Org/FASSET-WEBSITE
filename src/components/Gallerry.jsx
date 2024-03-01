import * as React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import { Stack, Typography } from "@mui/material";
import img1 from "../images/2023 AGM/ZooM-6849.jpg";
import img2 from "../images/2023 AGM/ZooM-6852.jpg";
import img3 from "../images/2023 AGM/ZooM-6926 (1).jpg";
import img4 from "../images/2023 AGM/ZooM-6978.jpg";
import img5 from "../images/2023 AGM/ZooM-7190.jpg";
import img6 from "../images/2023 AGM/ZooM-7229.jpg";
import img7 from "../images/2023 AGM/ZooM-7233.jpg";
import img8 from "../images/2023 AGM/ZooM-7268.jpg";
import img9 from "../images/2023 AGM/ZooM-7285.jpg";
import img10 from "../images/2023 AGM/ZooM-7294.jpg";
import img11 from "../images/2023 AGM/ZooM-7310.jpg";
import img12 from "../images/2023 AGM/ZooM-6849.jpg";

export default function StandardImageList() {
  return (
    <Stack paddingX={{ md: 10, xs: 2 }}>
      <Typography
        fontSize={20}
        fontWeight="bolder"
        textTransform="uppercase"
        textAlign="center"
        sx={{ color: "primary.main", mb: 1 }}
      >
        Gallery
      </Typography>
      <ImageList sx={{ width: "100%" }} cols={3}>
        {itemData.map((item) => (
          <ImageListItem key={item.img}>
            <img
              srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
              src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
              alt={item.title}
              loading="lazy"
            />
          </ImageListItem>
        ))}
      </ImageList>
    </Stack>
  );
}

const itemData = [
  {
    img: img1,
    title: "Breakfast"
  },
  {
    img: img2,
    title: "Burger"
  },
  {
    img: img3,
    title: "Camera"
  },
  {
    img: img4,
    title: "Coffee"
  },
  {
    img: img5,
    title: "Hats"
  },
  {
    img: img6,
    title: "Honey"
  },
  {
    img: img7,
    title: "Basketball"
  },
  {
    img: img8,
    title: "Fern"
  },
  {
    img: img9,
    title: "Mushrooms"
  },
  {
    img: img10,
    title: "Tomato basil"
  },
  {
    img: img11,
    title: "Sea star"
  },
  {
    img: img12,
    title: "Bike"
  }
];

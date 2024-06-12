import * as React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import { Button, Stack, Typography } from "@mui/material";
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
    <Stack paddingX={{ md: 10, xs: 2 }} spacing={2} paddingY={2}>
      <Typography
        fontSize={20}
        fontWeight="bolder"
        textTransform="uppercase"
        textAlign="center"
        sx={{ color: "primary.main", }}
      >
        Gallery
      </Typography>
      <Stack display={{ md: "block", xs: "none" }}>
        <ImageList sx={{ width: "100%" }} cols={4} gap={10}>
          {itemData.map((item) => (
            <ImageListItem key={item.img}>
              <img
                // srcSet={`${item.img}`}
                src={`${item.img}`}
                alt={item.title}
                loading="lazy"
                style={{
                  height: 350,
                  objectFit: "cover",
                  objectPosition: "center top"
                }}
                onClick={() => {
                  window.open(item.img, "_blank", "noopener,noreferrer");
                }}
              />
            </ImageListItem>
          ))}
        </ImageList>
      </Stack>

      <Stack display={{ md: "none", xs: "block" }}>
        <ImageList sx={{ width: "100%" }} cols={1} gap={10}>
          {itemData.map((item, i) => (
            <ImageListItem key={item.img}>
              <img
                // srcSet={`${item.img}`}
                src={`${item.img}`}
                alt={`Shoot ${i}`}
                loading="lazy"
                style={{
                  height: 350,
                  objectFit: "cover",
                  objectPosition: "center top"
                }}
                onClick={() => {
                  window.open(item.img, "_blank", "noopener,noreferrer");
                }}
              />
            </ImageListItem>
          ))}
        </ImageList>
      </Stack>

      <Button variant="contained">See More</Button>
    </Stack>
  );
}

const itemData = [
  // {
  //   img: img1,
  //   title: "Breakfast"
  // },
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

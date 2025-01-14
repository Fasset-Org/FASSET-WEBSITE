import * as React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import { Stack, Typography } from "@mui/material";
import img2 from "../images/gallery-images/FASSET-AGM-24-1.jpg";
import img3 from "../images/gallery-images/FASSET-AGM-24-111.jpg";
import img4 from "../images/gallery-images/FASSET-AGM-24-137.jpg";
import img5 from "../images/gallery-images/FASSET-AGM-24-140.jpg";
import img6 from "../images/gallery-images/FASSET-AGM-24-165.jpg";
import img7 from "../images/gallery-images/FASSET-AGM-24-178.jpg";
import img8 from "../images/gallery-images/FASSET-AGM-24-55.jpg";
import img9 from "../images/gallery-images/FASSET-AGM-24-68.jpg";
// import img10 from "../images/2023 AGM/ZooM-7294.jpg";
// import img11 from "../images/2023 AGM/ZooM-7310.jpg";
// import img12 from "../images/2023 AGM/ZooM-6849.jpg";

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

      {/* <Button variant="contained">See More</Button> */}
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
  // {
  //   img: img10,
  //   title: "Tomato basil"
  // },
  // {
  //   img: img11,
  //   title: "Sea star"
  // },
  // {
  //   img: img12,
  //   title: "Bike"
  // }
];

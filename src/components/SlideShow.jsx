import React, { useEffect, useState } from "react";
import "react-slideshow-image/dist/styles.css";
import "./Navigation/tab.css";
import { useQuery } from "@tanstack/react-query";
import UserQuery from "../stateQueries/User";
import { Skeleton, Stack } from "@mui/material";
import "./SlideShow.css";

const Slideshow = ({ banners }) => {
  const { data, isLoading } = useQuery({
    queryKey: ["banners"],
    queryFn: async () => {
      return UserQuery.getAllBanners();
    }
  });

  const [slideIndex, setSlideIndex] = useState(0);

  useEffect(() => {
    if (data?.banners?.length > 0) {
      const showSlides = () => {
        const slides = document.getElementsByClassName("mySlides");
        const dots = document.getElementsByClassName("dot");

        for (let i = 0; i < slides.length; i++) {
          slides[i].style.display = "none";
        }

        const nextSlideIndex = (slideIndex + 1) % slides.length;

        for (let i = 0; i < dots.length; i++) {
          dots[i].className = dots[i].className.replace(" active", "");
        }

        if (slides.length > 0) {
          slides[nextSlideIndex].style.display = "block";
          dots[nextSlideIndex].className += " active";
        }

        setSlideIndex(nextSlideIndex);
      };

      const interval = setInterval(showSlides, 3000); // Change image every 3 seconds

      return () => clearInterval(interval); // Cleanup interval on unmount
    }
  }, [data, slideIndex]);

  if (isLoading) {
    return <Skeleton variant="rectangular" width="100%" height={350} />;
  }

  return (
    <Stack spacing={2}>
      <Stack className="slideshow-container">
        {data?.banners?.length > 0 &&
          data?.banners.map((banner, index) => {
            return (
              <div className="mySlides fade" key={banner.id}>
                <div className="numbertext">{`${index + 1} / ${
                  data.banners.length
                }`}</div>
                <Stack display={{ md: "block", xs: "none" }}>
                  <img
                    src={`${process.env.REACT_APP_API_URL}/uploads/banners/${banner.bannerImageURL}`}
                    style={{
                      height: 400,
                      objectPosition: "100% 100%",
                      width: "100%"
                      // objectFit: xs ? 'scale-down' : "fill"
                    }}
                    alt=""
                    loading="lazy"
                  />
                </Stack>
                <Stack display={{ md: "none", xs: "block" }}>
                  <img
                    src={`${process.env.REACT_APP_API_URL}/uploads/banners/${banner.bannerImageURL}`}
                    style={{
                      height: 250,
                      objectPosition: "100% 100%",
                      width: "100%",
                      objectFit: 'fill'
                    }}
                    loading="lazy"
                    alt=""
                  />
                </Stack>
                <div className="text">Caption Text</div>
              </div>
            );
          })}

        {/* <div class="mySlides fade">
          <div class="numbertext">2 / 3</div>
          <img
            src={`${process.env.REACT_APP_API_URL}/uploads/banners/${data?.banners[0].bannerImageURL}`}
            style={{ width: "100%" }}
            alt=""
          />
          <div class="text">Caption Two</div>
        </div>

        <div class="mySlides fade">
          <div class="numbertext">3 / 3</div>
          <img
            src={`${process.env.REACT_APP_API_URL}/uploads/banners/${data?.banners[1].bannerImageURL}`}
            style={{ width: "100%" }}
            alt=""
          />
          <div class="text">Caption Three</div>
        </div> */}
      </Stack>

      <div style={{ textAlign: "center" }}>
        {data?.banners?.map((banner, i) => {
          return <span class="dot" key={i}></span>;
        })}
      </div>
    </Stack>
  );

  // return (
  //   <Slide
  //     autoplay={true}
  //     indicators={true}
  //     pauseOnHover={false}
  //     cssClass="slideshow"
  //     arrows={false}
  //   >
  //     {data?.banners.map((banner, index) => {
  //       return (
  //         <div key={index} style={{ width: "100%", display: "block" }}>
  //           <div
  //             style={{
  //               height: 350
  //               // backgroundImage: `url(${slideImage.url})`,
  //               // backgroundRepeat: "cover",
  //               // backgroundSize: "100% 100%",
  //               // backgroundPosition: "center",
  //             }}
  //           >
  //             <img
  //               src={`${process.env.REACT_APP_API_URL}/uploads/banners/${banner.bannerImageURL}`}
  //               alt=""
  //               style={{
  //                 objectFit: "fit",
  //                 height: 350,
  //                 objectPosition: "100% 100%"
  //               }}
  //               height="100%"
  //               width="100%"
  //             />
  //           </div>
  //         </div>
  //       );
  //     })}
  //   </Slide>
  // );
};

export default Slideshow;

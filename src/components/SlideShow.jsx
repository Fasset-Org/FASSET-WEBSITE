import React, { useEffect, useState } from "react";
import "react-slideshow-image/dist/styles.css";
import "./Navigation/tab.css";
import { useQuery } from "@tanstack/react-query";
import UserQuery from "../stateQueries/User";
import { Skeleton, Stack } from "@mui/material";
import "./SlideShow.css";
import banner1 from "../images/website-banners/Web Banner 1.jpg";
import banner2 from "../images/website-banners/web banner 2.jpg";
import banner3 from "../images/website-banners/web banner 3.jpg";

const Slideshow = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["banners"],
    queryFn: async () => {
      return UserQuery.getAllBanners();
    }
  });

  const banners = [banner1, banner2, banner3];

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
      {/* <Stack className="slideshow-container">
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
                      width: "100%",
                      height: 400,
                      objectPosition: "center",
                      objectFit: "fill",
                      imageRendering: "auto"
                    }}
                    alt={banner.altText || "Banner image"}
                    loading="lazy"
                  />
                </Stack>
                <Stack display={{ md: "none", xs: "block" }}>
                  <img
                    src={`${process.env.REACT_APP_API_URL}/uploads/banners/${banner.bannerImageURL}`}
                    style={{
                      height: 180,
                      objectPosition: "100% 100%",
                      width: "100%",
                      objectFit: "fill"
                    }}
                    // loading="lazy"
                    alt=""
                  />
                </Stack>
          
              </div>
            );
          })}

       
      </Stack>

      <div style={{ textAlign: "center" }}>
        {data?.banners?.map((banner, i) => {
          return <span className="dot" key={i}></span>;
        })}
      </div> */}

      <Stack className="slideshow-container">
        {banners?.length > 0 &&
          banners.map((banner, index) => {
            return (
              <div className="mySlides fade" key={index}>
                <div className="numbertext">{`${index + 1} / ${
                  banners.length
                }`}</div>
                <Stack display={{ md: "block", xs: "none" }}>
                  <img
                    src={banner}
                    style={{
                      width: "100%",
                      height: 400,
                      objectPosition: "center",
                      objectFit: "fill",
                      imageRendering: "auto"
                    }}
                    alt={"Banner" + index}
                    loading="lazy"
                  />
                </Stack>
                <Stack display={{ md: "none", xs: "block" }}>
                  <img
                    src={banner}
                    style={{
                      height: 180,
                      objectPosition: "100% 100%",
                      width: "100%",
                      objectFit: "fill"
                    }}
                    // loading="lazy"
                    alt=""
                  />
                </Stack>
              </div>
            );
          })}
      </Stack>

      <div style={{ textAlign: "center" }}>
        {banners?.map((banner, i) => {
          return <span className="dot" key={i}></span>;
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

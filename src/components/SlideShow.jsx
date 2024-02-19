import React from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import "./Navigation/tab.css";
import { useQuery } from "@tanstack/react-query";
import UserQuery from "../stateQueries/User";

const Slideshow = ({ banners }) => {
  const { data } = useQuery({
    queryKey: ["banners"],
    queryFn: async () => {
      return UserQuery.getAllBanners();
    }
  });

  return (
    <Slide
      autoplay={true}
      indicators={true}
      pauseOnHover={false}
      cssClass="slideshow"
      arrows={false}
    >
      {data?.banners.map((banner, index) => (
        <div key={index} style={{ width: "100%", display: "block" }}>
          <div
            style={{
              height: 350
              // backgroundImage: `url(${slideImage.url})`,
              // backgroundRepeat: "cover",
              // backgroundSize: "100% 100%",
              // backgroundPosition: "center",
            }}
          >
            <img
              src={`http://localhost:8001/uploads/banners/${banner.bannerImageURL}`}
              alt=""
              style={{
                objectFit: "fit",
                height: 350,
                objectPosition: "100% 100%"
              }}
              height="100%"
              width="100%"
            />
          </div>
        </div>
      ))}
    </Slide>
  );
};

export default Slideshow;

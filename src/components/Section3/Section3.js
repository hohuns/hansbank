import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Box } from "@mui/material";
import { Typography, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";

const Section3 = () => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("sm"));

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 2000,
    cssEase: "linear",
  };
  return (
    <>
      {!matches ? (
        <Box
          sx={{
            padding: " 130px",
            borderTop: " 1px solid #ddd;",
          }}
          id="section3"
        >
          <Box component="div" mb="150px">
            <Typography variant="h5" sx={{ color: "green" }}>
              NOT SURE YET?
            </Typography>
            <Typography variant="h4">
              Millions of Bankists are already making their lifes simpler.
            </Typography>
          </Box>
          <Box
            component="div"
            sx={{
              width: "50rem",
              justifyContent: "center",
              display: "inline",
              alignItems: "center",
            }}
          >
            <Slider {...settings}>
              <div
                sx={{
                  top: 0,
                  width: "100%",
                  height: "50rem",
                  display: "flex",
                  alignItems: "center",
                  flexDirection: "column",
                }}
              >
                <Box
                  variant="div"
                  sx={{
                    marginLeft: "3rem",
                    fontStyle: "normal",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Typography
                    variant="h5"
                    sx={{ color: "green", marginBottom: "20px" }}
                  >
                    Best financial decision ever!
                  </Typography>
                  <Typography variant="h6" mb="30px">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Accusantium quas quisquam non? Quas voluptate nulla minima
                    deleniti optio ullam nesciunt, numquam corporis et
                    asperiores laboriosam sunt, praesentium suscipit blanditiis.
                    Necessitatibus id alias reiciendis, perferendis facere
                    pariatur dolore veniam autem esse non voluptatem saepe
                    provident nihil molestiae.
                  </Typography>
                </Box>
                <Box
                  variant="div"
                  sx={{
                    marginLeft: "3rem",
                    fontStyle: "normal",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Box
                    component="img"
                    src="img/user-1.jpg"
                    sx={{
                      gridRow: "1/ span 2",
                      width: "3.5rem",
                      borderRadius: "50%",
                    }}
                  ></Box>
                  <Box variant="div">
                    <Typography variant="subtitle1">JOO SUNG JAE</Typography>
                    <Typography variant="subtitle2">
                      Seoul, South Korea
                    </Typography>
                  </Box>
                </Box>
              </div>
              <div
                sx={{
                  top: 0,
                  width: "100%",
                  height: "50rem",
                  display: "flex",
                  alignItems: "center",
                  flexDirection: "column",
                }}
              >
                <Box
                  variant="div"
                  sx={{
                    marginLeft: "3rem",
                    fontStyle: "normal",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Typography
                    variant="h5"
                    sx={{ color: "green", marginBottom: "20px" }}
                  >
                    The last step to becoming a complete minimalist
                  </Typography>
                  <Typography variant="h6" mb="30px">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Accusantium quas quisquam non? Quas voluptate nulla minima
                    deleniti optio ullam nesciunt, numquam corporis et
                    asperiores laboriosam sunt, praesentium suscipit blanditiis.
                    Necessitatibus id alias reiciendis, perferendis facere
                    pariatur dolore veniam autem esse non voluptatem saepe
                    provident nihil molestiae.
                  </Typography>
                </Box>
                <Box
                  variant="div"
                  sx={{
                    marginLeft: "3rem",
                    fontStyle: "normal",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Box
                    component="img"
                    src="img/user-2.jpg"
                    sx={{
                      gridRow: "1/ span 2",
                      width: "3.5rem",
                      borderRadius: "50%",
                    }}
                  ></Box>
                  <Box variant="div">
                    <Typography variant="subtitle1">Miyah Miles</Typography>
                    <Typography variant="subtitle2">London, UK</Typography>
                  </Box>
                </Box>
              </div>
              <div
                sx={{
                  top: 0,
                  width: "100%",
                  height: "50rem",
                  display: "flex",
                  alignItems: "center",
                  flexDirection: "column",
                }}
              >
                <Box
                  variant="div"
                  sx={{
                    marginLeft: "3rem",
                    fontStyle: "normal",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Typography
                    variant="h5"
                    sx={{ color: "green", marginBottom: "20px" }}
                  >
                    Finally free from old-school banks
                  </Typography>
                  <Typography variant="h6" mb="30px">
                    Debitis, nihil sit minus suscipit magni aperiam vel tenetur
                    incidunt commodi architecto numquam omnis nulla autem,
                    necessitatibus blanditiis modi similique quidem. Odio
                    aliquam culpa dicta beatae quod maiores ipsa minus
                    consequatur error sunt, deleniti saepe aliquid quos
                    inventore sequi. Necessitatibus id alias reiciendis,
                    perferendis facere.
                  </Typography>
                </Box>
                <Box
                  variant="div"
                  sx={{
                    marginLeft: "3rem",
                    fontStyle: "normal",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Box
                    component="img"
                    src="img/user-3.jpg"
                    sx={{
                      gridRow: "1/ span 2",
                      width: "3.5rem",
                      borderRadius: "50%",
                    }}
                  ></Box>
                  <Box variant="div">
                    <Typography variant="subtitle1">Francisco Gomes</Typography>
                    <Typography variant="subtitle2">
                      Lisbon, Portugal
                    </Typography>
                  </Box>
                </Box>
              </div>
            </Slider>
          </Box>
        </Box>
      ) : (
        <Box
          sx={{
            padding: " 130px",
            borderTop: " 1px solid #ddd;",
          }}
          id="section3"
        >
          <Box component="div" mb="100px">
            <Typography variant="h5" sx={{ color: "green" }}>
              NOT SURE YET?
            </Typography>
            <Typography variant="h4">
              Millions of Bankists are already making their lifes simpler.
            </Typography>
          </Box>
          <Box
            component="div"
            ml="-50px"
            sx={{
              width: "300px",
              height: "300px",
              justifyContent: "center",
              display: "inlineBlock",
            }}
          >
            <Slider {...settings}>
              <div
                sx={{
                  top: 0,
                  width: "100%",
                  display: "flex",
                  alignItems: "center",
                  flexDirection: "column",
                }}
              >
                <Box
                  variant="div"
                  sx={{
                    marginLeft: "3rem",
                    fontStyle: "normal",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    justifyContent: "center",
                  }}
                >
                  <Typography
                    variant="h5"
                    sx={{ color: "green", marginBottom: "20px" }}
                  >
                    Best financial decision ever!
                  </Typography>
                  <Typography variant="h6" mb="30px">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Accusantium quas quisquam non? Quas voluptate nulla minima
                    deleniti optio ullam nesciunt, numquam corporis et
                    asperiores laboriosam sunt, praesentium suscipit blanditiis.
                    Necessitatibus id alias reiciendis, perferendis facere
                    pariatur dolore veniam autem esse non voluptatem saepe
                    provident nihil molestiae.
                  </Typography>
                </Box>
                <Box
                  variant="div"
                  sx={{
                    marginLeft: "3rem",
                    fontStyle: "normal",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Box
                    component="img"
                    src="img/user-1.jpg"
                    sx={{
                      gridRow: "1/ span 2",
                      width: "3.5rem",
                      borderRadius: "50%",
                    }}
                  ></Box>
                  <Box variant="div">
                    <Typography variant="subtitle1">JOO SUNG JAE</Typography>
                    <Typography variant="subtitle2">
                      Seoul, South Korea
                    </Typography>
                  </Box>
                </Box>
              </div>
              <div
                sx={{
                  top: 0,
                  width: "100%",
                  display: "flex",
                  alignItems: "center",
                  flexDirection: "column",
                }}
              >
                <Box
                  variant="div"
                  sx={{
                    marginLeft: "3rem",
                    fontStyle: "normal",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Typography
                    variant="h5"
                    sx={{ color: "green", marginBottom: "20px" }}
                  >
                    The last step to becoming a complete minimalist
                  </Typography>
                  <Typography variant="h6" mb="30px">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Accusantium quas quisquam non? Quas voluptate nulla minima
                    deleniti optio ullam nesciunt, numquam corporis et
                    asperiores laboriosam sunt, praesentium suscipit blanditiis.
                    Necessitatibus id alias reiciendis, perferendis facere
                    pariatur dolore veniam autem esse non voluptatem saepe
                    provident nihil molestiae.
                  </Typography>
                </Box>
                <Box
                  variant="div"
                  sx={{
                    marginLeft: "3rem",
                    fontStyle: "normal",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Box
                    component="img"
                    src="img/user-2.jpg"
                    sx={{
                      gridRow: "1/ span 2",
                      width: "3.5rem",
                      borderRadius: "50%",
                    }}
                  ></Box>
                  <Box variant="div">
                    <Typography variant="subtitle1">Miyah Miles</Typography>
                    <Typography variant="subtitle2">London, UK</Typography>
                  </Box>
                </Box>
              </div>
              <div
                sx={{
                  top: 0,
                  width: "100%",
                  display: "flex",
                  alignItems: "center",
                  flexDirection: "column",
                }}
              >
                <Box
                  variant="div"
                  sx={{
                    marginLeft: "3rem",
                    fontStyle: "normal",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Typography
                    variant="h5"
                    sx={{ color: "green", marginBottom: "20px" }}
                  >
                    Finally free from old-school banks
                  </Typography>
                  <Typography variant="h6" mb="30px">
                    Debitis, nihil sit minus suscipit magni aperiam vel tenetur
                    incidunt commodi architecto numquam omnis nulla autem,
                    necessitatibus blanditiis modi similique quidem. Odio
                    aliquam culpa dicta beatae quod maiores ipsa minus
                    consequatur error sunt, deleniti saepe aliquid quos
                    inventore sequi. Necessitatibus id alias reiciendis,
                    perferendis facere.
                  </Typography>
                </Box>
                <Box
                  variant="div"
                  sx={{
                    marginLeft: "3rem",
                    fontStyle: "normal",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Box
                    component="img"
                    src="img/user-3.jpg"
                    sx={{
                      gridRow: "1/ span 2",
                      width: "3.5rem",
                      borderRadius: "50%",
                    }}
                  ></Box>
                  <Box variant="div">
                    <Typography variant="subtitle1">Francisco Gomes</Typography>
                    <Typography variant="subtitle2">
                      Lisbon, Portugal
                    </Typography>
                  </Box>
                </Box>
              </div>
            </Slider>
          </Box>
        </Box>
      )}
    </>
  );
};

export default Section3;

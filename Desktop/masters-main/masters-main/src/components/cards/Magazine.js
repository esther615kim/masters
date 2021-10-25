import React from "react";
import Slider from "react-styled-carousel";
import { magazine } from "../../components/data.json";
import useStyles from "./styles";
import {
  Container,
  Box,
  Card,
  CardContent,
  CardMedia,
  Typography
} from "@material-ui/core";

const Magazine = () => {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Box sx={{ mt: 5 }}>
        <Typography
          align="left"
          className={classes.title}
          variant="h5">
          Magazine</Typography>
        <Typography align="left"
          className={classes.title}
          variant="subtitle1">How to use Masters 100%</Typography>
        <Container className={classes.wrapper}>
          <Slider cardsToShow={3}>
            {magazine.map((item, i) => {
              return (
                <Card key={i} className={classes.card}>
                  <CardMedia className={classes.media} image={item.imageUri} />

                  <CardContent className={classes.text}>
                    <Typography variant="subtitle2">{item.title}</Typography>
                  </CardContent>
                </Card>
              );
            })}
          </Slider>
        </Container>
      </Box>
    </React.Fragment >
  );
};

export default Magazine;

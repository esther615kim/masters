import React from "react";
import Slider from "react-styled-carousel";
import { local_masters } from "../../components/data.json";
import {
  Container,
  Box,
  Card,
  CardContent,
  CardMedia,
  Typography
} from "@material-ui/core";
import "@fontsource/roboto";
import useStyles from "./styles";

const Hidden = () => {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Box className={classes.boxContainer}>
        <Typography gutterButtom
          align="left"
          className={classes.title}
          variant="h5">
          Local services</Typography>
        <Container className={classes.wrapper}>
          <Slider showDots={false} cardsToShow={3}>
            {local_masters.map((item, i) => {
              return (
                <Card key={i} className={classes.card}>
                  <CardMedia className={classes.media} image={item.imageUri} />
                  <CardContent className={classes.text}>
                    <Typography fontWeight={600} variant="subtitle2">
                      {item.title}
                    </Typography>
                    <Typography color="textSecondary" variant="subtitle2">
                      {item.address}
                    </Typography>
                  </CardContent>
                </Card>
              );
            })}

          </Slider>
        </Container>
      </Box>
    </React.Fragment>
  );
};

export default Hidden;

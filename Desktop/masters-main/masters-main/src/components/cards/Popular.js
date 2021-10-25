import React from "react";
import Slider from "react-styled-carousel";
//import { makeStyles } from "@material-ui/core/styles";
import { popular } from "../../components/data.json";
import useStyles from "./styles";
import {
  Container,
  Box,
  Card,
  //oxCard,
  CardContent,
  CardMedia,
  Typography
} from "@material-ui/core";
import "@fontsource/roboto";
import PersonIcon from '@material-ui/icons/Person';

const Cards = () => {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Box className={classes.boxContainer}>
        <Typography gutterButtom
          align="left"
          className={classes.title}
          variant="h5">
          Popular Services</Typography>
        <Container className={classes.wrapper}>
          <Slider showDots={false} cardsToShow={3}>
            {popular.map((item, i) => {
              return (
                <Card key={i} className={classes.card}>
                  <CardMedia
                    className={classes.media} image={item.url} />
                  <CardContent >
                    <Typography variant="button">{item.title}</Typography>
                    <div className={classes.userNumber}>
                      <Typography gutterButtom variant="caption">
                        <PersonIcon style={{ paddingTop: 5, fontSize: 16, color: "#F79489" }} />
                        {item.active_masters}&nbsp;masters</Typography>
                    </div>
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

export default Cards;

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import { Grid, Container, Paper } from '@material-ui/core';
const REGION = ["Seoul", "Gyeonggido", "Incheon", "Dajeon", "Busan", "Gwangju", "Dagu", "Chungcheong-do", "Jeolla-do", "Gyeongsang-do", "GangWon-do", "Jeju"]

const useStyles = makeStyles((theme) => ({
    title: {
        marginTop: 50,
        fontWeight: "bold",
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        '&:hover': {
            background: 'linear-gradient(45deg, #F79489 30%, #FF8E53 90%)'
        }
    },
}));

export default function LocalMaster() {
    const classes = useStyles();

    function FormRow() {
        return (
            <React.Fragment>
                <Grid item xs={4}>
                    <Paper className={classes.paper}>Seoul</Paper>
                </Grid>
            </React.Fragment>
        );
    }
    return (
        <Container>
            <Typography variant="h5" className={classes.title}>Masters by Region</Typography>
            <Typography gutterBottom variant="h6">
                Find trusted regional expert services here.
            </Typography>

            <Grid container spacing={1} >
                {REGION.map((item, i) => {
                    return (
                        <Grid item key={i} xs={4}>
                            <Paper className={classes.paper} elevation={1} >
                                <Typography gutterBottom variant="button">
                                    {item}
                                </Typography>
                            </Paper>
                        </Grid>
                    )
                })}
                {/* 
                <Grid container item xs={12} spacing={1}>
                    <FormRow />
                </Grid> */}
            </Grid>
        </Container>
    );
}

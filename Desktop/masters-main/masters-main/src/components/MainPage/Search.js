import React from 'react';
import CategoryCards from './Category/CategoryCards.js'
import { alpha, makeStyles } from '@material-ui/core/styles';
import { Grid, Box, Button, Typography, InputBase, ButtonGroup } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';

const useStyles = makeStyles((theme) => ({
    searchBox: {
        background: "#eee",
        padding: 50,
        alignItems: "center",
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        textAlign: "center",

    },
    text: {
        flexGrow: 1,
        fontWeight: "bold",
        padding: '15px 0',
    },
    inputBox: {
        background: "#fff",
        borderRadius: 5,
        width: 200,
        height: 45,
        display: "flex",
        alignItems: "center",
        paddingLeft: 10,
    },
}));

export default function Search() {
    const classes = useStyles();
    return (
        <>
            <div className={classes.searchBox}>
                <ButtonGroup variant="outlined" size="large">
                    <Button >Search Service</Button>
                    <Button >Search Customer</Button>
                </ButtonGroup>
                <Typography gutterBottom variant="h4" className={classes.text}>
                    Find your master<br />in your area
                </Typography>

                <div className={classes.inputBox}>
                    <SearchIcon style={{ marginRight: 10 }} />
                    <InputBase placeholder="Search a service"
                    />
                </div>
            </div>
            <CategoryCards />
        </>
    );
}

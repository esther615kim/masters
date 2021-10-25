import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, Button, ButtonGroup, Box, Typography } from '@material-ui/core';
import Avatar from '@material-ui/core/Avatar';

const useStyles = makeStyles((theme) => ({
    toolBar: {
        display: "flex",
        justifyContent: "space-between"
    },

    masterbtn: {
        background: 'linear-gradient(45deg, #F79489 30%, #FF8E53 90%)',
        boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
        marginRight: 10,
        color: "#fff",
        fontWeight: 700,
        transition: "transform 0.1s ease-in-out",//hover
        '&:hover': { //hover
            transform: "scale(1.05)"
        }
    },
    link: {
        color: 'inherit',
        textDecoration: 'inherit',
    },
}));

export default function Header() {

    const classes = useStyles();
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar color="light" position="static">
                <Toolbar className={classes.toolBar}>
                    <Link to="/" className={classes.link}>
                        <img
                            alt="Main Logo"
                            src="https://i.ibb.co/MnHLzqJ/2.png"
                            width="140"
                            height="70"
                        />
                    </Link>
                    <div>
                        <Button size="medium" variant="contained" className={classes.masterbtn}>Master Signup</Button>
                        <ButtonGroup size="medium" variant="text">
                            <Link to="/signup" className={classes.link}>
                                <Button>Sign Up</Button>
                            </Link>
                            <Link to="/findmaster" className={classes.link}>
                                <Button>Find Master</Button>
                            </Link>
                            <Link to="/login" className={classes.link}>
                                <Button>Login</Button>
                            </Link>
                        </ButtonGroup>
                    </div>
                </Toolbar>
            </AppBar>
        </Box>
    );
}
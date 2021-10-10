import React from 'react';
import useStyles from "./components/cards/styles";
import Popular from "./components/cards/Popular";
import SearchIcon from '@mui/icons-material/Search';
import IconMenu from "./components/service/Iconmenu";
import {
    Box,
    Button,
    Card,
    TextField,
    ButtonGroup,
    Grid,
    Typography
} from "@material-ui/core";


export default function FindService() {

    const classes = useStyles();
    return (

        <>
            <Box className={classes.SearchBox}>
                <Typography className={classes.mainTitle} variant="h5">비지니스</Typography>
                <Typography gutterBottom variant="subtitle2">지금 마스터즈와 함께하세요</Typography>
                <ButtonGroup margin="normal" >
                    <TextField size="small" style={{ height: 30 }} variant="outlined" />
                    <Button variant="contained" className={classes.SearchBtn}>
                        <SearchIcon />검색하기
                    </Button>
                </ButtonGroup>
            </Box>

            <IconMenu />
            <Box className={classes.SearchBox}>
                <Typography className={classes.mainTitle} variant="h5">인기 서비스</Typography>
                <Popular />
            </Box>
        </>
    )
}
import React from 'react';
import useStyles from "./components/cards/styles";
import ServiceCard from "./components/cards/ServiceCard";
import SearchIcon from '@mui/icons-material/Search';
import IconMenu from "./components/service/Iconmenu";
import {
    Box,
    Button,
    List,
    TextField,
    ButtonGroup,
    Typography
} from "@material-ui/core";

import ListDetail from "./components/service/ListDetail";

export default function FindService() {

    const classes = useStyles();
    return (

        <>
            <Box className={classes.topSearchBox}>
                <Typography className={classes.mainTitle} variant="h5">비지니스</Typography>
                <Typography gutterBottom variant="subtitle2">지금 마스터즈와 함께하세요</Typography>
                <ButtonGroup margin="normal" >
                    <TextField size="small" sx={{ bt: 5 }} variant="outlined" />
                    <Button variant="contained" className={classes.SearchBtn}>
                        <SearchIcon />검색하기
                    </Button>
                </ButtonGroup>
            </Box>

            <IconMenu sx={{ mt: 10 }} />
            <Box className={classes.textBox}>
                <Typography className={classes.mainTitle} variant="h5">인기 서비스</Typography>
                <ServiceCard />

            </Box>

            <Box className={classes.textBox}>
                <Typography className={classes.mainTitle} variant="h5">모든 서비스</Typography>
            </Box>

            <List>
                <ListDetail />
            </List>


        </>
    )
}
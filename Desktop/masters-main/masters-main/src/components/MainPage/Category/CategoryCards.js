import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Box, Typography } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';

// icons
import MenuBookOutlinedIcon from '@material-ui/icons/MenuBookOutlined';
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import SupervisorAccountOutlinedIcon from '@material-ui/icons/SupervisorAccountOutlined';
import BusinessCenterOutlinedIcon from '@material-ui/icons/BusinessCenterOutlined';
import DesignServicesIcon from '@mui/icons-material/DesignServices';
import LocalHospitalOutlinedIcon from '@material-ui/icons/LocalHospitalOutlined';
import CategoryOutlinedIcon from '@material-ui/icons/CategoryOutlined';
import CheckBoxOutlineBlankOutlinedIcon from '@material-ui/icons/CheckBoxOutlineBlankOutlined';

const useStyles = makeStyles((theme) => ({
    container: {
        alignItems: "center",
        display: "flex",
        justifyContent: "center",
        textAlign: "center",
        backgroundColor: "#fff",
        padding: 40,
        // border: "1px solid black"
    },
    card: {
        width: 120,
        margin: 5
    },
    cardBox: {
        width: 540,
        display: "flex",
        flexWrap: "wrap",
    }
}));

const CATEGORY = ["Lesson", "Home", "Event", "Business", "Design", "Beauty", "Temp jobs", "Others"];
export default function CategoryCards() {
    const classes = useStyles();

    return (
        <div>
            <Grid className={classes.container} container>
                <div className={classes.cardBox}>

                    {CATEGORY.map((item, i) => {
                        return (
                            <Card key={i} className={classes.card}>
                                <CardActionArea>
                                    <Box textAlign="center" m={1}>
                                        <SupervisorAccountOutlinedIcon color="action" fontSize="large" />
                                    </Box>
                                </CardActionArea>
                                <CardContent>
                                    <Typography variant="body1" component="div">{item}</Typography>
                                </CardContent>
                            </Card>
                        );
                    })}
                    {/* 카드 이미지//어떻게 넣을지
<MenuBookOutlinedIcon color="action" fontSize="large" />
<HomeOutlinedIcon color="action" fontSize="large" />
<MenuBookOutlinedIcon color="action" fontSize="large" />
<SupervisorAccountOutlinedIcon color="action" fontSize="large" />
<DesignServicesIcon color="action" fontSize="large" />
<LocalHospitalOutlinedIcon color="action" fontSize="large" />
<CheckBoxOutlineBlankOutlinedIcon color="action" fontSize="large" /> */}

                </div>
                <img src="https://i.ibb.co/RHDVjTb/autopicture1.png" width="330px" height="400px" />
            </Grid>
        </div>
    );
}
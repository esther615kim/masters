import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Box } from '@material-ui/core';
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import Rating from '@mui/material/Rating';

import PropTypes from 'prop-types';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

const useStyles = makeStyles((theme) => ({
    main: {
        padding: '50px 0',
    },
    flex: {
        display: 'flex',
        paddingBottom: '30px',
    },
    img: {
        paddingRight: '15px',
    },
    btn: {
        background: 'gray',
        marginRight: '15px',
        padding: '7px 60px',
        textAlign: 'left',
    },
    indexBox: {
        margin: '30px 0',
    },
    infoBox: {
        marginTop: '40px',
        padding: theme.spacing(2),
    },
    flexBox: {
        display: 'flex',
        flex: 1,
        justifyContent: 'space-between',
    }
}));

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel" hidden={value !== index}
            id={`simple-tabpannel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}>
            {value === index && (
                <Box sx={{ p: 4 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.string.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpannel-${index}`,
    };
}

export default function MasterProfile() {
    const classes = useStyles();

    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div className={classes.main}>
            <Box className={classes.flex}>
                <Box className={classes.img}>
                    <Card>
                        <CardMedia
                            component="img"
                            height="100"
                            image="https://cdn.channel.io/plugin/images/unknown_user.jpg"
                            alt="profile img"
                        />
                    </Card>
                </Box>
                <Box>
                    <Typography variant="h5" gutterBottom component="div">??????????????? (?????????????????? ??????!)</Typography>
                    <Typography variant="caption" display="block" >???????????? ??????</Typography>
                    <Rating name="rating" precision={0.5} size="small" defaultValue={4.5} />
                </Box>
            </Box>


            <Box sx={{ width: '100%' }}>
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                    <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                        <Tab label="????????? ??????" {...a11yProps(0)} />
                        <Tab label="??????/?????????" {...a11yProps(1)} />
                        <Tab label="??????" {...a11yProps(2)} />
                        <Tab label="????????????" {...a11yProps(3)} />
                    </Tabs>
                </Box>

                <TabPanel value={value} index={0}>
                    <Box className={classes.infoBox}>
                        <Typography variant="h5" gutterBottom component="div" >????????????</Typography>
                        <Typography>Nostrud velit consectetur pariatur pariatur ad. Quis tempor in laboris deserunt laborum pariatur elit pariatur. Quis consequat aute magna cillum pariatur eu consequat sint duis elit velit. Nulla veniam consequat Lorem excepteur excepteur aliqua sit quis cupidatat proident magna.</Typography>
                    </Box>

                    <Box className={classes.flexBox}>
                        <Box className={classes.infoBox}>
                            <Typography variant="h5" gutterBottom component="div" >????????????</Typography>
                            <Typography>????????? ????????? ?????? ?????????(?????????)??? ?????? ?????? ???????????? ??????-????</Typography>
                        </Box>
                        <Box className={classes.infoBox}>
                            <Typography variant="h5" gutterBottom component="div" >????????????</Typography>
                            <Typography>????????????</Typography>
                        </Box>
                    </Box>

                    <Box className={classes.infoBox}>
                        <Typography variant="h5" gutterBottom component="div" >?????? ?????????</Typography>
                        <Typography>??????????????? ??????????????? ?????????(?????????)??? ????????? ??? ??????.</Typography>
                    </Box>

                    <Box className={classes.infoBox}>
                        <Typography variant="h5" gutterBottom component="div" >????????? ????????????</Typography>
                        <Typography>?????????/?????? ?????????.</Typography>
                    </Box>
                </TabPanel>




                <TabPanel value={value} index={1}>
                    ??????/?????????
                </TabPanel>
                <TabPanel value={value} index={2}>
                    ??????
                </TabPanel>
                <TabPanel value={value} index={3}>
                    ????????????
                </TabPanel>
            </Box>
        </div>
    );
}
import React from 'react';
import { Card, Typography } from '@mui/material';
import LockIcon from '@material-ui/icons/Lock';

function Safe() {
    return (
        <div>
            <Card sx={{ background: "#dff0e6", color: "#1a9c4e", boxShadow: "none", pb: 1, pt: 2.5, m: 5, border: "none" }}>
                <Typography gutterBottom color="success" fontWeight="bold" variant="h5">
                    We guarantee safe and reliable services                <LockIcon />
                </Typography>

            </Card>
        </div >
    )
}

export default Safe;

import React from 'react'
//SuZzie
import Popular from './Popular';
import Hidden from './Hidden';
import Magazine from './Magazine';
import Safe from './Safe';
import { styled } from '@mui/system';
import { Grid, Container, Typography } from '@mui/material';

function Cards() {
    return (
        <div>
            <Container>
                <Wrapper container>
                    <Grid item xs={12}>
                        <Popular />
                    </Grid>

                    <Grid item xs={12}>
                        <Safe />
                    </Grid>
                    <Grid item xs={12}>
                        <Hidden />
                    </Grid>

                    <Grid item xs={12}>
                        <Magazine />
                    </Grid>
                </Wrapper>
            </Container>
        </div >
    )
}

export default Cards


const Wrapper = styled(Grid)({
    alignItems: "center",
    display: "flex",
    flexWrap: "wrap",
    textAlign: "center",
    padding: 40,
    // border: "1px solid black"
})

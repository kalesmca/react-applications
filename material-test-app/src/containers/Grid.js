import React from 'react';
import { Grid } from '@material-ui/core';

const GridContainer = () =>{
    return(
        <div>
        <Grid container spacing={3}>
            <Grid item xs={4} alignContent="center" alignItems="center"> 
                Mine 4-1
            </Grid>
            <Grid item xs={4} >
                <div>Mine 4-1</div>
            </Grid>
            <Grid item xs={4} >
                <div>Mine 4-3</div>
            </Grid>
            <Grid item xs={4} >
                <div>Mine 4-1-1</div>
            </Grid>
            <Grid item xs={12} >
                <div>Mine 12-1-1</div>
            </Grid>
            <Grid item xs={12} >
                <div>Mine 12-1-3</div>
            </Grid>


            <Grid item xs={2} >
                <div>Mine 12-1-3</div>
            </Grid>
            <Grid item xs={2} >
                <div>Mine 12-1-3</div>
            </Grid>
            <Grid item xs={2} >
                <div>Mine 12-1-3</div>
            </Grid>
            <Grid item xs={2} >
                <div>Mine 12-1-3</div>
            </Grid>
            <Grid item xs={2} >
                <div>Mine 12-1-3</div>
            </Grid>
            <Grid item xs={2} >
                <div>Mine 12-1-3</div>
            </Grid>

        </Grid>

        </div>
    )
}

export default GridContainer;
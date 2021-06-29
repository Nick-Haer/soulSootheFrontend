import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import { Typography, Box, Paper, Grid, IconButton, Tooltip } from '@material-ui/core'
import axios from 'axios';


const BrowseImagesPane = () => {

    const [picturesArr, setPicturesArr] = useState([]);
    const [counter, setCounter] = useState(0);

    console.log(picturesArr.length > 0 && picturesArr[counter].link, 'pics');
    console.log(picturesArr, 'pict');


    useEffect(() => {
        axios.get('/api/allImages')
        .then((res) => setPicturesArr(res.data))
        .catch((err) => console.log(err, 'err'));
    }, []);
    

    return (
        <>
            <Box style={{
                width: '100%', 
                height: '100%', 
                backgroundColor: '#2a2a72', 
                backgroundImage: 'linear-gradient(315deg, #2a2a72 0%, #009ffd 74%)',
                paddingBottom: '300px',
                }}>
                <Grid container >
                    <Grid container alignItems="center" justify="flex-end" item xs={2}>
                        <Tooltip title="Go Back" >
                            <IconButton onClick={() => setCounter(counter === 0 ? picturesArr.length - 1 : counter - 1)}>
                                <ArrowBackIcon fontSize="large" />
                            </IconButton>
                        </Tooltip>
                    </Grid>
                    <Grid item xs={8}>
                    <Paper elevation={3} style={{ paddingTop: '50px', paddingBottom: '50px', marginTop: '50px' }}>
                        {picturesArr.length > 0 && (
                            <>
                            {picturesArr[counter].animated ? (
                                <video autoPlay style={{maxHeight: '650px'}} src={picturesArr[counter].link} />
                            ) : (
                                <img style={{maxHeight: '650px'}} src={picturesArr[counter].link} alt="Calming" />
                            )}
                            </>
                        )}
                    </Paper>
                    </Grid>
                    <Grid container alignItems="center" justify="flex-start" item xs={2}>
                        <Tooltip title="Go Forward" >
                            <IconButton onClick={() => setCounter( counter === picturesArr.length - 1 ? 0 : counter + 1)}>
                                <ArrowForwardIcon fontSize="large" />
                            </IconButton>
                        </Tooltip>
                    </Grid>
                </Grid>

            </Box>
        </>
    )
}

export default BrowseImagesPane;

// BrowseImagesPane.PropTypes = {

// };

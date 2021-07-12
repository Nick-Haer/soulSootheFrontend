import React, {useEffect, useState} from 'react';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import { Box, Paper, Grid, IconButton, Tooltip } from '@material-ui/core'
import axios from 'axios';


const BrowseImagesPane = () => {

    const [picturesArr, setPicturesArr] = useState([]);
    const [counter, setCounter] = useState(0);


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
                margin: 0,
                }}>
                <Grid container >
                    <Grid container alignItems="center" justify="flex-end" item xs={3}>
                        <Tooltip title="Go Back" >
                            <IconButton onClick={() => setCounter(counter === 0 ? picturesArr.length - 1 : counter - 1)}>
                                <ArrowBackIcon fontSize="large" />
                            </IconButton>
                        </Tooltip>
                    </Grid>
                    <Grid item xs={6}>
                    <Paper elevation={3} style={{ paddingTop: '50px', paddingBottom: '50px', marginTop: '50px', height: '700px' }}>
                        {picturesArr.length > 0 && (
                            <>
                            {picturesArr[counter].animated ? (
                                <video muted loop autoPlay style={{maxHeight: '650px', maxWidth: '800px'}} src={picturesArr[counter].link} />
                            ) : (
                                <img style={{maxHeight: '650px', maxWidth: '800px'}} src={picturesArr[counter].link} alt="Calming" />
                            )}
                            </>
                        )}
                    </Paper>
                    </Grid>
                    <Grid container alignItems="center" justify="flex-start" item xs={3}>
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

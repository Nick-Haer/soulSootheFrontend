import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import { Typography } from '@material-ui/core'
import axios from 'axios';


const BrowseImagesPane = () => {

    useEffect(() => {
        axios.get('/allImages')
        .then((res) => console.log(res, 'res'))
        .catch((err) => console.log(err, 'err'));
    }, []);

    return (
        <>
            <Typography variant="h6">
                Browse Images Here
            </Typography>
        </>
    )
}

export default BrowseImagesPane;

// BrowseImagesPane.PropTypes = {

// };

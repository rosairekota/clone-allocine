import React from 'react';
import Grid from '@material-ui/core/Grid';
import Movies from '../../../movies/base/Movies';

const _TVSRatedSection = ({ topRatedSeries }) => {
    return (
        <>
            {topRatedSeries?.map((item) => (
                <Grid item xs={12} sm={4} md={2} key={item.id}>
                    <Movies movie={item} />
                </Grid>
            ))}
        </>
    );
};

export default _TVSRatedSection;

import React from 'react';
import useStyles from './styles';
import { Card, CardActions, CardContent, IconButton, Typography } from '@material-ui/core';
import CheckBoxOutlineBlankRoundedIcon from '@material-ui/icons/CheckBoxOutlineBlankRounded';
import CheckBoxOutlinedIcon from '@material-ui/icons/CheckBoxOutlined';

import DeleteIcon from '@material-ui/icons/Delete';
import moment from 'moment';

const Item = ({ item }) => {

    const classes = useStyles();



    return (
        <Card className={classes.card} width={1}>
            <div>
                <Typography className={classes.text} variant="h5">{item.title}</Typography>
                <Typography className={classes.text} variant="body2">{moment(item.createdAt).fromNow()}</Typography>
            </div>
            <CardContent className={classes.cardContent}>
                <IconButton style={{color:'black'}} size="small" onClick={()=>{}}>
                    {!item.done 
                        ? (<CheckBoxOutlineBlankRoundedIcon fontSize="large" />)
                        : ((<CheckBoxOutlinedIcon fontSize="large" />))}
                </IconButton>
                <Typography className={classes.text} variant="body2" gutterBottom>{item.message}</Typography>
            </CardContent>
            <CardActions className={classes.cardActions}>
                <IconButton style={{color:'black'}} size="small" onClick={()=>{}}>
                    <DeleteIcon fontSize="default" />
                </IconButton>
            </CardActions>
        </Card>
    );
};

export default Item;
import React from 'react';
import moment from 'moment';

import useStyles from './styles';

import { Card, CardActions, CardContent, IconButton, Typography } from '@material-ui/core';
import CheckBoxOutlineBlankRoundedIcon from '@material-ui/icons/CheckBoxOutlineBlankRounded';
import CheckBoxOutlinedIcon from '@material-ui/icons/CheckBoxOutlined';
import DeleteIcon from '@material-ui/icons/Delete';

import { useDispatch } from 'react-redux';

import { deleteItem, checkItemDone } from '../../../actions/items';

const Item = ({ item }) => {

    const classes = useStyles();
    const dispatch = useDispatch();

    return (
        <Card className={classes.card} width={1}>
            <div>
                <Typography className={classes.text} variant="h5">{item.title}</Typography>
                <Typography className={classes.text} variant="body2">{moment(item.createdAt).fromNow()}</Typography>
            </div>
            <CardContent className={classes.cardContent}>
                <IconButton style={{color:'black'}} size="small" onClick={() => dispatch(checkItemDone(item._id, !item.done ? {done:true} : {done:false}))}>
                    {!item.done 
                        ? (<CheckBoxOutlineBlankRoundedIcon fontSize="large" />)
                        : ((<CheckBoxOutlinedIcon fontSize="large" />))}
                </IconButton>
                <Typography className={classes.text} variant="body2" gutterBottom>{item.message}</Typography>
            </CardContent>
            <CardActions className={classes.cardActions}>
                <IconButton style={{color:'black'}} size="small" onClick={()=>dispatch(deleteItem(item._id))}>
                    <DeleteIcon fontSize="default" />
                </IconButton>
            </CardActions>
        </Card>
    );
};

export default Item;
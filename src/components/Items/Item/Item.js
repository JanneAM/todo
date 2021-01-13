import React, { useState, useEffect } from 'react';
import moment from 'moment';
import { useDispatch, useSelector } from 'react-redux';

import useStyles from './styles';
import { checkItemDone } from '../../../actions/items';

import { Card, CardActions, CardContent, IconButton, Typography } from '@material-ui/core';
import CheckBoxOutlineBlankRoundedIcon from '@material-ui/icons/CheckBoxOutlineBlankRounded';
import CheckBoxOutlinedIcon from '@material-ui/icons/CheckBoxOutlined';
import DeleteIcon from '@material-ui/icons/Delete';

const Item = ({ item }) => {

    const [currentId, setCurrentId] = useState(null);
    const [itemData, setItemData] = useState({title:'', message:'', done:null})
    const classes = useStyles();
    const dispatch = useDispatch();


    const handleItemCheck = (e) => {
      e.preventDefault();
        
        setCurrentId(item._id);

        dispatch(checkItemDone(itemData, currentId));
    }

    return (
        <Card className={classes.card} width={1}>
            <div>
                <Typography className={classes.text} variant="h5">{item.title}</Typography>
                <Typography className={classes.text} variant="body2">{moment(item.createdAt).fromNow()}</Typography>
            </div>
            <CardContent className={classes.cardContent}>
                <IconButton style={{color:'black'}} size="small" onClick={()=> handleItemCheck()}>
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
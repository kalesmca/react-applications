import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

export default function ImageAvatars(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Avatar alt={props.altTxt} src={props.imageUrl} />
      
    </div>
  );
}
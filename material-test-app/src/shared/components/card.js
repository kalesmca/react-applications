import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import '../../assets/css/shared.css';
import CardHeader from '@material-ui/core/CardHeader';


const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

 const CardComponent =(props)=> {
   console.log('card props:',props)
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <Card className={classes.root} className="card">
      {props.data.header ? (<CardHeader
        subheader={props.data.header.title}
      ></CardHeader>) : ""}
      {props.data.content? (<CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          {props.data.content.desc}
        </Typography>
        {/* <Typography variant="h5" component="h2">
          be{bull}nev{bull}o{bull}lent
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          adjective
        </Typography>
        <Typography variant="body2" component="p">
          well meaning and kindly.
          <br />
          {'"a benevolent smile"'}
        </Typography> */}
      </CardContent>) :""}
      {props.data.action ? (<CardActions>
        <Button size="small">Learn More</Button>
  </CardActions>):""}
    </Card>
  );
}

export default CardComponent;

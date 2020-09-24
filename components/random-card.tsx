import React from 'react';
import useSWR from "swr";
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

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

export default function Profile() {
  const classes = useStyles();
  const {data,error} = useSWR("https://miras-backend.herokuapp.com/random");
  if (error) return <div>failed to load</div>
  if (!data) return <div>loading...</div>
  return (
  
    
    <Card className={classes.root}>
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          Eserin Adı      
        </Typography>
        <Typography variant="h5" component="h2">
          {data.title}
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          {data.adress}
          <br/>
          <br/>
        </Typography>
        <Typography variant="body2" component="p">
          {data.about}
        </Typography>
      </CardContent>
      
    </Card>
  );
}

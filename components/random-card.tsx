import React from 'react';
import Link from 'next/link'
import useSWR from "swr";
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 350,
  },
});
const Profile = function Profile() {
  const classes = useStyles();
  const {data, error, mutate} = useSWR("https://miras-backend.herokuapp.com/random");
  
  if (error) return <div>failed to load</div>
  if (!data) return <div>loading...</div>
  return (
    
    <Card>
      <CardActionArea>
        <div className="flex-container">
        <CardMedia
          className={classes.media}
          image={data.image}
          title={data.title}
        />
        </div>
        
      <CardContent>
        <Typography color="textSecondary" gutterBottom>
          Eserin Adı      
        </Typography>
        <Typography variant="h5" component="h2">
          {data.title}
        </Typography>
        <Typography  color="textSecondary">
          {data.adress}
          <br/>
          <br/>
        </Typography>
        <Typography variant="body2" component="p">
          {data.about}
        </Typography>
      </CardContent>
      </CardActionArea>
      
      <CardActions>
        <Button onClick={()=> {mutate();}}>Sonraki</Button>
        <Button href={data.location} color="primary">Navigasona git</Button>
      </CardActions>
    </Card>
  );
}

      
    
export default Profile;
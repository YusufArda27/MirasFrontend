import React from 'react';
import useSWR from "swr";
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const Profile = function Profile() {
  
  const {data, error, mutate} = useSWR("https://miras-backend.herokuapp.com/random");
  
  if (error) return <div>failed to load</div>
  if (!data) return <div>loading...</div>
  return (
    
    <Card>
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
      <CardActions>
        <Button onClick={()=> {mutate();}}>Sonraki</Button>
      </CardActions>
    </Card>
  );
}

      
    
export default Profile;
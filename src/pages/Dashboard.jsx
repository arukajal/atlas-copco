import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardActionArea, Grid } from '@mui/material';

export default function Dashboard() {
  return (
    <Grid container>
        <Grid xs={6} style={{marginLeft: 150}}>
        <Card style={{
            width: 600,
            height: 250,
            margin: '0 50px 50px 50px',
            borderRadius: 10,
            }}>
            <CardActionArea>
                <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    Lizard
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Lizards are a widespread group of squamate reptiles, with over 6,000
                    species, ranging across all continents except Antarctica
                </Typography>
                </CardContent>
            </CardActionArea>
            </Card>
        </Grid>
            <Grid >
                <Card style={{
                    width: 600,
                    height: 250,
                    margin: '0 50px 50px 50px',
                    borderRadius: 10,
                    }}>
                    <CardActionArea>
                        <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            Lizard
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Lizards are a widespread group of squamate reptiles, with over 6,000
                            species, ranging across all continents except Antarctica
                        </Typography>
                        </CardContent>
                    </CardActionArea>
                    </Card>
        </Grid>
    </Grid>
    
  );
}
// import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Typography } from '@mui/material';
import { Button, Card } from '@mui/material';
import React from 'react';

interface WSCardProps {
  title: string;
  description: string;
  topImage?: string;
  imageDescription?: string;
}

const WSCard = (props: WSCardProps) => {
  //   const { title, description, topImage, imageDescription } = props;

  return (
    <div className="m-2">
      <Card className="ws-card">
        <div className="ws-card-container">
          <div className="ws-card-top">
            <img src={props.topImage} alt={props.imageDescription} width="100%" />
          </div>
          <div className="ws-card-middle">{props.description}</div>
          <div className="ws-card-bottom">
            <Button size="small">Screenshots</Button>
          </div>
        </div>
      </Card>
    </div>
  );
};

/* <Card sx={{ width: '100%', height: '260px' }}>
        <CardActionArea>
          <CardMedia sx={{ minHeight: '100px' }} style={{ width: '100%' }}>
            <img src={topImage} alt={imageDescription} style={{ width: '100%' }} />
          </CardMedia>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {description}
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Screenshots</Button>
          </CardActions>
        </CardActionArea>
      </Card> */

export default WSCard;

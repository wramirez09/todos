import React from 'react'
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import ClearIcon from '@mui/icons-material/Clear';
import dayjs from 'dayjs';

export default function Todo({todo, deleteSpecificTodo}) {

  const date = new Date();
  const formattedDate = dayjs(date).format('MM/DD/YYYY')
    return (
      <Card sx={{ maxWidth: 345 }} className="col-3 m-1">
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            Todo
          </Avatar>
        }
        action={
          
          <ClearIcon onClick={(e)=>{
           
            deleteSpecificTodo(e.target.dataset.id)
          }} data-id={todo.id}/>
          
        }
        title={todo.title}
        subheader={formattedDate}
      />
      {/* <CardMedia
        component="img"
        height="194"
        image="/static/images/cards/paella.jpg"
        alt="Paella dish"
      /> */}
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {todo.text}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          {/* <FavoriteIcon /> */}
        </IconButton>
        <IconButton aria-label="share">
          {/* <ShareIcon /> */}
        </IconButton>
        {/* <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        > */}
          {/* <ExpandMoreIcon />
        </ExpandMore> */}
      </CardActions>
    </Card>
      
    )
}

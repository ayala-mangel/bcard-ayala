import MuiCard from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box/Box";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { Divider } from "@mui/material";
import CallIcon from "@mui/icons-material/Call";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";

const Card = () => {
  return (
    <MuiCard sx={{ maxWidth: 343 }}>
      <CardMedia
        component="img"
        height="194"
        image="https://cdn.pixabay.com/photo/2023/04/22/02/20/insect-7942861_960_720.jpg"
        alt="Paella dish"
      />

      <CardContent>
        <Typography variant="h5">forth</Typography>
        <Typography pb={1} variant="body2" color="text.secondary">
          Subtitle
        </Typography>
        <Divider />
        <Typography
          pt={1}
          variant="body2"
          color="text.secondary"
          fontWeight="bold"
        >
          phone:
          <Typography component="span" variant="body2">
            {" "}
            050-000000{" "}
          </Typography>
        </Typography>
        <Typography variant="body2" color="text.secondary" fontWeight="bold">
          Adress:
          <Typography component="span" variant="body2">
            {" "}
            tel aviv
          </Typography>
        </Typography>
        <Typography variant="body2" color="text.secondary" fontWeight="bold">
          Card Number:
          <Typography component="span" variant="body2">
            {" "}
            043-2222
          </Typography>
        </Typography>
      </CardContent>
      <CardActions disableSpacing sx={{ justifyContent: "space-between" }}>
        <Box>
          <IconButton>
            <DeleteIcon />
          </IconButton>
          <IconButton>
            <EditIcon />
          </IconButton>
        </Box>
        <Box>
          <IconButton aria-label="add to favorites">
            <FavoriteIcon />
          </IconButton>
          <IconButton>
            <CallIcon />
          </IconButton>
        </Box>
      </CardActions>
    </MuiCard>
  );
};
export default Card;

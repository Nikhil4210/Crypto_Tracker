import { Container, makeStyles } from "@material-ui/core";
import Carousel from "./Carousel";

const useStyles = makeStyles((theme) => ({
  
  bannerContent: {
    height: 200,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
  },
 
 
}));

function Banner() {
  const classes = useStyles();

  return (
   
      <Container className={classes.bannerContent}>
        <Carousel />
      </Container>
   
  );
}

export default Banner;

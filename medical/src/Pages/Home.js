import { React } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import container from 'react-bootstrap';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Fab from '@mui/material/Fab';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import Grid from '@mui/material/Grid';



function Home() {
  return (
    // slide 
    <div className='container fluid'>
      <div className='toptext'>
        <h1>Welocome to Med/Pharma</h1>
      </div>
      <div className="slide">
        <Carousel className='w-100% h-250px p-5'>
          <Carousel.Item className="div_car">
            <div>
              <img
                className="d-block w-100"
                src="https://www.neotiagetwelsiliguri.com/wp-content/uploads/2020/04/Getwel___online_consultation.png"
                alt="First slide"
              />
            </div>
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item className="div_car">
            <img
              className="d-block w-100"
              src="https://static.vecteezy.com/system/resources/previews/015/680/918/original/pharmacy-online-store-banner-free-vector.jpg"
              alt="Second slide"
            />
            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item className="div_car">
            <img
              className="d-block w-100"
              src="https://dcassetcdn.com/design_img/2698892/622267/622267_14651268_2698892_b33794e8_image.jpg "
              alt="Third slide"
              height="140px"
            />
            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>

      {/* Floating icon */}
      <div className='whatsapplog'>
        <Fab aria-label="WhatsApp" position="sticky" elevation={0} sx={{ bgcolor: '#52b202' }}>
          <WhatsAppIcon />
        </Fab>
      </div>

      {/* CARDS  */}
      <div className='cardpro'>
        <Card sx={{ maxWidth: "100% ", marginRight: "30px" }}>
          <CardMedia
            sx={{ height: 250 }}
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIh-CQa0Uyf-2GHaeLQD4SBNCCO3IlAVBroQ&usqp=CAU"
            title="green iguana" contemplative
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Medican
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Lizards are a widespread group of squamate reptiles, with over 6,000
              species, ranging across all continents except Antarctica
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Share</Button>
            <Button variant="contained" size="small">Add To Cart</Button>
          </CardActions>
        </Card>
        <Card sx={{ maxWidth: "100%", marginRight: "30px" }}>
          <CardMedia
            sx={{ height: 250 }}
            image="https://m.media-amazon.com/images/I/61YbtrhPWKL._SY450_.jpg"
            title="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Health care Device
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Lizards are a widespread group of squamate reptiles, with over 6,000
              species, ranging across all continents except Antarctica
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Share</Button>
            <Button variant="contained" size="small">Add To Cart</Button>
          </CardActions>
        </Card>
        <Card sx={{ maxWidth: "100%", marginRight: "30px" }}>
          <CardMedia
            sx={{ height: 250 }}
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQC-227FM5dUBAseVM2s2xC3V8McWqVq6DF3Q&usqp=CAU"
            title="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Mother And Baby care
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Lizards are a widespread group of squamate reptiles, with over 6,000
              species, ranging across all continents except Antarctica
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Share</Button>
            <Button variant="contained" size="small">Add To Cart</Button>
          </CardActions>
        </Card>
      </div>
      {/* shop by category */}
      <container fluied>
        <h1>Shoap By Category</h1>
        
      </container>
    </div>
  )
}
export default Home;



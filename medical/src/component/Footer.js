import { AppBar, Toolbar, Grid} from '@mui/material';
import React from 'react';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';

function Footer() {
    return (
        <React.Fragment>
            <AppBar position="sticky" elevation={0} className="botnav"> 
                <Toolbar>
                    <Grid item container>
                    {/* <Typography> */}
                    <Grid item md={4}>
                        <list className='fotlist'>
                            <ul>
                                <h1>Services</h1>
                                <li>On Time Delivery</li>
                                <li>Free Home Delivery</li>
                                <li>24/7 MedicalServices</li>
                                <li>Offers & Discounts</li>
                            </ul>
                        </list>
                        </Grid>
                    <Grid item md={4} >

                        <list>
                            <ul>
                                <h1>About</h1>
                                <li>MedicalServices</li>
                                <li>Lab Test</li>
                                <li>All kind of Healthcare products and medican supply</li>
                                <li>Services</li>
                            </ul>
                        </list>
                        </Grid>
                    <Grid item md={4}>
                        <list>
                            <ul>
                                <h1>Available On</h1>
                                <FacebookIcon/>
                                <TwitterIcon/>
                                <InstagramIcon/>
                                <YouTubeIcon/>
                            </ul>
                        </list>
                        </Grid>
                    {/* </Typography> */}
                    </Grid>
                </Toolbar>
            </AppBar>
        </React.Fragment>
    )
}
export default Footer;
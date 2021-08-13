import React from 'react';
import './Home.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import pic1 from './vaccine1.jpg';
import pic2 from './vaccine2.jpg';
import pic3 from './vaccine3.jpg';
import {Carousel,Card,Button} from 'react-bootstrap';
import ReactPlayer from 'react-player';

function Home() {
    //δημιουργια carousel με φωτογραφίες και κάνουμε Import τις φωτογραφίες που εχουμε στον φακελο
    //τα videos γινονται Import απο youtube μεσω react player
    return (

            <section className="carousel">

            <Carousel>
            <Carousel.Item>
                <img
                className="pics"
                src={pic1}
                alt="First slide"
                />
                <Carousel.Caption>
                <h3>Vaccination,</h3> <h3> free for all</h3>

                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="pics"
                src={pic2}
                alt="Second slide"
                />

                <Carousel.Caption>
                <h3>The vaccine is</h3> <h3> in our hands</h3>

                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="pics"
                src={pic3}
                alt="Third slide"
                />

                <Carousel.Caption>
                <h3>Approved for its safety, </h3> <h3>quality & effectiveness</h3>

                </Carousel.Caption>
            </Carousel.Item>

            </Carousel>
            <br></br>

            <section className="cards" style={{display:'flex'}}>
            <Card >
            <Card.Body className="cardBody" style={{backgroundColor:'#097a7a' ,color:'white'}}>
                    <Card.Title>Safety</Card.Title>

                    <Card.Text>
                    Vaccination is a safe and effective way to prevent disease and save lives
                    </Card.Text>


                </Card.Body>
                </Card>
                <Card >
                <Card.Body className="cardBody" style={{backgroundColor:'#097a7a' ,color:'white'}}>
                    <Card.Title>Protection</Card.Title>

                    <Card.Text>
                    When we get vaccinated, we aren’t just protecting ourselves, but also those around us
                    </Card.Text>

                </Card.Body>
                </Card>
                <Card >
                <Card.Body className="cardBody" style={{backgroundColor:'#097a7a' ,color:'white'}}>
                    <Card.Title>How does it Work?</Card.Title>

                    <Card.Text>
                    Vaccines reduce risks of getting a disease by working with your body’s natural defenses to build protection.
                    </Card.Text>

                </Card.Body>
                </Card>
              <Card>
              <Card.Body className="cardBody" style={{backgroundColor:'#097a7a' ,color:'white'}}>
                    <Card.Title>Appoinment</Card.Title>

                    <Card.Text>
                    In order to get vaccinated you have to make an appoinment
                    </Card.Text>
                    <Card.Link href="/appoinment" className="link">Appoinment</Card.Link>

                </Card.Body>
                </Card>
                <Card>
                <Card.Body className="cardBody" style={{backgroundColor:'#097a7a' ,color:'white'}}>
                    <Card.Title>Vaccination</Card.Title>

                    <Card.Text>
                    In the FAQ you will learn more about the 2 stages of vaccination
                    </Card.Text>
                    <Card.Link href="/faq" className="link">FAQ</Card.Link>

                </Card.Body>
                </Card>
                <Card >
                <Card.Body className="cardBody" style={{backgroundColor:'#097a7a' ,color:'white'}}>
                    <Card.Title>Statistics</Card.Title>

                    <Card.Text>
                    In the statistics you learn how many people have been vaccinated since the day you choose
                    </Card.Text>
                    <Card.Link href="statistics" className="link">Statistics</Card.Link>

                </Card.Body>
                </Card>
                </section>
                <br></br>
                <section className="info">
                    <h4>The National Vaccination Campaign for COVID-19 has started. The vaccine is in our hands. Approved for its safety, quality and effectiveness by the relevant international and national organizations, the World Health Organization, the EMA (European Medicines Agency) and the FDA (US Food and Drug Administration).

                    Vaccination, free for all, is in progress for people in the front line of health, general education teachers and for ages 30-39 and over 50.

                    The goal is to vaccinate the entire population over 18 years of age. The National Vaccination Committee may change the priority depending on the number of doses available. The vaccine is optional, but necessary to protect ourselves and our fellow human beings. And we do not forget. We continue to wear a mask and keep our distance for as long as necessary.</h4>
            </section>

            <section className="news">
            <Card>
                <Card.Header className="cardHeader" style={{backgroundColor:'#097a7a' ,color:'#14eceb',width:'100%'}}>News</Card.Header>
                <Card.Body className="cardBody" style={{backgroundColor:'#097a7a' ,color:'white'}}>
                    <Card.Title className="cardBody">People who have had COVID-19 may only need first mRNA shot</Card.Title>
                    <Card.Text>
                    A new study suggests that there is a strong boost to the immunity of everyone who receives the first dose of an mRNA vaccine, including those who have previously had a SARS-CoV-2 infection.
                    </Card.Text>
                    <Button variant="outline-light" href="/news">Read More</Button>
                </Card.Body>
                <Card.Body className="cardBody" style={{backgroundColor:'#097a7a' ,color:'white'}}>
                    <Card.Title className="cardBody">Greece records 3,015 new Covid-19 infections and 86 fatalities on Wednesday</Card.Title>
                    <Card.Text>
                    Since the pandemic started, Greece has confirmed 323,639 infections (daily change: +0.9 pct). In the confirmed cases of the last 7 days, 61 infections are related to travel from abroad and 2,833 to other confirmed cases

                    </Card.Text>
                    <Button variant="outline-light" href="/news">Read More</Button>
                </Card.Body>
                <Card.Body className="cardBody" style={{backgroundColor:'#097a7a' ,color:'white'}}>
                    <Card.Title className="cardBody" >EU recommends letting fully Covid-19 vaccinated travellers into bloc</Card.Title>
                    <Card.Text>
                    The European Union's executive recommended on Monday that foreign citizens fully vaccinated against COVID-19 and those coming from countries with a good epidemiological situation be allowed to travel into the bloc without additional restrictions.
                    </Card.Text>
                    <Button variant="outline-light" href="/news">Read More</Button>
                </Card.Body>
                </Card>
            </section>
            <section className="videos" style={{display:'flex',width:'100%'}}>
                <ReactPlayer url ='https://www.youtube.com/watch?v=5DGwOJXSxqg' className="video"/>
                <ReactPlayer url ='https://www.youtube.com/watch?v=U8r3oTVMtQ0' className="video"/>
                <ReactPlayer url ='https://www.youtube.com/watch?v=mvA9gs5gxNY' className="video"/>

            </section>

        </section>


    )
}

export default Home;
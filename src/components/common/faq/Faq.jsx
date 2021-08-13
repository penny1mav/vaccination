import React from 'react';
import './Faq.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Accordion,Card,Button} from 'react-bootstrap';

function Faq() {

    return (
        //δημιουργούμε τα accorditions. το default key ειναι το 0 . Το key αλλαζει οποτε ανοιγουμε ενα accordition και παιρνει το event key του συγκεκριμενου accordition
        <section className="faq" >
            <br></br>
            <Accordion defaultActiveKey="0" >
                <Card className="accordition">
                    <Card.Header style={{  backgroundColor:'#adcadb' }}>
                    <Accordion.Toggle as={Button} variant="outline-success" eventKey="11" className="button1" style={{  backgroundColor:'#adcadb',  fontSize: '100%'
 }}>
                    Is there a vaccine for COVID-19?
                    </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="11">
                    <Card.Body style={{  backgroundColor:'#adcadb' }}>Yes there are now several vaccines that are in use. The first mass vaccination programme started in early December 2020 and as of and as of 15 February 2021, 175.3 million vaccine doses have been administered. At least 7 different vaccines (3 platforms) have been administered.


                    Once vaccines are demonstrated to be safe and efficacious, they must be authorized by national regulators, manufactured to exacting standards, and distributed. WHO is working with partners around the world to help coordinate key steps in this process, including to facilitate equitable access to safe and effective COVID-19 vaccines for the billions of people who will need them. </Card.Body>
                    </Accordion.Collapse>
                </Card>
                <Card className="accordition">
                    <Card.Header style={{  backgroundColor:'#adcadb' }}>
                    <Accordion.Toggle as={Button} variant="outline-success" eventKey="1" className="button1" style={{  backgroundColor:'#adcadb', fontSize: '100%' }}>
                    When will COVID-19 vaccines be ready for distribution?
                    </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="1">
                    <Card.Body style={{  backgroundColor:'#adcadb' }}>The first COVID-19 vaccines have already begun to be introduced in countries. Before COVID-19 vaccines can be delivered:

                    The vaccines must be proven safe and effective in large (phase III) clinical trials.  Some COVID-19 vaccine candidates have completed their phase III trials, and many other potential vaccines are being developed.
                    Independent reviews of the efficacy and safety evidence is required for each vaccine candidate, including regulatory review and approval in the country where the vaccine is manufactured, before WHO considers a vaccine candidate for prequalification. Part of this process also involves the Global Advisory Committee on Vaccine Safety.
                    In addition to review of the data for regulatory purposes, the evidence must also be reviewed for the purpose of policy recommendations on how the vaccines should be used.
                    An external panel of experts convened by WHO, called the Strategic Advisory Group of Experts on Immunization (SAGE), analyzes the results from clinical trials, along with evidence on the disease, age groups affected, risk factors for disease, programmatic use, and other information. SAGE then recommends whether and how the vaccines should be used.
                    Officials in individual countries decide whether to approve the vaccines for national use and develop policies for how to use the vaccines in their country based on the WHO recommendations.
                    The vaccines must be manufactured in large quantities, which is a major and unprecedented challenge – all the while continuing to produce all the other important life-saving vaccines already in use.
                    As a final step, all approved vaccines will require distribution through a complex logistical process, with rigorous stock management and temperature control.</Card.Body>
                    </Accordion.Collapse>
                </Card>
                <Card className="accordition">
                    <Card.Header style={{  backgroundColor:'#adcadb' }}>
                    <Accordion.Toggle as={Button} variant="outline-success" eventKey="2" className="button1" style={{  backgroundColor:'#adcadb', fontSize: '100%' }}>
                    Will COVID-19 vaccines provide long-term protection?
                    </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="2">
                    <Card.Body style={{  backgroundColor:'#adcadb' }}>Because COVID vaccines have only been developed in the past months, it’s too early to know the duration of protection of COVID-19 vaccines. Research is ongoing to answer this question. However, it’s encouraging that available data suggest that most people who recover from COVID-19 develop an immune response that provides at least some period of protection against reinfection – although we’re still learning how strong this protection is, and how long it lasts.</Card.Body>
                    </Accordion.Collapse>
                </Card>
                <Card className="accordition">
                    <Card.Header style={{  backgroundColor:'#adcadb' }}>
                    <Accordion.Toggle as={Button} variant="outline-success" eventKey="3" className="button1" style={{  backgroundColor:'#adcadb', fontSize: '100%' }}>
                    How quickly could COVID-19 vaccines stop the pandemic?

                    </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="3">
                    <Card.Body style={{  backgroundColor:'#adcadb' }}>The impact of COVID-19 vaccines on the pandemic will depend on several factors. These include the effectiveness of the vaccines; how quickly they are approved, manufactured, and delivered; the possible development of other variants and how many people get vaccinated
                    Whilst trials have shown several COVID-19 vaccines to have high levels of efficacy, like all other vaccines, COVID-19 vaccines will not be 100% effective. WHO is working to help ensure that approved vaccines are as effective as possible, so they can have the greatest impact on the pandemic.</Card.Body>
                    </Accordion.Collapse>
                </Card>
                <Card className="accordition">
                    <Card.Header style={{  backgroundColor:'#adcadb' }}>
                    <Accordion.Toggle as={Button} variant="outline-success" eventKey="4" className="button1" style={{  backgroundColor:'#adcadb', fontSize: '100%' }}>
                    Will other vaccines help protect me from COVID-19?
                    </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="4">
                    <Card.Body style={{  backgroundColor:'#adcadb' }}>Currently, there is no evidence that any other vaccines, apart from those specifically designed for the SARS-Cov-2 virus,  will protect against COVID-19.

                    However, scientists are studying whether some existing vaccines – such as the Bacille Calmette-Guérin (BCG) vaccine, which is used to prevent tuberculosis – are also effective for COVID-19. WHO will evaluate evidence from these studies when available.</Card.Body>
                    </Accordion.Collapse>
                </Card>
                <Card className="accordition">
                    <Card.Header style={{  backgroundColor:'#adcadb' }}>
                    <Accordion.Toggle as={Button} variant="outline-success" eventKey="5" className="button1" style={{  backgroundColor:'#adcadb', fontSize: '100%' }} >
                    What are the benefits of getting vaccinated?
                    </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="5">
                    <Card.Body style={{  backgroundColor:'#adcadb' }}>The COVID-19 vaccines produce protection against the disease, as a result of developing an immune response to the SARS-Cov-2 virus.  Developing immunity through vaccination means there is a reduced risk of developing the  illness and its consequences. This immunity helps you fight the virus if exposed. Getting vaccinated may also protect people around you, because if you are protected from getting infected and from disease, you are less likely to infect someone else. This is particularly important to protect people at increased risk for severe illness from COVID-19, such as healthcare providers, older or elderly adults, and people with other medical conditions.</Card.Body>
                    </Accordion.Collapse>
                </Card>
                <Card className="accordition">
                    <Card.Header style={{  backgroundColor:'#adcadb' }}>
                    <Accordion.Toggle as={Button} variant="outline-success" eventKey="6" className="button1" style={{  backgroundColor:'#adcadb', fontSize: '100%' }}>
                    Can we stop taking precautions after being vaccinated?
                    </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="6">
                    <Card.Body style={{  backgroundColor:'#adcadb' }}>Vaccination protects you from getting seriously ill and dying from COVID-19. For the first fourteen days after getting a vaccination, you do not have significant levels of protection, then it increases gradually. For a single dose vaccine, immunity will generally occur two weeks after vaccination. For two-dose vaccines, both doses are needed to achieve the highest level of immunity possible.

                    While a COVID-19 vaccine will protect you from serious illness and death, we still don’t know the extent to which it keeps you from being infected and passing the virus on to others. To help keep others safe, continue to maintain at least a 1-metre distance from others, cover a cough or sneeze in your elbow, clean your hands frequently and wear a mask, particularly in enclosed, crowded or poorly ventilated spaces. Always follow guidance from local authorities based on the situation and risk where you live.</Card.Body>
                    </Accordion.Collapse>
                </Card>
                <Card className="accordition">
                    <Card.Header style={{  backgroundColor:'#adcadb' }}>
                    <Accordion.Toggle as={Button} variant="outline-success" eventKey="7" className="button1" style={{  backgroundColor:'#adcadb', fontSize: '100%' }}>
                    Can I have the second dose with a different vaccine than the first dose?
                    </Accordion.Toggle>
                    </Card.Header>

                    <Accordion.Collapse eventKey="7">

                    <Card.Body style={{  backgroundColor:'#adcadb' }}>Clinical trials in some countries are looking at whether you can have a first dose from one vaccine and a second dose from a different vaccine. There isn't enough data yet to recommend this type of combination.</Card.Body>
                    </Accordion.Collapse>
                </Card>

                <br></br><br></br>
                </Accordion>
                <br></br><br></br>
        </section>

    )
}



export default Faq;
import React from 'react';
import './News.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import pic1 from './turists.jpg';
import pic2 from './mRna.jpg';
import pic3 from './Greece.jpg';
function News() {
//κανουμε Import τις φωτογραφιες που υπαρχουν στον φακελο και τις μεταονομαζουμε σε pic1 pic2 pic3

    return (
        <section className="newss">
            <senction className="news2">
            <br></br><br></br>
            <h1>EU recommends letting fully Covid-19 vaccinated travellers into bloc</h1>
            <img className="pics2" src={pic1} alt="First slide"/>
            <br></br>
            <h4>
            The European Union's executive recommended on Monday that foreign citizens fully vaccinated against COVID-19 and those coming from countries with a good epidemiological situation be allowed to travel into the bloc without additional restrictions.
            </h4><h4>
            The 27-nation bloc currently allows citizens of seven countries to come on holidays or for other non-essential reasons and the European Commission's proposal would expand that list.
            </h4><h4>
            "The (European) Commission proposes to allow entry to the EU for non-essential reasons not only for all persons coming from countries with a good epidemiological situation but also all people who have received the last recommended dose of an EU-authorised vaccine," the executive arm said in a statement.
            </h4><h4>
            "This could be extended to vaccines having completed the WHO emergency use listing process. In addition, the Commission proposes to raise... the threshold related to the number of new COVID-19 cases used to determine a list of countries from which all travel should be permitted," it also said, adding that should lead to the expansion of the list.
            </h4><h4>
            To limit the risk of importing new variants of the coronavirus, the Commission also offered a new "emergency break" that would allow introducing swift travel restrictions for countries where the health situation deteriorates sharply.
            </h4><h4>
            EU member states are due to start discussing the proposal on Tuesday. Their agreement is needed to put it into effect.</h4>
            </senction>
            <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
            <section className="news2">

            <h1>People who have had COVID-19 may only need first mRNA shot</h1>
            <img
                className="pics2"
                src={pic2}
                alt="First slide"
                />
                 <br></br>
            <h4>
            A new study suggests that there is a strong boost to the immunity of everyone who receives the first dose of an mRNA vaccine, including those who have previously had a SARS-CoV-2 infection.
            However, only people who have never had a SARS-CoV-2 infection appeared to benefit from the second dose.
            The scientists tracked not only antibody responses to vaccination but also the creation of memory B cells, which provide longer lasting immunity against infection.
            People who experienced particularly negative side effects from the vaccine — such as fever, headache, and muscle pain — had stronger immune responses.
            Clinical trials of the Moderna and Pfizer COVID-19 vaccines have found that they are highly effective at preventing SARS-CoV-2 infections.
            </h4><h4>
            Both shots are mRNA vaccines. This is a new technology that uses strands of genetic material called messenger RNA to provide the body’s own cells with instructions to make proteins from the virus.
            </h4><h4>
            Although these isolated viral proteins are harmless, they provoke an immune response that provides protection against a subsequent infection with the actual virus.
            </h4><h4>
            Stay informed with live updates on the current COVID-19 outbreak and visit our coronavirus hub for more advice on prevention and treatment.
            </h4>

        </section>
        <section className="news2">

            <h1>Greece records 3,015 new Covid-19 infections and 86 fatalities on Wednesday</h1>
            <img
                className="pics2"
                src={pic3}
                alt="First slide"
                />
                 <br></br>
            <h4>
            Since the pandemic started, Greece has confirmed 323,639 infections (daily change: +0.9 pct). In the confirmed cases of the last 7 days, 61 infections are related to travel from abroad and 2,833 to other confirmed cases</h4><h4>
            Greece confirmed 3,015 new coronavirus infections in the last 24 hours, with 14 of these identified at entry points to the country, the National Public Health Organization (EODY) said on Wednesday, ANA reports.There are also 86 fatalities recorded in the last 24 hours, bringing the total of pandemic victims to 9,713. Of these, 95.5 pct had an underlying condition and/or were 70 years old.

        </h4>
        </section>
        </section>

    )
}

export default News;
import Header from './header';
import Navbar from './navbar'
import Footer from './footer'
import PageTitle from './page-title'
import Home from './home'
import News from './news'
import Faq from './faq'
import Appoinment from './appoinment'
import Statistics from './statistics'
import Contact from './contact'

//σε κάθε έναν απο τους φακέλους έχουμε απο ένα Jsx , css και js αρχείο. Στο εξωτερικό index των φακέλων τα κάνουμε export ωστε να μπορεί να τα διαβάσει το app.js Που είναι έξω απο τους φακέλους. Χρειάζεται επίσης να τα κάνουμε import

export {
    Header,
    Navbar,
    Footer,
    PageTitle,
    Home,
    News,
    Faq,
    Appoinment,
    Statistics,
    Contact
}
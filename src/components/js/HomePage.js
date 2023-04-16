import Nav from './nav';
import Cards from './cards';
import MainFeed from './MainFeed';
import FirstView from './firstView';
import Footer from './footer';

function HomePage(){
    return (  
        <>
         <FirstView />
         <MainFeed/>
         <Footer />
         </>
      );
}

export default HomePage;
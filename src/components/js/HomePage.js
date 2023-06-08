import Nav from './nav';
import Cards from './cards';
// import MainFeed from './MainFeed';
import FirstView from './firstView';
import Footer from './footer';
import foto from '../ImagesOfProject/111.jfif';
import StaticCards from './staticCards';
function HomePage(){
    return (  
        <>
         <FirstView />
        <StaticCards/>
         <Footer />
         </>
      );
}

export default HomePage;
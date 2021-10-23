import Header from './header';
import Jumbotron from './jumbotron';
import Footer from './footer';

const AppLayout = ({ children }) => {
  return (
    <div>
      <Header />
      {/* <div style={{ height: 57 }}></div> */}
      <Jumbotron />
      {children}
      <Footer />
    </div>
  );
};

export default AppLayout;

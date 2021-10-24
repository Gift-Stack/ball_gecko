import Header from './header';
import Jumbotron from './jumbotron';
import Footer from './footer';

const AppLayout = ({ children }) => {
  return (
    <div>
      <Header />
      <Jumbotron />
      {children}
      <div style={{ height: 85 }} />
      <Footer />
    </div>
  );
};

export default AppLayout;

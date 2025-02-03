import { Footer } from './components/Footer';
import MainContent from './components/MainContent';
import { Navbar } from './components/Navbar';

export function App() {
  return (
    // React Fragment, works as a placeholder for the root element of the component IF you want to.
    <>
      <Navbar />
      <MainContent />
      <Footer />
    </>
  );
}

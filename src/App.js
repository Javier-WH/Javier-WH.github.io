import './App.css';
import Header from './modules/header/header';
import Links from './modules/header/links';
import Photo from './modules/photo/photo';
import BodyContainer from './modules/body/bodyContainer';

function App() {
  return (
    <div className="App">
      <div className='header-background'>
        <div id='image-background'>
          <Header />
          <Links />
          <Photo/>
        </div>
        <div id='image-background2'></div>
      </div>
      <BodyContainer />
    </div>
  );
}

export default App;

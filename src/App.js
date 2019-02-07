import React, { Component } from 'react'; 
import './assets/vendor/bootstrap/css/bootstrap.min.css';
import './assets/fonts/font-awesome/css/font-awesome.min.css';
import 'semantic-ui-css/semantic.min.css';
import './assets/vendor/swiper/css/swiper.min.css';
import './assets/css/boomerang.min.css';
import './assets/css/custom-style.css';
import AppRouter from './router'; 
import MapModal from './components/organisms/map-modal';

class App extends Component {
  
  render() {
    return (
      <div className="App"> 
          <MapModal />
          <AppRouter />
      </div>
    );
  }
}
 
export default App;

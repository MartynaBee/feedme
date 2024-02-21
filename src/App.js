import React from 'react';
import './App.css';
import Header from "./header";
import Footer from './footer';
import Body from './Body';

// import Diet from './Diet';
// import jsonDietData from './API/diet.json'

// import MealContainer from './MealContainer';


function App() {



  const hospitalName = 'St Peter\'s Hospital';
  const patientName = 'John Doedoedorere';
  const currentDateTime = new Date();
  const currentDate = currentDateTime.toLocaleDateString();
  const currentTime = currentDateTime.toLocaleTimeString();
  const hospitalLogo = "./st.peter.jpeg"
  const today = new Date();
  const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const dayOfWeek = daysOfWeek[today.getDay()];
 

  return (

    <div className="App">
      <div className='app-container'>


        <div className="header">
          <Header
            hospitalLogo={hospitalLogo}
            hospitalName={hospitalName}
            patientName={patientName}
            currentDate={currentDate}
            currentTime={currentTime}
            dayOfWeek={dayOfWeek} />
        </div>

        <div>
          <Body></Body>
        </div>

        <div>
          <Footer></Footer>
        </div>



      </div>
    </div>

  );

}

export default App;

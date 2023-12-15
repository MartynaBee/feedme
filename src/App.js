import React from 'react';
import './App.css';
import Header from "./header";
import Diet from "./diet";
import BodyA from "./BodyA";
import BodyB from './BodyB';
import Footer from './footer';


function App() {



  const hospitalName = 'St Peter Hospital';
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
      <div className="header">
        <Header
          hospitalLogo={hospitalLogo}
          hospitalName={hospitalName}
          patientName={patientName}
          currentDate={currentDate}
          currentTime={currentTime}
          dayOfWeek={dayOfWeek}

        />
      </div>
      <div>
        <Diet>
        </Diet>
      </div>
      <div>
        <BodyA>

        </BodyA>
        </div>
        <div>
          <BodyB></BodyB>
        </div>
        <Footer></Footer>
    </div>

  );

}

export default App;

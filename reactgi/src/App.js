import './App.css';


import BasicInfo from './components/BasicInfo';

import React from 'react';

import VeryEasy from './components/VeryEasy';

//Easy
class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      person: [{
          Name: "Kabah Coletrane",
          Number: "910-557-0452",
          DOB: "10/24/99",
          Email: "kabahjcole@gmail.com"
          
      },
      {
          Name: "Brian Scott",
          Number: "123-456-7890",
          DOB: "7/22/97",
          Email: "BEScott0722@gmail.com"
      }
      ]
  }
  }

  //Hard
  render() {
    return (
      <div>
        {/* <VeryEasy/> */}
        {this.state.person.map((person, index) => {
          return (
            <BasicInfo key={index} person={person} />
          )
            }) }
      </div>
    )
  }
}


export default App;

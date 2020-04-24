import React, { Component } from 'react'; // react if from node_modules
import DisplaySelect from './DisplaySelect';
import DisplayData from './DisplayData';
import axios from 'axios';  
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      animal: 'monkey',
      displayAnimal: 'Monkeys',
      animalData:[]
    }
  }

  getUserSelection = (event)=>{
    event.persist();
    const selectionIndex = event.nativeEvent.target.selectedIndex;
    const animalText = event.nativeEvent.target[selectionIndex].text;
    const animalValue = event.target.value
    
    
    this.setState({
      animal: animalValue,
      displayAnimal: animalText,
    });

    this.axiosCall(animalValue);
  }

  componentDidMount() {
    this.axiosCall(this.state.animal);
  }


  axiosCall = (query)=>{
    console.log(query);
    axios({
      url: 'https://www.rijksmuseum.nl/api/en/collection',
      method: 'GET',
      responseType: 'json',
      params: {
        key: '0MwUcWm8',
        format: 'json',
        q: query
      }
    }).then((result) => {
      this.setState({
        animalData: result.data.artObjects
      })
    })
  }

  render(){
    return (
      <div className="App">
        <h1>Rijk Museum {this.state.displayAnimal} Art</h1>
        
        <DisplaySelect getSelection={(e)=>this.getUserSelection(e)}/>
        {
          this.state.animalData.map((art,index)=>{
            return (
              art.webImage !== null
              ? <DisplayData 
              key={art.objectNumber} 
              title={art.title} 
              longTitle={art.longTitle} 
              imgUrl={art.webImage.url}
              />
              : ''
            )
          })
        }
      </div>
    );
  }
}

export default App;

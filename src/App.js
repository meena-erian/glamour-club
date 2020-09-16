import React from 'react';
import './App.css';
import { PageContextProvider } from "./component/PageContext";
import Wizard from "./component/Wizard";
import { images } from "./constants";

// Converting images object into array
var imagesArray = [];
Object.keys(images).forEach((key)=>{
  imagesArray.push(images[key]);
});

function casheImage(resArr){
  return resArr.map(src => {
    return new Promise(function (resolve, reject){
      const img = new Image();
      img.src = src;
      img.onload = resolve;
      img.onerror = reject;
    });
  });
}

class App extends React.Component {

  state = {resourcesLoaded: false}

  componentDidMount(){
    Promise.allSettled(casheImage(imagesArray)).then(()=>{
      this.setState({resourcesLoaded: true});
    },(promises)=>{
      console.error("Failed to load some recources");
      console.log(promises);
      this.setState({resourcesLoaded: true});
    });
  }
  
  render() {
    if(!this.state.resourcesLoaded){
      return (
        <div className="App">
          <header className="App-header">
            <h1>Loading App Resources</h1>
          </header>
        </div>
      );
    }
    return (
      <PageContextProvider>
        <div className="App">
          <header className="App-header">
            <Wizard />
          </header>
        </div>
      </PageContextProvider>
    );
  }
}

export default App;

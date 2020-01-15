import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import logo from './logo.svg';


const initialLocationState = {
  latitude: null,
  longitude: null,
  speed: null
}

const FunctionComponent = () => {
  const [count, setCount] = useState(0);
  const [isOn, setIsOn] = useState(0);
  const [usePosition, setPosition] = useState({x:null, y: null})
  const [location,setLocation] = useState(initialLocationState)

 useEffect(() => {
    document.title = `count got incremented ${count}`
    window.addEventListener("mousemove",handleMouseMove)
    navigator.geolocation.getCurrentPosition(handleGeolocation);

      return() => {
        window.removeEventListener("mousemove",handleMouseMove)

      }
 },[count])
const handleGeolocation = e => {
  setLocation({
    latitude: e.coords.latitude,
    longitude: e.coords.longitude,
    spped: e.coords.speed

  })
}
 const handleMouseMove =(e) => {
    setPosition({
        x : e.pageX,
        y : e.pageY
    });
 }
  const renderCount = () => {
    //setCount(count +1);
    setCount(prevCount => prevCount + 1)
  }
  const toggle = () => {
    setIsOn(!isOn)
  }
  return (
    <>
    <h3>Counter</h3>
      <button onClick={renderCount}>I got Imcremented {count}..... </button>
      <div
          style={{
            height: '50px',
            width: '50px',
            background: isOn ? 'black' : 'green'
          }}
          onClick={toggle}
        >
          </div>
          {JSON.stringify(usePosition,null,2)}

    </>
  )

}

class App extends React.Component {

  state = {
    count: 0,
    isOn: true,
    x:null,
    y:null
  }
  componentDidMount() {
    debugger
    console.log(this.state.count + "will Mount")
     window.addEventListener("mousemove",this.handleMouseMove.bind(this))
   }
   componentWillUnmount() {
     debugger
    console.log(this.state.count + "will Mount")
     window.removeEventListener("mousemove",this.handleMouseMove.bind(this))
   }
   componentDidUpdate() {
     console.log(this.state.count+"will update")
   }
  renderButton() {
    this.setState(prevState => ({
      count: prevState.count + 1
    }))
  }
  toggleLight() {
    this.setState(prevState => ({
      isOn: !prevState.isOn
    }))
  }
  handleMouseMove(e) {
      this.setState({
        x : e.pageX,
        y : e.pageY
      })
  }
  render() {
    return (
      <div className="App">
        <FunctionComponent /><br />

        <h2>Counter</h2>
        <button onClick={this.renderButton.bind(this)}>I was clicked{this.state.count}</button>
        <h2>Toggle Light</h2>
        <div
          style={{
            height: '50px',
            width: '50px',
            background: this.state.isOn ? 'grey' : 'red'
          }}
          onClick={this.toggleLight.bind(this)}
        >

        </div>
        X: {this.state.x}<br/>
        Y: {this.state.y}
      </div>
    );
  }

}

export default App;

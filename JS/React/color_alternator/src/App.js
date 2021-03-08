import './App.css';

class ColorAlt extends React.Component {
  render() {
    return (
      <div id="container">
        <div id="main" className="grid"></div>
        <div id="light" className="grid"></div>
        <div id="dark" className="grid"></div>
      </div>
    )
  }
}

function App() {
  return (
    <div className="App">
      <h1>Color Alternator</h1>
      <ColorAlt />

      
    </div>
  );
}

export default App;

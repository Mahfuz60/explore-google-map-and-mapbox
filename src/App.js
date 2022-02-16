import "./App.css";
// import Maps from "./component/GoogleMap/Maps";
import MapBoxDirection from "./component/MapBoxGl/MapBoxDirection";
// import MapDirection from "./component/MapDirection/MapDirection";

function App() {
  return (
    <div className="App">
      {/* <Maps></Maps> */}
      {/* <MapDirection></MapDirection> */}
      <MapBoxDirection></MapBoxDirection>
    </div>
  );
}

export default App;

import "./App.css";
import Navbar from "./components/Navbar";
import User from "./components/User";

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="row">
          <div className="jumbotron">
            <h1>{<Navbar title="App"></Navbar>}</h1>

            <h1>
              {
                <User name="BabaYqb" SurName="Uzun Qulaq" Salary="5000"></User>
              }
            </h1>
            <h1>{<User name="Yaqub" SurName="Qisa Qulaq" Salary="3000" />}</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

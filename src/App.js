import './App.css';
import '@fontsource/roboto';
import SearchAppBar from "./component/navbar";
import WorldTable from "./table/world";
import VietnamTable from "./table/vietnam";
import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";

function App() {

  return (
      <>
        <Router>
    <SearchAppBar/>
          <Route path="/world" component={WorldTable}/>
          <Route path="/vietnam" component={VietnamTable}/>
          <Route path="/" exact component={WorldTable}/>
        </Router>
      </>
  );
}

export default App;

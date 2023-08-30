import "./App.css";
import ListGroup from "./components/ListGroup";
import Navbar from "./components/Navbar";
import data from "./components/data";

function App() {
  const lists = data.map((list, index) => (
    <ListGroup key={index} item={list} />
  ));

  return (
    <>
      <Navbar />
      {lists}
    </>
  );
}

export default App;

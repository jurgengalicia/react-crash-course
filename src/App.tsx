import ListGroup from "./components/ListGroup";

let items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];

function App() {
  return (
    <div>
      <ListGroup items={items} heading="cities" />
    </div>
  );
}

export default App;

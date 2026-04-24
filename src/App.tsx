import ListGroup from "./components/ListGroup";

let items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];
const handleSelectItem = (item: string) => {
  console.log(item);
};

function App() {
  return (
    <div>
      <ListGroup
        items={items}
        heading="cities"
        onSelectItem={handleSelectItem}
      />
    </div>
  );
}

export default App;

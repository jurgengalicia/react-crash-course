import ListGroup from "./components/ListGroup";
import Alert from "./components/Alert";
import Button from "./components/Button";
import { useState } from "react";

let items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];
let buttonTypes = [
  "primary",
  "secondary",
  "success",
  "danger",
  "warning",
  "info",
  "light",
  "dark",
];
let buttonIndex = 0;
const handleSelectItem = (item: string) => {
  console.log(item);
};

// const updateButtonIndex = () => {
//   if (buttonIndex <= 7) {
//     buttonIndex++;
//   } else {
//     buttonIndex = 0;
//   }
//   console.log();
// };

// const handleButtonPress = () => {
//   console.log("hello");
// };
//onClickButton={updateButtonIndex}
function App() {
  const [alertVisible, setAlertVisibility] = useState(false);

  const showAlert = () => {
    setAlertVisibility(true);
  };
  const closeAlert = () => {
    setAlertVisibility(false);
  };

  return (
    <div>
      {alertVisible && (
        <Alert onClose={closeAlert}>
          goodbye <span>world</span>
        </Alert>
      )}
      <Button onBtnClick={showAlert} buttonNames={buttonTypes}>
        I am a Button <em>xD</em>
      </Button>
      <ListGroup
        items={items}
        heading="cities"
        onSelectItem={handleSelectItem}
      />
    </div>
  );
}

export default App;

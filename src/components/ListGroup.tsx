// import { MouseEvent } from "react";
import { useState } from "react";

interface ListGroupProps {
  items: string[];
  heading: string;
  onSelectItem: (item: string) => void;
}

function ListGroup({ items, heading, onSelectItem }: ListGroupProps) {
  //   let selectedIndex = 0;
  //hook
  const [selectedIndex, setSelectedIndex] = useState(-1);
  //   const [name, setName] = useState("");
  // arr[0] variable (selectedIndex)
  // arr[1] updater function

  // eventHandler
  //   const handleClick = (event: MouseEvent) => (selectedIndex = this.index);

  return (
    <>
      <h1>{heading}</h1>
      {items.length === 0 && <p>no items found</p>}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            key={item}
            onClick={() => {
              setSelectedIndex(index);
              onSelectItem(item);
            }}
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;

import { useState } from "react";
import { Logo } from "./components/Logo.jsx";
import { Form } from "./components/Form.jsx";
import { PackingList } from "./components/PackingList.jsx";
import { Stats } from "./components/Stats.jsx";

export default function App() {
  const [items, setItems] = useState([]);

  const handleAddItems = (item) => {
    setItems((items) => [...items, item]);
  };

  const handleDeleteItem = (id) => {
    setItems((items) => items.filter((item) => item.id !== id));
  };

  const handlePackingItem = (id) => {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item,
      ),
    );
  };

  const clearList = () => {
    const confirmed = window.confirm(
      "Are you sure you want to delete all items?",
    );
    if (confirmed) setItems([]);
  };

  return (
    <div className="app">
      <Logo />
      <Form onAddItems={handleAddItems} />
      <PackingList
        items={items}
        onDeleteItem={handleDeleteItem}
        onPackedItem={handlePackingItem}
        clearList={clearList}
      />
      <Stats items={items} />
    </div>
  );
}

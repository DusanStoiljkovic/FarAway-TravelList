export const Item = ({ item, onDeleteItem, onPackedItem }) => {
  return (
    <li>
      <input type="checkbox" onChange={() => onPackedItem(item.id)} />
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.quantity} {item.description}
      </span>
      <button onClick={() => onDeleteItem(item.id)}>❌</button>
    </li>
  );
};

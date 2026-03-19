export const Stats = ({ items }) => {
  if (!items.length)
    return (
      <p className="stats">
        <em>Start adding some items to your packing list</em>
      </p>
    );

  const numOfItems = items.length;
  const packedItems = items.reduce(
    (acc, curr) => (curr.packed ? acc + 1 : acc),
    0,
  );
  const packedItemsInPercentage = (packedItems / numOfItems) * 100;

  return (
    <footer className="stats">
      <em>
        You have {numOfItems} items on your list, and you've already packed{" "}
        {packedItems} ({packedItemsInPercentage}%)
      </em>
    </footer>
  );
};

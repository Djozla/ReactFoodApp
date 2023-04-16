function List(props) {
  return (
    <ul>
      {props.items.map((item) => (
        <li key={item.id}>
          {item.username} ({item.age} Years old)
        </li>
      ))}
    </ul>
  );
}

export default List;

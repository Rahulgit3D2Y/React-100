const List = ({ people }) => {
  if (people.length === 0) {
    return <p>No birthdays today!</p>;
  }

  return (
    <ul className="birthday-list">
      {people.map((person) => (
        <li key={person.id} className="birthday-item">
          <img src={person.image} alt={person.name} className="profile-pic" />
          <div>
            <h3>{person.name}</h3>
            <p>Age: {person.age}</p>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default List;

const BirthdayLogic = (people) => {
  const today = new Date();
  const todayFormatted = `${String(today.getMonth() + 1).padStart(
    2,
    "0"
  )}-${String(today.getDate()).padStart(2, "0")}`;

  // Extract and compare only the 'MM-DD' part of the 'dob'
  return people.filter((person) => {
    const dobFormatted = person.dob.slice(5); // Get 'MM-DD'
    return dobFormatted === todayFormatted;
  });
};

export default BirthdayLogic;

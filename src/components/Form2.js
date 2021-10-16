export default function Form2({ handleChange, age }) {
  return (
    <>
      {/* age */}
      <label htmlFor="age">Age:</label>
      <input
        name="age"
        placeholder="Introduce the age..."
        id="age"
        value={age}
        onChange={handleChange}
      />
    </>
  );
}

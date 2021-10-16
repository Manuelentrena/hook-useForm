import useForm from "../hook/useForm";
import useSave from "../hook/useSave";
import Form2 from "./Form2";
import "./styles.css";

const initialState = {
  firstName: "",
  lastName: "",
  age: "",
};

export default function Form() {
  const { values, handleChange } = useForm(initialState);
  const { showData } = useSave();

  const handleSubmit = (event) => {
    event.preventDefault();
    showData(values);
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      {/* firstName */}
      <label htmlFor="firstName">FirstName:</label>
      <input
        name="firstName"
        placeholder="Introduce the firstName..."
        id="firstName"
        value={values.firstName}
        onChange={handleChange}
      />
      {/* lastName */}
      <label htmlFor="lastName">LastName:</label>
      <input
        name="lastName"
        placeholder="Introduce the lastName..."
        id="lastName"
        value={values.lastName}
        onChange={handleChange}
      />
      <Form2 handleChange={handleChange} age={values.age} />
      <button type="submit">SEND</button>
    </form>
  );
}

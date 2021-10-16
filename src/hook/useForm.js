import { useState } from "react";

export default function useForm(initialState) {
  const [values, setValues] = useState(initialState);

  const handleChange = ({ target: { name, value } }) => {
    /* setValues((prev) => ({ ...prev, [name]: value })); */
    setValues({ ...values, [name]: value });
  };

  return {
    values,
    handleChange,
  };
}

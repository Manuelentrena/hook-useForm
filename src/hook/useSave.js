/* import { useState } from "react"; */

export default function useSave() {
  /* const [data, setData] = useState(values); */

  const showData = (values) => {
    console.log(values);
  };

  return {
    showData,
  };
}

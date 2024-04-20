import { useLoaderData } from "react-router-dom";
import App from "../App";
import { AppContext } from "../context/AppContext";
import { PersonDataType } from "../types";

export async function loader({ params }: { params: any }) {
  const personData = require(`../data/${params.person}.json`);
  return personData as PersonDataType;
}

export default function Root() {
  const person = useLoaderData() as PersonDataType;
  return (
    <AppContext.Provider value={person}>
      <App />
    </AppContext.Provider>
  );
}

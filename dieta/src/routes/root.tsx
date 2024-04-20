import { useLoaderData } from "react-router-dom";
import App from "../App";
import { AppContext } from "../context/AppContext";
import { AppDataType } from "../types";

export async function loader({ params }: { params: any }) {
  const personData = require(`../data/${params.person}.json`);
  console.log(personData);
  return personData;
}

export default function Root() {
  const person = useLoaderData() as AppDataType;
  return (
    <AppContext.Provider value={person}>
      <App />
    </AppContext.Provider>
  );
}

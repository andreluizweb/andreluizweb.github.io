import { useContext } from "react";
import { AppContext } from "../../context/AppContext";

export function Header() {
  const appData = useContext(AppContext);
  return (
    <header>
      <h1>
        Plano <br />
        Alimentar
      </h1>
      <div className="nutri">
        {appData?.professional || "Not defined"}
        <span>CRN: {appData?.crn || "Not defined"}</span>
      </div>
      <section className="box-with-shadow">
        <h2>{appData?.name || "Not defined"}</h2>
        <span>{appData?.date || "Not defined"}</span>
      </section>
    </header>
  );
}

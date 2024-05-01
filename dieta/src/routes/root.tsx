import { NavLink } from "react-router-dom";

export default function Root() {
  return (
    <div className="main">
      <header>
        <h1>Escolha a pessoa</h1>
        <NavLink to="/andre" className="cta-button">
          <h2>André Luiz</h2>
        </NavLink>
        <NavLink to="/erika" className="cta-button">
          <h2>Érika</h2>
        </NavLink>
      </header>
    </div>
  );
}

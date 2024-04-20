export default function Meal() {
  return (
    <section className="meal">
      <div className="header">
        <div className="time">06:30</div>
        <div className="name">Café da Manhã</div>
      </div>
      <div className="body">
        <div className="food-card">
          <div className="item">
            <div className="header">
              <div className="text">Café com adoçante ou puro</div>
            </div>
          </div>
        </div>

        <div className="food-card">
          <div className="item">
            <div className="header">
              <div className="text">Pão</div>
              <div className="weight">
                50<span>g</span>
              </div>
            </div>
          </div>
          <div className="or">ou</div>
          <div className="item">
            <div className="header">
              <div className="text">Cuscuz</div>
              <div className="weight">
                122<span>g</span>
              </div>
            </div>
          </div>
          <div className="or">ou</div>
          <div className="item">
            <div className="header">
              <div className="text">Tapioca</div>
              <div className="weight">
                41<span>g</span>
              </div>
            </div>
          </div>
          <div className="or">ou</div>
          <div className="item">
            <div className="header">
              <div className="text">Inhame cozido</div>
              <div className="weight">
                119<span>g</span>
              </div>
            </div>
          </div>
        </div>

        <div className="food-card">
          <div className="item">
            <div className="header">
              <div className="text">Ovo</div>
              <div className="weight">1</div>
            </div>
            <div className="body">
              <ul>
                <li>3g - Manteiga</li>
              </ul>
            </div>
          </div>
          <div className="or">ou</div>
          <div className="item">
            <div className="header">
              <div className="text">Filé de Frango desfiado</div>
              <div className="weight">
                40<span>g</span>
              </div>
            </div>
          </div>
          <div className="or">ou</div>
          <div className="item">
            <div className="header">
              <div className="text">
                Carne moída (patinho/filé mignon/alcatra magra)
              </div>
              <div className="weight">
                40<span>g</span>
              </div>
            </div>
          </div>
          <div className="or">ou</div>
          <div className="item">
            <div className="header">
              <div className="text">Atum (sólido ao natural)</div>
              <div className="weight">
                40<span>g</span>
              </div>
            </div>
          </div>
          <div className="or">ou</div>
          <div className="item">
            <div className="header">
              <div className="text">Sardinha (em óleo)</div>
              <div className="weight">
                40<span>g</span>
              </div>
            </div>
          </div>
        </div>

        <div className="food-card">
          <div className="item">
            <div className="header">
              <div className="text">
                <span className="uppertext">substituir tudo por</span>Vitamina
              </div>
            </div>
            <div className="body">
              <ul>
                <li>200ml - Leite Desnatado</li>
                <li>75g - Banana</li>
                <li>15g - Aveia</li>
                <li>10g - Whey Protein</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

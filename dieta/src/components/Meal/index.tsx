import { FoodCardType, MealType } from "../../types";

function renderFoodCards(foods: FoodCardType[]) {
  return foods.map((food) => (
    <div className="food-card">
      {food.options.map((item, key: number) => {
        return (
          <>
            <div className="item">
              <div className="header">
                <div className="text">
                  {item.uppertag && (
                    <span className="uppertext">{item.uppertag}</span>
                  )}
                  {item.name}
                </div>

                {item.weight && (
                  <div className="weight">
                    {item.weight}
                    {item.unit ? <span>{item.unit}</span> : null}
                  </div>
                )}
              </div>
              {item.list && (
                <div className="body">
                  <ul>
                    {item.list.map((listItem, key) => (
                      <li key={key}>{listItem}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
            {food.options.length > 1 && key < food.options.length - 1 && (
              <div className="or">ou</div>
            )}
          </>
        );
      })}
    </div>
  ));
}

export default function Meal({ meal }: { meal: MealType }) {
  const { time = "", name = "", foods = [] } = meal;
  return (
    <section className="meal">
      <div className="header">
        <div className="time">{time}</div>
        <div className="name">{name}</div>
      </div>
      <div className="body">{renderFoodCards(foods)}</div>
    </section>
  );
}

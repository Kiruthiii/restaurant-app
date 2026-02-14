import { useState } from "react";
import { menuData } from "../data/menudata";
import "../styles/digitalMenu.css";

const DigitalMenu = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [order, setOrder] = useState({});

  const addItem = (item) => {
    setOrder((prev) => ({
      ...prev,
      [item.id]: prev[item.id]
        ? { ...prev[item.id], qty: prev[item.id].qty + 1 }
        : { ...item, qty: 1 },
    }));
  };

  const filteredMenu =
    activeCategory === "All"
      ? menuData
      : menuData.filter((c) => c.category === activeCategory);

  const total = Object.values(order).reduce(
    (sum, item) => sum + item.price * item.qty,
    0
  );

  return (
    <section className="menu-page">
      <h2 className="menu-title">Digital Menu</h2>
      <p className="menu-sub">Browse and order at your own pace</p>
      <div className="menu-filter">
        <button
          className={activeCategory === "All" ? "active" : ""}
          onClick={() => setActiveCategory("All")}
        >
          All
        </button>
        {menuData.map((cat) => (
          <button
            key={cat.category}
            className={activeCategory === cat.category ? "active" : ""}
            onClick={() => setActiveCategory(cat.category)}
          >
            {cat.category}
          </button>
        ))}
      </div>

      {filteredMenu.map((section) => (
        <div key={section.category} className="menu-section">
          <h3>{section.category}</h3>

          {section.items.map((item) => (
            <div key={item.id} className="menu-item">
              <img src={item.image} alt={item.name} />

              <div className="menu-info">
                <h4>{item.name}</h4>
                <p>{item.description}</p>
              </div>

              <div className="menu-action">
                <span>₹{item.price}</span>
                <button onClick={() => addItem(item)}>Add</button>
              </div>
            </div>
          ))}
        </div>
      ))}

      {total > 0 && (
        <div className="order-summary">
          <span>Total</span>
          <strong>₹{total}</strong>
        </div>
      )}
    </section>
  );
};

export default DigitalMenu;

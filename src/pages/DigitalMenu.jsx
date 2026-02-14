import { useState, useEffect } from "react";
import { menuData } from "../data/menudata";
import "../styles/digitalMenu.css";

const DigitalMenu = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [order, setOrder] = useState({});

  // Load cart from localStorage
  useEffect(() => {
    const savedCart = localStorage.getItem("cart");
    if (savedCart) {
      setOrder(JSON.parse(savedCart));
    }
  }, []);

  // Save cart to localStorage
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(order));
  }, [order]);

  const addItem = (item) => {
    setOrder((prev) => ({
      ...prev,
      [item.id]: prev[item.id]
        ? { ...prev[item.id], qty: prev[item.id].qty + 1 }
        : { ...item, qty: 1 },
    }));
  };

  const removeItem = (item) => {
    setOrder((prev) => {
      if (!prev[item.id]) return prev;

      const updatedQty = prev[item.id].qty - 1;

      if (updatedQty <= 0) {
        const newOrder = { ...prev };
        delete newOrder[item.id];
        return newOrder;
      }

      return {
        ...prev,
        [item.id]: { ...prev[item.id], qty: updatedQty },
      };
    });
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

      {/* Category Filter */}
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

      {/* Menu Sections */}
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
                <span className="price">₹{item.price}</span>

                {order[item.id] ? (
                  <div className="qty-controls">
                    <button onClick={() => removeItem(item)}>-</button>
                    <span>{order[item.id].qty}</span>
                    <button onClick={() => addItem(item)}>+</button>
                  </div>
                ) : (
                  <button
                    className="add-btn"
                    onClick={() => addItem(item)}
                  >
                    Add
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      ))}

      {/* Order Summary */}
      {total > 0 && (
        <div className="order-summary">
          <h4>Your Order</h4>

          {Object.values(order).map((item) => (
            <div key={item.id} className="summary-item">
              <span>
                {item.name} × {item.qty}
              </span>
              <span>₹{item.price * item.qty}</span>
            </div>
          ))}

          <div className="summary-total">
            <strong>Total</strong>
            <strong>₹{total}</strong>
          </div>
          {total > 0 && (
  <button
    className="checkout-btn"
    onClick={() => {
      alert("Order Confirmed!");
      setOrder({});
    }}
  >
    Confirm Order
  </button>
)}

</div>
      )}
    </section>
  );
};

export default DigitalMenu;

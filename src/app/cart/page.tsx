"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import styles from "../page.module.css";
import CheckoutModal from "../components/CheckoutModal";

interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
}

export default function CartPage() {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [checkoutTotal, setCheckoutTotal] = useState(0);

  useEffect(() => {
    const stored = localStorage.getItem("cart");
    if (stored) {
      setCartItems(JSON.parse(stored));
    }
  }, []);

  const updateCart = (newCart: CartItem[]) => {
    setCartItems(newCart);
    localStorage.setItem("cart", JSON.stringify(newCart));
  };

  const removeItem = (id: string) => {
    const newCart = cartItems.filter((item) => item.id !== id);
    updateCart(newCart);
  };

  const updateQuantity = (id: string, quantity: number) => {
    if (quantity <= 0) {
      removeItem(id);
      return;
    }
    const newCart = cartItems.map((item) =>
      item.id === id ? { ...item, quantity } : item
    );
    updateCart(newCart);
  };

  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const handleCheckout = () => {
    setCheckoutTotal(total);
    setIsModalOpen(true);
    localStorage.removeItem("cart");
    setCartItems([]);
  };

  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <nav className={styles.nav}>
          <Link href="/" className={styles.logo}>Handcrafted Haven</Link>
          <div className={styles.navLinks}>
            <Link href="/products">Products</Link>
            <Link href="/sellers">Sellers</Link>
            <Link href="/cart">Cart</Link>
          </div>
        </nav>
      </header>

      <main className={styles.main}>
        <section className={styles.cartSection}>
          <div className={styles.cartContainer}>
            <h1 className={styles.sectionTitle} style={{ textAlign: "left" }}>
              Shopping Cart
            </h1>

            {cartItems.length === 0 ? (
              <div className={styles.emptyCart}>
                <p>Your cart is empty.</p>
                <Link href="/products" className={styles.ctaButton}>Browse Products</Link>
              </div>
            ) : (
              <>
                <div className={styles.cartList}>
                  {cartItems.map((item) => (
                    <div key={item.id} className={styles.cartItem}>
                      <div className={styles.cartItemInfo}>
                        <h3>{item.name}</h3>
                        <p className={styles.price} style={{ fontSize: "1.25rem" }}>
                          ${item.price.toFixed(2)}
                        </p>
                      </div>
                      <div className={styles.cartItemControls}>
                        <div className={styles.quantityControl}>
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            className={styles.quantityButton}
                          >
                            -
                          </button>
                          <span className={styles.quantityValue}>{item.quantity}</span>
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className={styles.quantityButton}
                          >
                            +
                          </button>
                        </div>
                        <p className={styles.price}>
                          ${(item.price * item.quantity).toFixed(2)}
                        </p>
                        <button
                          onClick={() => removeItem(item.id)}
                          className={styles.removeButton}
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  ))}
                </div>

                <div className={styles.cartSummary}>
                  <h2>Total</h2>
                  <p className={styles.price} style={{ fontSize: "2rem" }}>
                    ${total.toFixed(2)}
                  </p>
                </div>

                <button onClick={handleCheckout} className={styles.primaryButton}>
                  Proceed to Checkout
                </button>
              </>
            )}
          </div>
        </section>
      </main>

      <footer className={styles.footer}>
        <p>&copy; 2026 Handcrafted Haven. All rights reserved.</p>
      </footer>

      <CheckoutModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} total={checkoutTotal} />
    </div>
  );
}

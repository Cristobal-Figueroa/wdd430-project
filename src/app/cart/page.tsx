import Link from "next/link";
import styles from "../page.module.css";

export default function CartPage() {
  const cartItems = [
    { id: "handwoven-basket", name: "Handwoven Basket", price: 45.0, quantity: 1 },
    { id: "ceramic-mug", name: "Ceramic Mug", price: 22.0, quantity: 2 },
  ];

  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

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
        <section className={styles.about}>
          <div className={styles.aboutContent} style={{ maxWidth: "900px", textAlign: "left" }}>
            <h1 className={styles.sectionTitle} style={{ textAlign: "left" }}>
              Shopping Cart
            </h1>

            {cartItems.length === 0 ? (
              <p>Your cart is empty.</p>
            ) : (
              <>
                <div style={{ marginBottom: "2rem" }}>
                  {cartItems.map((item) => (
                    <div
                      key={item.id}
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        padding: "1rem 0",
                        borderBottom: "1px solid var(--border)",
                      }}
                    >
                      <div>
                        <h3 style={{ marginBottom: "0.25rem" }}>{item.name}</h3>
                        <p className={styles.seller}>Quantity: {item.quantity}</p>
                      </div>
                      <p className={styles.price} style={{ fontSize: "1.25rem" }}>
                        ${(item.price * item.quantity).toFixed(2)}
                      </p>
                    </div>
                  ))}
                </div>

                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginBottom: "2rem",
                  }}
                >
                  <h2>Total</h2>
                  <p className={styles.price} style={{ fontSize: "2rem" }}>
                    ${total.toFixed(2)}
                  </p>
                </div>

                <button className={styles.primaryButton}>Proceed to Checkout</button>
              </>
            )}
          </div>
        </section>
      </main>

      <footer className={styles.footer}>
        <p>&copy; 2026 Handcrafted Haven. All rights reserved.</p>
      </footer>
    </div>
  );
}

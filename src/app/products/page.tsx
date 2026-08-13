import Link from "next/link";
import { products } from "../data";
import styles from "../page.module.css";

export default function ProductsPage() {
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
        <section className={styles.features}>
          <h1 className={styles.sectionTitle}>All Products</h1>
          <div className={styles.productGrid}>
            {products.map((product) => (
              <div className={styles.productCard} key={product.id}>
                <div
                  className={styles.productImage}
                  style={{ backgroundColor: product.imageColor }}
                ></div>
                <h3>{product.name}</h3>
                <p className={styles.price}>${product.price.toFixed(2)}</p>
                <p className={styles.seller}>{product.category}</p>
                <Link href={`/products/${product.id}`} className={styles.ctaButton}>
                  View Details
                </Link>
              </div>
            ))}
          </div>
        </section>
      </main>

      <footer className={styles.footer}>
        <p>&copy; 2026 Handcrafted Haven. All rights reserved.</p>
      </footer>
    </div>
  );
}

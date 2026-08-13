import Link from "next/link";
import { sellers } from "../data";
import styles from "../page.module.css";

export default function SellersPage() {
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
        <section className={styles.sellers}>
          <h1 className={styles.sectionTitle}>Meet Our Artisans</h1>
          <div className={styles.sellerGrid}>
            {sellers.map((seller) => (
              <div className={styles.sellerCard} key={seller.id}>
                <div
                  className={styles.sellerAvatar}
                  style={{ backgroundColor: seller.imageColor }}
                ></div>
                <h3>{seller.name}</h3>
                <p>{seller.bio}</p>
                <Link href={`/sellers/${seller.id}`} className={styles.ctaButton}>
                  View Profile
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

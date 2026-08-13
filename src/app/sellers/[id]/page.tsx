import { notFound } from "next/navigation";
import Link from "next/link";
import { getSellerById, getProductsBySeller } from "../../data";
import styles from "../../page.module.css";

export function generateStaticParams() {
  return [
    { id: "maria-crafts" },
    { id: "clay-studio" },
    { id: "wood-artisan" },
    { id: "yarn-dreams" },
  ];
}

interface SellerPageProps {
  params: Promise<{ id: string }>;
}

export default async function SellerDetailPage({ params }: SellerPageProps) {
  const { id } = await params;
  const seller = getSellerById(id);

  if (!seller) {
    notFound();
  }

  const products = getProductsBySeller(id);

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
            <div
              style={{
                width: "120px",
                height: "120px",
                borderRadius: "50%",
                backgroundColor: seller.imageColor,
                marginBottom: "1.5rem",
              }}
            ></div>
            <h1 className={styles.heroTitle} style={{ color: "var(--text-primary)" }}>
              {seller.name}
            </h1>
            <p className={styles.aboutContent} style={{ fontSize: "1.125rem", lineHeight: "1.8" }}>
              {seller.story}
            </p>
          </div>
        </section>

        <section className={styles.features}>
          <h2 className={styles.sectionTitle}>Products by {seller.name}</h2>
          <div className={styles.productGrid}>
            {products.map((product) => (
              <div className={styles.productCard} key={product.id}>
                <div
                  className={styles.productImage}
                  style={{ backgroundColor: product.imageColor }}
                ></div>
                <h3>{product.name}</h3>
                <p className={styles.price}>${product.price.toFixed(2)}</p>
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

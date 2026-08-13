import { notFound } from "next/navigation";
import Link from "next/link";
import { getProductById, getSellerById } from "../../data";
import styles from "../../page.module.css";
import AddToCartButton from "../../components/AddToCartButton";

export function generateStaticParams() {
  return [
    { id: "handwoven-basket" },
    { id: "ceramic-vase" },
    { id: "wooden-bowl" },
    { id: "knitted-scarf" },
    { id: "woven-wall-hanging" },
    { id: "ceramic-mug" },
    { id: "wooden-spatula" },
    { id: "knitted-beanie" },
  ];
}

interface ProductPageProps {
  params: Promise<{ id: string }>;
}

export default async function ProductDetailPage({ params }: ProductPageProps) {
  const { id } = await params;
  const product = getProductById(id);
  const seller = product ? getSellerById(product.sellerId) : undefined;

  if (!product) {
    notFound();
  }

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
          <div className={styles.detailCard} style={{ maxWidth: "900px", margin: "0 auto" }}>
            <img
              src={product.imageUrl}
              alt={product.name}
              style={{
                width: "100%",
                height: "300px",
                objectFit: "cover",
                borderRadius: "8px",
                marginBottom: "2rem",
              }}
            />
            <h1 className={styles.heroTitle} style={{ color: "var(--text-primary)" }}>
              {product.name}
            </h1>
            <p className={styles.price} style={{ fontSize: "2rem" }}>${product.price.toFixed(2)}</p>
            <p className={styles.aboutContent} style={{ fontSize: "1.125rem", lineHeight: "1.8" }}>
              {product.description}
            </p>
            <p className={styles.seller}>
              Category: {product.category}
            </p>
            {seller && (
              <p className={styles.seller}>
                Seller: <Link href={`/sellers/${seller.id}`} style={{ color: "var(--primary)" }}>{seller.name}</Link>
              </p>
            )}
            <div style={{ marginTop: "2rem" }}>
              <AddToCartButton product={{ id: product.id, name: product.name, price: product.price }} />
            </div>
          </div>
        </section>
      </main>

      <footer className={styles.footer}>
        <p>&copy; 2026 Handcrafted Haven. All rights reserved.</p>
      </footer>
    </div>
  );
}

import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <nav className={styles.nav}>
          <div className={styles.logo}>Handcrafted Haven</div>
          <div className={styles.navLinks}>
            <a href="#products">Products</a>
            <a href="#sellers">Sellers</a>
            <a href="#about">About</a>
            <button className={styles.ctaButton}>Start Selling</button>
          </div>
        </nav>
      </header>

      <main className={styles.main}>
        <section className={styles.hero}>
          <div className={styles.heroContent}>
            <h1 className={styles.heroTitle}>Discover Unique Handcrafted Treasures</h1>
            <p className={styles.heroSubtitle}>
              Connect with talented artisans and find one-of-a-kind handmade products that tell a story
            </p>
            <div className={styles.heroButtons}>
              <button className={styles.primaryButton}>Explore Products</button>
              <button className={styles.secondaryButton}>Become a Seller</button>
            </div>
          </div>
        </section>

        <section className={styles.features} id="products">
          <h2 className={styles.sectionTitle}>Featured Products</h2>
          <div className={styles.productGrid}>
            <div className={styles.productCard}>
              <div className={styles.productImage}></div>
              <h3>Handwoven Basket</h3>
              <p className={styles.price}>$45.00</p>
              <p className={styles.seller}>By Maria's Crafts</p>
            </div>
            <div className={styles.productCard}>
              <div className={styles.productImage}></div>
              <h3>Ceramic Vase</h3>
              <p className={styles.price}>$65.00</p>
              <p className={styles.seller}>By Clay Studio</p>
            </div>
            <div className={styles.productCard}>
              <div className={styles.productImage}></div>
              <h3>Wooden Bowl</h3>
              <p className={styles.price}>$38.00</p>
              <p className={styles.seller}>By Wood Artisan</p>
            </div>
            <div className={styles.productCard}>
              <div className={styles.productImage}></div>
              <h3>Knitted Scarf</h3>
              <p className={styles.price}>$28.00</p>
              <p className={styles.seller}>By Yarn Dreams</p>
            </div>
          </div>
        </section>

        <section className={styles.sellers} id="sellers">
          <h2 className={styles.sectionTitle}>Meet Our Artisans</h2>
          <div className={styles.sellerGrid}>
            <div className={styles.sellerCard}>
              <div className={styles.sellerAvatar}></div>
              <h3>Maria's Crafts</h3>
              <p>Traditional weaving techniques passed down through generations</p>
            </div>
            <div className={styles.sellerCard}>
              <div className={styles.sellerAvatar}></div>
              <h3>Clay Studio</h3>
              <p>Handmade ceramics inspired by nature and modern design</p>
            </div>
            <div className={styles.sellerCard}>
              <div className={styles.sellerAvatar}></div>
              <h3>Wood Artisan</h3>
              <p>Sustainable woodwork from locally sourced materials</p>
            </div>
          </div>
        </section>

        <section className={styles.about} id="about">
          <div className={styles.aboutContent}>
            <h2 className={styles.sectionTitle}>About Handcrafted Haven</h2>
            <p>
              We believe in the power of handmade goods to tell stories, preserve traditions, and create meaningful connections between creators and consumers. Our platform supports local artisans and promotes sustainable consumption by connecting you with unique, quality products.
            </p>
            <button className={styles.primaryButton}>Learn More</button>
          </div>
        </section>
      </main>

      <footer className={styles.footer}>
        <p>&copy; 2026 Handcrafted Haven. All rights reserved.</p>
      </footer>
    </div>
  );
}

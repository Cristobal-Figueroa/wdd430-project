import Link from "next/link";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <nav className={styles.nav}>
          <Link href="/" className={styles.logo}>Handcrafted Haven</Link>
          <div className={styles.navLinks}>
            <Link href="/products">Products</Link>
            <Link href="/sellers">Sellers</Link>
            <Link href="/cart">Cart</Link>
            <Link href="/sellers" className={styles.ctaButton}>Start Selling</Link>
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
              <Link href="/products" className={styles.primaryButton}>Explore Products</Link>
              <Link href="/sellers" className={styles.secondaryButton}>Become a Seller</Link>
            </div>
          </div>
        </section>

        <section className={styles.features} id="products">
          <h2 className={styles.sectionTitle}>Featured Products</h2>
          <div className={styles.productGrid}>
            <Link href="/products/handwoven-basket" className={styles.productCard}>
              <img src="https://http2.mlstatic.com/D_NQ_NP_830885-CBT82606535231_022025-O.webp" alt="Handwoven Basket" className={styles.productImage} />
              <h3>Handwoven Basket</h3>
              <p className={styles.price}>$45.00</p>
              <p className={styles.seller}>By Maria's Crafts</p>
            </Link>
            <Link href="/products/ceramic-vase" className={styles.productCard}>
              <img src="https://images.unsplash.com/photo-1610701596007-11502861dcfa?w=400&h=300&fit=crop" alt="Ceramic Vase" className={styles.productImage} />
              <h3>Ceramic Vase</h3>
              <p className={styles.price}>$65.00</p>
              <p className={styles.seller}>By Clay Studio</p>
            </Link>
            <Link href="/products/wooden-bowl" className={styles.productCard}>
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyHxYPo93zhUyn82OUpzR4yW2mPfZR6st8wBo9Nihhh2oWqgS6HZO68b6F&s=10" alt="Wooden Bowl" className={styles.productImage} />
              <h3>Wooden Bowl</h3>
              <p className={styles.price}>$38.00</p>
              <p className={styles.seller}>By Wood Artisan</p>
            </Link>
            <Link href="/products/knitted-scarf" className={styles.productCard}>
              <img src="https://megangoodacre.com/cdn/shop/articles/ganseyscarfknittingpattern.jpg?v=1551643581" alt="Knitted Scarf" className={styles.productImage} />
              <h3>Knitted Scarf</h3>
              <p className={styles.price}>$28.00</p>
              <p className={styles.seller}>By Yarn Dreams</p>
            </Link>
          </div>
        </section>

        <section className={styles.sellers} id="sellers">
          <h2 className={styles.sectionTitle}>Meet Our Artisans</h2>
          <div className={styles.sellerGrid}>
            <Link href="/sellers/maria-crafts" className={styles.sellerCard}>
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfiLTTWHK0dTqYMl2svJN2kX4XU41F9p90vS5KHqblH01WnpfmCY0uTrM&s=10" alt="Maria's Crafts" className={styles.sellerAvatar} />
              <h3>Maria's Crafts</h3>
              <p>Traditional weaving techniques passed down through generations</p>
            </Link>
            <Link href="/sellers/yarn-dreams" className={styles.sellerCard}>
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTe8kCGQAFd8GP55HVroA5gWmxc9kNLxUgXpHSmRcAvA&s=10" alt="Yarn Dreams" className={styles.sellerAvatar} />
              <h3>Yarn Dreams</h3>
              <p>Handmade textiles inspired by nature and modern design</p>
            </Link>
            <Link href="/sellers/wood-artisan" className={styles.sellerCard}>
              <img src="https://static01.nyt.com/images/2022/12/05/multimedia/05sp-crafts-cabinets-inyt1/merlin_215232078_287587c6-1453-45bd-be87-65f73b0e4657-articleLarge.jpg?quality=75&auto=webp&disable=upscale" alt="Wood Artisan" className={styles.sellerAvatar} />
              <h3>Wood Artisan</h3>
              <p>Sustainable woodwork from locally sourced materials</p>
            </Link>
          </div>
        </section>

        <section className={styles.about} id="about">
          <div className={styles.aboutContent}>
            <h2 className={styles.sectionTitle}>About Handcrafted Haven</h2>
            <p>
              We believe in the power of handmade goods to tell stories, preserve traditions, and create meaningful connections between creators and consumers. Our platform supports local artisans and promotes sustainable consumption by connecting you with unique, quality products.
            </p>
            <Link href="/products" className={styles.primaryButton}>Learn More</Link>
          </div>
        </section>
      </main>

      <footer className={styles.footer}>
        <p>&copy; 2026 Handcrafted Haven. All rights reserved.</p>
      </footer>
    </div>
  );
}

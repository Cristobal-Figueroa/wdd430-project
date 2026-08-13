"use client";

import styles from "../page.module.css";

interface CheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
  total: number;
}

export default function CheckoutModal({ isOpen, onClose, total }: CheckoutModalProps) {
  if (!isOpen) return null;

  return (
    <div className={styles.modalOverlay} onClick={onClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <h2 className={styles.modalTitle}>Order Successful!</h2>
        <p className={styles.modalText}>
          Thank you for your purchase. Your order total was <strong>${total.toFixed(2)}</strong>.
        </p>
        <p className={styles.modalText}>
          You will receive a confirmation email shortly.
        </p>
        <button onClick={onClose} className={styles.primaryButton}>
          Continue Shopping
        </button>
      </div>
    </div>
  );
}

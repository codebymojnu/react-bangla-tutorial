import React from "react";
import styles from "./donate.module.css";

const Donate: React.FC = () => {
  return (
    <div className={styles.donateContainer}>
      <div className={styles.donateCard}>
        <h2 className={styles.donateTitle}>
          ☕ আপনার একটু ছোট ডোনেশন দিয়ে অনেক কিছু সম্ভব!
        </h2>
        <p className={styles.donateText}>
          আমি React ডকুমেন্টেশন বাংলা ভাষায় অনুবাদ করতেছি বিগিনারদের জন্য।{" "}
          <strong className={styles.highlight}>
            আমি প্রতিনিয়ত ব্যবহারযোগ্য নতুন নতুন ফিচার ও কোড
          </strong>{" "}
          আপনাদের সাথে শেয়ার করি।
        </p>
        <p className={styles.donateText}>
          এই কাজগুলো করতে আমার প্রতিদিন প্রচুর সময়, ধৈর্য, ও ইন্টারনেট খরচ হয়।
          আপনি যদি চান, একটি কফির সমমূল্যের{" "}
          <strong className={styles.highlight}>ছোট ডোনেশন</strong>
          করে আমাকে আরও উৎসাহ দিতে পারেন।
        </p>
        <p className={styles.donateText}>
          🏦{" "}
          <strong>
            জনতা ব্যাংক (পাবনা বিজ্ঞান ও প্রযুক্তি বিশ্ববিদ্যালয় শাখা)
          </strong>
          <br />
          হিসাব নাম: Md. Mojnu Miah
          <br />
          হিসাব নম্বর:{" "}
          <strong className={styles.greenText}>015022507014</strong>
        </p>
        <p className={styles.donateText}>
          📲 <strong>Bkash / Nagad / Rocket (Personal):</strong> 01788262433
        </p>
        <p className={styles.donateText}>
          💰 <strong>ক্রিপ্টো ওয়ালেট:</strong>
          <br />
          🔸 BTC (BNB Smart Chain):{" "}
          <code>0xb2066847163c0a1d21cbb8a38eec7632f1f071e5</code>
          <br />
          🔸 Litecoin: <code>LRYT3fVyAEUWcPhHpuJtL3bszAjqKetbKx</code>
          <br />
          🔸 Bitcoin: <code>1CqRZFJkMCZWpUwr9aipNdpD4XymTxZ1MC</code>
        </p>

        <a
          href="https://wa.me/01788262433"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.donateButton}
        >
          💬 WhatsApp এ যোগাযোগ করো
        </a>
      </div>
    </div>
  );
};

export default Donate;

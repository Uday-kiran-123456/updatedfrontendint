import DashboardContent from './DashboardContent';
import styles from './Navigation.module.css';
import PolicySection from './PolicySection';
import ClaimsSection from './ClaimsSection';
import PaymentsSection from './PaymentsSection';
import InsuranceGraphs from './InsuranceGraphs';

const Navigation = () => {
  return (
    <>
    <nav className={styles.nav}>
        <ul className={styles.navList}>
        <li className={styles.navItem}> <a href="#Dashboard"> Dashboard</a></li>
        <li className={styles.navItem}> <a href="#Policies">Policies</a></li>
        <li className={styles.navItem}> <a href="#Claims">Claims</a></li>
        <li className={styles.navItem}> <a href="#Payments">Payments</a></li>
        <li className={styles.navItem}> <a href="#Support">Support</a></li>
      </ul>
    </nav>
    <div id="Dashboard">
      <DashboardContent />
    </div>
    <div id="Policies">
      <PolicySection />
    </div>
    <div id="Claims">
      <ClaimsSection />
    </div>
    <div id="Payments">
      <PaymentsSection />
    </div>
    <div id="Support">
      <InsuranceGraphs />
    </div>
    </>

  );
};

export default Navigation;

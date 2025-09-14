import React from 'react';
import Brand from '../Brand';
import Container from '../Container';
import * as styles from './Header.module.css';
const Header = () => {
  return (
    <div className={styles.root}>
      <Container size={'large'} spacing={'min'}>
        <div className={styles.header}>
          <div className={styles.left}>
            <Brand />
          </div>
          <div className={styles.center}>
            <h4 className={styles.siteTitle}>FASHION AVENUE</h4>
          </div>
          <div className={styles.right}>
            <span className={styles.contactLine}>
              <a href={'tel:+919907218172'}>+91 9907218172</a>
            </span>
            <span className={`${styles.contactLine} ${styles.hideAddressOnSmall}`}>Fashion Avenue, near Golbazar South Gate</span>
            <span className={`${styles.contactLine} ${styles.hideAddressOnSmall}`}>Ashok Nagar, North 24 Pgs</span>
            <span className={`${styles.contactLine} ${styles.showAddressOnSmall}`}>Near Golbazar South Gate, Ashok Nagar</span>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Header;

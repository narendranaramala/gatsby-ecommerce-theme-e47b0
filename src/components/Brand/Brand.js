import React from 'react';
import { navigate } from 'gatsby';
import { toOptimizedImage } from '../../helpers/general';

import * as styles from './Brand.module.css';

const Brand = () => {
  return (
    <div
      className={styles.root}
      role={'presentation'}
      onClick={() => navigate('/')}
    >
      <img
        className={styles.logo}
        src={toOptimizedImage('/brand.png')}
        alt={'Fashion Avenue logo'}
      />
    </div>
  );
};

export default Brand;


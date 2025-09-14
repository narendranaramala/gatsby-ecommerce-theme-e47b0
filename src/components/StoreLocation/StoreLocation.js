import React, { useEffect, useRef, useState } from 'react';

import * as styles from './StoreLocation.module.css';

const StoreLocation = ({
  mapSrc,
  title = 'Our Store',
  phone = '+1 (555) 123-4567',
  address = '123 Fashion Avenue, New York, NY 10001',
}) => {
  const [shouldLoad, setShouldLoad] = useState(false);
  const mapWrapperRef = useRef(null);

  // Load when in viewport
  useEffect(() => {
    if (shouldLoad) return; // already loaded
    const el = mapWrapperRef.current;
    if (!el || typeof window === 'undefined' || !('IntersectionObserver' in window)) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setShouldLoad(true);
            observer.disconnect();
          }
        });
      },
      { rootMargin: '200px 0px' }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [shouldLoad]);

  return (
    <div className={styles.root}>
      <div className={styles.mapContainer} ref={mapWrapperRef}>
        {shouldLoad ? (
          <iframe
            className={styles.map}
            src={mapSrc}
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
            title={`${title} Location Map`}
          />
        ) : (
          <div className={styles.placeholder} role="button" onClick={() => setShouldLoad(true)}>
            <div className={styles.placeholderInner}>
              <span>Load Map</span>
            </div>
          </div>
        )}
      </div>
      <div className={styles.details}>
        <h3>{title}</h3>
        <div className={styles.lineItem}>
          <span className={styles.label}>Address:</span>
          <span>{address}</span>
        </div>
        <div className={styles.lineItem}>
          <span className={styles.label}>Telephone:</span>
          <a className={styles.link} href={`tel:${phone.replace(/[^+\d]/g, '')}`}>{phone}</a>
        </div>
      </div>
    </div>
  );
};

export default StoreLocation;

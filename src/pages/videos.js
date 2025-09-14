import React from 'react';

import Container from '../components/Container';
import Title from '../components/Title';
import Layout from '../components/Layout/Layout';
import SEO from '../components/SEO/SEO';
import VideoEmbed from '../components/VideoEmbed';
import Banner from '../components/Banner';
import StoreLocation from '../components/StoreLocation';

import * as styles from './videos.module.css';

const VideosPage = () => {
  return (
    <Layout>
      <SEO
        title={'Fashion Avenue | Branded Fashion for Everyone'}
        description={'Branded fashion for the whole family. Great discounts. Affordable prices.'}
        pathname={'/'}
        image={'/brand.png'}
        jsonLd={{
          '@context': 'https://schema.org',
          '@type': 'LocalBusiness',
          name: 'Fashion Avenue',
          telephone: '+91 9907218172',
          image: '/brand.png',
          address: {
            '@type': 'PostalAddress',
            streetAddress: 'Near Golbazar South Gate',
            addressLocality: 'Ashok Nagar',
            addressRegion: 'West Bengal',
            addressCountry: 'IN',
          },
          url: '/',
        }}
      />
      <Banner
        maxWidth={'900px'}
        name={'Fashion Avenue'}
        subtitle={'Branded fashion for the whole family. Great discounts. Affordable prices.'}
        bgImage={'/banner2.png'}
        height={'420px'}
        color={'white'}
      />
      <Container size={'large'} spacing={'min'}>
        <div className={styles.page}>
          <div className={`${styles.section} ${styles.darkSection}`}>
            <Title name="FASHION AVENUE" subtitle="Branded Clothing for Everyone" color={'white'} marginBottom={'40px'} />

        <div className={styles.grid}>
          <VideoEmbed videoId="nYEZRh0EHfI" title="Video 1" />
          <VideoEmbed videoId="1crKfujI1dw" title="Video 2" />
        </div>
          </div>
          <div className={`${styles.section} ${styles.contactSection}`}>
            <Title name="VISIT US" color={'white'} marginBottom={'40px'} />
        <StoreLocation
          title={'Fashion Avenue Store'}
          address={'fashion avenue near golbazar south gate ashok nagar north 24 pgs'}
          phone={'+91 9907218172'}
          mapSrc={'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3677.0549614554207!2d88.6247941!3d22.837456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f8bb6bd164cca9%3A0xf2f2814715a4cb8c!2sFashion%20Avenue%20Golbazar%20Ashokenagar!5e0!3m2!1sen!2sin!4v1757866930762!5m2!1sen!2sin'}
        />
          </div>
        </div>
      </Container>
    </Layout>
  );
};

export default VideosPage;

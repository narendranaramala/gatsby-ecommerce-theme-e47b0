import React, { useMemo, useState } from 'react';

import * as styles from './VideoEmbed.module.css';

const parseYouTubeId = (src) => {
  if (!src) return undefined;
  try {
    // common patterns: https://www.youtube.com/embed/ID, https://youtu.be/ID, v=ID
    const url = new URL(src);
    if (url.hostname.includes('youtu')) {
      if (url.pathname.startsWith('/embed/')) return url.pathname.split('/embed/')[1];
      if (url.hostname === 'youtu.be') return url.pathname.slice(1);
      const v = url.searchParams.get('v');
      if (v) return v;
    }
  } catch (e) {
    // ignore
  }
  // fallback: last segment
  const parts = src.split('/');
  return parts[parts.length - 1];
};

const VideoEmbed = ({ src, videoId, title }) => {
  const id = useMemo(() => videoId || parseYouTubeId(src), [videoId, src]);
  const [playing, setPlaying] = useState(false);

  const [fallbackThumb, setFallbackThumb] = useState(false);
  const thumb = useMemo(() => {
    if (!id) return undefined;
    return fallbackThumb
      ? `https://i.ytimg.com/vi/${id}/hqdefault.jpg`
      : `https://i.ytimg.com/vi/${id}/maxresdefault.jpg`;
  }, [id, fallbackThumb]);
  const embedSrc = useMemo(
    () => (id ? `https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0` : src),
    [id, src]
  );

  if (!id && !src) return null;

  return (
    <div className={styles.container}>
      {playing ? (
        <iframe
          className={styles.iframe}
          src={embedSrc}
          title={title}
          frameBorder="0"
          loading="lazy"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
      ) : (
        <button
          type="button"
          className={styles.thumbButton}
          aria-label={title ? `Play ${title}` : 'Play video'}
          onClick={() => setPlaying(true)}
        >
          {thumb && (
            <img
              className={styles.thumb}
              src={thumb}
              alt={title || 'Video thumbnail'}
              loading="lazy"
              onError={() => setFallbackThumb(true)}
            />
          )}
          <div className={styles.play}>
            <svg viewBox="0 0 68 48" width="68" height="48" aria-hidden>
              <path d="M66.52 7.74c-.78-2.93-3.08-5.23-6.01-6.01C55.64.5 34 .5 34 .5s-21.64 0-26.51 1.23c-2.93.78-5.23 3.08-6.01 6.01C0.25 12.61 0.25 24 0.25 24s0 11.39 1.23 16.26c.78 2.93 3.08 5.23 6.01 6.01C12.36 47.5 34 47.5 34 47.5s21.64 0 26.51-1.23c2.93-.78 5.23-3.08 6.01-6.01C67.75 35.39 67.75 24 67.75 24s0-11.39-1.23-16.26z" fill="#212121" fillOpacity="0.8"/>
              <path d="M45 24 27 14v20z" fill="#fff"/>
            </svg>
          </div>
        </button>
      )}
    </div>
  );
};

export default VideoEmbed;

import { useRef, useState } from 'react';
import Image from 'next/image';
import { Box, Button, Typography } from '@mui/material';

// Carousel memakai scroll-snap bawaan browser: geser di ponsel, panah di keyboard, atau tombol.
export default function Carousel({ images, name }) {
  const ref = useRef(null);
  const [i, setI] = useState(0);
  const go = (n) => {
    const el = ref.current;
    el.scrollTo({ left: ((n + images.length) % images.length) * el.clientWidth, behavior: 'smooth' });
  };
  const onKey = (e) => {
    if (e.key === 'ArrowRight') go(i + 1);
    if (e.key === 'ArrowLeft') go(i - 1);
  };

  return (
    <Box>
      <Box ref={ref} tabIndex={0} role="group" aria-roledescription="carousel" aria-label={`Foto ${name}`} onKeyDown={onKey}
        onScroll={(e) => setI(Math.round(e.currentTarget.scrollLeft / e.currentTarget.clientWidth))}
        sx={{ display: 'flex', overflowX: 'auto', scrollSnapType: 'x mandatory', scrollbarWidth: 'none', '&::-webkit-scrollbar': { display: 'none' } }}>
        {images.map((src, n) => (
          <Box key={src} sx={{ position: 'relative', flex: '0 0 100%', scrollSnapAlign: 'start', height: 'min(72vh, 760px)' }}>
            <Image src={src} alt={`${name}, foto ${n + 1}`} fill priority={n === 0} sizes="100vw" style={{ objectFit: 'contain' }} />
          </Box>
        ))}
      </Box>
      {images.length > 1 && (
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mt: 2 }}>
          <Typography variant="caption" color="text.secondary" aria-live="polite">
            {String(i + 1).padStart(2, '0')} / {String(images.length).padStart(2, '0')}
          </Typography>
          <Box>
            <Button onClick={() => go(i - 1)} aria-label="Foto sebelumnya">←</Button>
            <Button onClick={() => go(i + 1)} aria-label="Foto berikutnya">→</Button>
          </Box>
        </Box>
      )}
    </Box>
  );
}

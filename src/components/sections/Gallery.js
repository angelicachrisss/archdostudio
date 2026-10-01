import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import { Box, Dialog, Button, Typography } from '@mui/material';

export default function Gallery({ images, name }) {
  const [open, setOpen] = useState(null); // index foto yang sedang diperbesar
  const go = useCallback((d) => setOpen((i) => (i === null ? i : (i + d + images.length) % images.length)), [images.length]);

  useEffect(() => {
    if (open === null) return undefined;
    const onKey = (e) => { if (e.key === 'ArrowRight') go(1); if (e.key === 'ArrowLeft') go(-1); };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open, go]);

  return (
    <>
      <Box sx={{ columnCount: { xs: 1, sm: 2 }, columnGap: { xs: 2, md: 3 } }}>
        {images.map((src, i) => (
          <Box key={src} component="button" type="button" onClick={() => setOpen(i)} aria-label={`Perbesar foto ${i + 1} dari ${name}`}
            sx={{ display: 'block', width: '100%', p: 0, mb: { xs: 2, md: 3 }, border: 0, bgcolor: 'transparent', cursor: 'zoom-in', breakInside: 'avoid' }}>
            <Image src={src} alt={`${name}, foto ${i + 1}`} width={0} height={0} sizes="(min-width: 600px) 50vw, 100vw"
              style={{ width: '100%', height: 'auto', display: 'block' }} />
          </Box>
        ))}
      </Box>

      <Dialog fullScreen open={open !== null} onClose={() => setOpen(null)}
        PaperProps={{ sx: { bgcolor: 'text.primary', color: 'background.default', display: 'flex', flexDirection: 'column' } }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', px: 3, py: 1 }}>
          <Typography variant="body2">{name}, {open !== null ? open + 1 : 0} / {images.length}</Typography>
          <Button color="inherit" onClick={() => setOpen(null)}>Tutup</Button>
        </Box>
        <Box sx={{ position: 'relative', flex: 1, minHeight: 0 }}>
          {open !== null && <Image src={images[open]} alt={`${name}, foto ${open + 1}`} fill sizes="100vw" style={{ objectFit: 'contain' }} />}
        </Box>
        <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, py: 1.5 }}>
          <Button color="inherit" onClick={() => go(-1)}>Sebelumnya</Button>
          <Button color="inherit" onClick={() => go(1)}>Berikutnya</Button>
        </Box>
      </Dialog>
    </>
  );
}

import { useEffect, useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import { Box, Typography } from '@mui/material';
import { gutter } from '@/theme/theme';
import { site } from '@/data/site';
import { projects } from '@/data/projects';

// Foto di beranda (ubah slug sesuai selera)
const slides = ['hs-residence', 'griya-anabatic', 'c-home', 'w-home'].map((s) => projects.find((p) => p.slug === s));

export default function Home() {
  const [i, setI] = useState(0);
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined;
    const t = setInterval(() => setI((n) => (n + 1) % slides.length), 6000);
    return () => clearInterval(t);
  }, []);
  const cur = slides[i];

  return (
    <>
      <Head>
        <title>{site.name} | {site.descriptor}</title>
        <meta name="description" content={`${site.name}, ${site.descriptor.toLowerCase()} di Gading Serpong, Tangerang.`} />
      </Head>
      <Box sx={{ position: 'relative', height: '100vh', '@supports (height: 100svh)': { height: '100svh' }, minHeight: 480, bgcolor: 'text.primary', color: '#fff', overflow: 'hidden' }}>
        {slides.map((p, n) => (
          <Box key={p.slug} aria-hidden={n !== i} sx={{ position: 'absolute', inset: 0, opacity: n === i ? 1 : 0, transition: 'opacity 1.4s ease' }}>
            <Image src={p.cover} alt={p.name} fill priority={n === 0} sizes="100vw" style={{ objectFit: 'cover' }} />
          </Box>
        ))}
        <Box sx={{ position: 'absolute', inset: 0, background: 'linear-gradient(rgba(0,0,0,.35), rgba(0,0,0,0) 22%, rgba(0,0,0,0) 70%, rgba(0,0,0,.45))' }} />
        <Box sx={{ position: 'absolute', left: 0, right: 0, bottom: 0, ...gutter, pb: 4, display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', gap: 2 }}>
          <Typography variant="caption" component={Link} href={`/projects/${cur.slug}`} sx={{ color: 'inherit', textDecoration: 'none', '&:hover': { textDecoration: 'underline' } }}>
            {cur.name}
          </Typography>
          <Typography variant="caption">{String(i + 1).padStart(2, '0')} / {String(slides.length).padStart(2, '0')}</Typography>
        </Box>
      </Box>
    </>
  );
}

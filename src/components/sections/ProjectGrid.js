import Link from 'next/link';
import Image from 'next/image';
import { Box, Typography } from '@mui/material';
import { categories } from '@/data/projects';

// Grid seragam: semua foto sampul berukuran sama agar karya terbaca setara
export default function ProjectGrid({ items }) {
  return (
    <Box sx={{ display: 'grid', gap: { xs: 4, md: '64px 24px' }, gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr', lg: 'repeat(3, 1fr)' } }}>
      {items.map((p) => (
        <Box key={p.slug} component={Link} href={`/projects/${p.slug}`} sx={{ display: 'block', color: 'inherit', textDecoration: 'none', '&:hover img, &:focus-visible img': { opacity: 0.85 } }}>
          <Box sx={{ position: 'relative', aspectRatio: '4 / 3', bgcolor: 'background.paper', overflow: 'hidden' }}>
            <Image src={p.cover} alt={p.name} fill sizes="(min-width: 1200px) 33vw, (min-width: 600px) 50vw, 100vw" style={{ objectFit: 'cover', transition: 'opacity .4s' }} />
          </Box>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', gap: 2, mt: 1.5 }}>
            <Typography variant="body2" sx={{ fontWeight: 500 }}>{p.name}</Typography>
            <Typography variant="caption" color="text.secondary">{categories[p.category]}</Typography>
          </Box>
        </Box>
      ))}
    </Box>
  );
}

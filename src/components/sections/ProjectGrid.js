import Link from 'next/link';
import Image from 'next/image';
import { Box, Typography } from '@mui/material';
import { categories } from '@/data/projects';

// Pola kolom berulang agar grid terasa asimetris berapa pun jumlah proyeknya
const pattern = [
  { col: '1 / span 7', ratio: '4 / 5' },
  { col: '8 / span 5', ratio: '1 / 1' },
  { col: '1 / span 5', ratio: '1 / 1' },
  { col: '6 / span 7', ratio: '4 / 3' },
];

export default function ProjectGrid({ items }) {
  return (
    <Box sx={{ display: 'grid', gap: { xs: 5, md: 6 }, gridTemplateColumns: { xs: '1fr', md: 'repeat(12, 1fr)' } }}>
      {items.map((p, i) => {
        const { col, ratio } = pattern[i % pattern.length];
        return (
          <Box key={p.slug} component={Link} href={`/projects/${p.slug}`}
            sx={{ gridColumn: { xs: 'auto', md: col }, color: 'inherit', textDecoration: 'none',
              '&:hover img, &:focus-visible img': { transform: 'scale(1.03)' } }}>
            <Box sx={{ position: 'relative', overflow: 'hidden', aspectRatio: ratio, bgcolor: 'secondary.main' }}>
              <Image src={p.cover} alt={p.name} fill sizes="(min-width: 900px) 55vw, 100vw"
                style={{ objectFit: 'cover', transition: 'transform .6s ease' }} />
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', gap: 2, mt: 2 }}>
              <Typography variant="h3">{p.name}</Typography>
              <Typography variant="body2" color="text.secondary">{[categories[p.category], p.year].filter(Boolean).join(', ')}</Typography>
            </Box>
          </Box>
        );
      })}
    </Box>
  );
}

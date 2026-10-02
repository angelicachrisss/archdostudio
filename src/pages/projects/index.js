import { useState } from 'react';
import Head from 'next/head';
import { Box, Button, Typography } from '@mui/material';
import { gutter } from '@/theme/theme';
import { site } from '@/data/site';
import { projects, categories } from '@/data/projects';
import ProjectGrid from '@/components/sections/ProjectGrid';

const filters = [['semua', 'Semua'], ...Object.entries(categories)];

export default function Projects() {
  const [filter, setFilter] = useState('semua');
  const items = filter === 'semua' ? projects : projects.filter((p) => p.category === filter);

  return (
    <>
      <Head><title>Karya | {site.name}</title></Head>
      <Box sx={gutter}>
        <Box sx={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', flexWrap: 'wrap', gap: 2, mb: 6 }}>
          <Typography variant="h1" component="h1">Karya</Typography>
          <Box role="group" aria-label="Filter kategori" sx={{ display: 'flex', gap: 1 }}>
            {filters.map(([key, label]) => (
              <Button key={key} onClick={() => setFilter(key)} aria-pressed={filter === key}
                sx={{ opacity: filter === key ? 1 : 0.5, borderBottom: '1px solid', borderColor: filter === key ? 'currentColor' : 'transparent' }}>
                <Typography variant="caption">{label}</Typography>
              </Button>
            ))}
          </Box>
        </Box>
        <ProjectGrid key={filter} items={items} />
      </Box>
    </>
  );
}

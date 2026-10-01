import { useState } from 'react';
import Head from 'next/head';
import { Box, Container, Typography, Button } from '@mui/material';
import { section } from '@/theme/theme';
import { site } from '@/data/site';
import { projects, categories } from '@/data/projects';
import ProjectGrid from '@/components/sections/ProjectGrid';
import ContactCta from '@/components/sections/ContactCta';

const filters = [['semua', 'Semua'], ...Object.entries(categories)];

export default function Projects() {
  const [filter, setFilter] = useState('semua');
  const items = filter === 'semua' ? projects : projects.filter((p) => p.category === filter);

  return (
    <>
      <Head><title>Karya | {site.name}</title></Head>
      <Container maxWidth="lg" sx={section}>
        <Typography variant="h1" component="h1" sx={{ mb: 4 }}>Karya</Typography>
        <Box sx={{ display: 'flex', gap: 1, mb: 8 }} role="group" aria-label="Filter kategori">
          {filters.map(([key, label]) => (
            <Button key={key} onClick={() => setFilter(key)} aria-pressed={filter === key}
              sx={{ color: 'text.primary', px: 1, textDecoration: filter === key ? 'underline' : 'none', textUnderlineOffset: 8 }}>
              {label}
            </Button>
          ))}
        </Box>
        <ProjectGrid key={filter} items={items} />
      </Container>
      <ContactCta />
    </>
  );
}

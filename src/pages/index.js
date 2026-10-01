import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import { Box, Container, Typography, Button } from '@mui/material';
import { section } from '@/theme/theme';
import { site } from '@/data/site';
import { projects } from '@/data/projects';
import ProjectGrid from '@/components/sections/ProjectGrid';
import ContactCta from '@/components/sections/ContactCta';

// Proyek yang tampil di beranda (ubah sesuai selera)
const featured = ['hs-residence', 'griya-anabatic', 'w-home', 'c-home'].map((s) => projects.find((p) => p.slug === s));
const hero = projects.find((p) => p.slug === 'griya-anabatic');

export default function Home() {
  return (
    <>
      <Head>
        <title>{site.name} | {site.descriptor}</title>
        <meta name="description" content={`${site.name}, ${site.descriptor.toLowerCase()} di Gading Serpong, Tangerang.`} />
      </Head>

      <Container maxWidth="lg" sx={{ ...section, display: 'grid', gap: 6, alignItems: 'end', gridTemplateColumns: { xs: '1fr', md: '1.2fr 1fr' } }}>
        <Box>
          <Typography variant="h1" component="h1">{site.tagline}.</Typography>
          <Typography sx={{ mt: 4, maxWidth: 480, color: 'text.secondary' }}>
            {site.descriptor} di Gading Serpong, Tangerang. Rumah, ruang usaha, dan bangunan publik yang fungsional, personal, dan estetik.
          </Typography>
          <Button component={Link} href="/projects" variant="contained" sx={{ mt: 5 }}>Lihat karya</Button>
        </Box>
        {/* Bentuk lengkung: satu-satunya momen dramatis di halaman */}
        <Box sx={{ position: 'relative', overflow: 'hidden', aspectRatio: '3 / 4', borderRadius: '999px 999px 0 0', bgcolor: 'secondary.main' }}>
          <Image src={hero.cover} alt={hero.name} fill priority sizes="(min-width: 900px) 40vw, 100vw" style={{ objectFit: 'cover' }} />
        </Box>
      </Container>

      <Box sx={{ bgcolor: 'background.paper', ...section }}>
        <Container maxWidth="lg">
          <Typography variant="h2" sx={{ mb: 8 }}>Karya terpilih</Typography>
          <ProjectGrid items={featured} />
          <Button component={Link} href="/projects" sx={{ mt: 8, color: 'text.primary', textDecoration: 'underline', textUnderlineOffset: 6 }}>Lihat semua karya</Button>
        </Container>
      </Box>

      <Box sx={{ bgcolor: 'primary.main', color: 'background.default', ...section }}>
        <Container maxWidth="md">
          <Typography variant="h2" sx={{ mb: 4 }}>Partner Anda dalam mewujudkan ruang impian.</Typography>
          <Typography sx={{ maxWidth: 620, opacity: 0.9 }}>
            Kami memberi perhatian lebih pada kebutuhan Anda, agar rancangan yang dihasilkan fungsional, terasa personal, dan memenuhi nilai-nilai estetika.
          </Typography>
          <Button component={Link} href="/about" sx={{ mt: 5, color: 'inherit', textDecoration: 'underline', textUnderlineOffset: 6 }}>Tentang studio</Button>
        </Container>
      </Box>

      <ContactCta />
    </>
  );
}

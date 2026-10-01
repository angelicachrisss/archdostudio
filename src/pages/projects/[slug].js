import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import { Box, Container, Typography } from '@mui/material';
import { section } from '@/theme/theme';
import { site } from '@/data/site';
import { projects, categories } from '@/data/projects';
import Gallery from '@/components/sections/Gallery';
import ContactCta from '@/components/sections/ContactCta';

export const getStaticPaths = () => ({ paths: projects.map((p) => ({ params: { slug: p.slug } })), fallback: false });
export const getStaticProps = ({ params }) => ({ props: { slug: params.slug } });

export default function ProjectDetail({ slug }) {
  const i = projects.findIndex((p) => p.slug === slug);
  const p = projects[i];
  const next = projects[(i + 1) % projects.length];
  const meta = [['Tahun', p.year], ['Lokasi', p.location], ['Luas terbangun', p.area], ['Kategori', categories[p.category]]].filter(([, v]) => v);

  return (
    <>
      <Head>
        <title>{p.name} | {site.name}</title>
        {p.description && <meta name="description" content={p.description[0]} />}
      </Head>

      <Container maxWidth="lg" sx={{ pt: { xs: 6, md: 10 } }}>
        <Typography component={Link} href="/projects" variant="body2" sx={{ color: 'text.secondary', textDecoration: 'none', '&:hover': { textDecoration: 'underline' } }}>
          ← Semua karya
        </Typography>
        <Typography variant="h1" component="h1" sx={{ mt: 3, mb: 6 }}>{p.name}</Typography>
        <Box sx={{ position: 'relative', aspectRatio: { xs: '4 / 3', md: '16 / 9' }, bgcolor: 'secondary.main' }}>
          <Image src={p.cover} alt={p.name} fill priority sizes="(min-width: 1200px) 1200px, 100vw" style={{ objectFit: 'cover' }} />
        </Box>
      </Container>

      <Container maxWidth="lg" sx={{ ...section, display: 'grid', gap: { xs: 5, md: 10 }, gridTemplateColumns: { xs: '1fr', md: '1fr 2fr' } }}>
        <Box component="dl" sx={{ m: 0 }}>
          {meta.map(([k, v]) => (
            <Box key={k} sx={{ py: 2, borderTop: '1px solid', borderColor: 'secondary.main' }}>
              <Typography component="dt" variant="body2" color="text.secondary">{k}</Typography>
              <Typography component="dd" sx={{ m: 0 }}>{v}</Typography>
            </Box>
          ))}
        </Box>
        <Box>
          {p.description
            ? p.description.map((t, n) => <Typography key={n} sx={{ mb: 3 }}>{t}</Typography>)
            : <Typography color="text.secondary">Detail proyek ini segera hadir.</Typography>}
        </Box>
      </Container>

      {p.gallery && (
        <Container maxWidth="lg" sx={{ pb: { xs: 9, md: 14 } }}>
          <Typography variant="h2" sx={{ mb: 6 }}>Foto proyek</Typography>
          <Gallery images={p.gallery} name={p.name} />
        </Container>
      )}

      <Box sx={{ bgcolor: 'background.paper', ...section }}>
        <Container maxWidth="lg">
          <Typography variant="body2" color="text.secondary">Proyek berikutnya</Typography>
          <Typography variant="h2" component={Link} href={`/projects/${next.slug}`} sx={{ display: 'inline-block', mt: 1, color: 'text.primary', textDecoration: 'none', '&:hover': { textDecoration: 'underline' } }}>
            {next.name} →
          </Typography>
        </Container>
      </Box>
      <ContactCta />
    </>
  );
}

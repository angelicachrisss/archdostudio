import Head from 'next/head';
import Link from 'next/link';
import { Box, Typography } from '@mui/material';
import { gutter } from '@/theme/theme';
import { site } from '@/data/site';
import { projects } from '@/data/projects';
import Carousel from '@/components/sections/Carousel';
import MetaList from '@/components/sections/MetaList';

export const getStaticPaths = () => ({ paths: projects.map((p) => ({ params: { slug: p.slug } })), fallback: false });
export const getStaticProps = ({ params }) => ({ props: { slug: params.slug } });

const nav = { color: 'inherit', textDecoration: 'none', '&:hover .name': { textDecoration: 'underline' } };

export default function ProjectDetail({ slug }) {
  const i = projects.findIndex((p) => p.slug === slug);
  const p = projects[i];
  const prev = projects[(i - 1 + projects.length) % projects.length];
  const next = projects[(i + 1) % projects.length];
  const images = p.gallery?.length ? p.gallery : [p.cover];

  return (
    <>
      <Head>
        <title>{p.name} | {site.name}</title>
        {p.description && <meta name="description" content={p.description.split('. ')[0] + '.'} />}
      </Head>
      <Box sx={gutter}>
        <Typography variant="caption" component={Link} href="/projects" sx={{ color: 'text.secondary', textDecoration: 'none', '&:hover': { color: 'text.primary' } }}>← Karya</Typography>
        <Typography variant="h1" component="h1" sx={{ mt: 2, mb: 4 }}>{p.name}</Typography>

        <Carousel images={images} name={p.name} />

        <Box sx={{ display: 'grid', gap: { xs: 6, md: 12 }, gridTemplateColumns: { xs: '1fr', md: '3fr 2fr' }, mt: { xs: 8, md: 12 } }}>
          <Typography sx={{ maxWidth: 620, color: p.description ? 'text.primary' : 'text.secondary' }}>
            {p.description || 'Deskripsi proyek ini akan segera ditambahkan.'}
          </Typography>
          <MetaList rows={[['Location', p.location], ['Design Year', p.designYear], ['Construction Period', p.constructionPeriod]]} />
        </Box>

        <Box sx={{ display: 'flex', justifyContent: 'space-between', gap: 3, mt: { xs: 10, md: 16 }, pt: 3, borderTop: '1px solid', borderColor: 'divider' }}>
          <Box component={Link} href={`/projects/${prev.slug}`} sx={nav}>
            <Typography variant="caption" color="text.secondary" display="block">← Sebelumnya</Typography>
            <Typography className="name" variant="body2">{prev.name}</Typography>
          </Box>
          <Box component={Link} href={`/projects/${next.slug}`} sx={{ ...nav, textAlign: 'right' }}>
            <Typography variant="caption" color="text.secondary" display="block">Berikutnya →</Typography>
            <Typography className="name" variant="body2">{next.name}</Typography>
          </Box>
        </Box>
      </Box>
    </>
  );
}

import Head from 'next/head';
import { Box, Typography, Link as MuiLink } from '@mui/material';
import { gutter } from '@/theme/theme';
import { site } from '@/data/site';
import MetaList from '@/components/sections/MetaList';

export default function Contact() {
  return (
    <>
      <Head><title>Kontak | {site.name}</title></Head>
      <Box sx={{ ...gutter, display: 'grid', gap: { xs: 4, md: 12 }, gridTemplateColumns: { xs: '1fr', md: '1fr 2fr' } }}>
        <Typography variant="h1" component="h1">Kontak</Typography>
        <Box sx={{ maxWidth: 640 }}>
          <Typography sx={{ mb: 6 }}>Ceritakan lokasi, kebutuhan, dan perkiraan waktu proyek Anda.</Typography>
          <MetaList rows={[
            ['Alamat', <>{site.address[0]}<br />{site.address[1]}</>],
            ['WhatsApp', <MuiLink href={`https://wa.me/${site.whatsapp}`} color="inherit">{site.phone}</MuiLink>],
            ['Instagram', <MuiLink href={`https://instagram.com/${site.instagram}`} color="inherit">@{site.instagram}</MuiLink>],
            ['Portfolio 2025', <MuiLink href={site.linktree} color="inherit">linktr.ee/archdo.studio</MuiLink>],
          ]} />
        </Box>
      </Box>
    </>
  );
}

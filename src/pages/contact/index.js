import Head from 'next/head';
import { Container, Typography, Button, Link as MuiLink } from '@mui/material';
import { section } from '@/theme/theme';
import { site } from '@/data/site';

export default function Contact() {
  return (
    <>
      <Head><title>Kontak | {site.name}</title></Head>
      <Container maxWidth="md" sx={section}>
        <Typography variant="h1" component="h1" sx={{ mb: 4 }}>Mari bicara.</Typography>
        <Typography color="text.secondary" sx={{ mb: 5, maxWidth: 520 }}>
          Ceritakan lokasi, kebutuhan, dan perkiraan waktu proyek Anda.
        </Typography>
        <Button href={`https://wa.me/${site.whatsapp}`} variant="contained">{site.phone} (WhatsApp)</Button>
        <Typography sx={{ mt: 6 }}>{site.address[0]}<br />{site.address[1]}</Typography>
        <Typography sx={{ mt: 3 }}>
          Instagram <MuiLink href={`https://instagram.com/${site.instagram}`}>@{site.instagram}</MuiLink><br />
          <MuiLink href={site.linktree}>Akses portfolio 2025</MuiLink>
        </Typography>
      </Container>
    </>
  );
}

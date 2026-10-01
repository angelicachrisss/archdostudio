import { Box, Container, Typography, Link as MuiLink } from '@mui/material';
import { site } from '@/data/site';

export default function Footer() {
  const link = { color: 'inherit', textUnderlineOffset: 4 };
  return (
    <Box sx={{ bgcolor: 'text.primary', color: 'background.default', py: 6, borderTop: '1px solid rgba(243,239,232,0.15)' }}>
      <Container maxWidth="lg" sx={{ display: 'grid', gap: 4, gridTemplateColumns: { xs: '1fr', md: '1.4fr 1fr 1fr' } }}>
        <Box>
          <Typography variant="h3">{site.name}</Typography>
          <Typography variant="body2" sx={{ mt: 1, opacity: 0.8 }}>{site.descriptor}</Typography>
          <Typography variant="body2" sx={{ mt: 2, opacity: 0.8, maxWidth: 360 }}>
            Anggota terdaftar Ikatan Arsitek Indonesia dan menerapkan peraturan serta standar yang berlaku.
          </Typography>
        </Box>
        <Typography variant="body2" sx={{ opacity: 0.9 }}>
          {site.address[0]}<br />{site.address[1]}
        </Typography>
        <Typography variant="body2" sx={{ opacity: 0.9 }}>
          <MuiLink href={`https://wa.me/${site.whatsapp}`} sx={link}>{site.phone} (WhatsApp)</MuiLink><br />
          <MuiLink href={`https://instagram.com/${site.instagram}`} sx={link}>@{site.instagram}</MuiLink><br />
          <MuiLink href={site.linktree} sx={link}>Akses portfolio 2025</MuiLink>
        </Typography>
      </Container>
      <Container maxWidth="lg" sx={{ mt: 5 }}>
        <Typography variant="body2" sx={{ opacity: 0.6 }}>© {new Date().getFullYear()} {site.name}</Typography>
      </Container>
    </Box>
  );
}

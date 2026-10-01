import { Box, Container, Typography, Button } from '@mui/material';
import { section } from '@/theme/theme';
import { site } from '@/data/site';

export default function ContactCta() {
  return (
    <Box sx={{ bgcolor: 'text.primary', color: 'background.default', ...section }}>
      <Container maxWidth="md" sx={{ textAlign: 'center' }}>
        <Typography variant="h2" sx={{ mb: 4 }}>Punya rencana untuk sebuah ruang?</Typography>
        <Typography sx={{ mb: 5, opacity: 0.8 }}>Ceritakan kebutuhan Anda, kami siap menjadi partner desain Anda.</Typography>
        <Button href={`https://wa.me/${site.whatsapp}`} variant="contained" color="secondary" sx={{ color: 'text.primary' }}>Hubungi via WhatsApp</Button>
      </Container>
    </Box>
  );
}

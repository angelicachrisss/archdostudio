import { Box, Typography, Link as MuiLink } from '@mui/material';
import { gutter } from '@/theme/theme';
import { site } from '@/data/site';

export default function Footer() {
  return (
    <Box component="footer" sx={{ ...gutter, py: 4, mt: 14, borderTop: '1px solid', borderColor: 'divider', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', gap: 2, color: 'text.secondary' }}>
      <Typography variant="caption">© {new Date().getFullYear()} {site.name}</Typography>
      <Typography variant="caption">Anggota Ikatan Arsitek Indonesia</Typography>
      <Typography variant="caption">
        <MuiLink href={`https://instagram.com/${site.instagram}`} color="inherit" underline="hover">Instagram</MuiLink>
        {'  /  '}
        <MuiLink href={`https://wa.me/${site.whatsapp}`} color="inherit" underline="hover">WhatsApp</MuiLink>
      </Typography>
    </Box>
  );
}

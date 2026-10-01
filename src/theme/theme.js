import { createTheme } from '@mui/material/styles';
import { Cormorant_Garamond, Jost } from 'next/font/google';

export const display = Cormorant_Garamond({ subsets: ['latin'], weight: ['400', '500'], style: ['normal', 'italic'], display: 'swap' });
export const body = Jost({ subsets: ['latin'], weight: ['300', '400', '500'], display: 'swap' });

// Palet earth tone kalem
export const palette = {
  chalk: '#F3EFE8', // latar utama
  sand: '#E4DACB',  // permukaan
  clay: '#B9A48E',  // taupe hangat
  moss: '#5E6352',  // hijau lumut (aksen)
  umber: '#3E342C', // teks & seksi gelap
};

// Jarak vertikal antar seksi
export const section = { py: { xs: 9, md: 14 } };

const theme = createTheme({
  palette: {
    primary: { main: palette.moss },
    secondary: { main: palette.clay },
    background: { default: palette.chalk, paper: palette.sand },
    text: { primary: palette.umber, secondary: '#6B5F54' },
  },
  shape: { borderRadius: 0 },
  typography: {
    fontFamily: body.style.fontFamily,
    h1: { fontFamily: display.style.fontFamily, fontWeight: 400, fontSize: 'clamp(2.8rem, 7vw, 6rem)', lineHeight: 1.04, letterSpacing: '-0.02em' },
    h2: { fontFamily: display.style.fontFamily, fontWeight: 400, fontSize: 'clamp(2rem, 4.5vw, 3.5rem)', lineHeight: 1.1 },
    h3: { fontFamily: display.style.fontFamily, fontWeight: 500, fontSize: '1.6rem', lineHeight: 1.2 },
    body1: { fontWeight: 300, fontSize: '1.05rem', lineHeight: 1.8 },
    body2: { fontWeight: 300, lineHeight: 1.7 },
  },
  components: {
    MuiButton: { styleOverrides: { root: { textTransform: 'none', letterSpacing: '0.04em', padding: '12px 28px', fontWeight: 400 } } },
  },
});

export default theme;

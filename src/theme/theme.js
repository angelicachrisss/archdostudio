import { createTheme } from '@mui/material/styles';
import { Hanken_Grotesk } from 'next/font/google';

export const sans = Hanken_Grotesk({ subsets: ['latin'], weight: ['300', '400', '500'], display: 'swap' });

// Netral hangat: kertas, tinta, batu. Foto proyek adalah satu-satunya warna di halaman.
export const palette = { paper: '#F6F4F0', ink: '#1C1A17', mute: '#7A746A', line: '#D9D4CB', stone: '#E6E1D8' };

// Margin tepi halaman
export const gutter = { px: { xs: 2.5, md: 5 } };

const theme = createTheme({
  palette: {
    primary: { main: palette.ink },
    secondary: { main: palette.mute },
    background: { default: palette.paper, paper: palette.stone },
    text: { primary: palette.ink, secondary: palette.mute },
    divider: palette.line,
  },
  shape: { borderRadius: 0 },
  typography: {
    fontFamily: sans.style.fontFamily,
    h1: { fontWeight: 300, fontSize: 'clamp(1.9rem, 3.4vw, 2.8rem)', lineHeight: 1.15, letterSpacing: '-0.01em' },
    body1: { fontSize: '1rem', lineHeight: 1.8 },
    body2: { fontSize: '0.875rem', lineHeight: 1.6 },
    caption: { fontSize: '0.72rem', letterSpacing: '0.14em', textTransform: 'uppercase', lineHeight: 1.6 },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: { 'a:focus-visible, button:focus-visible, [tabindex]:focus-visible': { outline: `1px solid ${palette.ink}`, outlineOffset: 4 } },
    },
    MuiButton: { styleOverrides: { root: { textTransform: 'none', borderRadius: 0, minWidth: 0, padding: '4px 8px', color: 'inherit' } } },
  },
});

export default theme;

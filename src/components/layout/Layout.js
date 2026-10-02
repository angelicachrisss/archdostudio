import { useRouter } from 'next/router';
import { Box } from '@mui/material';
import Header from './Header';
import Footer from './Footer';

export default function Layout({ children }) {
  const home = useRouter().pathname === '/';
  return (
    <Box sx={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Header />
      <Box component="main" sx={{ flex: 1, pt: home ? 0 : '120px' }}>{children}</Box>
      {!home && <Footer />}
    </Box>
  );
}

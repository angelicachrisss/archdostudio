import Link from 'next/link';
import { useRouter } from 'next/router';
import { Box, Typography } from '@mui/material';
import { gutter } from '@/theme/theme';
import { site } from '@/data/site';

export default function Header() {
  const { pathname } = useRouter();
  const home = pathname === '/';
  const on = (href) => pathname.startsWith(href);

  return (
    <Box component="header" sx={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: 10, height: 72, ...gutter, display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      color: home ? '#fff' : 'text.primary', bgcolor: home ? 'transparent' : 'background.default' }}>
      <Typography component={Link} href="/" sx={{ fontWeight: 500, fontSize: '0.95rem', letterSpacing: '0.02em', color: 'inherit', textDecoration: 'none' }}>
        {site.name}
      </Typography>
      <Box component="nav" aria-label="Menu utama" sx={{ display: 'flex', gap: { xs: 2.5, md: 5 } }}>
        {site.nav.map((l) => (
          <Typography key={l.href} variant="caption" component={Link} href={l.href} aria-current={on(l.href) ? 'page' : undefined}
            sx={{ color: 'inherit', textDecoration: 'none', pb: 0.25, borderBottom: '1px solid', borderColor: on(l.href) ? 'currentColor' : 'transparent', '&:hover': { borderColor: 'currentColor' } }}>
            {l.label}
          </Typography>
        ))}
      </Box>
    </Box>
  );
}

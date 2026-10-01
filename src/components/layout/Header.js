import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { AppBar, Toolbar, Container, Box, Button, Menu, MenuItem, Typography } from '@mui/material';
import { display } from '@/theme/theme';
import { site } from '@/data/site';

export default function Header() {
  const [anchor, setAnchor] = useState(null);
  const { pathname } = useRouter();
  const active = (href) => pathname.startsWith(href);

  return (
    <AppBar position="sticky" elevation={0} color="transparent"
      sx={{ bgcolor: 'rgba(243,239,232,0.88)', backdropFilter: 'blur(10px)', borderBottom: '1px solid', borderColor: 'background.paper' }}>
      <Container maxWidth="lg">
        <Toolbar disableGutters sx={{ justifyContent: 'space-between', minHeight: 72 }}>
          <Typography component={Link} href="/" sx={{ fontFamily: display.style.fontFamily, fontSize: '1.6rem', color: 'text.primary', textDecoration: 'none' }}>
            {site.name}
          </Typography>

          <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 4 }}>
            {site.nav.map((l) => (
              <Typography key={l.href} component={Link} href={l.href}
                sx={{ color: active(l.href) ? 'primary.main' : 'text.primary', textDecoration: active(l.href) ? 'underline' : 'none', textUnderlineOffset: 6,
                  '&:hover, &:focus-visible': { color: 'primary.main', textDecoration: 'underline' } }}>
                {l.label}
              </Typography>
            ))}
          </Box>

          <Box sx={{ display: { xs: 'block', md: 'none' } }}>
            <Button color="inherit" onClick={(e) => setAnchor(e.currentTarget)}>Menu</Button>
            <Menu anchorEl={anchor} open={Boolean(anchor)} onClose={() => setAnchor(null)}>
              {site.nav.map((l) => (
                <MenuItem key={l.href} component={Link} href={l.href} onClick={() => setAnchor(null)}>{l.label}</MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

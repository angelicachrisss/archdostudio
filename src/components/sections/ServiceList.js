import { Box, Typography } from '@mui/material';

export default function ServiceList({ items }) {
  return items.map((s) => (
    <Box key={s.title} sx={{ display: 'grid', gap: 2, gridTemplateColumns: { xs: '1fr', md: '1fr 1.5fr' }, py: 4, borderTop: '1px solid', borderColor: 'secondary.main' }}>
      <Typography variant="h3">{s.title}</Typography>
      <Typography color="text.secondary">{s.desc}</Typography>
    </Box>
  ));
}

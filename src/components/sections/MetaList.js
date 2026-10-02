import { Box, Typography } from '@mui/material';

export default function MetaList({ rows }) {
  return (
    <Box component="dl" sx={{ m: 0 }}>
      {rows.map(([k, v]) => (
        <Box key={k} sx={{ display: 'grid', gridTemplateColumns: '160px 1fr', gap: 2, py: 1.75, borderTop: '1px solid', borderColor: 'divider' }}>
          <Typography component="dt" variant="caption" color="text.secondary">{k}</Typography>
          <Typography component="dd" variant="body2" sx={{ m: 0 }}>{v || '—'}</Typography>
        </Box>
      ))}
    </Box>
  );
}

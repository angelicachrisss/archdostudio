import Head from 'next/head';
import Image from 'next/image';
import { Box, Typography } from '@mui/material';
import { gutter } from '@/theme/theme';
import { site } from '@/data/site';
import { team, teamPhoto, disciplines } from '@/data/team';

export default function Studio() {
  return (
    <>
      <Head><title>Studio | {site.name}</title></Head>

      {/* Info sekilas */}
      <Box sx={{ ...gutter, display: 'grid', gap: { xs: 4, md: 12 }, gridTemplateColumns: { xs: '1fr', md: '1fr 2fr' }, mb: { xs: 8, md: 14 } }}>
        <Typography variant="h1" component="h1">Studio</Typography>
        <Box sx={{ maxWidth: 640 }}>
          <Typography sx={{ mb: 3 }}>
            ArchDo.studio adalah studio desain arsitektur dan interior yang berbasis di Gading Serpong, Tangerang. Kami ingin menjadi partner Anda dalam mewujudkan ruang impian, baik rumah untuk ditinggali, tempat berkreasi dan berbisnis, maupun ruang lainnya.
          </Typography>
          <Typography sx={{ mb: 4 }}>
            Kami menaruh perhatian lebih pada kebutuhan Anda, sehingga rancangan yang dihasilkan fungsional, terasa personal, dan memenuhi nilai-nilai estetika.
          </Typography>
          <Typography variant="caption" color="text.secondary">{disciplines.join('  /  ')}</Typography>
        </Box>
      </Box>

      {/* Foto tim: panorama, tampil utuh */}
      <Box
        sx={{
          overflowX: { xs: 'auto', md: 'visible' },
          '& img': { display: 'block', width: { xs: 'auto', md: '100%' }, height: { xs: 220, md: 'auto' } },
        }}
      >
        <Image
          src={teamPhoto}
          alt="Tim ArchDo.studio"
          width={1280}
          height={262}
          priority
          sizes="(min-width: 900px) 100vw, 1076px"
        />
      </Box>
      <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))' }}>
        {team.map((m) => (
          <Box key={m.name} sx={{ ...gutter, py: 4, borderBottom: '1px solid', borderColor: 'divider' }}>
            {m.photo && (
              <Box sx={{ position: 'relative', aspectRatio: '4 / 5', mb: 2, bgcolor: 'background.paper' }}>
                <Image src={m.photo} alt={m.name} fill sizes="(min-width: 900px) 33vw, 100vw" style={{ objectFit: 'cover' }} />
              </Box>
            )}
            <Typography sx={{ fontWeight: 500 }}>{m.name}</Typography>
            {m.role && <Typography variant="caption" color="text.secondary">{m.role}</Typography>}
          </Box>
        ))}
      </Box>

      <Box sx={{ ...gutter, mt: 4 }}>
        <Typography variant="caption" color="text.secondary">Terdaftar di Ikatan Arsitek Indonesia dan mengikuti ketentuan serta standar yang berlaku.</Typography>
      </Box>
    </>
  );
}

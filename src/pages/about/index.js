import Head from 'next/head';
import Image from 'next/image';
import { Box, Container, Typography } from '@mui/material';
import { section } from '@/theme/theme';
import { site } from '@/data/site';
import ContactCta from '@/components/sections/ContactCta';

const photo = 'https://jonathan7cbc389f6d.wordpress.com/wp-content/uploads/2025/04/whatsapp-image-2025-02-17-at-22.58.05_05750206_2.jpg';

export default function About() {
  return (
    <>
      <Head><title>Studio | {site.name}</title></Head>
      <Container maxWidth="lg" sx={{ ...section, display: 'grid', gap: { xs: 6, md: 10 }, gridTemplateColumns: { xs: '1fr', md: '1.2fr 1fr' }, alignItems: 'start' }}>
        <Box>
          <Typography variant="h1" component="h1" sx={{ fontSize: 'clamp(2.2rem, 5vw, 4rem)', mb: 5 }}>Studio kami</Typography>
          <Typography sx={{ mb: 3 }}>
            ArchDo.studio adalah studio desain arsitektur dan interior yang berbasis di Gading Serpong, Tangerang. Kami memiliki visi untuk menjadi ‘partner’ Anda dalam mewujudkan ruang impian, baik itu sebuah rumah untuk ditinggali, tempat untuk berkreasi dan berbisnis, dan masih banyak lagi.
          </Typography>
          <Typography sx={{ mb: 3 }}>
            Dengan menjadi teman Anda dalam merencanakan ruang binaan, kami selalu menaruh perhatian lebih pada kebutuhan Anda, sehingga rancangan yang dihasilkan akan bersifat fungsional, terasa personal, dan memenuhi nilai-nilai estetika. Pada akhirnya, Anda akan menikmati ruang baru yang penuh makna.
          </Typography>
          <Typography sx={{ mb: 5 }}>
            Untuk mendukung kesemuanya ini, studio kami memiliki tim yang profesional dan berpengalaman di bidangnya: Architectural Designer, Interior Designer, Structural Engineer, dan MEP Engineer yang akan menciptakan rancangan yang terintegrasi, baik untuk rumah tinggal, bangunan komersial, cafe, maupun pengembangan kawasan.
          </Typography>
          <Typography color="text.secondary">
            Salam,<br />Ar. The Mercy Maery, IAI<br />Jonathan Leonardo, S. Ars., IAI
          </Typography>
        </Box>
        <Box sx={{ position: 'relative', aspectRatio: '4 / 5', bgcolor: 'secondary.main' }}>
          <Image src={photo} alt="Tim ArchDo.studio" fill sizes="(min-width: 900px) 40vw, 100vw" style={{ objectFit: 'cover' }} />
        </Box>
      </Container>
      <ContactCta />
    </>
  );
}

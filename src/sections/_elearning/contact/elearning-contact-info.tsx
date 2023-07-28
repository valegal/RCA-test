import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Unstable_Grid2';
import Container from '@mui/material/Container';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';

import ContactMap from 'src/components/map';
import Iconify from 'src/components/iconify';
import { _socials, _offices } from 'src/_mock';

// ----------------------------------------------------------------------

export default function ElearningContactInfo() {
  return (
    <Container
      sx={{
        pt: { xs: 5, md: 5 },
        pb: { xs: 10, md: 15 },
      }}
    >
      <Grid container spacing={3} justifyContent={{ md: 'space-between' }}>
        <Grid xs={12} md={6} lg={4}>
          <Typography
            variant="h2"
            sx={{
              mb: 5,
              textAlign: { xs: 'center', md: 'left' },
            }}
          >
            Lineas de contacto
          </Typography>

          <Stack spacing={3} alignItems={{ xs: 'center', md: 'flex-start' }}>
            <Stack spacing={1}>
              <Stack direction="row" alignItems="center" sx={{ typography: 'subtitle2' }}>
                <Iconify icon="carbon:email" width={24} sx={{ mr: 1 }} /> e-mail
              </Stack>

              <Link color="inherit" variant="body2" href="mailto:hello@example.com">
                vgaleano@example.com
              </Link>
            </Stack>

            <Stack spacing={1}>
              <Stack direction="row" alignItems="center" sx={{ typography: 'subtitle2' }}>
                <Iconify icon="carbon:mobile" width={24} sx={{ mr: 1 }} /> Telefono
              </Stack>

              <Typography variant="body2">(+57) 555-0101</Typography>
            </Stack>

            <Stack spacing={1}>
              <Stack direction="row" alignItems="center" sx={{ typography: 'subtitle2' }}>
                <Iconify icon="carbon:location" width={24} sx={{ mr: 1 }} /> Dirección
              </Stack>

              <Typography variant="body2">
                3891 Bucaramanga Dr. Raul, cualqosa 62639
              </Typography>
            </Stack>

            <Divider sx={{ borderStyle: 'dashed', width: 1 }} />

            <Stack spacing={1} alignItems={{ xs: 'center', md: 'flex-start' }}>
              <Typography variant="overline">Siguenos</Typography>
              <Stack direction="row">
                {_socials.map((social) => (
                  <IconButton key={social.value} color="inherit">
                    <Iconify icon={social.icon} />
                  </IconButton>
                ))}
              </Stack>
            </Stack>
          </Stack>
        </Grid>

        <Grid xs={12} md={6} lg={7}>
          <ContactMap offices={_offices} sx={{ borderRadius: 2 }} />
        </Grid>
      </Grid>
    </Container>
  );
}

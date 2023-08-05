import Fab from '@mui/material/Fab';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Avatar from '@mui/material/Avatar';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Unstable_Grid2';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { alpha, useTheme } from '@mui/material/styles';

import { _mock } from 'src/_mock';
import { paths } from 'src/routes/paths';
import Label from 'src/components/label';
import Image from 'src/components/image';
import Iconify from 'src/components/iconify';
import { ICourseProps } from 'src/types/course';
import { useBoolean } from 'src/hooks/use-boolean';
import { PlayerDialog } from 'src/components/player';
import { fShortenNumber } from 'src/utils/format-number';
import { useResponsive } from 'src/hooks/use-responsive';
import CustomBreadcrumbs from 'src/components/custom-breadcrumbs';

// ----------------------------------------------------------------------

type Props = {
  course: ICourseProps;
};

export default function ElearningCourseDetailsHero({ course }: Props) {
  const {
    slug,
    level,
    lessons,
    category,
    coverUrl,
    languages,
    bestSeller,
    totalHours,
    description,
    ratingNumber,
    totalQuizzes,
    totalReviews,
    totalStudents,
    teachers = [],
  } = course;

  const theme = useTheme();

  const mdUp = useResponsive('up', 'md');

  const videoOpen = useBoolean();

  return (
    <>
      <Box
        sx={{
          bgcolor: 'background.neutral',
          pb: { xs: 5, md: 10 },
        }}
      >
        <Container sx={{ overflow: 'hidden' }}>
          <CustomBreadcrumbs
            links={[
              { name: 'Home', href: '/' },
              { name: 'Cursos', href: paths.courses },
              { name: course.slug || '' },
            ]}
            sx={{
              pt: 5,
              mb: { xs: 5, md: 10 },
            }}
          />

          <Grid container spacing={{ xs: 5, md: 10 }} direction="row-reverse">
            <Grid xs={12} md={5}>
              <Stack
                alignItems="center"
                justifyContent="center"
                sx={{
                  position: 'relative',
                  borderRadius: 2,
                  overflow: 'hidden',
                }}
              >
                <Fab
                  color="primary"
                  onClick={videoOpen.onTrue}
                  sx={{
                    zIndex: 9,
                    position: 'absolute',
                  }}
                >
                  <Iconify icon="carbon:play" width={24} />
                </Fab>

                <Image
                  alt="hero"
                  src={coverUrl}
                  ratio={mdUp ? '3/4' : '4/3'}
                  overlay={`linear-gradient(to bottom, ${alpha(
                    theme.palette.common.black,
                    0
                  )} 0%, ${theme.palette.common.black} 75%)`}
                />
              </Stack>
            </Grid>

            <Grid xs={12} md={7}>
              <Stack spacing={3}>
                <Stack spacing={2} alignItems="flex-start">
                  {bestSeller && (
                    <Label color="warning" variant="filled" sx={{ textTransform: 'uppercase' }}>
                      Mejor vendido
                    </Label>
                  )}

                  <Typography variant="overline" sx={{ color: 'secondary.main' }}>
                    {category}
                  </Typography>

                  <Typography variant="h3" component="h1">
                    {slug}
                  </Typography>

                  <Typography sx={{ color: 'text.secondary' }}>{description}</Typography>
                </Stack>
{/* 
                <Stack
                  spacing={1.5}
                  direction="row"
                  alignItems="center"
                  divider={<Divider orientation="vertical" sx={{ height: 20 }} />}
                >
                  <Stack spacing={0.5} direction="row" alignItems="center">
                    <Iconify icon="carbon:star-filled" sx={{ color: 'warning.main' }} />
                    <Box sx={{ typography: 'h6' }}>
                      {Number.isInteger(ratingNumber) ? `${ratingNumber}.0` : ratingNumber}
                    </Box>

                    {totalReviews && (
                      <Link variant="body2" sx={{ color: 'text.secondary' }}>
                        ({fShortenNumber(totalReviews)} reseñas)
                      </Link>
                    )}
                  </Stack>

                  <Stack direction="row" sx={{ typography: 'subtitle2' }}>
                    {fShortenNumber(totalStudents)}
                    <Box component="span" typography="body2" sx={{ ml: 0.5 }}>
                      estudiantes
                    </Box>
                  </Stack>
                </Stack> */}

                <Stack direction="row" alignItems="center">

                  <Stack direction="row" alignItems="center">
  <Avatar src={teachers[0]?.avatarUrl} />

  <Typography variant="body2" sx={{ ml: 1, mr: 0.5 }}>
    {teachers[0]?.name}
  </Typography>
{/* 
  <Typography variant="body2" color="text.secondary" component="span">
    | <u>profesional en el área</u>
  </Typography> */}
</Stack>
                </Stack>

                <Divider sx={{ borderStyle: 'dashed' }} />

                <Stack spacing={2}>
                  <Stack
                    direction="row"
                    flexWrap="wrap"
                    sx={{
                      '& > *': { my: 0.5, mr: 3 },
                    }}
                  >
                    <Stack direction="row" alignItems="center" sx={{ typography: 'body2' }}>
                      <Iconify icon="carbon:time" sx={{ mr: 1 }} /> {`${totalHours} horas`}
                    </Stack>

                    <Stack direction="row" alignItems="center" sx={{ typography: 'body2' }}>
                      <Iconify icon="carbon:document" sx={{ mr: 1 }} />
                      {`${lessons?.length} Lecciones`}
                    </Stack>
{/* 
                    <Stack direction="row" alignItems="center" sx={{ typography: 'body2' }}>
                      <Iconify
                        icon={
                          (level === 'Principiante' && 'carbon:skill-level-basic') ||
                          (level === 'Intermedio' && 'carbon:skill-level-intermediate') ||
                          'carbon:skill-level-advanced'
                        }
                        sx={{ mr: 1 }}
                      />
                      {level}
                    </Stack> */}
                  </Stack>

                  <Stack
                    direction="row"
                    flexWrap="wrap"
                    sx={{
                      '& > *': { my: 0.5, mr: 3 },
                    }}
                  >
                    <Stack direction="row" alignItems="center" sx={{ typography: 'body2' }}>
                      <Iconify icon="carbon:content-delivery-network" sx={{ mr: 1 }} />
                      {typeof languages === 'string' ? languages : languages?.join(', ')}
                    </Stack>

                    <Stack direction="row" alignItems="center" sx={{ typography: 'body2' }}>
                      <Iconify icon="carbon:help" sx={{ mr: 1 }} /> {`${totalQuizzes} Quizzes`}
                    </Stack>
                  </Stack>
                </Stack>
              </Stack>
            </Grid>
          </Grid>
        </Container>
      </Box>

      <PlayerDialog open={videoOpen.value} onClose={videoOpen.onFalse} videoPath={_mock.video(0)} />
    </>
  );
}

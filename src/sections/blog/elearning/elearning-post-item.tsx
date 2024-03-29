import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Avatar from '@mui/material/Avatar';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';

import { paths } from 'src/routes/paths';
import Image from 'src/components/image';
import { fDate } from 'src/utils/format-time';
import { IBlogPostProps } from 'src/types/blog';
import { RouterLink } from 'src/routes/components';
import TextMaxLine from 'src/components/text-max-line';

// ----------------------------------------------------------------------

type Props = {
  post: IBlogPostProps;
};

export default function ElearningPostItem({ post }: Props) {
  return (
    <Paper variant="outlined" sx={{ borderRadius: 2, overflow: 'hidden' }}>
      <Image src={post.coverUrl} alt={post.title} ratio="1/1" />

      <Stack direction="row" spacing={3} sx={{ p: 3 }}>
        <Stack sx={{ textAlign: 'center' }}>
          <Typography variant="subtitle2">{fDate(post.createdAt, 'MMM')}</Typography>

          <Divider sx={{ mt: 1, mb: 0.5 }} />

          <Typography variant="h3">{fDate(post.createdAt, 'dd')}</Typography>
        </Stack>

        <Stack spacing={1}>
          <Link component={RouterLink} href={paths.post} color="inherit">
            <TextMaxLine variant="h6" persistent>
              {post.title}
            </TextMaxLine>
          </Link>

          <TextMaxLine variant="body2" persistent color="text.secondary">
            {post.description}
          </TextMaxLine>

          <Stack spacing={1.5} direction="row" alignItems="center" sx={{ pt: 1.5 }}>
            <Avatar src={post.author.avatarUrl} sx={{ width: 40, height: 40 }} />
            <Stack>
              <Typography variant="body2">{post.author.name}</Typography>
              <Typography variant="caption" sx={{ color: 'text.disabled' }}>
                {post.duration}
              </Typography>
            </Stack>
          </Stack>
        </Stack>
      </Stack>
    </Paper>
  );
}

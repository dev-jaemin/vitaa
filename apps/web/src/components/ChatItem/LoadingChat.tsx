import Lottie from 'react-lottie';

import { Box } from '@mui/material';

import LoadingLottie from '../../assets/lottie/chatLoad.json';

const options = {
  loop: true,
  autoplay: true,
  animationData: LoadingLottie,
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice',
  },
};

export function LoadingChatItem() {
  return (
    <Box display="flex" justifyContent={'left'}>
      <Box maxWidth="70%">
        <Box bgcolor={'secondary.main'} color={'secondary.contrastText'} borderRadius={1}>
          <Lottie options={options} height={34} width={'80%'} />
        </Box>
      </Box>
    </Box>
  );
}

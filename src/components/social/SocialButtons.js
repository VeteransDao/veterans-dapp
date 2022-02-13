import * as React from 'react';
import Image from 'next/image';
import Stack from '@mui/material/Stack';
import IconButton from '@mui/material/IconButton';
import DiscordLite from '../../../public/images/discord-light.png';
import TwitterLite from '../../../public/images/twitter-light.png';
import InstagramLite from '../../../public/images/instagram-light.png';
import OpenseaLite from '../../../public/images/opensea-light.png';

const SocialButtons = ({ show }) => {
  const display = show ? {} : { xs: 'none', md: 'flex' };
  return (
    <Stack
      direction="row"
      justifyContent="center"
      sx={{ marginRight: '16px', display }}
    >
      <IconButton
        aria-label="discord button"
        color="primary"
        onClick={() => console.log('discord')}
      >
        <Image src={DiscordLite} alt="discord image" width={24} height={27} />
      </IconButton>
      <IconButton
        aria-label="twitter button"
        color="primary"
        onClick={() => console.log('twitter')}
      >
        <Image src={TwitterLite} alt="twitter image" width={20} height={16} />
      </IconButton>
      <IconButton
        aria-label="instagram button"
        color="primary"
        onClick={() => console.log('instagram')}
      >
        <Image
          src={InstagramLite}
          alt="instagram image"
          width={20}
          height={20}
        />
      </IconButton>
      <IconButton
        aria-label="opensea button"
        color="primary"
        onClick={() => console.log('opensea')}
      >
        <Image src={OpenseaLite} alt="opensea image" width={22} height={22} />
      </IconButton>
    </Stack>
  );
};

export default SocialButtons;

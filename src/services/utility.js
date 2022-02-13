/////////////////////////////////////
// Routing Stuff
/////////////////////////////////////
import { useRouter } from 'next/router';

export const pages = [
  { id: 'HOME', path: '/' },
  {
    id: 'COLLECTIONS',
    subItems: ['US FIGHTER SERIES', 'AIR MEDAL'],
    path: '/collections'
  },
  {
    id: 'GUIDES',
    subItems: ['MINTING', 'ROLLOUT', 'FAQS', 'CONTACT'],
    path: '/guides'
  }
];

export const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

// Home goes to route /, Others to ID
export const getPageRoute = page => {
  const pageRoute = page.id === 'HOME' ? '' : page.id;
  return pageRoute;
};

// Used to turn text ids into url slugs for dynamic routing
// lowercase and replace space with -
export const formatUrl = raw => {
  return raw.toLowerCase().replace(/\s/g, '-');
};

// Used to darken menu items that are the current route
export const getFontWeight = page => {
  const router = useRouter();
  let fontWeight = 300;
  if (router.pathname == page.path) {
    fontWeight = 500;
  } else if (page.subItems) {
    if (router.pathname.startsWith(page.path)) {
      fontWeight = 500;
    }
  }
  return fontWeight;
};

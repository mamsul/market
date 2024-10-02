import { InboxStackIcon } from '@/components/icons/inbox-stack-icon';
import { SignoutIcon } from '@/components/icons/signout-icon';
import { UserCircleIcon } from '@/components/icons/user-circle-icon';
import { INavbarMenu } from '@/types';

export const navbarData: INavbarMenu = {
  logedIn: [
    {
      name: 'Produk',
      url: '/profile',
      icon: <UserCircleIcon className="mr-2 size-4" />,
    },
    {
      name: 'Produk',
      url: '/product',
      icon: <InboxStackIcon className="mr-2 size-4" />,
    },
    { name: 'Keluar', url: '/', icon: <SignoutIcon className="mr-2 size-4" /> },
  ],
  notLoggedIn: [
    {
      name: 'Guest',
      url: '/guest',
      icon: <UserCircleIcon className="mr-2 size-4" />,
    },
    {
      name: 'Daftar',
      url: '/sign-up',
      icon: <SignoutIcon className="mr-2 size-4" />,
    },
    {
      name: 'Masuk',
      url: '/sign-in',
      icon: <InboxStackIcon className="mr-2 size-4" />,
    },
  ],
};

import { CartIcon } from '@/components/icons/cart-icon';
import { LoveIcon } from '@/components/icons/love-icon';
import StoreIcon from '@/components/icons/store-icon';
import { UserCircleIcon } from '@/components/icons/user-circle-icon';
import { ThemeToggle } from '@/components/theme-toggle';
import { Button } from '@/components/ui/button';
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarTrigger,
} from '@/components/ui/menubar';
import { navbarData } from '@/lib/data/navbar-data';

export function Navbar() {
  const isLogin = false;

  return (
    <Menubar className="fixed inset-x-0 top-0 z-20 flex h-10 justify-between rounded-none border-b border-none px-2 lg:px-4">
      <div className="flex items-center space-x-2">
        <StoreIcon className="size-5" />
        <h1 className="font-bold">Pasar Knitto.</h1>
      </div>

      <div className="flex items-center space-x-1 md:space-x-3">
        {isLogin && (
          <>
            <AuthenticatedMenu />
            <CartAndFavorite />
          </>
        )}

        {!isLogin && (
          <>
            <UnauthenticatedMenu />
            <CartAndFavorite />
          </>
        )}
        <ThemeToggle />
      </div>
    </Menubar>
  );
}

const AuthenticatedMenu = () => {
  const { logedIn } = navbarData;

  return (
    <MenubarMenu>
      <MenubarTrigger className="hidden cursor-pointer md:block">
        Hi, Mulyono
      </MenubarTrigger>
      <MenubarContent forceMount>
        {logedIn.map(({ name, icon }, idx) => (
          <MenubarItem inset key={idx}>
            {icon && icon}
            {name}
          </MenubarItem>
        ))}
      </MenubarContent>
    </MenubarMenu>
  );
};

const UnauthenticatedMenu = () => {
  const { notLoggedIn } = navbarData;

  return (
    <>
      <div className="mr-5 hidden space-x-5 text-sm md:flex">
        {notLoggedIn.map(({ name }, idx) => (
          <Button variant="link" className="p-0 !no-underline" key={idx}>
            {name}
          </Button>
        ))}
      </div>

      <MenubarMenu>
        <MenubarTrigger className="cursor-pointer md:hidden">
          <UserCircleIcon className="size-5" />
        </MenubarTrigger>
        <MenubarContent forceMount>
          {notLoggedIn.map(({ name, icon }, idx) => (
            <MenubarItem inset key={idx}>
              {icon && icon}
              {name}
            </MenubarItem>
          ))}
        </MenubarContent>
      </MenubarMenu>
    </>
  );
};

const CartAndFavorite = () => {
  return (
    <div>
      <Button variant="ghost" className="px-2">
        <LoveIcon className="size-5" />
      </Button>
      <Button variant="ghost" className="px-2">
        <CartIcon className="size-5" />
      </Button>
    </div>
  );
};

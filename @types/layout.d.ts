interface INavbarMenuItem {
  name: string;
  url: string;
  icon?: React.ReactNode;
}

interface INavbarMenu {
  logedIn: INavbarMenuItem[];
  notLoggedIn: INavbarMenuItem[];
}

import { FC } from 'react';
import { User } from 'next-auth';
import Image from 'next/image';
import { FaUser } from 'react-icons/fa6';
import { RiLogoutBoxRFill } from 'react-icons/ri';
import { FaExchangeAlt, FaHome } from 'react-icons/fa';
import { MainMenuItem } from '@/lib/mainSideBar/components/MainMenuItem';
import { Dropdown } from '@/lib/dropdown/Dropdown';
import { Avatar } from '@/lib/avatar/Avatar';
import { Menu } from '@/lib/menu/Menu';
import { MenuItem } from '@/lib/menuItem/MenuItem';

export const MainSideBar: FC<{
  user: User;
  onLogOut: () => void;
}> = ({ user, onLogOut }) => {
  return (
    <div className="fixed flex flex-col justify-between inset-y-0 left-0 w-16 border-r border-gray-200">
      <div className="h-16 flex items-center justify-center">
        <Image
          src="/logo.svg"
          alt="Investment Advisor"
          width={35}
          height={35}
        />
      </div>
      <div className="flex-grow">
        <div className="flex flex-col items-center justify-start gap-2">
          <MainMenuItem title="Home" href="/">
            <FaHome />
          </MainMenuItem>
          <MainMenuItem title="Transactions" href="/transactions">
            <FaExchangeAlt />
          </MainMenuItem>
        </div>
      </div>
      <div className="h-16 flex items-center justify-center">
        <Dropdown trigger={<Avatar src={user.image} size={40} hoverable />}>
          <Menu>
            <MenuItem href="/profile">
              <FaUser className="text-xl" />
              Profile
            </MenuItem>
            <MenuItem onClick={onLogOut}>
              <RiLogoutBoxRFill className="text-xl" />
              Log Out
            </MenuItem>
          </Menu>
        </Dropdown>
      </div>
    </div>
  );
};

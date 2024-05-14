import { FC } from 'react';
import { Dropdown } from '@/app/lib/dropdown/Dropdown';
import { Avatar } from '@/app/lib/avatar/Avatar';
import { User } from 'next-auth';
import { Menu } from '@/app/lib/menu/Menu';
import { MenuItem } from '@/app/lib/menuItem/MenuItem';
import Image from 'next/image';
import { FaBriefcase, FaUser } from 'react-icons/fa6';
import { MainMenuItem } from '@/app/lib/mainSideBar/components/MainMenuItem';
import { RiLogoutBoxRFill } from 'react-icons/ri';
import { FaHome } from 'react-icons/fa';

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
          <MainMenuItem title="Portfolio" href="/portfolio">
            <FaBriefcase />
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

import { Link, NavLink } from 'react-router-dom';
import { BiPurchaseTag } from 'react-icons/bi';
import { FaMoneyCheck } from 'react-icons/fa6';
import { BsBarChart } from 'react-icons/bs';
import { TbBrandProducthunt } from 'react-icons/tb';
import { MdOutlineManageAccounts } from 'react-icons/md';
import { AiOutlineSetting } from 'react-icons/ai';
import { RiAdminLine } from 'react-icons/ri';
import ProtectedComponents from '../ui/ProtectedComponents';
import { ROELS } from '../../types/types';
import sidebarLogo from '../../assets/images/sidebar-logo.jpeg';
import { Image } from 'antd';
export default function Sidebar() {
  return (
    <div className='2xl:w-[300px] xl:w-[220px] lg:w-[200px] w-[170px] min-h-screen overflow-y-auto bg-black 2xl:py-6 lg:py-4'>
      <div className='flex w-full justify-center xl:mb-4 mb-3 '>
        <Link
          to={'/dashboard'}
          className='2xl:h-[60px] xl:h-[55px] lg:h-[45px]'
        >
          <Image
            preview={false}
            width={'auto'}
            height={'100%'}
            src={sidebarLogo}
          />
        </Link>
      </div>

      <ul className='w-[85%] mx-auto'>
        <NavLink
          to={'/dashboard/overview'}
          className={({ isActive }) =>
            `2xl:mb-5 xl:mb-4 lg:mb-3 ${
              isActive ? 'text-white bg-gray-800 ' : 'text-white'
            }  hover:opacity-95 block  font-semibold duration-200 2xl:text-lg text-base 2xl:py-2 xl:py-1.5 lg:py-1 px-3 rounded-lg cursor-pointer`
          }
        >
          <div className='flex gap-2 items-center'>
            <BsBarChart />
            <p>Overview</p>
          </div>
        </NavLink>
        <NavLink
          to={'/dashboard/accounts'}
          className={({ isActive }) =>
            `2xl:mb-5 xl:mb-4 lg:mb-3 ${
              isActive ? 'text-white bg-gray-800 ' : 'text-white'
            }  hover:opacity-95 block  font-semibold duration-200 2xl:text-lg text-base 2xl:py-2 xl:py-1.5 lg:py-1 px-3 rounded-lg cursor-pointer`
          }
        >
          <div className='flex gap-2 items-center'>
            <MdOutlineManageAccounts size={24} />
            <p>Accounts</p>
          </div>
        </NavLink>
        <ProtectedComponents
          allowedRoles={[ROELS.SALES, ROELS.SUPER, ROELS.SUPPORT]}
        >
          <NavLink
            to={'/dashboard/withdrawals'}
            className={({ isActive }) =>
              `2xl:mb-5 xl:mb-4 lg:mb-3 ${
                isActive ? 'text-white bg-gray-800 ' : 'text-white'
              }  hover:opacity-95 block  font-semibold duration-200 2xl:text-lg text-base 2xl:py-2 xl:py-1.5 lg:py-1 px-3 rounded-lg cursor-pointer`
            }
          >
            <div className='flex gap-2 items-center'>
              <FaMoneyCheck />
              <p>Withdrawals</p>
            </div>
          </NavLink>
        </ProtectedComponents>
        <ProtectedComponents
          allowedRoles={[ROELS.SALES, ROELS.SUPER, ROELS.SUPPORT]}
        >
          <NavLink
            to={'/dashboard/purchases'}
            className={({ isActive }) =>
              `2xl:mb-5 xl:mb-4 lg:mb-3 ${
                isActive ? 'text-white bg-gray-800 ' : 'text-white'
              }  hover:opacity-95 block  font-semibold duration-200 2xl:text-lg text-base 2xl:py-2 xl:py-1.5 lg:py-1 px-3 rounded-lg cursor-pointer`
            }
          >
            <div className='flex gap-2 items-center'>
              <BiPurchaseTag />
              <p>Purchases</p>
            </div>
          </NavLink>
        </ProtectedComponents>

        <NavLink
          to={'/dashboard/products'}
          className={({ isActive }) =>
            `2xl:mb-5 xl:mb-4 lg:mb-3 ${
              isActive ? 'text-white bg-gray-800 ' : 'text-white'
            }  hover:opacity-95 block  font-semibold duration-200 2xl:text-lg text-base 2xl:py-2 xl:py-1.5 lg:py-1 px-3 rounded-lg cursor-pointer`
          }
        >
          <div className='flex gap-2 items-center'>
            <TbBrandProducthunt />
            <p> Products</p>
          </div>
        </NavLink>

        <ProtectedComponents
          allowedRoles={[ROELS.SALES, ROELS.SUPER, ROELS.SUPPORT]}
        >
          <NavLink
            to={'/dashboard/fundings'}
            className={({ isActive }) =>
              `2xl:mb-5 xl:mb-4 lg:mb-3 ${
                isActive ? 'text-white bg-gray-800 ' : 'text-white'
              }  hover:opacity-95 block  font-semibold duration-200 2xl:text-lg text-base 2xl:py-2 xl:py-1.5 lg:py-1 px-3 rounded-lg cursor-pointer`
            }
          >
            <div className='flex gap-2 items-center'>
              <TbBrandProducthunt />
              <p> Fundings</p>
            </div>
          </NavLink>
        </ProtectedComponents>

        <ProtectedComponents allowedRoles={[ROELS.SUPER]}>
          <NavLink
            to={'/dashboard/settings'}
            className={({ isActive }) =>
              `2xl:mb-5 xl:mb-4 lg:mb-3 ${
                isActive ? 'text-white bg-gray-800 ' : 'text-white'
              }  hover:opacity-95 block  font-semibold duration-200 2xl:text-lg text-base 2xl:py-2 xl:py-1.5 lg:py-1 px-3 rounded-lg cursor-pointer`
            }
          >
            <div className='flex gap-2 items-center'>
              <AiOutlineSetting />
              <p> Settings</p>
            </div>
          </NavLink>
        </ProtectedComponents>

        <ProtectedComponents allowedRoles={[ROELS.SUPER]}>
          <NavLink
            to={'/dashboard/new-admin'}
            className={({ isActive }) =>
              `2xl:mb-5 xl:mb-4 lg:mb-3 ${
                isActive ? 'text-white bg-gray-800 ' : 'text-white'
              }  hover:opacity-95 block  font-semibold duration-200 2xl:text-lg text-base 2xl:py-2 xl:py-1.5 lg:py-1 px-3 rounded-lg cursor-pointer`
            }
          >
            <div className='flex gap-2 items-center'>
              <RiAdminLine />
              <p> New Admin</p>
            </div>
          </NavLink>
        </ProtectedComponents>
      </ul>
    </div>
  );
}

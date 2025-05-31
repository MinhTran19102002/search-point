'use client'
import { UserContext } from '@/provider/user.context';
import { AppstoreOutlined, CarOutlined, EnvironmentOutlined, RetweetOutlined, TeamOutlined } from '@ant-design/icons';
import { Layout, Menu, MenuProps } from 'antd';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useContext } from 'react';

type MenuItem = Required<MenuProps>['items'][number];
const Sider = () => {

    const { collapseMenu } = useContext(UserContext)!;

    const { Sider } = Layout;
    const items: MenuItem[] = [
        {
            key: "dashboard",
            label: <Link href={"/dashboard"}>Dashboard</Link>,
            icon: <AppstoreOutlined />,
        },
        {
            key: "search-scores",
            label: <Link href={"/search-scores"}>Search Scores</Link>,
            icon: <TeamOutlined />,
        },
        {
            key: "reports",
            label: <Link href={"/reports"}>Reports</Link>,
            icon: <CarOutlined />,
        },
        {
            key: "settings",
            label: <Link href={"/settings"}>Settings</Link>,
            icon: <RetweetOutlined />,
        },
    ];
    const pathname = usePathname();
    const selectedKey = items.find(item => pathname.endsWith(String(item?.key) || 'defaultKey'))?.key || 'dashboard';
    return (
        <Sider
            collapsed={collapseMenu}
            width={collapseMenu ? 80 : 200}
            className="h-full"
        >
            <div className="demo-logo-vertical p-4 flex justify-center items-center">
                <img
                    src="/logo.svg"
                    alt="Logo"
                    className={`h-auto transition-all duration-300 ${collapseMenu ? 'w-10' : 'w-24'}`}
                />
            </div>


            {/* defaultSelectedKeys={['dashboard']} */}
            <Menu
                theme="dark"
                mode="inline"
                selectedKeys={[String(selectedKey)]}
                items={items}
            />
        </Sider>

    )
}

export default Sider;
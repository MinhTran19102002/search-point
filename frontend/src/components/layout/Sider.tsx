'use client'
import { UserContext } from '@/provider/user.context';
import { AppstoreOutlined, CarOutlined, CloseOutlined, EnvironmentOutlined, MenuOutlined, RetweetOutlined, TeamOutlined } from '@ant-design/icons';
import { Button, Layout, Menu, MenuProps } from 'antd';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useContext, useEffect, useState } from 'react';

type MenuItem = Required<MenuProps>['items'][number];
const Sider = () => {

    const { collapseMenu, setCollapseMenu, showSider, setShowSider } = useContext(UserContext)!;
    const [isMobile, setIsMobile] = useState(false);

    // Detect screen size
    useEffect(() => {
        const checkScreenSize = () => {
            const mobile = window.innerWidth < 768; // md breakpoint
            setIsMobile(mobile);

            // Auto collapse on mobile
            if (mobile) {
                setCollapseMenu(true);
            }
        };

        checkScreenSize();
        window.addEventListener('resize', checkScreenSize);

        return () => window.removeEventListener('resize', checkScreenSize);
    }, []);


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
        <div className='h-full'>
            <Sider
                collapsed={collapseMenu}
                width={collapseMenu ? 80 : 200}
                className="h-full hidden lg:block transition-all duration-300"
            >
                <div className="demo-logo-vertical p-4 flex justify-center items-center">
                    <img
                        src="/logo.svg"
                        alt="Logo"
                        className={`h-auto transition-all duration-300 ${collapseMenu ? 'w-10' : 'w-24'}`}
                    />
                </div>

                <Menu
                    theme="dark"
                    mode="inline"
                    selectedKeys={[String(selectedKey)]}
                    items={items}
                />
            </Sider>

            {showSider && (
                <div
                    className="fixed inset-0  lg:hidden  z-1 w-[200px] h-full bg-white shadow-lg'"
                >
                    <div className="max-w-[200px] h-full bg-white shadow-lg">
                        <Sider
                            collapsed={false}
                            width="100%"
                            className="h-full transition-all duration-300"
                        >
                            <div className="demo-logo-vertical p-4 flex justify-center items-center">
                                <div className=''>
                                    <img
                                        src="/logo.svg"
                                        alt="Logo"
                                        className={`h-auto transition-all duration-300 w-24`}
                                    />
                                </div>
                                <div>
                                    <Button
                                        type="text"
                                        icon={<CloseOutlined style={{ color: '#fff' }} />}
                                        onClick={() => setShowSider(!showSider)}
                                        style={{
                                            fontSize: "16px",
                                            width: 64,
                                            height: 64,
                                        }}
                                    />
                                </div>
                            </div>

                            <Menu
                                theme="dark"
                                mode="inline"
                                selectedKeys={[String(selectedKey)]}
                                items={items}
                            />

                        </Sider>
                    </div>
                </div>
            )}

        </div>

    )
}

export default Sider;
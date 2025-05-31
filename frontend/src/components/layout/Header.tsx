'use client'
import { UserContext } from '@/provider/user.context';
import { DownOutlined, MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons';
import { Button, Dropdown, Layout, MenuProps, Space } from 'antd';
import { useContext } from 'react';

const Header = () => {

    const { Header } = Layout;
    const { collapseMenu, setCollapseMenu } = useContext(UserContext)!;
    // const { data: session, status } = useSession()
    // console.log("checkdata<<<: ", session, status)

    //   const items: MenuProps['items'] = [
    //     {
    //       key: '1',
    //       label: <span>Thông tin cá nhân</span>
    //     },
    //     {
    //       key: '4',
    //       danger: true,
    //       label: <span onClick={() => signOut({ callbackUrl: '/auth/login' })}>Đăng xuất</span>,
    //     },
    //   ];
    return (
        <Header
            style={{
                position: "sticky",
                top: 0,
                zIndex: 1000,
                padding: 0,
                display: "flex",
                background: "#f5f5f5",
                justifyContent: "space-between",
                alignItems: "center",
            }}
        >
            <Button
                type="text"
                icon={collapseMenu ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
                onClick={() => setCollapseMenu(!collapseMenu)}
                style={{
                    fontSize: "16px",
                    width: 64,
                    height: 64,
                }}
            />

            {/* Tiêu đề giữa Header */}
            <div className="text-[30px] font-bold text-[oklch(0.89_0.18_96.11)] bg-[oklch(0.4_0.03_247.28)] px-2 py-1 rounded-b-3xl">
                G-Scores
            </div>            {/* Div trống phía cuối header */}
            <div style={{ width: 64 }}></div>
        </Header>

    )
}
export default Header;
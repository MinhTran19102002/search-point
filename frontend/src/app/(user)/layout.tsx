import Contents from "@/components/layout/Content"
import Header from "@/components/layout/Header"
import Sider from "@/components/layout/Sider"
import { UserContextProvider } from "@/provider/user.context"



const UserLayout = async ({ children }: { children: React.ReactNode }) => {
    return (
        <UserContextProvider>
            <div style={{ display: "flex", width: "100%" }}>
                <div className='left-side sticky top-0 h-screen overflow-auto'>
                    <Sider />
                </div>
                <div className='right-side'
                    style={{
                        minHeight: '100vh',
                        display: 'flex',
                        flexDirection: 'column',
                        flexGrow: 1
                    }}>
                    <Header />
                    <Contents>
                        {children}
                    </Contents>
                </div>
            </div>
        </UserContextProvider>
    )
}

export default UserLayout;
import Contents from "@/components/layout/Content"
import Header from "@/components/layout/Header"
import Sider from "@/components/layout/Sider"
import { UserContextProvider } from "@/provider/user.context"



const UserLayout = async ({ children }: { children: React.ReactNode }) => {
    return (
        <UserContextProvider>
            <div className="flex flex-row w-full">
                {/* Sidebar - hiển thị trên md trở lên */}
                <div className="top-0 h-screen sticky   bg-gray-100 z-1000">
                    <Sider />
                </div>

                {/* Main Content */}
                <div className="flex flex-col flex-grow min-h-screen">
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
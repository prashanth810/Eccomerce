import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
// import Sidebar from '../components/Sidebar';
import { Drawer } from 'antd';
import { SidebarProvider } from '../context/SidebarContext';


const AdminLayout = () => {
    const [mobileOpen, setMobileOpen] = useState(false);

    return (
        <SidebarProvider value={{
            openSidebar: () => setMobileOpen(true),
            closeSidebar: () => setMobileOpen(false),
            isOpen: mobileOpen,
        }}>
            <div className="layout-container flex h-screen overflow-y-auto sidebar bg">
                {/* Sidebar (Desktop and up) */}
                <div className="sidebar hidden md:block bg">
                    {/* <Sidebar /> */}
                </div>

                {/* Main Content */}
                <div className="flex flex-col w-full bg">
                    <div className="flex-grow overflow-auto text-black">
                        <Outlet />
                    </div>
                </div>

                {/* Mobile Sidebar Drawer */}
                {/* <Drawer
                    placement="left"
                    closable={false}
                    width={240}
                    onClose={() => setMobileOpen(false)}
                    open={mobileOpen}
                    bodyStyle={{ padding: 0 }}
                    className="md:hidden"
                >
                    <Sidebar isMobile onClose={() => setMobileOpen(false)} onNavigate={() => setMobileOpen(false)} />
                </Drawer> */}
            </div>
        </SidebarProvider>
    );
};

export default AdminLayout;
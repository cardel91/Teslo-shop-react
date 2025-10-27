import { useState } from "react";
import AdminHeader from "../components/AdminHeader";
import AdminSidebar from "../components/AdminSidebar";
import { Outlet } from "react-router";
import { AdminTitle } from "../components/AdminTitle";

const AdminLayout = () => {
    const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

    return (
        <div className="bg-gray-50 flex">
            <AdminSidebar
                isCollapsed={sidebarCollapsed}
                onToggle={() => setSidebarCollapsed(!sidebarCollapsed)}
            />

            <div className="flex-1 flex flex-col">
                <AdminHeader />

                <main className="flex-1 p-6">

                    <AdminTitle
                        title="Welcome back! 👋"
                        subtitle="Here's what's happening with your business today."
                    />

                    <Outlet />

                </main>
            </div>
        </div>
    )
}
export default AdminLayout
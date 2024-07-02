import DashboardSidebar from "@/components/dashboard/Sidebar";
import Navbar from "@/components/shared/Navbar/Navbar";
import ProfileToggle from "@/components/ui/homepage/ProfileToggle";
import { TChildrenProps } from "@/types";


const DashboardLayout = ({ children }: TChildrenProps) => {
  
  return (
    <div className="p-4 lg:p-8 text-gray-400 c-auto ">
      <div className="grid grid-cols-10 gap-6">
        {/* left box  */}
        <DashboardSidebar />

        {/* right box  */}
        <div className="col-span-12 lg:col-span-8 bg-[#0A192F] rounded-lg lg:rounded-lg border-main h-[calc(100vh-32px)] lg:h-[calc(100vh-64px)] flex flex-col relative">
          {/* navbar  */}
          <ProfileToggle />
          {/* <div className="flex-shrink-0">
            <Navbar position="top" />
          </div> */}
          <div className="flex-grow p-4 overflow-auto ">
            {children}
          </div>
          <div className="sticky bottom-0 w-full block lg:hidden">
            <Navbar position="bottom" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;

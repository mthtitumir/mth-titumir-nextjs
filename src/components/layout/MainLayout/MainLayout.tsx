import Navbar from "@/components/shared/Navbar/Navbar";
import { TChildrenProps } from "@/types";

const MainLayoutCom = ({ children }: TChildrenProps) => {
  return (
    <div className="min-h-screen bg-[#06111f] text-slate-300">
      <Navbar />
      <main className="mx-auto w-full max-w-6xl px-4 py-8 sm:px-6 lg:px-8">
        {children}
      </main>
    </div>
  );
};

export default MainLayoutCom;

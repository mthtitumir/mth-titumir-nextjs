import { socialItems } from "@/constants";
import { TChildrenProps } from "@/types";
import Image from "next/image";

const MainLayout = ({ children }: TChildrenProps) => {
  return (
    <div className="h-screen p-16 ">
      <div className="grid grid-cols-12 gap-6">
        <div className="col-span-3 bg-gray-200 rounded-2xl px-8">
          {/* div for image */}
          <div className="flex justify-center items-center my-8 pt-8 bg-gray-100 rounded-2xl">
            <Image
              width={120}
              height={120}
              src="https://mth-titumir.web.app/assets/Titumir-Picture%20copy-f6460935.png"
              alt="M. T. H. Titumir"
            />
          </div>
          <div>
            <h1 className="text-center text-xl font-semibold">
              M. T. H. Titumir
            </h1>
            <h1 className="text-center">Web Developer</h1>
          </div>
          <div className="h-px bg-gray-500 my-3"></div>
          {/* contact  */}
          <div className="flex flex-col gap-2 mb-8">
            {socialItems?.map((item) => (
              <div key={item.name} className="flex gap-2 items-center">
                <div className="flex items-center justify-center rounded-lg bg-gray-100 p-3">
                  <item.icon size={20} />
                </div>
                <div>
                  <h1 className="text-xs">{item.name}</h1>
                  <h1 className="text-sm">{item.data}</h1>
                </div>
              </div>
            ))}
          </div>
          <div></div>
        </div>

        {/* right box  */}
        <div className="col-span-9 bg-gray-400 h-12 rounded-2xl">
          {children}
        </div>
      </div>
    </div>
  );
};

export default MainLayout;


import { CiMail } from "react-icons/ci";
import { AiOutlineBell } from "react-icons/ai";
import { User } from "@nextui-org/react";

const Header: React.FC = () => {
  return (
    <>
      <div className="hidden absolute top-0 right-0 md:flex justify-end w-[100%] md:rounded-tr-[40px] text-black h-[10vh] inlin-block p-4 bg-white rounded-tl-[40px]">
        <div className="flex justify-between items-center gap-4">       
            <CiMail className="text-2xl" />
            <AiOutlineBell className="text-2xl" />
            <span>|</span>
            <User
                name 
                avatarProps={{
                src: "https://i.pravatar.cc/150?u=a04258114e29026702d"
            }}    
            />
        </div>
     </div>
    </>
  );
};

export default Header;

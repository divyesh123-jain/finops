import React from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { CiMail } from "react-icons/ci";
import { AiOutlineBell } from "react-icons/ai";
import { GiSuspicious } from "react-icons/gi";
import { AiOutlineDown } from "react-icons/ai";

const Header: React.FC = () => {
  return (
    <>
      <div className="hidden absolute top-0 right-0 md:flex justify-between w-[81%] md:rounded-tr-[40px] text-black h-[10vh] p-4 bg-white">
        {/* <div className="inline-block"> LOGO </div> */}

        {/* <div className="flex justify-between"> */}
        <div className="w-96 bg-gray-100 h-8 flex justify-start items-center rounded-md p-2 gap-1">
          <AiOutlineSearch /> Search
        </div>

        <div className="flex justify-between items-center gap-4">
          <div>
            <CiMail className="text-2xl" />
          </div>
          <div>
            <AiOutlineBell className="text-2xl" />
          </div>
          <div>|</div>
          <div className="flex gap-2 items-center justify-start">
            <div>
              <GiSuspicious className="text-2xl" />
            </div>
            <div>Name Here</div>
            <div>
              <AiOutlineDown />
            </div>
          </div>
        </div>
        {/* </div> */}
      </div>
    </>
  );
};

export default Header;

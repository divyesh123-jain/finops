import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Avatar,
  Button,
} from "@nextui-org/react";

const Share = () => {
  const [isFollowed, setIsFollowed] = React.useState(false);
  return (
    <div className="relative w-[100%] md:w-[98%] md:h-[35%] bg-white rounded-lg flex gap-5 p-4">
      <Card className="bg-white md:w-[300px] p-3">
        <CardHeader className="justify-between">
          <div className="flex gap-5">
            <Avatar
              isBordered
              radius="full"
              size="md"
              src="/avatars/avatar-1.png"
            />
            <div className="flex flex-col gap-1 items-start justify-center">
              <h5 className="text-small tracking-tight text-default-400">
                Apple
              </h5>
            </div>
          </div>
          <div className="flex-shrink-0">
                <img
                  className="w-8 h-8 rounded-full"
                  src="/docs/images/people/profile-picture-1.jpg"
                  alt="Neil image"
                />
              </div>
        </CardHeader>
        <CardFooter className="gap-3 flex flex-col">
          <div className="flex justify-between w-[100%]">
            <div className="text-gray-700">Total Shares</div>
            <div className="text-black font-medium">$310,40</div>
          </div>
          <div className="flex justify-between w-[100%]">
            <div className="text-gray-700">Total Shares</div>
            <div className="text-black font-medium">$310,40</div>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
};

export default Share;

import React from 'react'
import {Card, CardHeader, CardBody, CardFooter, Avatar, Button} from "@nextui-org/react";

const GraphComp = () => {
    const [isFollowed, setIsFollowed] = React.useState(false); 
  return (
    <div>
        <Card className="w-[90%] mx-auto p-3 bg-white border-b-2 shadow-none rounded-none">
      <CardHeader className="justify-between">
        <div className="flex gap-5">
          <Avatar isBordered radius="full" size="md" src="/avatars/avatar-1.png" />
          <div className="flex flex-col gap-1 items-start justify-center">
            <h4 className="text-small font-semibold text-gray-800 leading-none">Apple Inc</h4>
            <h5 className="text-small tracking-tight text-default-400">AAPL</h5>
          </div>
        </div>
        <div className='text-black'>
            $150,70
        </div>
      </CardHeader>
    </Card>
    </div>
  )
}

export default GraphComp
import React from 'react'
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar"
import { cn } from '@/lib/utils'
import Image from 'next/image'


function UserAvatar({
  name,
  image,
  className
}:{
  name: string,
  image: string,
  className?: string
}) {
  return (
    // cn - combining some tailwind with the custom property className
    <Avatar className={cn("bg-white text-black", className)}>
      {/* next js image properties to customize image obejcts */}
      {/* {image && (
        <Image 
        src={image}
        alt={name}
        width={40}
        height={40}
        className="rounded-full"
        />
      )} */}
        {/* <AvatarImage src="https://github.com/shadcn.png" /> */}
        <AvatarFallback delayMs={1000} 
        className="dark:bg-white dark:text-black text-sm">
          {name
              ?.split(" ")
              .map((n) => n[0])
              .join("")}
        </AvatarFallback>
</Avatar>

  )
}

export default UserAvatar
import React from 'react'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
  } from "./ui/dropdown-menu"
import { Avatar } from '@radix-ui/react-avatar'
import UserAvatar from './UserAvatar'
import { Session } from 'next-auth'
  

function UserButton({ session } : {session: Session | null}) {
  return (
    //session....
    
    <DropdownMenu>
  <DropdownMenuTrigger>
    {/* image src would throw error at first, as it won't be listed under next.config.js */}
    <UserAvatar name="Kaustav Dey" image="https://github.com/shadcn.png"/>
  </DropdownMenuTrigger>
  <DropdownMenuContent>
    <DropdownMenuLabel>My Account</DropdownMenuLabel>
    <DropdownMenuSeparator />
    <DropdownMenuItem>Profile</DropdownMenuItem>
    <DropdownMenuItem>Billing</DropdownMenuItem>
    <DropdownMenuItem>Team</DropdownMenuItem>
    <DropdownMenuItem>Subscription</DropdownMenuItem>
  </DropdownMenuContent>
</DropdownMenu>

  )
}

export default UserButton
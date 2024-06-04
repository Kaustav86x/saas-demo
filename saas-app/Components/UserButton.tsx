"use client";

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
import { Button } from './ui/button'
import { signIn, signOut } from 'next-auth/react';
  
// logged in or not
function UserButton({ session } : {session: Session | null}) {
  if(!session) {
    return (
      <Button variant={'outline'} onClick={() => 
      { setTimeout("5000"),
      signIn()
      }
      }>
        Sign In
      </Button>
    )
  }
  return (
    // if the session exists render the user menu components....
    session && (
    <DropdownMenu>
  <DropdownMenuTrigger>
    {/* image src would throw error at first, as it won't be listed under next.config.js */}
    <UserAvatar 
    name={session.user?.name} 
    image={session.user?.image}/>
  </DropdownMenuTrigger>
  <DropdownMenuContent>
    <DropdownMenuLabel>{session.user?.name}</DropdownMenuLabel>
    <DropdownMenuSeparator />
    <DropdownMenuItem onClick={() => signOut}>Sign Out</DropdownMenuItem>
    {/* <DropdownMenuItem>Profile</DropdownMenuItem>
    <DropdownMenuItem>Billing</DropdownMenuItem>
    <DropdownMenuItem>Team</DropdownMenuItem>
    <DropdownMenuItem>Subscription</DropdownMenuItem> */}
  </DropdownMenuContent>
</DropdownMenu>
    )
  );
}

export default UserButton
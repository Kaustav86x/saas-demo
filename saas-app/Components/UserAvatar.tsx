import React from 'react'
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar"


function UserAvatar() {
  return (
    <Avatar>
        <AvatarImage src="https://github.com/shadcn.png" />
        <AvatarFallback>CN</AvatarFallback>
</Avatar>

  )
}

export default UserAvatar
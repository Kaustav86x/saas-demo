'use client' // 

import { AspectRatio } from '@radix-ui/react-aspect-ratio';
import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import LogoImage from "@logos/demoimg.svg";

function logo() {
  return (
    <Link href="/">
        <div className="flex items-cenetr w-12 h-12">
            <AspectRatio ratio={16 / 9}
            className="flex items_center justify-center">
                <Image priority
                src={LogoImage}
                alt="logo"
                className='dark:filter dark:invert'
                />
            </AspectRatio>
        </div>
    </Link>
  )
}

export default logo
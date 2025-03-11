import React from 'react'
import { ChevronLeftIcon, ChevronRightIcon, Bars3Icon } from '@heroicons/react/24/outline'

function MenuIcon(props) {
  return (
    <div className="flex">
      <a
        href="#sidebar"
        className="mr-[8px] text-[#969696] p-1 -ml-1.5 inline-block lg:hidden"
      >
        <Bars3Icon className={'h-6 w-6'} />
      </a>
      <a href="/" className="mr-[8px] text-[#969696] p-1 cursor-not-allowed">
        <ChevronLeftIcon className={'h-6 w-6'} />
      </a>
      <a href="/" className="ml-[8px] text-[#969696] p-1 cursor-not-allowed">
        <ChevronRightIcon className={'h-6 w-6'} />
      </a>
    </div>
  )
}

export default MenuIcon
//--------------------------------
// © Ada Maynek 2024
// This software is released under the MIT License.
//--------------------------------
'use client'

import Link from 'next/link'
import { IconContext } from "react-icons"
import { BsTwitterX, BsGithub } from "react-icons/bs"

export default function Icons({}) {
  return (
    <div className="flex justify-row ">
      <div className="flex-1"></div>
      <div className="flex-1 flex justify-row ">
        <IconContext.Provider value={{size: '24px'}}>
          <Link href="https://x.com/milstd1815" target="_brank">
            <BsTwitterX  />
          </Link>
          &emsp;
          <Link href="https://github.com/Maynek" target="_brank">
            <BsGithub />
          </Link>
        </IconContext.Provider>
      </div>
    </div>
  );
}
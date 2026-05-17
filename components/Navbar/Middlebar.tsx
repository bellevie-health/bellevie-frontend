import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Search, Calendar, FileText, Activity } from 'lucide-react'

export default function Middlebar() {
  return (
    <div className="w-full bg-white dark:bg-black py-4">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <div className="flex-shrink-0">
          <Link href="/" className="flex items-center gap-2 group">
            <div className="relative h-11 w-36">
              <Image
                src="/imageslogo/Gemini_Generated_Image_mv8pwamv8pwamv8pw.png"
                alt="Bellevie Healthcare"
                fill
                sizes="(max-width: 768px) 144px, 144px"
                className="object-contain transition-transform duration-500 group-hover:scale-105"
                priority
              />
            </div>
          </Link>
        </div>

        {/* Search Bar - Healthcare Focused */}
        {/* <div className="hidden flex-1 items-center justify-center px-10 md:flex">
          <div className="w-full max-w-md relative group">
            <div className="absolute inset-0 bg-[#33c2df]/5 rounded-xl group-focus-within:bg-white group-focus-within:ring-2 group-focus-within:ring-[#33c2df]/10 transition-all dark:bg-zinc-900 dark:group-focus-within:bg-zinc-800"></div>
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 text-zinc-400 group-focus-within:text-[#33c2df] transition-colors" size={16} strokeWidth={2.5} />
            <input
              type="text"
              placeholder="Search Doctors, Tests..."
              className="relative w-full rounded-xl bg-transparent py-2.5 pl-10 pr-4 text-sm font-medium text-zinc-900 outline-hidden dark:text-white placeholder:text-zinc-400"
            />
          </div>
        </div> */}

        {/* Healthcare Actions */}
        <div className="flex items-center gap-6">
          <div className="hidden sm:flex items-center gap-6">
            <button className="flex flex-col items-center gap-1 text-zinc-600 hover:text-[#33c2df] dark:text-zinc-400 dark:hover:text-[#33c2df] transition-all group">
              <Activity size={20} strokeWidth={2} className="group-hover:-translate-y-0.5 transition-transform" />
              <span className="text-[9px] font-bold uppercase tracking-wider">Reports</span>
            </button>
            <button className="flex flex-col items-center gap-1 text-zinc-600 hover:text-[#33c2df] dark:text-zinc-400 dark:hover:text-[#33c2df] transition-all group">
              <FileText size={20} strokeWidth={2} className="group-hover:-translate-y-0.5 transition-transform" />
              <span className="text-[9px] font-bold uppercase tracking-wider">Records</span>
            </button>
            <button className="relative flex flex-col items-center gap-1 text-zinc-600 hover:text-[#33c2df] dark:text-zinc-400 dark:hover:text-[#33c2df] transition-all group">
              <Calendar size={20} strokeWidth={2} className="group-hover:-translate-y-0.5 transition-transform" />
              <span className="text-[9px] font-bold uppercase tracking-wider">Bookings</span>
              <span className="absolute -right-1.5 -top-1 flex h-4 w-4 items-center justify-center rounded-full bg-[#33c2df] text-[9px] font-black text-white ring-1 ring-white dark:ring-black">
                2
              </span>
            </button>
          </div>
          
          <button className="md:hidden text-zinc-900 dark:text-white">
            <Search size={22} strokeWidth={2.5} />
          </button>
        </div>
      </div>
    </div>
  )
}

"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function ServerSidebar() {
  const pathname = usePathname();

  return (
    <div className="w-[72px] bg-[#1E1F22] flex flex-col items-center py-3 space-y-2 shrink-0 h-screen z-50">
      {/* Home Button (Direct Messages) */}
      <Link href="/">
        <div className={`relative flex items-center justify-center w-12 h-12 rounded-[24px] hover:rounded-[16px] transition-all duration-200 cursor-pointer text-white group ${pathname === "/" ? "bg-[#5865F2] rounded-[16px]" : "bg-[#313338] hover:bg-[#5865F2]"}`}>
          <div className={`absolute left-[-16px] w-[8px] bg-white rounded-r-full transition-all duration-200 ${pathname === "/" ? "h-10" : "h-0 group-hover:h-5"}`}></div>
          <span className="font-bold text-lg">H</span>
        </div>
      </Link>

      <div className="w-8 h-[2px] bg-[#313338] rounded-full mx-auto my-2"></div>

      {/* Mock Servers */}
      {[...Array(3)].map((_, i) => (
        <div key={i} className="relative flex items-center justify-center w-12 h-12 bg-[#313338] rounded-[24px] hover:rounded-[16px] transition-all duration-200 cursor-pointer text-gray-300 hover:bg-[#5865F2] hover:text-white group">
          <div className="absolute left-[-16px] w-[8px] h-0 group-hover:h-5 bg-white rounded-r-full transition-all duration-200"></div>
          S{i + 1}
        </div>
      ))}

      {/* Discovery Button */}
      <Link href="/discovery" className="mt-2">
        <div className={`relative flex items-center justify-center w-12 h-12 rounded-[24px] hover:rounded-[16px] transition-all duration-200 cursor-pointer group ${pathname === "/discovery" ? "bg-[#23A559] text-white rounded-[16px]" : "bg-[#313338] text-[#23A559] hover:bg-[#23A559] hover:text-white"}`}>
          <div className={`absolute left-[-16px] w-[8px] bg-white rounded-r-full transition-all duration-200 ${pathname === "/discovery" ? "h-10" : "h-0 group-hover:h-5"}`}></div>
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
             <path d="M12 10.9c-.61 0-1.1.49-1.1 1.1s.49 1.1 1.1 1.1c.61 0 1.1-.49 1.1-1.1s-.49-1.1-1.1-1.1zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm2.19 12.19L6 18l3.81-8.19L18 6l-3.81 8.19z"/>
          </svg>
        </div>
      </Link>

      <div className="w-12 h-12 bg-[#313338] rounded-[24px] hover:rounded-[16px] transition-all duration-200 flex items-center justify-center cursor-pointer text-[#23A559] hover:bg-[#23A559] hover:text-white mt-auto">
        +
      </div>
    </div>
  );
}

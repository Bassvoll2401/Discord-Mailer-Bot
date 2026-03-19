export default function Chat() {
  return (
    <div className="flex-1 bg-[#313338] flex flex-col h-screen text-gray-200 relative">
      {/* Chat Header */}
      <div className="h-12 border-b border-[#1E1F22]/60 flex items-center px-5 shrink-0 shadow-sm z-10 bg-[#313338]/95 backdrop-blur-sm">
        <span className="text-gray-500 text-2xl mr-3 italic font-light select-none">#</span>
        <span className="font-bold text-white mr-4 text-base tracking-wide">general</span>
        <div className="w-[1px] h-5 bg-[#3F4147] mr-4"></div>
        <span className="text-sm font-medium text-gray-400/90 truncate">Das ist der allgemeine Chat für dieses Projekt.</span>

        {/* Modern Header Icons */}
        <div className="ml-auto flex items-center space-x-4 text-gray-400">
          <svg className="w-[22px] h-[22px] hover:text-gray-200 cursor-pointer transition-colors" fill="currentColor" viewBox="0 0 24 24"><path d="M12 22a2 2 0 002-2h-4a2 2 0 002 2zm6-6v-5c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.63 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2z"/></svg>
          <svg className="w-[22px] h-[22px] hover:text-gray-200 cursor-pointer transition-colors" fill="currentColor" viewBox="0 0 24 24"><path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/></svg>
          <div className="w-60 h-7 bg-[#1E1F22] rounded-md px-2 flex items-center ml-2 border border-[#1E1F22] focus-within:border-[#5865F2] transition-colors">
            <input type="text" placeholder="Suchen" className="bg-transparent text-sm text-gray-200 outline-none w-full placeholder-gray-500" />
            <svg className="w-4 h-4 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
          </div>
        </div>
      </div>

      {/* Messages Area */}
      <div className="flex-1 overflow-y-auto px-4 py-4 space-y-2 custom-scrollbar flex flex-col justify-end pb-6">
        {/* Welcome Message */}
        <div className="mt-8 mb-6 ml-2">
          <div className="w-[68px] h-[68px] bg-[#5865F2] rounded-full flex items-center justify-center text-white mb-4 shadow-lg shadow-[#5865F2]/20">
            <span className="text-4xl italic font-light">#</span>
          </div>
          <h1 className="text-3xl font-bold text-white mb-2 tracking-tight">Willkommen bei #general!</h1>
          <p className="text-gray-400 font-medium">Dies ist der Anfang des #general Kanals.</p>
        </div>

        {/* Message 1 */}
        <div className="flex group mt-6 hover:bg-[#2B2D31]/50 -mx-4 px-6 py-1.5 transition-colors rounded-lg">
          <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center shrink-0 mt-1 cursor-pointer shadow-sm">
            <img src="https://github.com/shadcn.png" alt="User" className="w-full h-full rounded-full" />
          </div>
          <div className="ml-4">
            <div className="flex items-baseline">
              <span className="font-semibold text-white hover:underline cursor-pointer tracking-wide">Jules</span>
              <span className="text-[11px] font-medium text-gray-400 ml-2">heute um 14:30 Uhr</span>
            </div>
            <div className="text-gray-300 text-[15px] leading-relaxed mt-0.5">
              Hallo zusammen! Willkommen in unserem neuen Discord Clone.
            </div>
          </div>
        </div>

        {/* Message 2 */}
        <div className="flex group mt-1 hover:bg-[#2B2D31]/50 -mx-4 px-6 py-1.5 transition-colors rounded-lg">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center shrink-0 mt-1 cursor-pointer shadow-sm">
             <span className="text-white font-bold text-sm shadow-sm">U2</span>
          </div>
          <div className="ml-4">
            <div className="flex items-baseline">
              <span className="font-semibold text-white hover:underline cursor-pointer tracking-wide">User2</span>
              <span className="text-[11px] font-medium text-gray-400 ml-2">heute um 14:35 Uhr</span>
            </div>
            <div className="text-gray-300 text-[15px] leading-relaxed mt-0.5">
              Sieht echt super aus! Die Farben sind perfekt getroffen.
            </div>
          </div>
        </div>

        {/* Message 3 */}
        <div className="flex group mt-1 hover:bg-[#2B2D31]/50 -mx-4 px-6 py-1.5 transition-colors rounded-lg">
          <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center shrink-0 mt-1 cursor-pointer shadow-sm">
            <img src="https://github.com/shadcn.png" alt="User" className="w-full h-full rounded-full" />
          </div>
          <div className="ml-4">
            <div className="flex items-baseline">
              <span className="font-semibold text-white hover:underline cursor-pointer tracking-wide text-[#5865F2]">Jules <span className="text-[10px] bg-[#5865F2] text-white px-1.5 py-0.5 rounded-sm ml-1 font-bold tracking-wider relative -top-[1px]">APP</span></span>
              <span className="text-[11px] font-medium text-gray-400 ml-2">heute um 14:36 Uhr</span>
            </div>
            <div className="text-gray-300 text-[15px] leading-relaxed mt-0.5">
              Danke! Ich habe Tailwind CSS verwendet, um das Styling moderner und aufgeräumter zu gestalten.
            </div>
          </div>
        </div>
      </div>

      {/* Message Input Area */}
      <div className="px-4 pb-6 pt-1 shrink-0 bg-[#313338]">
        <div className="bg-[#383A40] rounded-xl flex items-center px-4 py-3 shadow-sm border border-transparent focus-within:border-[#1E1F22] transition-colors">
          <button className="w-6 h-6 flex items-center justify-center rounded-full bg-[#B5BAC1] text-[#383A40] hover:bg-gray-200 mr-4 shrink-0 transition-colors shadow-sm">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
            </svg>
          </button>
          <input
            type="text"
            placeholder="Nachricht an #general senden"
            className="bg-transparent flex-1 outline-none text-gray-200 placeholder-gray-500 font-medium"
          />
          <div className="flex items-center space-x-4 ml-2 text-[#B5BAC1]">
            <button className="hover:text-gray-200 transition-colors transform hover:scale-110 duration-200">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8zm3.5-9c.828 0 1.5-.672 1.5-1.5S16.328 8 15.5 8 14 8.672 14 9.5s.672 1.5 1.5 1.5zm-7 0c.828 0 1.5-.672 1.5-1.5S9.328 8 8.5 8 7 8.672 7 9.5 8.672 11 8.5 11zm3.5 6c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5z"/>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

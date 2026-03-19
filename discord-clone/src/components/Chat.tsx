export default function Chat() {
  return (
    <div className="flex-1 bg-[#313338] flex flex-col h-screen text-gray-200">
      {/* Chat Header */}
      <div className="h-12 border-b border-[#1E1F22] flex items-center px-4 shrink-0 shadow-sm">
        <span className="text-gray-500 text-2xl mr-2 italic font-light">#</span>
        <span className="font-bold text-white mr-4">general</span>
        <div className="w-[1px] h-6 bg-[#3F4147] mr-4"></div>
        <span className="text-sm text-gray-400">Das ist der allgemeine Chat für dieses Projekt.</span>
      </div>

      {/* Messages Area */}
      <div className="flex-1 overflow-y-auto px-4 py-4 space-y-6">
        {/* Welcome Message */}
        <div className="mt-4 mb-8">
          <div className="w-16 h-16 bg-[#5865F2] rounded-full flex items-center justify-center text-white mb-4">
            <span className="text-3xl italic font-light">#</span>
          </div>
          <h1 className="text-3xl font-bold text-white mb-2">Willkommen bei #general!</h1>
          <p className="text-gray-400">Dies ist der Anfang des #general Kanals.</p>
        </div>

        {/* Message 1 */}
        <div className="flex group mt-4 hover:bg-[#2B2D31] -mx-4 px-4 py-0.5 transition-colors">
          <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center shrink-0 mt-0.5 cursor-pointer">
            <img src="https://github.com/shadcn.png" alt="User" className="w-full h-full rounded-full" />
          </div>
          <div className="ml-4">
            <div className="flex items-baseline">
              <span className="font-medium text-white hover:underline cursor-pointer">Jules</span>
              <span className="text-xs text-gray-400 ml-2">heute um 14:30 Uhr</span>
            </div>
            <div className="text-gray-300">
              Hallo zusammen! Willkommen in unserem neuen Discord Clone.
            </div>
          </div>
        </div>

        {/* Message 2 */}
        <div className="flex group mt-4 hover:bg-[#2B2D31] -mx-4 px-4 py-0.5 transition-colors">
          <div className="w-10 h-10 rounded-full bg-green-500 flex items-center justify-center shrink-0 mt-0.5 cursor-pointer">
             <span className="text-white font-bold">U2</span>
          </div>
          <div className="ml-4">
            <div className="flex items-baseline">
              <span className="font-medium text-white hover:underline cursor-pointer">User2</span>
              <span className="text-xs text-gray-400 ml-2">heute um 14:35 Uhr</span>
            </div>
            <div className="text-gray-300">
              Sieht echt super aus! Die Farben sind perfekt getroffen.
            </div>
          </div>
        </div>

        {/* Message 3 */}
        <div className="flex group mt-4 hover:bg-[#2B2D31] -mx-4 px-4 py-0.5 transition-colors">
          <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center shrink-0 mt-0.5 cursor-pointer">
            <img src="https://github.com/shadcn.png" alt="User" className="w-full h-full rounded-full" />
          </div>
          <div className="ml-4">
            <div className="flex items-baseline">
              <span className="font-medium text-white hover:underline cursor-pointer">Jules</span>
              <span className="text-xs text-gray-400 ml-2">heute um 14:36 Uhr</span>
            </div>
            <div className="text-gray-300">
              Danke! Ich habe Tailwind CSS verwendet, um das Styling einfach zu halten.
            </div>
          </div>
        </div>
      </div>

      {/* Message Input Area */}
      <div className="px-4 pb-6 pt-2 shrink-0">
        <div className="bg-[#383A40] rounded-lg flex items-center px-4 py-2.5">
          <button className="w-6 h-6 flex items-center justify-center rounded-full bg-[#B5BAC1] text-[#383A40] hover:bg-gray-300 mr-4 shrink-0 transition-colors">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
            </svg>
          </button>
          <input
            type="text"
            placeholder="Nachricht an #general"
            className="bg-transparent flex-1 outline-none text-gray-200 placeholder-gray-500"
          />
          <div className="flex items-center space-x-3 ml-2 text-[#B5BAC1]">
            <button className="hover:text-gray-300 transition-colors">
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

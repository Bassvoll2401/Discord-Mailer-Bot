export default function ChannelSidebar() {
  return (
    <div className="w-60 bg-[#2B2D31] flex flex-col h-screen shrink-0 text-gray-300">
      {/* Server Header */}
      <div className="h-12 border-b border-[#1E1F22] flex items-center px-4 font-bold text-white shadow-sm cursor-pointer hover:bg-[#35373C] transition-colors">
        Discord Clone
      </div>

      {/* Channels List */}
      <div className="flex-1 overflow-y-auto px-2 py-3 space-y-4">
        {/* Text Channels */}
        <div>
          <div className="flex items-center px-2 mb-1 text-xs font-semibold text-gray-400 uppercase hover:text-gray-300 cursor-pointer">
            <svg className="w-3 h-3 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
            Text Channels
          </div>

          <div className="space-y-[2px]">
            <div className="flex items-center px-2 py-1.5 rounded bg-[#3F4147] text-white cursor-pointer group">
              <span className="text-gray-400 text-lg mr-1.5 italic font-light">#</span>
              <span className="truncate">general</span>
            </div>

            {['development', 'help', 'off-topic'].map(channel => (
              <div key={channel} className="flex items-center px-2 py-1.5 rounded hover:bg-[#35373C] hover:text-gray-100 cursor-pointer group transition-colors">
                <span className="text-gray-500 text-lg mr-1.5 italic font-light group-hover:text-gray-400">#</span>
                <span className="truncate">{channel}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Voice Channels */}
        <div>
          <div className="flex items-center px-2 mb-1 text-xs font-semibold text-gray-400 uppercase hover:text-gray-300 cursor-pointer mt-4">
            <svg className="w-3 h-3 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
            Voice Channels
          </div>

          <div className="space-y-[2px]">
            {['Lobby', 'Gaming', 'AFK'].map(channel => (
              <div key={channel} className="flex items-center px-2 py-1.5 rounded hover:bg-[#35373C] hover:text-gray-100 cursor-pointer group transition-colors">
                <svg className="w-4 h-4 mr-1.5 text-gray-500 group-hover:text-gray-400" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M13.5 11c0-1.93-1.57-3.5-3.5-3.5S6.5 9.07 6.5 11v3c0 1.93 1.57 3.5 3.5 3.5s3.5-1.57 3.5-3.5v-3zM10 20c3.87 0 7-3.13 7-7v-3c0-3.87-3.13-7-7-7s-7 3.13-7 7v3c0 3.87 3.13 7 7 7zm6-7c0 3.31-2.69 6-6 6s-6-2.69-6-6h2c0 2.21 1.79 4 4 4s4-1.79 4-4h2z" />
                </svg>
                <span className="truncate">{channel}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* User Area */}
      <div className="h-[52px] bg-[#232428] px-2 flex items-center shrink-0">
        <div className="flex-1 flex items-center px-1 py-1 rounded hover:bg-[#35373C] cursor-pointer transition-colors -ml-1">
          <div className="w-8 h-8 rounded-full bg-[#5865F2] flex items-center justify-center text-white shrink-0 relative">
            <img src="https://github.com/shadcn.png" alt="Avatar" className="w-full h-full rounded-full" />
            <div className="absolute bottom-0 right-0 w-3 h-3 rounded-full bg-[#23A559] border-[2px] border-[#232428]"></div>
          </div>
          <div className="ml-2 min-w-0">
            <div className="text-sm font-semibold text-white truncate leading-tight">Jules</div>
            <div className="text-xs text-gray-400 truncate leading-tight">Online</div>
          </div>
        </div>

        {/* User Controls */}
        <div className="flex items-center text-gray-400">
          <button className="w-8 h-8 flex items-center justify-center rounded hover:bg-[#35373C] hover:text-gray-200">
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
            </svg>
          </button>
          <button className="w-8 h-8 flex items-center justify-center rounded hover:bg-[#35373C] hover:text-gray-200">
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
            </svg>
          </button>
          <button className="w-8 h-8 flex items-center justify-center rounded hover:bg-[#35373C] hover:text-gray-200">
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}

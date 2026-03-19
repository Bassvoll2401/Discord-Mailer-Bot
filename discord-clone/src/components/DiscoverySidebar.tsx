export default function DiscoverySidebar() {
  const categories = [
    { name: "Startseite", icon: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6", active: true },
    { name: "Gaming", icon: "M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z M21 12a9 9 0 11-18 0 9 9 0 0118 0z", active: false },
    { name: "Musik", icon: "M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3", active: false },
    { name: "Bildung", icon: "M12 14l9-5-9-5-9 5 9 5z M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z M12 14v7", active: false },
    { name: "Wissenschaft & Technik", icon: "M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z", active: false },
    { name: "Bots", icon: "M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z", active: false },
  ];

  return (
    <div className="w-64 bg-[#2B2D31] flex flex-col h-screen shrink-0 text-gray-300 border-r border-[#1E1F22]/40 shadow-sm z-40">
      <div className="h-24 px-4 flex items-end pb-4 font-bold text-[22px] text-white tracking-wide">
        Entdecken
      </div>

      <div className="flex-1 overflow-y-auto px-3 py-2 space-y-1 custom-scrollbar">
        {categories.map((cat, idx) => (
          <div
            key={idx}
            className={`flex items-center px-3 py-2.5 rounded-lg cursor-pointer transition-all duration-200 group ${cat.active ? 'bg-[#404249] text-white font-semibold' : 'hover:bg-[#35373C] hover:text-gray-100 font-medium text-gray-400'}`}
          >
            <svg className={`w-[22px] h-[22px] mr-3 ${cat.active ? 'text-white' : 'text-gray-400 group-hover:text-gray-200'} transition-colors duration-200`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d={cat.icon} />
            </svg>
            <span className="truncate">{cat.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

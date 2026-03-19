export default function DiscoveryMain() {
  const featuredServers = [
    { name: "Offizieller Valorant Server", members: "1.2M", desc: "Der beste Ort für Valorant News, Mitspielersuche und mehr!", banner: "bg-red-900/40", icon: "V", tags: ["Gaming", "E-Sports"] },
    { name: "Next.js Community", members: "345K", desc: "Hilfe, Showcases und Diskussionen rund um Next.js und React.", banner: "bg-blue-900/40", icon: "N", tags: ["Development", "React"] },
    { name: "LoFi Girl", members: "890K", desc: "24/7 LoFi Hip Hop Musik zum Entspannen und Lernen.", banner: "bg-emerald-900/40", icon: "L", tags: ["Music", "Chill"] },
    { name: "Midjourney", members: "15.4M", desc: "Der offizielle Server für Midjourney AI Art Generation.", banner: "bg-purple-900/40", icon: "M", tags: ["AI", "Art"] },
  ];

  const topBots = [
    { name: "Mee6", servers: "20M+", desc: "Der beliebteste Moderations- und Leveling-Bot für deinen Server.", avatar: "bg-blue-500", rating: "4.8" },
    { name: "Dank Memer", servers: "9M+", desc: "Wirtschafts-Bot mit Memes und Minigames.", avatar: "bg-yellow-500", rating: "4.7" },
    { name: "ProBot", servers: "8M+", desc: "All-in-One Bot mit Welcome Images, Moderation und Logs.", avatar: "bg-cyan-500", rating: "4.9" },
  ];

  return (
    <div className="flex-1 bg-[#313338] h-screen overflow-y-auto custom-scrollbar relative z-10 text-gray-200">

      {/* Hero Header with Search */}
      <div className="h-[320px] bg-gradient-to-br from-[#1d1f21] via-[#2B2D31] to-[#1E1F22] relative flex flex-col items-center justify-center px-6 overflow-hidden border-b border-[#1E1F22]/40">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5 mix-blend-overlay"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#313338] via-transparent to-transparent opacity-90 z-0"></div>

        <div className="relative z-10 text-center max-w-2xl w-full">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4 tracking-tight drop-shadow-md">
            Finde deine Community
          </h1>
          <p className="text-lg text-gray-300 font-medium mb-8 max-w-xl mx-auto leading-relaxed text-shadow-sm">
            Von Gaming über Musik bis zu Bildung – entdecke tausende Server und die besten Bots für dich.
          </p>

          <div className="w-full relative shadow-2xl group transition-all duration-300 transform hover:-translate-y-1">
            <input
              type="text"
              placeholder="Entdecke Communities und Bots..."
              className="w-full h-16 pl-6 pr-14 rounded-xl bg-white text-gray-900 placeholder-gray-500 font-semibold text-lg outline-none focus:ring-[4px] focus:ring-[#5865F2]/50 transition-all shadow-inner"
            />
            <button className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-900 p-2 rounded-lg transition-colors">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-[1200px] mx-auto px-6 py-10 space-y-12 pb-24">

        {/* Featured Servers Section */}
        <section>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-white tracking-wide">Empfohlene Server</h2>
            <button className="text-[#00A8FC] hover:underline font-semibold text-sm">Mehr anzeigen</button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredServers.map((server, idx) => (
              <div key={idx} className="bg-[#2B2D31] rounded-2xl overflow-hidden hover:bg-[#35373C] transition-all duration-300 cursor-pointer shadow-md hover:shadow-xl hover:-translate-y-1 group border border-[#1E1F22]/60">
                <div className={`h-24 ${server.banner} relative transition-colors duration-300`}></div>

                <div className="px-4 pb-5 pt-1 relative">
                  <div className="w-14 h-14 bg-[#1E1F22] rounded-2xl absolute -top-8 border-[4px] border-[#2B2D31] group-hover:border-[#35373C] transition-colors flex items-center justify-center text-white font-bold text-xl shadow-sm">
                    {server.icon}
                  </div>

                  <h3 className="text-white font-bold text-lg mt-7 mb-1 group-hover:text-[#00A8FC] transition-colors line-clamp-1">{server.name}</h3>
                  <p className="text-[13px] text-gray-400 font-medium mb-3 h-10 line-clamp-2 leading-tight">
                    {server.desc}
                  </p>

                  <div className="flex items-center text-[11px] font-bold text-gray-400 mb-4">
                    <span className="w-2 h-2 rounded-full bg-green-500 mr-2 shadow-[0_0_6px_rgba(34,197,94,0.6)]"></span>
                    {server.members} Mitglieder
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {server.tags.map(tag => (
                      <span key={tag} className="px-2.5 py-1 rounded-full bg-[#1E1F22] text-gray-300 text-[10px] font-bold uppercase tracking-wider">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Top Bots Section */}
        <section>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-white tracking-wide">Top Bots für deinen Server</h2>
            <button className="text-[#00A8FC] hover:underline font-semibold text-sm">Entdecke mehr</button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {topBots.map((bot, idx) => (
               <div key={idx} className="bg-[#2B2D31] rounded-2xl p-5 hover:bg-[#35373C] transition-all duration-300 cursor-pointer shadow-md hover:shadow-xl hover:-translate-y-1 group border border-[#1E1F22]/60 flex flex-col">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center">
                      <div className={`w-14 h-14 rounded-2xl ${bot.avatar} shadow-md flex items-center justify-center text-white font-bold text-2xl`}>
                        {bot.name.charAt(0)}
                      </div>
                      <div className="ml-4">
                        <h3 className="text-white font-bold text-lg group-hover:text-[#5865F2] transition-colors">{bot.name}</h3>
                        <div className="flex items-center text-[12px] font-semibold text-gray-400">
                           <span className="bg-[#5865F2]/20 text-[#5865F2] px-1.5 py-0.5 rounded text-[10px] mr-2">BOT</span>
                           {bot.servers} Server
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center bg-[#1E1F22] px-2 py-1 rounded-md">
                      <svg className="w-3.5 h-3.5 text-yellow-500 mr-1" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                      <span className="text-[12px] font-bold text-white">{bot.rating}</span>
                    </div>
                  </div>
                  <p className="text-[14px] text-gray-300 font-medium leading-relaxed mb-6 flex-1">
                    {bot.desc}
                  </p>
                  <button className="w-full py-2.5 rounded-lg bg-[#5865F2] hover:bg-[#4752C4] text-white font-bold transition-colors shadow-sm text-sm">
                    Hinzufügen
                  </button>
               </div>
            ))}
          </div>
        </section>

      </div>
    </div>
  );
}

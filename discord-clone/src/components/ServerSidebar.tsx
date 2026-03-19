export default function ServerSidebar() {
  return (
    <div className="w-[72px] bg-[#1E1F22] flex flex-col items-center py-3 space-y-2 shrink-0 h-screen">
      <div className="w-12 h-12 bg-[#313338] rounded-[24px] hover:rounded-[16px] transition-all duration-200 flex items-center justify-center cursor-pointer text-white hover:bg-[#5865F2]">
        <span className="font-bold text-lg">H</span>
      </div>
      <div className="w-8 h-[2px] bg-[#313338] rounded-full mx-auto my-2"></div>

      {/* Mock Servers */}
      {[...Array(5)].map((_, i) => (
        <div key={i} className="w-12 h-12 bg-[#313338] rounded-[24px] hover:rounded-[16px] transition-all duration-200 flex items-center justify-center cursor-pointer text-gray-300 hover:bg-[#5865F2] hover:text-white">
          S{i + 1}
        </div>
      ))}

      <div className="w-12 h-12 bg-[#313338] rounded-[24px] hover:rounded-[16px] transition-all duration-200 flex items-center justify-center cursor-pointer text-[#23A559] hover:bg-[#23A559] hover:text-white mt-auto">
        +
      </div>
    </div>
  );
}

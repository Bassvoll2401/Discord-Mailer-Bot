import ServerSidebar from "@/components/ServerSidebar";
import ChannelSidebar from "@/components/ChannelSidebar";
import Chat from "@/components/Chat";

export default function Home() {
  return (
    <main className="flex h-screen w-full overflow-hidden bg-[#313338]">
      <ServerSidebar />
      <ChannelSidebar />
      <Chat />
    </main>
  );
}

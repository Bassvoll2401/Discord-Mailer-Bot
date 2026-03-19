import ChannelSidebar from "@/components/ChannelSidebar";
import VoiceRoom from "@/components/VoiceRoom";

export default function VoicePage() {
  return (
    <main className="flex h-screen w-full overflow-hidden bg-[#313338]">
      <ChannelSidebar />
      <VoiceRoom />
    </main>
  );
}

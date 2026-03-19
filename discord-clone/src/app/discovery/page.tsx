import DiscoverySidebar from "@/components/DiscoverySidebar";
import DiscoveryMain from "@/components/DiscoveryMain";

export default function DiscoveryPage() {
  return (
    <main className="flex h-screen w-full overflow-hidden bg-[#313338]">
      <DiscoverySidebar />
      <DiscoveryMain />
    </main>
  );
}

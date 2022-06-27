import { Header } from "src/components/Header";
import { Sidebar } from "src/components/Sidebar";
import { Video } from "src/components/Video";
import { SidebarContextProvider } from "src/contexts/SidebarContext";

export const Event: React.FC = () => (
  <div className="flex min-h-screen flex-col">
    <SidebarContextProvider>
      <Header />

      <main className="flex w-full lg:overflow-y-auto lg:pr-[348px]">
        <section className="flex-1">
          <Video />
        </section>

        <Sidebar />
      </main>
    </SidebarContextProvider>
  </div>
);

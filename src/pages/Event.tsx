import { Header } from "src/components/Header";
import { Sidebar } from "src/components/Sidebar";
import { Video } from "src/components/Video";

export const Event: React.FC = () => (
  <div className="flex min-h-screen flex-col">
    <Header />
    <main className="flex flex-1">
      <div className="flex-1">
        <Video />
      </div>
      <Sidebar />
    </main>
  </div>
);

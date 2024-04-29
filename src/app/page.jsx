import { Home as HomeIcon, Search, Library } from "lucide-react";

export default function Home() {
  return (
    <div className="h-screen flex flex-col">
      <div className="flex flex-1">
        <aside className="w-72 bg-zinc-950 p-6">
          <nav className="space-y-4">
            <a href="./Home" className="flex items-center gap-2">
              <HomeIcon />
              Home
            </a>
            <a href="" className="flex items-center gap-2">
              <Search />
              Search
            </a>
            <a href="" className="flex items-center gap-2">
              <Library />
              Your Library
            </a>
          </nav>

          <div className="mt-10 pt-10 border-t border-zinc-700 flex  gap-2">
            <a
              href="/#"
              className="text-sm text-zinc-100 hover:text-base transition-all font-bold bg-zinc-700/40 p-2 rounded-full"
            >
              Crie sua primeira playlist
            </a>
          </div>
        </aside>
        <main className="flex-1 p-6">
          <div>
            <a
              href="#"
              className="absolute bg-white rounded-full text-zinc-900 p-3 pl-6 pr-6 font-bold top-4 right-4 hover:text-lg transition-all"
            >
              Entrar
            </a>
          </div>
          <h1 className="font-semibold text-3xl mt-10">Last Playlists</h1>

          <div className="grid grid-cols-3 gap-4 mt-4">
            <a
              href="#"
              className="bg-white/10 rounded flex items-center gap-4 overflow-hidden hover:bg-white/20 transition-colors"
            >
              <img src="/505.jpg" width={96} height={96} alt="" />
              <strong>Nome da playlist</strong>
            </a>
            <a
              href="#"
              className="bg-white/10 rounded flex items-center gap-4 overflow-hidden hover:bg-white/20 transition-colors"
            >
              <img src="/505.jpg" width={96} height={96} alt="" />
              <strong>Nome da playlist</strong>
            </a>
            <a
              href="#"
              className="bg-white/10 rounded flex items-center gap-4 overflow-hidden hover:bg-white/20 transition-colors"
            >
              <img src="/505.jpg" width={96} height={96} alt="" />
              <strong>Nome da playlist</strong>
            </a>
            <a
              href="#"
              className="bg-white/10 rounded flex items-center gap-4 overflow-hidden hover:bg-white/20 transition-colors"
            >
              <img src="/505.jpg" width={96} height={96} alt="" />
              <strong>Nome da playlist</strong>
            </a>
            <a
              href="#"
              className="bg-white/10 rounded flex items-center gap-4 overflow-hidden hover:bg-white/20 transition-colors"
            >
              <img src="/505.jpg" width={96} height={96} alt="" />
              <strong>Nome da playlist</strong>
            </a>
            <a
              href="#"
              className="bg-white/10 rounded flex items-center gap-4 overflow-hidden hover:bg-white/20 transition-colors"
            >
              <img src="/505.jpg" width={96} height={104} alt="" />
              <strong>Nome da playlist</strong>
            </a>
          </div>
        </main>
      </div>
      <footer className="bg-zinc-800 border-t border-zinc-700 p-6"></footer>
    </div>
  );
}

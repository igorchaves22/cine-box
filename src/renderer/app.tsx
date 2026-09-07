import { MediaList } from "./components";

export default function App() {
    return (
        <div className="w-full h-auto min-h-dvh p-4 flex flex-col bg-zinc-50">
            <main className="w-full h-auto flex flex-col grow gap-y-10">
                <h1 className="w-full h-min text-slate-900 font-black text-3xl font-mono">CineBox</h1>
                <MediaList />
            </main>
        </div>
    );
}

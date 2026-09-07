import { useCallback, useEffect, useState } from "react";

type List = {
    id: string;
    title: string;
}[];

const LOADING_INITIAL_VALUE = true;
const FALLBACK_MESSAGES = {
    loading: "Loading...",
    empty: "No media found."
} as const;

export const MediaList = () => {
    const [list, setList] = useState<List>([]);
    const [isLoading, setIsLoading] = useState(LOADING_INITIAL_VALUE);

    const listCount = list.length;
    const hasItems = listCount > 0;

    const fetchMedia = useCallback(() => {
        setIsLoading(LOADING_INITIAL_VALUE);

        window.api.media.findAll().then((result) => {
            setList(result);
            setIsLoading(false);
        });
    }, []);

    useEffect(() => {
        fetchMedia();
    }, [fetchMedia]);

    return (
        <section className="w-full h-auto flex flex-col grow gap-y-4">
            <p className="w-full h-min text-zinc-500 font-normal text-sm font-mono">N° {list.length}</p>
            {isLoading || !hasItems ?
                <p className="w-full h-min text-zinc-500 font-normal text-xs font-mono">
                    {FALLBACK_MESSAGES[isLoading ? "loading" : "empty"]}
                </p>
            :   <ul className="w-full h-auto flex flex-wrap grow gap-4 content-start">
                    {list.map((item) => (
                        <li
                            key={item.id}
                            className="w-fit h-auto border border-zinc-200 rounded py-2 px-5 bg-white"
                        >
                            <p className="w-full h-min text-zinc-900 font-normal text-sm font-mono text-center">
                                {item.title}
                            </p>
                        </li>
                    ))}
                </ul>
            }
        </section>
    );
};

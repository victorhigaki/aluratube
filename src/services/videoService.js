import { createClient } from "@supabase/supabase-js";

function getThumbnail(url) {
    return `https://img.youtube.com/vi/${url.split("v=")[1]}/hqdefault.jpg`;
}

const supabase = createClient(process.env.NEXT_PUBLIC_PROJECT_URL, process.env.NEXT_PUBLIC_PUBLIC_KEY);

export function videoService() {
    return {
        getAllVideos() {
            return supabase.from("video")
                .select("*")

        },
        insert(formCadastro) {
            supabase.from("video").insert({
                title: formCadastro.values.titulo,
                url: formCadastro.values.url,
                thumb: getThumbnail(formCadastro.values.url),
                playlist: "jogos",
             })
             .then((oqueveio) => {
                console.log(oqueveio);
             })
             .catch((err) => {
                console.log(err);
             })
        }
    }
}

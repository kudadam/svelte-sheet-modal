import ghpages from "gh-pages";

ghpages.publish(
    "public",
    {
        branch: "site",
        repo: "https://github.com/kudadam/svelte-sheet-modal",
        user: {
            name: "Lucretius Biah",
            email: "lucretiusbiah@protonmail.com"
        }
    },
    (e)=>{
        console.log(e)
    }
)
import ghpages from "gh-pages";

ghpages.clean();
ghpages.publish(
    "public",
    {
        branch: "site",
        repo: "https://github.com/kudadam/svelte-sheet-modal",
        user: {
            name: "Lucretius Biah",
            email: "lucretiusbiah@protonmail.com"
        },
        dotfiles: true
    },
    (e)=>{
        console.log(e)
    }
)
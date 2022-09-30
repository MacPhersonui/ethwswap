
export default function (router, handle) {
    /** api **/
    router.get("/api/get_free_gas/:account", require("../container/swap.js").getFreeGas)
    
    // Default catch-all handler to allow Next.js to handle all other routes
    router.all("*", (req, res) => handle(req, res))
}
function beforeUnloadHandler(event) {
    return (event.returnValue = "Are you sure you want to leave?");
}

onOptionsChanged(function() {
    if (opts.page_unload_prompt) {
        addEventListener("beforeunload", beforeUnloadHandler);
    } else {
        removeEventListener("beforeunload", beforeUnloadHandler);
    }
});
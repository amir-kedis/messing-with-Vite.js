export function setupDestroyer(elements) {
    elements.forEach(element => {
        element.addEventListener("click", (e) => {
            e.target.remove()
        })
    });
}

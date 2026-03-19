function updateClock() {
    const now = new Date()
    const hours = now.getHours()
    const minutes = ahora.getMinutes().toString().padStart(2, "0") // "if text's chars < 2, put a 0 in front"

    document.querySelector(".clock").textContent = `${hours}:${minutes}`
}
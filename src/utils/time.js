export function convertTime(time, duration = 3600) {
    const hours = Math.trunc(time / 3600);
    const minutes = Math.trunc((time % 3600) / 60);
    const seconds = time % 60;

    if (duration >= 3600) {
        return `${String(hours).padStart(2, "0")}:${String(minutes).padStart(
            2,
            "0"
        )}:${String(seconds).padStart(2, "0")}`;
    }
    return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(
        2,
        "0"
    )}`;
}

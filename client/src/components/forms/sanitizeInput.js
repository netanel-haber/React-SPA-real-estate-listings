export default function sanitizer(data) {
    return Object.fromEntries(Object.entries(data).filter(([key, value]) => value !== "").map(([key, value]) => ([key, value.trim()])));
}
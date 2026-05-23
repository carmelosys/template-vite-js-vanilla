export function readVars() {
  console.log("VITE_SECRET", import.meta.env?.VITE_SECRET);
  console.log("VITE_VARIABLE", import.meta.env?.VITE_VARIABLE);
}

export function readVars() {
  console.log("VITE_VARIABLE", import.meta.env?.VITE_VARIABLE);
  console.log("SECRET_TEMPLATE", import.meta.env?.SECRET_TEMPLATE);
}

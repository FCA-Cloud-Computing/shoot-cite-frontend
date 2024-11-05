export const capitalizePath = (): string => {
  const path = window.location.pathname.split("/").at(-1);
  return path ? path.charAt(0).toUpperCase() + path.slice(1) : '';
}
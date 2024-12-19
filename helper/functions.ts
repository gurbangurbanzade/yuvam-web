export function createCustomId() {
  const date = new Date();
  return date.setSeconds(0);
}

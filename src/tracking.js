// Layer 4 (EXPERIMENTAL - to be discarded): usage "tracking".

export function track(event) {
  console.error(`[track] ${event} at ${new Date().toISOString()}`);
}

import window from 'global/window';

export const WINDOW_RESIZE = 'WINDOW_RESIZE';

export function resize(size) {
  return {
    type: WINDOW_RESIZE,
    size
  }
}
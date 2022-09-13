import useEvent from './useEvent';

// rename handle on handler
// focus active editor group setting (alt + j)
function useClickAway(ref, handler, shouldHandle = true) {
  useEvent('mousedown', handleMousedown);

  function handleMousedown(event) {
    shouldHandle =
      shouldHandle instanceof Function ? shouldHandle(event) : shouldHandle;

    if (shouldHandle && !ref.current.contains(event.target)) handler();
  }
}

export default useClickAway;

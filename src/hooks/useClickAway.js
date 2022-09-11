import useEvent from './useEvent';

function useClickAway(ref, handler, shouldHandle = () => true) {
  useEvent('mousedown', handleMousedown);

  function handleMousedown(event) {
    if (shouldHandle(event) && !ref.current.contains(event.target)) handler();
  }
}

export default useClickAway;

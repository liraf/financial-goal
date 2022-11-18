import { useCallback, useEffect, useLayoutEffect, useRef } from 'react';

interface UseKeyboardShortcutProps {
  
}

const useKeyboardShortcut = (keyCodes: string[], callback: (event: KeyboardEvent) => void, node = null) => {
  const callbackRef = useRef(callback)
  useLayoutEffect(() => {
    callbackRef.current = callback
  });

  const handleKeyPress = useCallback(
    (event: KeyboardEvent) => {
      if (keyCodes.some((keyCode: string) => event.code === keyCode)) {
        callbackRef.current(event)
      }
    },
    [keyCodes]
  )

  useEffect(() => {
    const targetNode = node ?? document
    if(targetNode) targetNode.addEventListener("keydown", handleKeyPress)

    return () => {
      if(targetNode) targetNode.removeEventListener("keydown", handleKeyPress)
    }
  }, [handleKeyPress, node])
}

export default useKeyboardShortcut

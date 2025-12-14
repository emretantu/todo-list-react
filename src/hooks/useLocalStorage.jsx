import { useCallback, useEffect, useState } from "react"

export const useLocalStorage = (key, initialValue) => {
  
  const [storedValue, setStoredValue] = useState(() => {
    try {
      if (typeof window === "undefined") {
        return initialValue;
      }
      const item = localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue
    } catch (error) {
      console.log(error);
      return initialValue;
    }
  });

  const setValue = useCallback((value) => {
    setStoredValue(prevStoredValue => {
      const valueToStore = value instanceof Function ? value(prevStoredValue) : value;
      try {
        if (typeof window !== "undefined") {
          localStorage.setItem(key, JSON.stringify(valueToStore));
        }
      } catch (error) {
        console.log(error);
      }
      return valueToStore;
    })
    
  }, [key, setStoredValue]);

  useEffect(() => {
    const handleStorageChange = (e) => {
      if (e.key === key && e.newValue) {
        setStoredValue(JSON.parse(e.newValue));
      }
    }

    window.addEventListener("storage", handleStorageChange);

    return () => {
      window.removeEventListener("storage", handleStorageChange);
    }
  }, [key]);

  return [storedValue, setValue];

}
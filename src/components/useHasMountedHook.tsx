import { useEffect, useState } from "react";

/**
 * サーバー側で実行した場合はFalse
 * 動的コンテンツをSSGしないため用
 * https://joshwcomeau.com/react/the-perils-of-rehydration/
 */
const useHasMounted = (): boolean => {
   const [hasMounted, setHasMounted] = useState(false);
   useEffect(() => {
      setHasMounted(true);
   }, []);
   return hasMounted;
};
export default useHasMounted;

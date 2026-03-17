import { useEffect } from "react";

export default function useInfiniteScroll(callback, isFetching, hasMore = true) {
  useEffect(() => {
    function handleScroll() {
      // Chặn gọi API nếu đang tải hoặc đã hết dữ liệu
      if (isFetching || !hasMore) return;

      if (
        window.innerHeight + document.documentElement.scrollTop + 200 >=
        document.documentElement.offsetHeight
      ) {
        callback();
      }
    }

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [callback, isFetching, hasMore]);
}
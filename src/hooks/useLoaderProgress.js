import { useEffect, useState } from "react";

export const useLoaderProgress = (duration = 2500) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let start;

    const animate = (time) => {
      if (!start) start = time;

      const elapsed = time - start;
      const percent = Math.min((elapsed / duration) * 100, 100);

      setProgress(Math.floor(percent));

      if (percent < 100) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [duration]);

  return progress;
};
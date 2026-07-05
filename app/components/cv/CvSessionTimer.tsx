"use client";

import { useEffect, useState } from "react";

type CvSessionTimerProps = {
  expiresAt: number;
};

function formatRemainingTime(totalSeconds: number) {
  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  return [hours, minutes, seconds]
    .map((value) => value.toString().padStart(2, "0"))
    .join(":");
}

export default function CvSessionTimer({ expiresAt }: CvSessionTimerProps) {
  const [remainingSeconds, setRemainingSeconds] = useState<number | null>(null);

  useEffect(() => {
    function updateRemainingTime() {
      const nextRemaining = Math.max(
        0,
        expiresAt - Math.floor(Date.now() / 1000)
      );

      setRemainingSeconds(nextRemaining);

      if (nextRemaining === 0) {
        window.location.replace("/cv?error=invalid");
      }
    }

    updateRemainingTime();
    const interval = window.setInterval(updateRemainingTime, 1000);

    return () => window.clearInterval(interval);
  }, [expiresAt]);

  return (
    <div className="shrink-0 border-l-2 border-accent3 pl-3 text-right">
      <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-muted">
        Access remaining
      </p>
      <time
        className="mt-0.5 block min-w-[8ch] font-display text-sm tabular-nums text-ink"
        dateTime={
          remainingSeconds === null ? undefined : `PT${remainingSeconds}S`
        }
        role="timer"
      >
        {remainingSeconds === null
          ? "--:--:--"
          : formatRemainingTime(remainingSeconds)}
      </time>
    </div>
  );
}

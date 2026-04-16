const START_DATE = "2026-04-14";
const TOTAL_DAYS = 90;

function daysSinceStart(): number {
  const start = new Date(START_DATE + "T00:00:00");
  const now = new Date();
  const diff = Math.floor(
    (now.getTime() - start.getTime()) / (1000 * 60 * 60 * 24)
  );
  // day 1 = день старта, не 0
  return Math.min(Math.max(diff + 1, 1), TOTAL_DAYS);
}

export const JOURNEY = {
  startDate: START_DATE,
  currentDay: daysSinceStart(),
  totalDays: TOTAL_DAYS,
} as const satisfies { startDate: string; currentDay: number; totalDays: number };

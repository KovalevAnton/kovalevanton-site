// Manually incremented after each shipped "day NN/90" post.
// Calendar-based counting lies when life happens (illness, travel, etc.) —
// this number reflects shipped days, not elapsed days. Bump after each post.
const CURRENT_DAY = 16;
const TOTAL_DAYS = 90;
const START_DATE = "2026-04-14";

export const JOURNEY = {
  startDate: START_DATE,
  currentDay: CURRENT_DAY,
  totalDays: TOTAL_DAYS,
} as const satisfies {
  startDate: string;
  currentDay: number;
  totalDays: number;
};

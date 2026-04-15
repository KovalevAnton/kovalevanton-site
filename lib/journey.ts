// Single source of truth for the 90-day counter.
// Bump this manually once a day, or wire to a date calc later.
export const JOURNEY = {
  startDate: "2026-04-14",
  currentDay: 2,
  totalDays: 90,
} as const;

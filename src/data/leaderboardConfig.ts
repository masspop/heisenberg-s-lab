/** Paste Supabase project values here (anon key is public by design). */
export const LEADERBOARD_CONFIG = {
  url: "https://lulpnxhfohelzxhypkom.supabase.co",
  anonKey: "sb_publishable_u0RtIjXPCkVJeHJbs_6oNg_S1K54x-7",
};
export function isLeaderboardConfigured(): boolean {
  return Boolean(LEADERBOARD_CONFIG.url.trim() && LEADERBOARD_CONFIG.anonKey.trim());
}

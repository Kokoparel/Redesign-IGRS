import { useState, useEffect, useMemo } from "react";

const IGRS_RULES = [
  { limit: 9.5, label: "SU", color: "#34c759" },
  { limit: 9.0, label: "18+", color: "#ff3b30" },
  { limit: 8.5, label: "13+", color: "#ff9500" },
];

export const getIgrs = (rating) => {
  const rule = IGRS_RULES.find((r) => rating >= r.limit);
  return rule ? { label: rule.label, color: rule.color } : { label: "7+", color: "#ffcc00" };
};

export const useGames = () => {
  const [games, setGames] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [yearFilter, setYearFilter] = useState("all");
  const [sortFilter, setSortFilter] = useState("name-asc");

  useEffect(() => {
    const loadGames = async () => {
      const base = import.meta.env.VITE_API_BASE_URL || "";
      try {
        const res = await fetch(`${base}/game`);
        if (!res.ok) throw new Error("API unavailable");
        const json = await res.json();
        setGames(json.payload.data);
      } catch {
        console.warn("Backend tidak tersedia, pakai dummy.json");
        const res = await fetch("/dummy.json");
        const json = await res.json();
        setGames(json.payload.data);
      }
    };
    loadGames();
  }, []);

  const years = useMemo(() => {
    return [...new Set(games.map((g) => g.year))].sort((a, b) => b - a);
  }, [games]);

  const filteredGames = useMemo(() => {
    const query = searchQuery.toLowerCase().trim();
    const year = yearFilter;

    let filtered = games.filter((g) => {
      const matchSearch = g.name.toLowerCase().includes(query) || g.game_code.toLowerCase().includes(query);
      const matchYear = year === "all" || String(g.year) === year;
      return matchSearch && matchYear;
    });

    const [field, dir] = sortFilter.split("-");
    filtered.sort((a, b) => {
      if (field === "name") return a.name.localeCompare(b.name);
      if (field === "rating") return a.rating - b.rating;
      if (field === "year") return a.year - b.year;
      return 0;
    });
    if (dir === "desc") filtered.reverse();

    return filtered;
  }, [games, searchQuery, yearFilter, sortFilter]);

  return {
    games,
    searchQuery,
    setSearchQuery,
    yearFilter,
    setYearFilter,
    sortFilter,
    setSortFilter,
    years,
    filteredGames,
  };
};

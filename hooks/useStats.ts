import { useQueries, useQuery } from "@tanstack/react-query";
import axios from "axios";

import { experience, initialStats, skills } from "@/lib/data";

type StatsProps = {
  num: number;
  text: string;
};

type Repository = {
  fork: boolean;
  name: string;
};

type Contributor = {
  login: string;
  contributions: number;
};

// function
async function fetchUserRepos(username: string): Promise<string[]> {
  const response = await axios.get(
    `https://api.github.com/users/${username}/repos?per_page=100`,
  );

  return response.data
    .filter((repo: Repository) => !repo.fork)
    .map((repo: Repository) => repo.name);
}

async function fetchTotalCommits(
  username: string,
  repo: string,
): Promise<number> {
  try {
    const response = await axios.get(
      `https://api.github.com/repos/${username}/${repo}/contributors`,
    );

    // Find your specific contribution count in that repository
    const contributor = response.data.find(
      (c: Contributor) => c.login.toLowerCase() === username.toLowerCase(),
    );

    return contributor ? contributor.contributions : 0;
  } catch {
    return 0;
  }
}

export function useStats() {
  const username = "QuintonCodes";

  const { data: repositories = [] } = useQuery({
    queryKey: ["githubRepos", username],
    queryFn: () => fetchUserRepos(username),
    staleTime: 1000 * 60 * 60, // Data is considered fresh for 1 hour
    enabled: !!username,
  });

  const commitQueries = useQueries({
    queries: repositories.map((repo) => ({
      queryKey: ["githubCommits", username, repo],
      queryFn: () => fetchTotalCommits(username, repo),
      staleTime: 1000 * 60 * 60,
      refetchInterval: 1000 * 60 * 15, // Refetch every 15 minutes
      enabled: !!username && repositories.length > 0,
      placeholderData: 0,
    })),
  });

  const totalCommits = commitQueries.reduce(
    (sum, query) => sum + (query.data || 0),
    0,
  );

  const projectCount = experience.length;
  const techCount =
    skills.frontend.length + skills.backend.length + skills.tools.length;

  const stats: StatsProps[] = initialStats.map((stat) => {
    switch (stat.text) {
      case "Projects completed":
        return { ...stat, num: projectCount };
      case "Technologies mastered":
        return { ...stat, num: techCount };
      case "Code commits":
        return { ...stat, num: totalCommits };
      default:
        return stat;
    }
  });

  return stats;
}

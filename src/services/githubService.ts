const GITHUB_API_BASE_URL = "https://api.github.com";

export const fetchTotalCommits = async (
  username: string,
  repos: string[],
  token: string
): Promise<number> => {
  let totalCommits = 0;

  for (const repo of repos) {
    let page = 1;
    let hasMorePages = true;

    while (hasMorePages) {
      const response = await fetch(
        `${GITHUB_API_BASE_URL}/repos/${username}/${repo}/commits?per_page=100&page=${page}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (!response.ok) {
        console.error(
          `Failed to fetch commits for ${repo}: HTTP ${response.status} - ${
            response.statusText || "Unknown error"
          }`
        );
        break;
      }

      const commitsOnPage = await response.json();
      if (Array.isArray(commitsOnPage)) {
        totalCommits += commitsOnPage.length;
        hasMorePages = commitsOnPage.length === 100;
        page++;
      } else {
        hasMorePages = false;
      }
    }
  }

  return totalCommits;
};

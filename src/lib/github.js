const token = process.env.NEXT_PUBLIC_GITHUB_ACCESS_TOKEN;

const getRepoStarsAndForks = async (owner, repo) => {
  const endpoint = `https://api.github.com/repos/${owner}/${repo}`;
  const headers = {
    Authorization: `Token ${token}`,
  };

  try {
    const response = await fetch(endpoint, { headers });
    const data = await response.json();
    return {
      stars: data.stargazers_count,
      forks: data.forks_count,
    };
  } catch (error) {
    console.error(error);
    return {
      stars: 0,
      forks: 0,
    };
  }
};

export const starRepo = async (owner, repo) => {
  const endpoint = `https://api.github.com/user/starred/${owner}/${repo}`;
  const headers = {
    Authorization: `Token ${token}`,
  };

  try {
    const response = await fetch(endpoint, {
      method: 'PUT',
      headers,
    });

    return response;
  } catch (error) {
    console.error(error);
    return error;
  }
};

export const GithubStats = async () => {
  const repo = {
    owner: 'KevinCastle',
    name: 'kevincastles.boo',
  };

  const reposWithGithubData = await getRepoStarsAndForks(repo.owner, repo.name);

  return reposWithGithubData;
};

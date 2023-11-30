import { useEffect, useState } from 'react';
import { PiGitForkFill, PiStarFill } from 'react-icons/pi';
import { GithubStats } from '../lib/github';

export default function Github() {
  const [stats, setStats] = useState({ stars: 0, forks: 0 });

  useEffect(() => {
    const getStats = async () => {
      const data = await GithubStats();
      setStats(data);
      console.log(data);
    };

    getStats();
  }, []);

  return (
    <a
      href="https://github.com/KevinCastle/kevincastles.boo"
      target="_blank"
      rel="noopener noreferrer"
      className="flex gap-3 text-base"
    >
      <span className="flex items-center gap-1">
        <PiStarFill />
        {' '}
        {stats.stars}
      </span>
      <span className="flex items-center gap-1">
        <PiGitForkFill />
        {' '}
        {stats.forks}
      </span>
    </a>
  );
}

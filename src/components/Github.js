import { useEffect, useState } from 'react';
import { PiGitForkFill, PiStarFill } from 'react-icons/pi';
import Link from 'next/link';
import { GithubStats } from '../lib/github';

export default function Github({ className }) {
  const [stats, setStats] = useState({ stars: 0, forks: 0 });

  useEffect(() => {
    const getStats = async () => {
      const data = await GithubStats();
      setStats(data);
    };

    getStats();
  }, []);

  return (
    <Link
      href="https://github.com/KevinCastle/kevincastles.boo"
      target="_blank"
      rel="noopener noreferrer"
      className={`flex gap-3 text-base ${className}`}
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
    </Link>
  );
}

/* eslint-disable react-hooks/rules-of-hooks */
import Image from 'next/image';
import Link from 'next/link';
import { PiSpotifyLogoFill, PiCircleFill } from 'react-icons/pi';
import useSWR from 'swr';

export default function Spotify() {
  const fetcher = (url) => fetch(url).then((r) => r.json());
  const { data: nowPlaying } = useSWR('/api/spotify/currently-playing', fetcher);
  const { data: recentlyPlayed } = useSWR('/api/spotify/recently-played', fetcher);

  const song = nowPlaying && nowPlaying.isPlaying ? nowPlaying : recentlyPlayed;

  if (!song) {
    return (
      <div className="absolute z-10 top-0 left-0 w-full h-full p-5">
        <PiSpotifyLogoFill size="2rem" color="#1DB954" />
        <p>Loading...</p>
      </div>
    );
  }

  return (
    <Link href={song.url} target="_blank">
      <Image
        src={song.thumbnail}
        alt={song.album}
        fill
        className="object-cover overflow-hidden opacity-50 group-hover:opacity-70 dark:opacity-30 dark:group-hover:opacity-60  transition-opacity duration-200"
      />
      <div className="absolute z-10 top-0 left-0 w-full h-full bg-dark/30 p-5">
        <div className="w-full h-full flex flex-col xl:flex-row xl:items-center">
          <PiSpotifyLogoFill size="3rem" color="#1DB954" className="xl:mb-auto" />
          <div className="mt-4 xl:mt-0 xl:ml-8">
            <div className="flex items-center mb-2">
              <PiCircleFill color={nowPlaying && nowPlaying.isPlaying ? '#1DB954' : '#c2b3c6'} />
              <p className="text-2xl pl-2">{nowPlaying && nowPlaying.isPlaying ? 'Currently PLaying' : 'Last Played'}</p>
            </div>
            <p className="text-xl font-semibold">{song.title}</p>
            <p className="text-lg">{song.artist}</p>
          </div>
        </div>
      </div>
    </Link>
  );
}

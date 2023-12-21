/* eslint-disable react-hooks/rules-of-hooks */
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { PiSpotifyLogoFill, PiCircleFill } from 'react-icons/pi';
import { normalizeCurrentlyListening, normalizeRecentlyPlayed } from '../lib/utils/normalizeSpotify';
import { getNowPlaying, getRecentlyPlayed } from '../lib/spotify';

export default function Spotify() {
  const [nowPlaying, setNowPlaying] = useState(null);
  const [song, setSong] = useState(null);

  useEffect(() => {
    const fetchRecentlyPlayed = async () => {
      const response = await getRecentlyPlayed().catch((err) => {
        console.error('Are you connected?', err);
        return null;
      });

      if (!response || response.status === 204 || response.status > 400) {
        return { recently_played: false };
      }

      const { items = [] } = await response.json();
      return items.map(normalizeRecentlyPlayed).sort((a, b) => b.played_at - a.played_at)[0];
    };

    const fetchNowPlaying = async () => {
      const response = await getNowPlaying().catch((err) => {
        console.error('Are you connected?', err);
        return null;
      });

      if (!response || response.status === 204 || response.status > 400) {
        return { is_playing: false };
      }

      const data = await response.json();
      return normalizeCurrentlyListening(data);
    };

    const fetchData = async () => {
      const [
        nowPlayingData,
        recentlyPlayedData,
      ] = await Promise.all([
        fetchNowPlaying(),
        fetchRecentlyPlayed(),
      ]);
      setNowPlaying(nowPlayingData);
      setSong(nowPlayingData && nowPlayingData.isPlaying ? nowPlayingData : recentlyPlayedData);
    };

    fetchData();
  }, []);

  if (!song) {
    return (
      <div className="absolute z-10 top-0 left-0 w-full h-full p-5">
        <PiSpotifyLogoFill size="2rem" color="#1DB954" />
        <p>Loading...</p>
      </div>
    );
  }

  return song && song ? (
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
  ) : (
    <div className="absolute z-10 top-0 left-0 w-full h-full p-5">
      <PiSpotifyLogoFill size="2rem" color="#1DB954" />
      <p>Loading...</p>
    </div>
  );
}

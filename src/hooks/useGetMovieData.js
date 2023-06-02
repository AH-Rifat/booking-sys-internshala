import { useEffect, useState } from 'react';

const useGetMovieData = () => {
  const [moviesData, setMoviesData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://api.tvmaze.com/search/shows?q=all');
        const result = await response.json();
        setMoviesData(result);
      } catch (error) {
        console.error('Error fetching movie data:', error);
      }
    };

    fetchData();
  }, []);

  return moviesData;
};

export default useGetMovieData;

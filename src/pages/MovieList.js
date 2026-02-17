import { useEffect } from "react";
import { useState } from "react";
import { Card } from "../components";

export const MovieList = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchMovies(){
      const response = await fetch("https://api.themoviedb.org/3/movie/now_playing?api_key=f19499b5c289c6e4e99d418d2a0e077e");
      const data = await response.json();
      setMovies(data.results);
    }
    fetchMovies();
  }, [])

  return (
    <main>
      <section className="max-w-7xl mx-auto py-7">
        <div className="flex justify-start flex-wrap">       
          { movies.map((movie) => (
            <Card key={movie.id} movie={movie} />
          )) }          
        </div>
      </section>
    </main>
  )
}

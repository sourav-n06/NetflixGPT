import React from 'react'
import MoveList from './MoveList'

const MovieCart = ({title, movies}) => {

    console.log(title);
  return (
    <div className="p-2 md:p-4 lg:p-4">
        <p className="px-2 lg:p-2 text-xl font-medium text-white sm:px-6 md:px-8 md:p-4">{title}{' >'}</p>
        <div className="flex overflow-x-scroll  no-scrollbar">
         <div className="">
            <div className="flex">
                {movies!=null &&
                    movies.map((movie) => {
                        return <MoveList key={movie.id} path={movie?.poster_path}/>
                    })
                }
            </div>
            </div>
        </div>
    </div>
  )
}

export default MovieCart

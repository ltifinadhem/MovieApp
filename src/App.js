import React, {useState}from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { v4 as uuidv4 } from 'uuid';
import MovieList from './componenet/MovieList';
import Navbar from './componenet/navbar';
import MovieRating from './componenet/MovieRating';
function App() {
  const [useMovie, setMovie] = useState(
    [{
    id:uuidv4(),
     name:"The Old Guard",
    image :"https://fr.web.img4.acsta.net/pictures/20/05/26/09/44/5988886.jpg",
    rating:6,
     year:2020,
     text : "Une petite bande soudée de mercenaires immortels, dirigée par la redoutable Andy, se bat depuis des siècles pour protéger les humains",
    },
    {
      id:uuidv4(),
       name:"Deliler",
      image :"https://image.tmdb.org/t/p/w500/q0Y4m9z6CD1XriNottS6XFwtT21.jpg",
      rating:3,
       year:2018,
     text :"The true story of 7 oddly dressed fearless men of ottoman army fight against cruel Vlad.",
      },
      {
        id:uuidv4(),
         name:"Murder Mystery",
        image :"https://fr.web.img6.acsta.net/pictures/19/06/13/09/35/4216544.jpg",
        rating:5,
         year:2019,
        text :"Un policier new-yorkais honore une ancienne promesse et emmène sa femme en voyage en Europe. ",
        },
        {
          id:uuidv4(),
           name:"Atomic Blonde",
          image :"https://thomasdayeu.files.wordpress.com/2017/12/atomicb.jpg?w=656",
          rating:2,
           year:2017,
           text:"L'agent Lorraine Broughton est une des meilleures espionne du Service de renseignement de Sa Majesté ",
          },
          {
            id:uuidv4(),
             name:"La Famille Willoughby",
            image :"https://fr.web.img6.acsta.net/pictures/20/03/20/10/51/0906726.jpg",
            rating:4,
             year:2020,
            text:"Les quatre enfants Willoughby sont abandonnés par leurs parents et doivent adapter leurs valeurs morales de la vieille école au monde contemporain",
            }]);
            const add = (newMovie) => {
              setMovie([...useMovie,newMovie ]);
          };
          const [useRating,setRating]=useState(1)
          const Rating =(Rate)=> setRating(Rate);
          const [Search,setSearch]=useState("")
          const search = (mov) => {
            setSearch( mov);
          };
  return (

    <div className="App ">
      <Navbar add={(M) => add(M)}
       search={(s) => search(s)}/>
      <h1> Movie app</h1>
      <MovieRating Rating={(R)=>Rating(R)}/>
      <MovieList 
           useMovie={useMovie.filter( (e) =>
                    !e.name.toLowerCase().indexOf(Search.toLowerCase()) && e.rating >= useRating ) }
           />
           
    </div>

  );
}

export default App;

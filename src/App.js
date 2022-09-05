
import './App.css';

import React from 'react'
import { BrowserRouter } from 'react-router-dom';
import NavBar from './components/NavBar';


function App(){
  
  const data = {
    movieItems: [
      {
        id: "1",
        title: "The Muppet Movie",
        genre: "comedy",
        description: "Animirani deciji film u produkciji Disnep.",
        amount: 800,
        image: "./components/images/muppet-movie.jpeg",
      },
      {
        id: "2",
        title: "Hot Seat",
        genre: "thriller",
        description:
          "Bivši haker je primoran da se provaljuje u bankarske institucije na visokom nivou, drugi čovek mora da pokuša da produži u zgradi zarobljenu mina da bi mladić skinuo sa Vruće stolice.",
        amount: 700,
        image: "./components/images/hot seat.jpg",
      },
      {
        id: "3",
        title: "Breaking",
        genre: "thriller",
        description:
          "Ratni veteran marinaca suočava se sa mentalnim i emocionalnim izazovima kada pokušava da se ponovo integriše u civilni život.",
        amount: 1500,
        image: "./components/images/breaking.jpeg",
      },
      {
        id: "4",
        title: "The Godfather",
        genre: "crime",
        description:
          "Ostareli patrijarh dinastije organizovanog kriminala u posleratnom Njujorku prenosi kontrolu nad svojim tajnim carstvom na svog nevoljnog najmlađeg sina.",
        amount: 1200,
        image: "./components/images/the godfather.jpg",
      },
      {
        id: "5",
        title: "Everything Everywhere All at Once",
        genre: "comedy",
        description:
          "Ostarela kineska imigrantkinja je uhvaćena u ludu avanturu, u kojoj samo ona može da spase svet istražujući druge univerzume koji se povezuju sa životima koje je mogla da vodi.",
        amount: 1300,
        image: "./components/images/Everything_Everywhere_All_at_Once.jpg",
      },
      {
        id: "6",
        title: "Spider-Man: No Way Home",
        genre: "fantasy",
        description:
          "Pošto je Spajdermenov identitet sada otkriven, Piter traži pomoć od doktora Strejndža. Kada čarolija krene naopako, počinju da se pojavljuju opasni neprijatelji iz drugih svetova, primoravajući Pitera da otkrije šta zaista znači biti Spajdermen.",
        amount: 2000,
        image: "./components/images/spiderman.jpg",
      },
      {
        id: "7",
        title: "Joker",
        genre: "thriller",
        description:
          "Mentalno problematični stendap komičar kreće u silaznu spiralu koja vodi ka stvaranju legendarnog negativca.",
        amount: 1800,
        image: "./components/images/Joker.jpg",
      },
      {
        id: "8",
        title: "Capernaum",
        genre: "drama",
        description:
          "Na izdržavanju petogodišnje kazne za nasilni zločin, dvanaestogodišnji dečak tuži roditelje zbog zanemarivanja.",
        amount: 1700,
        image: "./components/images/Capernaum.jpg",
      },
      {
        id: "9",
        title: "Green Book",
        genre: "drama",
        description:
          "Italijansko-američki izbacivač iz radničke klase postaje vozač afroameričkog klasičnog pijaniste na turneji po američkom jugu iz 1960-ih.",
        amount: 1400,
        image: "./components/images/green book.jpg",
      },
    ],
  };

  return (
    <div>
      <BrowserRouter> 
        <NavBar></NavBar>
      
      </BrowserRouter>
    </div>
  );
  
  

}

export default App

import {v4 as uuidv4} from "uuid";
const Data = [
  {
    id: uuidv4(),
    titre: "Forrest Gump",
    description:
      "Quelques décennies d'histoire américaine, des années 1940 à la fin du XXème siècle, à travers le regard et l'étrange odyssée d'un homme simple et pur, Forrest Gump.",
    posterURL:
      "https://m.media-amazon.com/images/M/MV5BNWIwODRlZTUtY2U3ZS00Yzg1LWJhNzYtMmZiYmEyNmU1NjMzXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_FMjpg_UX1000_.jpg",
    rating: 9,
    trailerUrl:"https://www.youtube.com/embed/441Vy8BBnIc?si=5JlBa5RbGpVxGmOu",
  },
  {
    id: uuidv4(),
    titre: "La Liste de Schindler",
    description:
      "Evocation des années de guerre d'Oskar Schindler, industriel autrichien rentré à Cracovie en 1939 avec les troupes allemandes. Il va, tout au long de la guerre, protéger des juifs en les faisant travailler dans sa fabrique.",
    posterURL:
      "https://www.ecranlarge.com/media/cache/1600x1200/uploads/image/001/181/la-liste-de-schindler-affiche-francaise-1181457.jpg",
    rating: 5,
    trailerUrl:"https://www.youtube.com/embed/u4jUv5tyN5A?si=-qzHsIadTWrlnVgN",
  },
];
export default Data;

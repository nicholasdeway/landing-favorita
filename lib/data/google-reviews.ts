export interface Review {
  id: number;
  name: string;
  avatar: string;
  date: string;
  rating: number;
  text: string;
}

export const GOOGLE_REVIEWS: Review[] = [
  {
    id: 1,
    name: "Oscar Hernández",
    avatar: "/google/oscar.png",
    date: "Hace una semana",
    rating: 5,
    text: "Increíble la atención y la variedad!",
  },
  {
    id: 2,
    name: "Ricardo Lourenço",
    avatar: "/google/ricardo.png",
    date: "Hace 2 meses",
    rating: 5,
    text: "La Favorita interior sim Duda es una de Las mejores tienda de muebles de Tenerife, Patrícia excelente profissional. Muchas gracias por todo, tô siempre ire recomendar a vosotros. 💪",
  },
  {
    id: 3,
    name: "Fran EP",
    avatar: "/google/fran.png",
    date: "Hace 6 meses",
    rating: 5,
    text: "La verdad que solo tengo comentarios positivos para todo el equipo de la favorita. Aunque no lo contratamos con ellos ( no porque no nos gustara o no nos convenciera su proyecto, sino porque al final lo hicimos con unos amigos), los recomendaria 100%. Tanto Patricia como todo su equipo grandisimas personas y profesionales. Les deseo lo mejor y estamos inmensamente agradecidos por su tiempo y dedicación y por toda au ayuda.",
  },
  {
    id: 4,
    name: "Jon Arribas",
    avatar: "/google/jon.png",
    date: "Hace 6 meses",
    rating: 5,
    text: "Excelente calidad y servicio. Patricia una gran profesional y persona muy amable 100% recomendable. Muchas gracias por su trabajo.",
  },
  {
    id: 5,
    name: "Dailen Melina",
    avatar: "/google/dailen.png",
    date: "Hace 1 año",
    rating: 5,
    text: "Muy recomendable, trato maravilloso y comunicación fluida para adaptarse a nuestras necesidades,aportando ideas y opciones muchas gracias por todo. 🥰",
  },
  {
    id: 6,
    name: "María Hernández",
    avatar: "/google/maria.png",
    date: "Hace 1 año",
    rating: 5,
    text: "No puedo decir otra cosa, más que se han cumplido mis sueños ✨🪄 y Patricia tiene mucho que ver en ese sueño. Gracias por tu profesionalidad y compromiso en el trabajo!! Te agradezco toda la ilusión y esfuerzo que pusiste tú y Jonathan, en complacerme para que todo saliera bien. Inmensamente agradecida!! 😍😍❤️❤️",
  },
  {
    id: 7,
    name: "HenckShot",
    avatar: "/henckshot.png",
    date: "Hace 1 año",
    rating: 5,
    text: "Patrícia es una persona atenta para ayudarte a hacer realidad tu sueño de muebles a medida. No pierdas tiempo y ven a visitar su tienda y su persona.",
  },
  {
    id: 8,
    name: "Angela Rios",
    avatar: "/google/angela.png",
    date: "Hace 1 año",
    rating: 5,
    text: "Estoy muy agradecida con el trabajo de Patricia y su equipo, aunque nunca fuimos a la tienda, todo fue bastante bien y ahora podemos disfrutar de uma preciosa cocina, muy práctica, aprovechando también los espacios.",
  },
  {
    id: 9,
    name: "Marian Leon",
    avatar: "/google/marian.png",
    date: "Hace 1 año",
    rating: 5,
    text: "Llegue a LA Favorita sin tener ni idea de a quien contratar, solo por las reseñas de Google y no puedo estar mas contenta con mi cocina y mi despensa. Patricia es una gran profesional, te coge la idea rápidamente, se adapta a tus necesidades y te aconseja si estas equivocada en alguna idea. Todo ha quedado como lo habíamos realizado en el render y dentro de los plazos. Luego tenemos a Jonatan que es el brazo ejecutor, trabajan fenomenal y son muy detallistas. LA verdad no podía haber caído en mejores manos. Gracias infinitas a los dos",
  },
];
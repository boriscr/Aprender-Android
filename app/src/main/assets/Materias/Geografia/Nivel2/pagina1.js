document.getElementById("level").textContent = "Nivel 2";
document.getElementById("name-title").textContent = "¿Cuáles son las PROVINCIAS DE ARGENTINA?";
// Selecciona el elemento donde se desea insertar
var container = document.getElementById('video-container'); 
// Insertar el elemento 
container.innerHTML = ' <iframe src="https://www.youtube.com/embed/zoJiY_lWOfM"  title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>'; 

//Preguntas
const questions = [
  {
    question: "¿Cuál es la provincia de Argentina con capital en San Salvador de Jujuy?",
    options: [
      "a) Salta",
      "b) Formosa",
      "c) Misiones",
      "d) Jujuy",
      "e) Corrientes"
    ],
    correctAnswer: 3
  },
  {
    question: "¿En qué provincia de Argentina se encuentra el Parque Nacional de Talampaya?",
    options: [
      "a) Catamarca",
      "b) La Rioja",
      "c) San Juan",
      "d) Córdoba",
      "e) Santa Fe"
    ],
    correctAnswer: 1
  },
  {
    question: "¿Cuál es la capital de la provincia de Buenos Aires?",
    options: [
      "a) Córdoba",
      "b) La Plata",
      "c) Rosario",
      "d) Mendoza",
      "e) Mar del Plata"
    ],
    correctAnswer: 1
  },
  {
    question: "¿Cuál es la ciudad Autónoma de Argentina y la más poblada del país?",
    options: [
      "a) Rosario",
      "b) Córdoba",
      "c) Mendoza",
      "d) La Plata",
      "e) Buenos Aires"
    ],
    correctAnswer: 4
  },
  {
    question: "¿En qué provincia de Argentina se encuentra la montaña más alta de América, el Aconcagua?",
    options: [
      "a) Chubut",
      "b) Neuquén",
      "c) Santa Cruz",
      "d) Mendoza",
      "e) Río Negro"
    ],
    correctAnswer: 3
  }
];


//################################################################
//Botones de navegacion
  function backPage() {
    // Redirigir a la anterior página
     window.location.href = "../Nivel1/Pagina5.html";
     }
     function homePage() {
      // Redirigir a home
      window.location.href = "../Home.html";
         }
  function nextPage() {
    // Redirigir a la siguiente página
     window.location.href = "Pagina2.html";
     }
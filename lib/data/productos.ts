export type CategoryData = {
  title: string;
  subtitle: string;
  description: string;
  paragraphs: string[];
  image: string;
  gallery: string[];
  specifications: { label: string; value: string }[];
};

export const CATEGORY_DATA: Record<string, CategoryData> = {
  "cocinas-a-medida": {
    title: "Cocinas a medida",
    subtitle: "Especialistas en cocinas a medida en Tenerife",
    description: "Diseñamos y fabricamos cocinas a medida en Tenerife adaptadas a tu espacio, a tu estilo de vida y a la forma en que disfrutas tu hogar.",
    paragraphs: [
      "Cada cocina es un proyecto único. Cuidamos cada detalle, desde la distribución y la ergonomía hasta la selección de materiales y acabados, para crear un espacio funcional, elegante y pensado para acompañarte durante muchos años.",
      "Trabajamos con materiales de alta calidad, herrajes de última generación y soluciones personalizadas que optimizan cada rincón, integrando diseño, confort y durabilidad en una cocina hecha exclusivamente para ti."
    ],
    image: "/images/012-image.jpg",
    gallery: ["/images/011-image.jpg", "/images/010-image.jpg"],
    specifications: [
      { label: "Materiales", value: "DM hidrófugo, Fénix NTM, madera maciza y estratificados de alta presión." },
      { label: "Herrajes", value: "Cajones con guías telescópicas y cierre amortiguado de alta precisión." },
      { label: "Encimeras", value: "Granito natural, Silestone, Dekton y Neolith." },
      { label: "Garantía", value: "5 años de garantía en todo el mobiliario y herrajes." }
    ]
  },
  "armarios-a-medida": {
    title: "Armarios a Medida",
    subtitle: "Armarios y vestidores empotrados a medida",
    description: "Creamos armarios, vestidores y soluciones de almacenamiento inteligentes que maximizan y organizan tu espacio.",
    paragraphs: [
      "Nuestros vestidores a medida son completamente configurables: pantaloneros extraíbles, cajones con frente de cristal, zapateros inclinados e iluminación LED interior automática.",
      "Trabajamos con maderas nobles, melaminas de alta densidad y acabados lacados premium para que cada armario combine a la perfección con la decoración de tu dormitorio."
    ],
    image: "/images/001-image.jpg",
    gallery: ["/images/002-image.jpg", "/images/003-image.jpg"],
    specifications: [
      { label: "Materiales", value: "DM lacado, melamina texturizada de 19mm, madera natural" },
      { label: "Puertas", value: "Correderas con freno amortiguado, abatibles, coplanares" },
      { label: "Accesorios", value: "Pistones de gas, organizadores de cuero, iluminación empotrada" },
      { label: "Garantía", value: "5 años de fabricación propia" }
    ]
  },
  "muebles-a-medida": {
    title: "Muebles a Medida",
    subtitle: "Mobiliario personalizado para todo tu hogar",
    description: "Diseñamos y fabricamos muebles a medida que se adaptan a tu estilo de vida, optimizando cada rincón con diseños funcionales y acabados de lujo.",
    paragraphs: [
      "Desde muebles de salón, aparadores y librerías hasta soluciones integradas para dormitorios y recibidores. Nos adaptamos a cualquier espacio, estilo y necesidad de almacenamiento.",
      "Utilizamos materiales seleccionados de alta calidad para garantizar la máxima durabilidad y resistencia en el uso diario, combinando diseño y funcionalidad en cada pieza."
    ],
    image: "/images/013-image.jpg",
    gallery: ["/images/005-image.jpg", "/images/006-image.jpg"],
    specifications: [
      { label: "Materiales", value: "Maderas nobles, tableros MDF lacados, chapas naturales y metales" },
      { label: "Acabados", value: "Barniz mate o brillo, lacado personalizado, texturas exclusivas" },
      { label: "Estilos", value: "Moderno, minimalista, contemporáneo, clásico renovado" },
      { label: "Garantía", value: "5 años de fabricación local propia" }
    ]
  },
  "soluciones-inteligentes": {
    title: "Soluciones Inteligentes",
    subtitle: "Tecnología y automatización para el mobiliario moderno",
    description: "Llevamos la domótica y los mecanismos de alta tecnología a tu cocina y vestidor.",
    paragraphs: [
      "Iluminación integrada que se activa al abrir un cajón, sistemas de elevación por motor eléctrico para muebles altos, enchufes ocultos y organizadores magnéticos reposicionables.",
      "Transformamos el mobiliario tradicional en sistemas inteligentes que se anticipan a tus necesidades y minimizan el esfuerzo diario."
    ],
    image: "/images/007-image.jpg",
    gallery: ["/images/008-image.jpg", "/images/009-image.jpg"],
    specifications: [
      { label: "Iluminación", value: "LED de bajo consumo 24V con temperatura regulable de luz" },
      { label: "Aperturas", value: "Sistemas de pulsador eléctrico para cajones y compuertas elevables" },
      { label: "Conectividad", value: "Cargadores inalámbricos Qi ocultos en encimeras" },
      { label: "Garantía", value: "1 años en componentes eléctricos y electrónicos" }
    ]
  },
  "cortinas-pergolas": {
    title: "Cortinas y Pérgolas",
    subtitle: "Protección solar y confort exterior",
    description: "Diseñamos pérgolas bioclimáticas y estores técnicos a medida para disfrutar del clima de Tenerife.",
    paragraphs: [
      "Ofrecemos pérgolas bioclimáticas con lamas orientables motorizadas que regulan la temperatura de tu terraza y protegen de la lluvia de forma automatizada.",
      "Nuestros estores y cortinas técnicas cuentan con filtros UV avanzados que protegen tus muebles del sol, reduciendo la temperatura interior y optimizando el consumo energético."
    ],
    image: "/images/010-image.jpg",
    gallery: ["/images/011-image.jpg", "/images/012-image.jpg"],
    specifications: [
      { label: "Estructuras", value: "Aluminio extrusionado con recubrimiento de polvo termoendurecido" },
      { label: "Motorización", value: "Sistemas motorizados de alta precisión con conectividad WiFi" },
      { label: "Tejidos", value: "Polyester Screen, tejido acrílico impermeabilizado" },
      { label: "Garantía", value: "5 años en estructuras y motor" }
    ]
  }
};

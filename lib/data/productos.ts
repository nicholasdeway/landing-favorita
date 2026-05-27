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
    title: "Cocinas a Medida",
    subtitle: "Especialistas en cocinas personalizadas en Tenerife",
    description: "Diseñamos y fabricamos la cocina de tus sueños adaptada al milímetro a tu espacio y estilo de vida.",
    paragraphs: [
      "Cada cocina que sale de nuestra fábrica en Tenerife está hecha con un cuidado meticuloso. Combinamos herrajes de última generación con materiales resistentes a la humedad y arañazos para asegurar que tu cocina luzca impecable por décadas.",
      "Nos enfocamos en el triángulo de trabajo ergonómico y en la integración perfecta de electrodomésticos, creando un espacio limpio, funcional y estéticamente superior para el día a día."
    ],
    image: "/images/012-image.jpg",
    gallery: ["/images/011-image.jpg", "/images/010-image.jpg"],
    specifications: [
      { label: "Materiales", value: "DM hidrófugo, Fénix NTM, madera maciza, estratificados de alta presión" },
      { label: "Herrajes", value: "Cajones con guías telescópicas y cierre amortiguado silencioso" },
      { label: "Encimeras", value: "Granito natural, Silestone, Dekton, Neolith" },
      { label: "Garantía", value: "5 años en todo el mobiliario y herrajes" }
    ]
  },
  "muebles-a-medida": {
    title: "Muebles a Medida",
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
  "decoracion-de-interiores": {
    title: "Decoración de Interiores",
    subtitle: "Conceptos integrales de diseño residencial",
    description: "Planificamos y estructuramos visualmente tus espacios para convertirlos en ambientes elegantes y acogedores.",
    paragraphs: [
      "Nuestro servicio de decoración de interiores te ayuda a visualizar tu hogar antes de fabricar cualquier pieza. Estudiamos la luz, los puntos de paso y el comportamiento diario de tu familia para recomendar la mejor distribución.",
      "Te acompañamos en la selección de textiles, pinturas, papel pintado, complementos decorativos e iluminación, garantizando coherencia visual y armonía en todo tu hogar."
    ],
    image: "/images/004-image.jpg",
    gallery: ["/images/005-image.jpg", "/images/006-image.jpg"],
    specifications: [
      { label: "Servicio", value: "Diseño 3D fotorrealista, selección de materiales, interiorismo" },
      { label: "Estilos", value: "Minimalista, nórdico, moderno, contemporáneo, industrial" },
      { label: "Ámbito", value: "Cocinas, salones, dormitorios, viviendas completas" },
      { label: "Plazos", value: "Entrega de proyecto conceptual en 10-15 días hábiles" }
    ]
  },
  "accesorios-inteligentes": {
    title: "Accesorios Inteligentes",
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
      { label: "Garantía", value: "2 años en componentes eléctricos y electrónicos" }
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

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
    image: "/images/021-image.png",
    gallery: ["/images/020-image.png", "/images/019-image.png"],
    specifications: [
      { label: "Materiales", value: "DM lacado, melamina texturizada de 19mm, madera natural" },
      { label: "Puertas", value: "Correderas con freno amortiguado, abatibles, coplanares" },
      { label: "Accesorios", value: "Pistones de gas, organizadores de cuero, iluminación empotrada" },
      { label: "Garantía", value: "5 años de fabricación propia" }
    ]
  },
  "muebles-a-medida": {
    title: "Muebles a medida",
    subtitle: "MOBILIARIO A MEDIDA PARA DISTINTAS ZONAS DE LA VIVIENDA",
    description: "Hay espacios que no se resuelven bien con mobiliario convencional. Huecos difíciles, paredes completas, cambios de profundidad o necesidades específicas de almacenaje requieren una pieza pensada desde el principio para ese lugar.",
    paragraphs: [
      "Proyectamos mobiliario para salones, recibidores, dormitorios, comedores, zonas de trabajo y otros ambientes, ajustando proporciones, capacidad y composición a la arquitectura existente.",
      "Podemos integrar iluminación, puertas, vitrinas, cajones, estanterías, panelados y otros elementos dentro de una misma composición para conseguir un conjunto más limpio y mejor aprovechado."
    ],
    image: "/images/013-image.jpg",
    gallery: ["/images/005-image.jpg", "/images/006-image.jpg"],
    specifications: [
      { label: "APLICACIONES", value: "Muebles de salón, recibidores, dormitorios, zonas de trabajo, librerías, aparadores, panelados y composiciones especiales." },
      { label: "CONFIGURACIÓN", value: "Diseños adaptados a paredes completas, huecos, pilares, desniveles, diferentes profundidades y otras particularidades constructivas." },
      { label: "ACABADOS", value: "Superficies lisas, texturizadas, efecto madera, lacadas y otras combinaciones seleccionadas según el proyecto." },
      { label: "ELEMENTOS INTEGRADOS", value: "Iluminación LED, vitrinas, estantes, cajones, puertas, paneles decorativos y zonas técnicas." },
      { label: "PRODUCCIÓN", value: "Mobiliario producido según planos y especificaciones definidos para cada proyecto." }
    ]
  },
  "soluciones-inteligentes": {
    title: "Automatización integrada",
    subtitle: "TECNOLOGÍA INTEGRADA EN EL MOBILIARIO",
    description: "La tecnología tiene sentido cuando simplifica el uso sin convertirse en protagonista. Incorporamos iluminación, mecanismos eléctricos y puntos de conexión directamente en el mobiliario para resolver funciones concretas de forma discreta.",
    paragraphs: [
      "Estos elementos se prevén durante el desarrollo del proyecto, definiendo su posición, alimentación y accionamiento antes de la producción. Así evitamos añadidos posteriores y conseguimos una integración más limpia.",
      "Desde una tira LED oculta hasta un sistema de apertura eléctrica, seleccionamos cada recurso por su utilidad dentro de la composición, no simplemente por incorporar tecnología."
    ],
    image: "/images/007-image.jpg",
    gallery: ["/images/008-image.jpg", "/images/009-image.jpg"],
    specifications: [
      { label: "ILUMINACIÓN INTEGRADA", value: "Perfiles y sistemas LED incorporados en vitrinas, estantes, interiores de armarios, zonas de trabajo y otros puntos definidos en proyecto." },
      { label: "APERTURAS ELÉCTRICAS", value: "Mecanismos asistidos para cajones, puertas y elementos elevables cuando la configuración del mueble lo requiere." },
      { label: "CONEXIONES", value: "Enchufes, tomas USB, torres extraíbles y otros puntos de alimentación integrables en encimeras o mobiliario." },
      { label: "CONTROL", value: "Opciones de encendido, regulación y accionamiento adaptadas al sistema instalado." },
      { label: "PLANIFICACIÓN TÉCNICA", value: "Previsión de alimentación, cableado y ubicación de componentes durante la fase de proyecto para mantenerlos accesibles y visualmente discretos." }
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
    image: "/images/016-image.png",
    gallery: ["/images/015-image.png", "/images/014-image.png"],
    specifications: [
      { label: "Estructuras", value: "Aluminio extrusionado con recubrimiento de polvo termoendurecido" },
      { label: "Motorización", value: "Sistemas motorizados de alta precisión con conectividad WiFi" },
      { label: "Tejidos", value: "Polyester Screen, tejido acrílico impermeabilizado" },
      { label: "Garantía", value: "5 años en estructuras y motor" }
    ]
  }
};

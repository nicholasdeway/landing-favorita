export interface InstagramPost {
  id: number;
  type: "image" | "text-beige" | "text-beige-minimal" | "text-quote";
  src?: string;       // Imagem (ex: "/instagram/001-instagram.jpg")
  url?: string;       // URL de redirecionamento (ex: "https://www.instagram.com/p/...")
}

export const INSTAGRAM_POSTS: InstagramPost[] = [
  {
    id: 1,
    type: "image",
    src: "/instagram/001-instagram.jpg",
    url: "https://www.instagram.com/p/DPKMpEkinbF/",
  },
  {
    id: 2,
    type: "image",
    src: "/instagram/002-instagram.jpg",
    url: "https://www.instagram.com/p/DBl_iGiI_MP/",
  },
  {
    id: 3,
    type: "image",
    src: "/instagram/003-instagram.jpg",
    url: "https://www.instagram.com/p/DOG5wBoCuyS/",
  },
  {
    id: 4,
    type: "image",
    src: "/instagram/004-instagram.jpg",
    url: "https://www.instagram.com/p/DPzdEkECvvF/",
  },
  {
    id: 5,
    type: "image",
    src: "/instagram/005-instagram.jpg",
    url: "https://www.instagram.com/p/DNuvE2i1Dfu/",
  },
  {
    id: 6,
    type: "image",
    src: "/instagram/006-instagram.jpg",
    url: "https://www.instagram.com/p/DKCpF6UKyAt/",
  },
  {
    id: 7,
    type: "image",
    src: "/instagram/007-instagram.jpg",
    url: "https://www.instagram.com/p/DL2XebkqHo2/",
  },
  {
    id: 8,
    type: "image",
    src: "/instagram/008-instagram.jpg",
    url: "https://www.instagram.com/p/DTgbFwJCk-D/",
  },
];

export const INSTAGRAM_EXTRA_POSTS: InstagramPost[] = [
  {
    id: 9,
    type: "image",
    src: "/instagram/009-instagram.jpg",
    url: "https://www.instagram.com/p/DUvrTwHESMm/?img_index=1",
  },
  {
    id: 10,
    type: "image",
    src: "/instagram/010-instagram.jpg",
    url: "https://www.instagram.com/p/DHN-_apItNn/",
  },
  {
    id: 11,
    type: "image",
    src: "/instagram/011-instagram.jpg",
    url: "https://www.instagram.com/p/C7TrvJfoSTj/",
  },
  {
    id: 12,
    type: "image",
    src: "/instagram/012-instagram.jpg",
    url: "https://www.instagram.com/p/DXQ6XZhCg15/",
  },
];

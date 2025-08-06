export interface Painting {
  id: number;
  title: string;
  image: string;
  description: string;
  medium: string;
  size: string;
  price: string;
}

export const paintings: Painting[] = [
  {
    id: 1,
    title: "The Enlightened One",
    image: "/images/Buddha.jpg",
    description: "A serene representation of Buddha in meditation, capturing the essence of inner peace and enlightenment.",
    medium: "Oil on Canvas",
    size: "36x48 inches",
    price: "₹15,000"
  },
  {
    id: 2,
    title: "Journey in Motion",
    image: "/images/Car.jpg",
    description: "A vibrant depiction of a classic automobile, showcasing bold colors and dynamic composition.",
    medium: "Oil on Canvas",
    size: "24x36 inches",
    price: "₹8,000"
  },
  {
    id: 3,
    title: "Gaze of the Emerald Muse",
    image: "/images/Geen eyed girl.jpg",
    description: "A mesmerizing portrait featuring striking green eyes that seem to look into your soul.",
    medium: "Oil on Canvas",
    size: "24x36 inches",
    price: "₹5,000"
  },
  {
    id: 4,
    title: "Spirits of the Plains",
    image: "/images/NativeAmericanWomen.jpg",
    description: "A powerful tribute to Native American heritage, capturing strength and cultural pride.",
    medium: "Oil on Canvas",
    size: "36x48 inches",
    price: "₹18,000"
  },
  {
    id: 5,
    title: "Divine Embrace",
    image: "/images/Radha Krishna.jpg",
    description: "A divine representation of eternal love, depicting the spiritual bond between Radha and Krishna.",
    medium: "Oil on Canvas",
    size: "36x48 inches",
    price: "₹12,000"
  },
  {
    id: 6,
    title: "Shirdi's Beloved Saint",
    image: "/images/Sai Baba.jpg",
    description: "A spiritual masterpiece honoring the revered saint, radiating compassion and divine grace.",
    medium: "Oil on Canvas",
    size: "36x48 inches",
    price: "₹18,000"
  },
  {
    id: 7,
    title: "Awakening of Consciousness",
    image: "/images/Buddha-2.jpg",
    description: "A profound meditation on enlightenment, capturing Buddha in deep contemplation.",
    medium: "Oil on Canvas",
    size: "36x48 inches",
    price: "₹20,000"
  },
  {
    id: 8,
    title: "The Divine Flautist",
    image: "/images/Krishna.jpg",
    description: "An enchanting portrayal of Lord Krishna with his divine flute, emanating celestial melodies that touch the soul and inspire devotion.",
    medium: "Oil on Canvas",
    size: "36x48 inches",
    price: "₹16,000"
  },
  {
    id: 9,
    title: "Village Belle",
    image: "/images/Village girl.jpg",
    description: "A charming portrait of a village maiden, capturing the simplicity and natural beauty of rural life with grace and authenticity.",
    medium: "Oil on Canvas",
    size: "36x48 inches",
    price: "₹12,000"
  },
  {
    id: 10,
    title: "Rustic Serenity",
    image: "/images/Village.jpg",
    description: "A peaceful village scene that celebrates the tranquil rhythm of rural life, showcasing traditional architecture and natural harmony.",
    medium: "Oil on Canvas",
    size: "36x48 inches",
    price: "₹15,000"
  }
];

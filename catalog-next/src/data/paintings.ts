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
    title: "Buddha",
    image: "/images/Buddha.jpg",
    description: "A serene representation of Buddha in meditation, capturing the essence of inner peace and enlightenment.",
    medium: "Oil on Canvas",
    size: "24x18 inches",
    price: "₹15,000"
  },
  {
    id: 2,
    title: "Car",
    image: "/images/Car.jpg",
    description: "A vibrant depiction of a classic automobile, showcasing bold colors and dynamic composition.",
    medium: "Oil on Canvas",
    size: "20x16 inches",
    price: "₹8,000"
  },
  {
    id: 3,
    title: "Green Eyed Girl",
    image: "/images/Geen eyed girl.jpg",
    description: "A mesmerizing portrait featuring striking green eyes that seem to look into your soul.",
    medium: "Oil on Canvas",
    size: "22x18 inches",
    price: "₹5,000"
  },
  {
    id: 4,
    title: "Native American Women",
    image: "/images/NativeAmericanWomen.jpg",
    description: "A powerful tribute to Native American heritage, capturing strength and cultural pride.",
    medium: "Oil on Canvas",
    size: "26x20 inches",
    price: "₹18,000"
  },
  {
    id: 5,
    title: "Radha Krishna",
    image: "/images/Radha Krishna.jpg",
    description: "A divine representation of eternal love, depicting the spiritual bond between Radha and Krishna.",
    medium: "Oil on Canvas",
    size: "28x22 inches",
    price: "₹12,000"
  },
  {
    id: 6,
    title: "Sai Baba",
    image: "/images/Sai Baba.jpg",
    description: "A spiritual masterpiece honoring the revered saint, radiating compassion and divine grace.",
    medium: "Oil on Canvas",
    size: "24x20 inches",
    price: "₹18,000"
  }
];

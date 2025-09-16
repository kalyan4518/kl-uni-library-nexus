export interface BookWithPrice {
  id: string;
  title: string;
  author: string;
  price: number;
  genre: string;
  description: string;
  coverImage: string;
  isbn: string;
  publishedYear: number;
}

export const booksWithPrices: BookWithPrice[] = [
  {
    id: "1",
    title: "The Art of Computer Programming",
    author: "Donald Knuth",
    price: 4500,
    genre: "Computer Science",
    description: "A comprehensive multi-volume work on computer programming algorithms.",
    coverImage: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=300&h=400&fit=crop",
    isbn: "978-0201896831",
    publishedYear: 2011
  },
  {
    id: "2", 
    title: "Clean Code",
    author: "Robert C. Martin",
    price: 3200,
    genre: "Programming",
    description: "A handbook of agile software craftsmanship principles.",
    coverImage: "https://images.unsplash.com/photo-1532012197267-da84d127e765?w=300&h=400&fit=crop",
    isbn: "978-0132350884",
    publishedYear: 2008
  },
  {
    id: "3",
    title: "Introduction to Algorithms",
    author: "Thomas H. Cormen",
    price: 5800,
    genre: "Computer Science",
    description: "Comprehensive introduction to the modern study of computer algorithms.",
    coverImage: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=300&h=400&fit=crop",
    isbn: "978-0262033848", 
    publishedYear: 2009
  },
  {
    id: "4",
    title: "Design Patterns",
    author: "Gang of Four",
    price: 4100,
    genre: "Software Engineering",
    description: "Elements of reusable object-oriented software design.",
    coverImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=400&fit=crop",
    isbn: "978-0201633612",
    publishedYear: 1994
  },
  {
    id: "5",
    title: "JavaScript: The Good Parts",
    author: "Douglas Crockford",
    price: 2800,
    genre: "Web Development",
    description: "Unearthing the excellence in JavaScript programming language.",
    coverImage: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=300&h=400&fit=crop",
    isbn: "978-0596517748",
    publishedYear: 2008
  },
  {
    id: "6",
    title: "System Design Interview",
    author: "Alex Xu",
    price: 3900,
    genre: "System Architecture", 
    description: "An insider's guide to ace system design interviews.",
    coverImage: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=300&h=400&fit=crop",
    isbn: "978-1736049112",
    publishedYear: 2020
  },
  {
    id: "7",
    title: "React Up & Running",
    author: "Stoyan Stefanov",
    price: 3500,
    genre: "Frontend Development",
    description: "Building web applications with React framework.",
    coverImage: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=300&h=400&fit=crop",
    isbn: "978-1491931820",
    publishedYear: 2016
  },
  {
    id: "8",
    title: "Database System Concepts",
    author: "Abraham Silberschatz",
    price: 6200,
    genre: "Database Systems",
    description: "Comprehensive introduction to database system concepts.",
    coverImage: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=300&h=400&fit=crop",
    isbn: "978-0073523323",
    publishedYear: 2019
  }
];
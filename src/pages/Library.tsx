import { useState } from "react";
import { WalletCard } from "@/components/WalletCard";
import { BookCard } from "@/components/BookCard";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useWallet } from "@/hooks/useWallet";
import { booksWithPrices } from "@/data/booksWithPrices";
import { Search, BookOpen } from "lucide-react";

const Library = () => {
  const { balance, transactions, purchaseBook } = useWallet();
  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState("title");
  const [filterGenre, setFilterGenre] = useState("all");

  // Get unique genres for filter
  const genres = ["all", ...new Set(booksWithPrices.map(book => book.genre))];

  // Filter and sort books
  const filteredBooks = booksWithPrices
    .filter(book => {
      const matchesSearch = book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           book.author.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesGenre = filterGenre === "all" || book.genre === filterGenre;
      return matchesSearch && matchesGenre;
    })
    .sort((a, b) => {
      switch (sortBy) {
        case "price-low":
          return a.price - b.price;
        case "price-high":
          return b.price - a.price;
        case "author":
          return a.author.localeCompare(b.author);
        case "year":
          return b.publishedYear - a.publishedYear;
        default:
          return a.title.localeCompare(b.title);
      }
    });

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-primary text-primary-foreground py-6">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-3">
            <BookOpen className="h-8 w-8" />
            <div>
              <h1 className="text-3xl font-bold">KL University Digital Library</h1>
              <p className="text-primary-foreground/80">Discover, Purchase, and Read</p>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-4 gap-6">
          {/* Sidebar with Wallet and Filters */}
          <aside className="lg:col-span-1 space-y-6">
            <WalletCard balance={balance} transactions={transactions} />
            
            {/* Search and Filters */}
            <div className="space-y-4">
              <div className="relative">
                <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search books or authors..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium">Sort by</label>
                <Select value={sortBy} onValueChange={setSortBy}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="title">Title A-Z</SelectItem>
                    <SelectItem value="author">Author</SelectItem>
                    <SelectItem value="price-low">Price: Low to High</SelectItem>
                    <SelectItem value="price-high">Price: High to Low</SelectItem>
                    <SelectItem value="year">Newest First</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium">Genre</label>
                <Select value={filterGenre} onValueChange={setFilterGenre}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {genres.map(genre => (
                      <SelectItem key={genre} value={genre}>
                        {genre === "all" ? "All Genres" : genre}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
          </aside>

          {/* Main Content */}
          <main className="lg:col-span-3">
            <div className="mb-6">
              <h2 className="text-2xl font-bold mb-2">Available Books</h2>
              <p className="text-muted-foreground">
                Showing {filteredBooks.length} book{filteredBooks.length !== 1 ? 's' : ''}
              </p>
            </div>
            
            {/* Books Grid */}
            <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-6">
              {filteredBooks.map((book) => (
                <BookCard
                  key={book.id}
                  book={book}
                  onPurchase={purchaseBook}
                  walletBalance={balance}
                />
              ))}
            </div>
            
            {filteredBooks.length === 0 && (
              <div className="text-center py-12">
                <BookOpen className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
                <h3 className="text-lg font-medium mb-2">No books found</h3>
                <p className="text-muted-foreground">
                  Try adjusting your search or filter criteria
                </p>
              </div>
            )}
          </main>
        </div>
      </div>
    </div>
  );
};

export default Library;
import { useState } from "react";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { BookWithPrice } from "@/data/booksWithPrices";
import { ShoppingCart, Check } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface BookCardProps {
  book: BookWithPrice;
  onPurchase: (bookTitle: string, price: number) => boolean;
  walletBalance: number;
}

export const BookCard = ({ book, onPurchase, walletBalance }: BookCardProps) => {
  const [isPurchasing, setIsPurchasing] = useState(false);
  const [isPurchased, setIsPurchased] = useState(false);
  const { toast } = useToast();

  const handlePurchase = async () => {
    if (isPurchased) return;
    
    setIsPurchasing(true);
    
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 300));
    
    const success = onPurchase(book.title, book.price);
    
    if (success) {
      setIsPurchased(true);
      toast({
        title: "Purchase Successful! 🎉",
        description: `You've successfully purchased "${book.title}"`,
      });
    } else {
      toast({
        title: "Insufficient Funds",
        description: "Please add more money to your wallet",
        variant: "destructive"
      });
    }
    
    setIsPurchasing(false);
  };

  const canAfford = walletBalance >= book.price;

  return (
    <Card className={`book-card-hover ${isPurchasing ? 'animate-purchase' : ''}`}>
      <CardHeader className="p-4 pb-2">
        <img
          src={book.coverImage}
          alt={book.title}
          className="w-full h-48 object-cover rounded-md mb-2"
        />
        <div className="space-y-1">
          <h3 className="font-semibold leading-tight line-clamp-2">{book.title}</h3>
          <p className="text-sm text-muted-foreground">by {book.author}</p>
        </div>
      </CardHeader>
      
      <CardContent className="p-4 pt-0">
        <div className="flex items-center justify-between mb-2">
          <Badge variant="secondary" className="text-xs">
            {book.genre}
          </Badge>
          <span className="text-lg font-bold text-price">
            ₹{book.price.toLocaleString()}
          </span>
        </div>
        <p className="text-xs text-muted-foreground line-clamp-2">
          {book.description}
        </p>
      </CardContent>
      
      <CardFooter className="p-4 pt-0">
        <Button
          onClick={handlePurchase}
          disabled={isPurchasing || isPurchased || !canAfford}
          className="w-full"
          variant={isPurchased ? "secondary" : canAfford ? "default" : "destructive"}
        >
          {isPurchasing ? (
            <>
              <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2" />
              Processing...
            </>
          ) : isPurchased ? (
            <>
              <Check className="h-4 w-4 mr-2" />
              Purchased
            </>
          ) : !canAfford ? (
            "Insufficient Funds"
          ) : (
            <>
              <ShoppingCart className="h-4 w-4 mr-2" />
              Buy Now
            </>
          )}
        </Button>
      </CardFooter>
    </Card>
  );
};
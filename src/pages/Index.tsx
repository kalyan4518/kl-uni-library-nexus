import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { BookOpen, Wallet, ShoppingCart } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-muted/20">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center max-w-3xl mx-auto">
          <div className="mb-8">
            <BookOpen className="h-16 w-16 mx-auto text-primary mb-4" />
            <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              KL University Digital Library
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Discover, purchase, and read thousands of books with your digital wallet
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="p-6 rounded-lg bg-card border text-center">
              <BookOpen className="h-8 w-8 mx-auto text-primary mb-3" />
              <h3 className="font-semibold mb-2">Vast Collection</h3>
              <p className="text-sm text-muted-foreground">
                Browse thousands of academic books and resources
              </p>
            </div>
            <div className="p-6 rounded-lg bg-card border text-center">
              <Wallet className="h-8 w-8 mx-auto text-wallet mb-3" />
              <h3 className="font-semibold mb-2">Digital Wallet</h3>
              <p className="text-sm text-muted-foreground">
                Secure payments with ₹20,000 starting balance
              </p>
            </div>
            <div className="p-6 rounded-lg bg-card border text-center">
              <ShoppingCart className="h-8 w-8 mx-auto text-success mb-3" />
              <h3 className="font-semibold mb-2">Instant Purchase</h3>
              <p className="text-sm text-muted-foreground">
                Buy books instantly and start reading immediately
              </p>
            </div>
          </div>

          <Link to="/library">
            <Button size="lg" className="text-lg px-8 py-4">
              <BookOpen className="h-5 w-5 mr-2" />
              Enter Digital Library
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Index;

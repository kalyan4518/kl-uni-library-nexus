import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Wallet, TrendingDown } from "lucide-react";
import { Transaction } from "@/hooks/useWallet";

interface WalletCardProps {
  balance: number;
  transactions: Transaction[];
}

export const WalletCard = ({ balance, transactions }: WalletCardProps) => {
  return (
    <Card className="wallet-glow border-wallet/20">
      <CardHeader className="pb-2">
        <CardTitle className="flex items-center gap-2 text-wallet">
          <Wallet className="h-5 w-5" />
          Digital Wallet
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="text-center">
          <div className="text-3xl font-bold text-wallet">
            ₹{balance.toLocaleString()}
          </div>
          <p className="text-sm text-muted-foreground">Available Balance</p>
        </div>
        
        {transactions.length > 0 && (
          <div className="space-y-2">
            <h4 className="text-sm font-medium flex items-center gap-2">
              <TrendingDown className="h-4 w-4" />
              Recent Transactions
            </h4>
            <div className="space-y-1 max-h-32 overflow-y-auto">
              {transactions.slice(0, 3).map((transaction) => (
                <div key={transaction.id} className="flex justify-between text-xs p-2 bg-muted/50 rounded">
                  <span className="truncate">{transaction.description}</span>
                  <span className="text-destructive font-medium">
                    -₹{transaction.amount}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
};
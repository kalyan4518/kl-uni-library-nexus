import { useState, useCallback } from 'react';

export interface WalletState {
  balance: number;
  transactions: Transaction[];
}

export interface Transaction {
  id: string;
  type: 'purchase';
  amount: number;
  description: string;
  timestamp: Date;
}

export const useWallet = () => {
  const [walletState, setWalletState] = useState<WalletState>({
    balance: 20000,
    transactions: []
  });

  const purchaseBook = useCallback((bookTitle: string, price: number): boolean => {
    if (walletState.balance >= price) {
      const transaction: Transaction = {
        id: Date.now().toString(),
        type: 'purchase',
        amount: price,
        description: `Purchased: ${bookTitle}`,
        timestamp: new Date()
      };

      setWalletState(prev => ({
        balance: prev.balance - price,
        transactions: [transaction, ...prev.transactions]
      }));
      
      return true; // Purchase successful
    }
    return false; // Insufficient funds
  }, [walletState.balance]);

  return {
    balance: walletState.balance,
    transactions: walletState.transactions,
    purchaseBook
  };
};
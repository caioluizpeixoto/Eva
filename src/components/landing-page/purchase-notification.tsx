"use client";

import { useState, useEffect } from "react";
import { ShoppingCart, X } from "lucide-react";
import { cn } from "@/lib/utils";

const notifications = [
  "Maria S. de Brasília, DF acabou de adquirir o plano Premium",
  "João P. de São Paulo, SP garantiu o Kit de Moldes",
  "Ana L. de Belo Horizonte, MG comprou o plano Premium",
  "Carlos F. de Curitiba, PR acabou de comprar",
  "Fernanda R. de Salvador, BA adquiriu o plano Premium agora",
  "Ricardo G. de Fortaleza, CE garantiu o seu kit",
];

const PurchaseNotification = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentNotification, setCurrentNotification] = useState("");
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    if (isDismissed) return;

    const showRandomNotification = () => {
      const randomIndex = Math.floor(Math.random() * notifications.length);
      setCurrentNotification(notifications[randomIndex]);
      setIsVisible(true);

      setTimeout(() => {
        setIsVisible(false);
      }, 5000); // Notification is visible for 5 seconds
    };

    // Initial delay before first notification
    const initialTimeout = setTimeout(() => {
        showRandomNotification();
        // Subsequent notifications
        const interval = setInterval(() => {
            showRandomNotification();
        }, 20000); // Show a new notification every 20 seconds
        
        return () => clearInterval(interval);
    }, 5000);

    return () => clearTimeout(initialTimeout);
  }, [isDismissed]);

  const handleDismiss = () => {
    setIsVisible(false);
    setIsDismissed(true);
  };
  
  if(isDismissed) return null;

  return (
    <div
      className={cn(
        "fixed bottom-4 left-4 z-50 w-full max-w-sm rounded-lg bg-background shadow-2xl border border-border transition-transform duration-500 ease-in-out",
        isVisible
          ? "translate-x-0 opacity-100"
          : "-translate-x-full opacity-0"
      )}
    >
      <div className="p-4">
        <div className="flex items-start">
          <div className="flex-shrink-0 pt-0.5">
            <ShoppingCart className="h-6 w-6 text-primary" aria-hidden="true" />
          </div>
          <div className="ml-3 flex-1">
            <p className="text-sm font-medium text-foreground">
              Compra Recente
            </p>
            <p className="mt-1 text-sm text-muted-foreground">
              {currentNotification}
            </p>
          </div>
          <div className="ml-4 flex flex-shrink-0">
            <button
              onClick={handleDismiss}
              className="inline-flex rounded-md bg-background text-muted-foreground hover:text-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
            >
              <span className="sr-only">Close</span>
              <X className="h-5 w-5" aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PurchaseNotification;

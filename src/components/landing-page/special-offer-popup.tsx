"use client";

import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { PartyPopper } from "lucide-react";

interface SpecialOfferPopupProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onAccept: () => void;
  onDecline: () => void;
}

export default function SpecialOfferPopup({ open, onOpenChange, onAccept, onDecline }: SpecialOfferPopupProps) {
  return (
    <AlertDialog open={open} onOpenChange={onOpenChange}>
      <AlertDialogContent className="max-w-md text-center">
        <AlertDialogHeader>
          <AlertDialogTitle className="text-2xl font-bold text-primary">
            Espere! Uma Oferta Especial Para Você!
          </AlertDialogTitle>
          <AlertDialogDescription className="text-lg text-muted-foreground pt-2">
            Leve o <span className="font-bold text-foreground">Acesso Premium</span> com todos os bônus por apenas
          </AlertDialogDescription>
          <p className="text-5xl font-bold text-primary py-2">
            R$17<span className="text-3xl align-super">,90</span>
          </p>
          <AlertDialogDescription className="text-base text-muted-foreground">
            É a sua chance de ter o pacote completo por um preço imperdível!
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter className="flex-col sm:flex-col sm:space-x-0 gap-2 w-full pt-4">
            <Button 
                onClick={onAccept}
                size="lg" 
                className="w-full bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white font-bold text-base py-6 rounded-lg animate-pulse"
            >
                Sim, eu quero o Acesso Premium!
                <PartyPopper className="ml-2" />
            </Button>
            <Button onClick={onDecline} variant="link" className="text-muted-foreground">
                Não, obrigado. Quero perder a promoção.
            </Button>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}

"use client";

import React from "react";
import Image from "next/image";
import {
  Binary,
  BookOpen,
  CaseUpper,
  Cat,
  Clock,
  Crown,
  Download,
  Flower2,
  Folder,
  Gift,
  PartyPopper,
  PlayCircle,
  Rabbit,
  ShieldCheck,
  Shapes,
  Apple,
  CheckCircle2,
  Users,
  Check,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import SpecialOfferPopup from "@/components/landing-page/special-offer-popup";

const categories = [
  { name: "Flores", icon: Flower2 },
  { name: "Letras", icon: CaseUpper },
  { name: "Números", icon: Binary },
  { name: "Animais", icon: Cat },
  { name: "Personagens", icon: Users },
  { name: "Temas Bíblicos", icon: BookOpen },
  { name: "Natal", icon: Gift },
  { name: "Páscoa", icon: Rabbit },
];

const benefits = [
  {
    title: "Economize Tempo",
    description: "Pare de perder horas procurando moldes. Tenha tudo o que precisa em um só lugar.",
    icon: Clock,
  },
  {
    title: "Acesso Imediato",
    description: "Receba o link para download instantaneamente após a confirmação do pagamento.",
    icon: Download,
  },
  {
    title: "Organização Total",
    description: "Todos os moldes são categorizados e fáceis de encontrar, prontos para imprimir.",
    icon: Folder,
  },
  {
    title: "Garantia de 7 Dias",
    description: "Sua satisfação ou seu dinheiro de volta. Risco zero para você experimentar.",
    icon: ShieldCheck,
  },
];

const feedbackImages = [
    'https://i.postimg.cc/WbyMprxW/Captura-de-tela-2025-12-10-194110.png',
    'https://i.postimg.cc/DyNqfsR6/Captura-de-tela-2025-12-10-194126.png',
    'https://i.postimg.cc/zXQnDW4F/Captura-de-tela-2025-12-10-194144.png',
    'https://i.postimg.cc/KvWncLC5/Captura-de-tela-2025-12-10-194200.png',
    'https://i.postimg.cc/28t4jvgT/Captura-de-tela-2025-12-10-194214.png',
    'https://i.postimg.cc/xT8vSgpF/Captura-de-tela-2025-12-10-194244.png',
];

const kitContents = [
  { item: "Moldes de flores", details: "(rosas, margaridas, girassóis, etc.)", icon: Flower2 },
  { item: "Alfabeto completo", details: "em vários estilos", icon: CaseUpper },
  { item: "Números diversos", details: "para todas as finalidades", icon: Binary },
  { item: "Animais", details: "(fazenda, selvagens, marinhos)", icon: Cat },
  { item: "Frutas", details: "para decoração e aprendizado", icon: Apple },
  { item: "Personagens", details: "clássicos e atuais", icon: Users },
  { item: "Temas bíblicos", details: "para eventos religiosos", icon: BookOpen },
  { item: "Natal", details: "papai noel, renas, árvores e mais", icon: Gift },
  { item: "Páscoa", details: "coelhos, ovos e cenouras", icon: Rabbit },
  { item: "Formas", details: "(corações, estrelas e geográficas)", icon: Shapes },
];

export default function Home() {
  const [isOfferPopupOpen, setIsOfferPopupOpen] = React.useState(false);

  const handleAcceptOffer = () => {
    // Lógica para redirecionar para o checkout premium
    console.log("Oferta aceita! Redirecionando para checkout premium.");
    setIsOfferPopupOpen(false);
    window.location.href = 'https://www.ggcheckout.com/checkout/v2/j9fOwvGnp0BnprQYScTg'; // Link de checkout premium
  };

  const handleDeclineOffer = () => {
    // Lógica para redirecionar para o checkout básico
    console.log("Oferta recusada. Redirecionando para checkout básico.");
    setIsOfferPopupOpen(false);
    window.location.href = 'https://www.ggcheckout.com/checkout/v2/bp4wlzNrTqlCmZOXDJyg'; // Link de checkout básico
  };
  
  return (
    <div className="flex flex-col min-h-screen bg-background">
        <header className="bg-primary text-primary-foreground text-center p-2 text-sm md:text-base font-bold fixed top-0 left-0 right-0 z-50">
          ✨ Oferta Válida Somente Hoje (10/12/2025) ✨
        </header>
      
      <main className="flex-grow pt-10">
        {/* Hero Section */}
        <section id="home" className="py-16 md:py-24 text-center">
          <div className="container px-4 mx-auto">
          <h1 className="text-4xl md:text-6xl font-headline font-bold mb-4 text-foreground animate-fade-in-up">
              Você está <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-red-500">cansada</span> de passar horas procurando moldes de EVA?
            </h1>
            <p className="text-lg md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto animate-fade-in-up animation-delay-300">
              O kit com mais de <span className="font-bold text-primary">2 mil moldes</span> está sendo liberado por apenas <span className="font-bold text-primary">R$10</span>
            </p>
            <div className="max-w-lg mx-auto my-8 aspect-[9/16] bg-secondary rounded-lg border-4 border-muted shadow-lg animate-zoom-in overflow-hidden relative">
              <div 
                // @ts-ignore
                dangerouslySetInnerHTML={{ __html: `<wistia-player media-id="n1pj3f7c1k" aspect="0.75" style="width:100%;height:100%;"></wistia-player>` }}
              />
            </div>
            <a href="#planos">
              <Button size="lg" className="text-xl font-bold py-8 px-12 rounded-lg shadow-lg transform hover:scale-105 transition-transform bg-gradient-to-r from-pink-500 to-red-500 text-primary-foreground">
                VER OS PLANOS
              </Button>
            </a>
          </div>
        </section>

        {/* Categories Section */}
        <section id="categorias" className="py-16 bg-secondary">
          <div className="container px-4 mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-foreground">Moldes para Todas as Ocasiões</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 text-center justify-center">
              {categories.map((category) => (
                <div key={category.name} className="flex flex-col items-center gap-3 animate-fade-in-up">
                  <div className="bg-background p-4 rounded-full shadow-md">
                    <category.icon className="w-8 h-8 text-primary" />
                  </div>
                  <p className="font-semibold text-foreground">{category.name}</p>
                </div>
              ))}
                <div className="flex flex-col items-center justify-center col-span-full animate-fade-in-up">
                  <p className="font-semibold text-foreground mt-0">E muito mais!</p>
                </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section id="beneficios" className="py-16 md:py-24">
          <div className="container px-4 mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-foreground">Por Que Escolher Nosso Kit?</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <Card key={benefit.title} className="text-center shadow-md hover:shadow-xl transition-shadow duration-300 animate-fade-in-up" style={{ animationDelay: `${index * 150}ms` }}>
                  <CardHeader className="items-center">
                    <div className="bg-primary/10 p-3 rounded-full mb-4">
                      <benefit.icon className="w-8 h-8 text-primary" />
                    </div>
                    <CardTitle>{benefit.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{benefit.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section id="planos" className="py-16 md:py-24 bg-secondary">
            <div className="container px-4 mx-auto">
                <div className="flex flex-col lg:flex-row justify-center items-center gap-12">
                    {/* Basic Plan */}
                    <Card className="w-full max-w-sm shadow-lg rounded-2xl bg-card text-card-foreground border-2 border-transparent">
                         <CardHeader className="text-center pb-4 pt-8">
                            <CardTitle className="text-2xl font-bold">Acesso Imediato</CardTitle>
                             <p className="text-4xl font-bold text-primary pt-2">
                                R$10
                            </p>
                            <CardDescription className="text-sm">
                                Pagamento único
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-4 p-6 pt-2">
                            <ul className="space-y-3 text-sm">
                                <li className="flex items-center gap-2"><CheckCircle2 className="w-5 h-5 text-primary" /> Acesso vitalício</li>
                                <li className="flex items-center gap-2"><CheckCircle2 className="w-5 h-5 text-primary" /> 2000+ moldes</li>
                                <li className="flex items-center gap-2"><CheckCircle2 className="w-5 h-5 text-primary" /> Downloads ilimitados</li>
                                <li className="flex items-center gap-2"><CheckCircle2 className="w-5 h-5 text-primary" /> Garantia de 7 dias</li>
                            </ul>
                             <Button size="lg" className="w-full font-bold text-base py-6 rounded-lg bg-gradient-to-r from-pink-500 to-red-500 text-primary-foreground" onClick={() => setIsOfferPopupOpen(true)}>
                                Comprar Agora
                            </Button>
                        </CardContent>
                    </Card>

                    {/* Premium Plan */}
                    <Card className="w-full max-w-sm shadow-2xl border-2 border-primary rounded-2xl bg-card text-card-foreground relative">
                         <Badge className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-pink-500 to-red-500 text-primary-foreground px-4 py-1.5 text-sm font-bold rounded-full flex items-center gap-2">
                            <Crown className="w-4 h-4" /> MAIS VENDIDO
                        </Badge>
                        <CardHeader className="text-center pb-4 pt-8">
                            <CardTitle className="text-2xl font-bold">Acesso Premium</CardTitle>
                           <p className="text-4xl font-bold text-primary pt-2">
                                R$29<span className="text-2xl align-super">,90</span>
                            </p>
                            <CardDescription className="text-sm">
                                Pagamento único
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-4 p-6 pt-2">
                             <ul className="space-y-3 text-sm">
                                <li className="flex items-center gap-2"><Check className="w-5 h-5 text-primary" /><span className="font-bold">Tudo do Plano Básico</span></li>
                                <li className="flex items-center gap-2"><CheckCircle2 className="w-5 h-5 text-primary" /> Minicurso</li>
                                <li className="flex items-center gap-2"><CheckCircle2 className="w-5 h-5 text-primary" /> Moldes de Frutas</li>
                                <li className="flex items-center gap-2"><CheckCircle2 className="w-5 h-5 text-primary" /> Moldes Galinha Pintadinha</li>
                                <li className="flex items-center gap-2"><CheckCircle2 className="w-5 h-5 text-primary" /> Moldes Lilo Stitch</li>
                                <li className="flex items-center gap-2"><CheckCircle2 className="w-5 h-5 text-primary" /> Moldes Wandinha</li>
                                <li className="flex items-center gap-2"><CheckCircle2 className="w-5 h-5 text-primary" /> Moldes Seu Lobato</li>
                                <li className="flex items-center gap-2"><Gift className="w-5 h-5 text-primary" /> 2 Bônus Exclusivos</li>
                                <li className="flex items-center gap-2"><Gift className="w-5 h-5 text-primary" /> 600 Moldes Atualizados</li>
                                <li className="flex items-center gap-2"><Gift className="w-5 h-5 text-primary" /> 1500 Moldes Variados</li>
                            </ul>
                           <a href="https://www.ggcheckout.com/checkout/v2/HJxiJelw3SKY5CCEHx8Q">
                                <Button size="lg" className="w-full font-bold text-base py-6 rounded-lg bg-gradient-to-r from-pink-500 to-red-500 text-primary-foreground">
                                    Eu quero o acesso premium!
                                    <PartyPopper className="ml-2" />
                                </Button>
                            </a>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </section>
        
        {/* Testimonials Section */}
        <section id="depoimentos" className="py-16 md:py-24">
          <div className="container px-4 mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-foreground">Quem Comprou, Amou!</h2>
            <Carousel opts={{ loop: true, align: "center" }} className="w-full max-w-md mx-auto">
              <CarouselContent>
                {feedbackImages.map((src, index) => (
                  <CarouselItem key={index} className="flex justify-center">
                    <div className="p-1">
                      <Card>
                        <CardContent className="flex aspect-square items-center justify-center p-4 overflow-hidden rounded-lg">
                           <Image src={src} alt={`Feedback ${index + 1}`} width={400} height={400} className="object-contain" data-ai-hint="feedback screenshot" />
                        </CardContent>
                      </Card>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="-left-4" />
              <CarouselNext className="-right-4" />
            </Carousel>
          </div>
        </section>

        {/* Kit Contents Section */}
        <section id="kit" className="py-16 md:py-24 bg-secondary">
          <div className="container px-4 mx-auto max-w-4xl">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-foreground">O Que Vem no Kit?</h2>
            <div className="bg-background rounded-lg shadow-lg p-8">
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
                {kitContents.map((content) => (
                  <li key={content.item} className="flex items-start gap-3">
                    <content.icon className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <span className="font-semibold text-foreground">{content.item}</span>
                      <span className="text-muted-foreground ml-1">{content.details}</span>
                    </div>
                  </li>
                ))}
                 <li className="flex items-start gap-3 md:col-span-2 md:justify-center">
                    <div>
                      <span className="font-semibold text-foreground">E muito mais</span>
                      <span className="text-muted-foreground ml-1">centenas de outros modelos exclusivos</span>
                    </div>
                  </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Guarantee Section */}
        <section id="garantia" className="py-16 md:py-24">
          <div className="container px-4 mx-auto">
            <div className="max-w-3xl mx-auto border-4 border-dashed border-primary rounded-lg p-8 md:p-12 text-center bg-primary/5">
              <ShieldCheck className="w-16 h-16 text-primary mx-auto mb-6" />
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Sua Compra com Risco Zero!</h2>
              <p className="text-lg text-muted-foreground mb-2">
                Você tem <span className="font-bold">7 dias para testar</span> nosso kit completo.
              </p>
              <p className="text-lg text-muted-foreground">
                Se por qualquer motivo não ficar satisfeita, devolvemos <span className="font-bold">100% do seu dinheiro</span>. Sem perguntas, sem burocracia.
              </p>
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section id="cta-final" className="py-16 md:py-24 bg-background">
          <div className="container px-4 mx-auto">
            <Card className="max-w-3xl mx-auto p-8 md:p-12 text-center shadow-2xl bg-card">
                <h2 className="text-3xl md:text-5xl font-bold mb-8">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-red-500">Pronta para desafiar sua criatividade?</span>
                </h2>
                <a href="#planos">
                <Button size="lg" className="text-xl md:text-2xl font-bold py-8 px-10 md:px-16 rounded-lg shadow-lg transform hover:scale-105 transition-transform bg-gradient-to-r from-pink-500 to-red-500 text-primary-foreground animate-pulse">
                    Quero Meus Moldes! <PartyPopper className="ml-2" />
                </Button>
                </a>
            </Card>
          </div>
        </section>
      </main>

      <SpecialOfferPopup
        open={isOfferPopupOpen}
        onOpenChange={setIsOfferPopupOpen}
        onAccept={handleAcceptOffer}
        onDecline={handleDeclineOffer}
      />

      <footer className="text-center p-6 bg-secondary/50">
        <p className="text-sm text-muted-foreground">&copy; {new Date().getFullYear()} Hellen Criativa. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
}

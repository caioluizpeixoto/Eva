import Image from "next/image";
import {
  BadgeCheck,
  Binary,
  BookOpen,
  Cat,
  CaseUpper,
  Clock,
  Download,
  Flower2,
  Folder,
  Gift,
  MoreHorizontal,
  PlayCircle,
  Rabbit,
  ShieldCheck,
  Star,
  Heart,
  Shapes,
  Apple,
  Crown,
  Sparkles,
  PartyPopper,
  Check,
  CheckCircle2,
  Users,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import PurchaseNotification from "@/components/landing-page/purchase-notification";

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

const testimonials = [
  {
    name: "Ana Clara",
    title: "Artesã",
    avatar: PlaceHolderImages.find(p => p.id === 'testimonial1')?.imageUrl,
    avatarFallback: "AC",
    text: "Estou maravilhada com a quantidade e a qualidade dos moldes. Facilitou muito meu trabalho no ateliê. O preço é inacreditável!",
  },
  {
    name: "Juliana Santos",
    title: "Professora",
    avatar: PlaceHolderImages.find(p => p.id === 'testimonial2')?.imageUrl,
    avatarFallback: "JS",
    text: "Uso os moldes para atividades com meus alunos. Eles adoram! A variedade é imensa e cobre todas as datas comemorativas.",
  },
  {
    name: "Márcia Lima",
    title: "Mãe e Empreendedora",
    avatar: PlaceHolderImages.find(p => p.id === 'testimonial3')?.imageUrl,
    avatarFallback: "ML",
    text: "Comecei a vender peças de EVA e esse kit foi meu maior investimento. Custo-benefício excelente. Recomendo de olhos fechados!",
  },
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
  { item: "E muito mais", details: "centenas de outros modelos exclusivos", icon: MoreHorizontal },
];

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <header className="bg-primary text-primary-foreground text-center p-2 text-sm md:text-base font-bold fixed top-0 w-full z-50">
        ✨ Oferta Válida Somente Hoje (10/12/2025) ✨
      </header>
      
      <main className="flex-grow mt-10">
        {/* Hero Section */}
        <section id="home" className="py-16 md:py-24 text-center">
          <div className="container px-4 mx-auto">
          <h1 className="text-4xl md:text-6xl font-headline font-bold mb-4 text-foreground animate-fade-in-up">
              Você está <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-red-500">cansada</span> de passar horas procurando moldes de EVA?
            </h1>
            <p className="text-lg md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto animate-fade-in-up animation-delay-300">
              O kit com mais de <span className="font-bold text-primary">2 mil moldes</span> está sendo liberado por apenas <span className="font-bold text-primary">R$10,00</span>
            </p>
            <div className="max-w-4xl mx-auto my-8 aspect-video bg-secondary rounded-lg flex items-center justify-center border-4 border-muted shadow-lg animate-zoom-in">
              <PlayCircle className="w-20 h-20 text-muted-foreground opacity-50" />
            </div>
            <a href="#planos">
              <Button size="lg" className="bg-gradient-to-r from-pink-500 to-red-500 hover:from-pink-600 hover:to-red-600 text-white text-xl font-bold py-8 px-12 rounded-lg shadow-lg transform hover:scale-105 transition-transform">
                VER OS PLANOS
                <PartyPopper className="ml-2" />
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
                <div className="flex flex-col items-center gap-3 animate-fade-in-up">
                  <div className="bg-background p-4 rounded-full shadow-md">
                    <MoreHorizontal className="w-8 h-8 text-primary" />
                  </div>
                  <p className="font-semibold text-foreground">E muito mais!</p>
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
                                R$10<span className="text-2xl align-super">,00</span>
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
                             <Button size="lg" className="w-full bg-gradient-to-r from-pink-500 to-red-500 hover:from-pink-600 hover:to-red-600 text-white font-bold text-base py-6 rounded-lg">
                                Comprar Agora
                                <PartyPopper className="ml-2" />
                            </Button>
                        </CardContent>
                    </Card>

                    {/* Premium Plan */}
                    <Card className="w-full max-w-sm shadow-2xl border-2 border-primary rounded-2xl bg-card text-card-foreground relative">
                         <Badge className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-4 py-1.5 text-sm font-bold rounded-full flex items-center gap-2">
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
                                <li className="flex items-center gap-2"><Gift className="w-5 h-5 text-primary" /> Bônus Exclusivos</li>
                            </ul>
                           <Button size="lg" className="w-full bg-gradient-to-r from-pink-500 to-red-500 hover:from-pink-600 hover:to-red-600 text-white font-bold text-base py-6 rounded-lg">
                                Eu quero o acesso premium!
                            </Button>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </section>
        
        {/* Testimonials Section */}
        <section id="depoimentos" className="py-16 md:py-24">
          <div className="container px-4 mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-foreground">Quem Comprou, Amou!</h2>
            <Carousel opts={{ loop: true }} className="max-w-2xl mx-auto">
              <CarouselContent>
                {testimonials.map((testimonial, index) => (
                  <CarouselItem key={index}>
                    <Card className="border-none shadow-none bg-transparent">
                      <CardContent className="flex flex-col items-center text-center p-6">
                        <Avatar className="w-24 h-24 mb-4 border-4 border-primary/20">
                           <AvatarImage src={testimonial.avatar} alt={testimonial.name} data-ai-hint="person face" />
                           <AvatarFallback>{testimonial.avatarFallback}</AvatarFallback>
                        </Avatar>
                        <p className="font-bold text-xl text-foreground">{testimonial.name}</p>
                        <p className="text-sm text-primary mb-4">{testimonial.title}</p>
                        <p className="text-muted-foreground italic">"{testimonial.text}"</p>
                      </CardContent>
                    </Card>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="left-0 -translate-x-1/2" />
              <CarouselNext className="right-0 translate-x-1/2" />
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
        <section id="cta-final" className="py-24 text-center bg-primary">
           <div className="container px-4 mx-auto">
             <h2 className="text-3xl md:text-5xl font-bold text-primary-foreground mb-8">
               <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-red-500">Pronta para Desbloquear Sua Criatividade?</span>
             </h2>
              <a href="#planos">
               <Button size="lg" className="bg-gradient-to-r from-pink-500 to-red-500 hover:from-pink-600 hover:to-red-600 text-white text-xl md:text-2xl font-bold py-8 px-10 md:px-16 rounded-lg shadow-lg transform hover:scale-105 transition-transform animate-pulse">
                Quero Meus Moldes! <PartyPopper className="ml-2" />
               </Button>
             </a>
           </div>
        </section>
      </main>

      <PurchaseNotification />

      <footer className="text-center p-6 bg-secondary/50">
        <p className="text-sm text-muted-foreground">&copy; {new Date().getFullYear()} EVA Template Pro. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
}

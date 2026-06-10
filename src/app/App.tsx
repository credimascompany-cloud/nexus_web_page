import { useState } from 'react';
import { Button } from './components/button';
import { CheckCircle2, Shield, Clock, FileCheck, Users, Heart, TrendingUp, Home, Briefcase, Store, Sprout, Baby, DollarSign, Lock, Eye, Headphones, MessageCircle, ChevronDown, Smartphone, ArrowRight, Star } from 'lucide-react';
import * as Accordion from '@radix-ui/react-accordion';

export default function App() {
  const [openFaq, setOpenFaq] = useState<string>('');

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/97 backdrop-blur-sm border-b border-border shadow-sm">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center relative overflow-hidden">
                  <span className="text-white font-bold text-xl relative z-10">N</span>
                  <div className="absolute inset-0 opacity-20" style={{
                    backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 3px, rgba(255,255,255,0.3) 3px, rgba(255,255,255,0.3) 4px)'
                  }} />
                </div>
                <div>
                  <div className="font-bold text-xl text-primary">Nexus</div>
                  <div className="text-xs text-muted-foreground -mt-0.5">Soluciones Financieras</div>
                </div>
              </div>
            </div>

            <nav className="hidden md:flex items-center gap-6">
              <button onClick={() => scrollToSection('inicio')} className="text-foreground hover:text-primary transition-colors">
                Inicio
              </button>
              <button onClick={() => scrollToSection('como-funciona')} className="text-foreground hover:text-primary transition-colors">
                Cómo funciona
              </button>
              <button onClick={() => scrollToSection('beneficios')} className="text-foreground hover:text-primary transition-colors">
                Beneficios
              </button>
              <button onClick={() => scrollToSection('faq')} className="text-foreground hover:text-primary transition-colors">
                Preguntas frecuentes
              </button>
            </nav>

            <div className="flex items-center gap-3">
              <Button variant="ghost" size="sm" className="hidden sm:inline-flex">
                Consultar solicitud
              </Button>
              <Button variant="primary" size="sm">
                Solicitar crédito
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="inicio" className="relative overflow-hidden py-16 lg:py-24" style={{ background: 'linear-gradient(135deg, #f7f4ee 0%, #fdfcfa 50%, #f0f7f3 100%)' }}>
        {/* Subtle background pattern */}
        <div className="absolute inset-0 opacity-5 pointer-events-none" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg stroke='%232d5f4e' stroke-width='1'%3E%3Cpath d='M0 30 L15 15 L30 30 L45 15 L60 30'/%3E%3Cpath d='M0 45 L15 30 L30 45 L45 30 L60 45'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />

        <div className="container mx-auto px-4 lg:px-8 relative">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="space-y-6 lg:space-y-8">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 bg-primary/10 rounded-full px-4 py-1.5 border border-primary/20">
                <div className="w-2 h-2 rounded-full bg-primary" />
                <span className="text-sm text-primary" style={{ fontWeight: 600 }}>Créditos para personas reales</span>
              </div>

              <div className="space-y-4">
                <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-foreground leading-tight">
                  Tu crédito, claro y
                  <span className="text-primary"> cercano a ti</span>
                </h1>
                <p className="text-lg lg:text-xl text-muted-foreground leading-relaxed">
                  Completa tu solicitud, registra el valor que necesitas y recibe una respuesta clara. Sin enredos, sin letra pequeña, con acompañamiento en cada paso.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="primary" size="lg" className="text-lg">
                  Solicitar crédito
                </Button>
                <Button variant="secondary" size="lg" className="text-lg" onClick={() => scrollToSection('como-funciona')}>
                  Ver cómo funciona
                </Button>
              </div>

              {/* Trust note */}
              <p className="text-sm text-muted-foreground flex items-center gap-2">
                <Shield className="w-4 h-4 text-primary flex-shrink-0" />
                Aprobación sujeta a validación · Proceso 100% transparente
              </p>
            </div>

            <div className="relative">
              {/* Main image */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
                <img
                  src="https://images.unsplash.com/photo-1771980589828-18f0a689be34?auto=format&fit=crop&w=1080&q=80"
                  alt="Comerciante preparando fruta en un puesto callejero en Barranquilla, Colombia"
                  className="w-full h-[420px] object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
              </div>

              {/* Microcards — proceso paso a paso */}
              <div className="absolute -top-4 -right-4 bg-white rounded-xl shadow-lg p-3.5 flex items-center gap-3 animate-float border border-border">
                <div className="w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <FileCheck className="w-4 h-4 text-primary" />
                </div>
                <div>
                  <div className="text-sm text-foreground" style={{ fontWeight: 600 }}>Solicitud enviada</div>
                  <div className="text-xs text-muted-foreground">Proceso iniciado</div>
                </div>
              </div>

              <div className="absolute top-1/4 -left-5 bg-white rounded-xl shadow-lg p-3.5 flex items-center gap-3 animate-float-delayed border border-border">
                <div className="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0" style={{ background: 'rgba(212, 175, 122, 0.2)' }}>
                  <Shield className="w-4 h-4" style={{ color: '#d4af7a' }} />
                </div>
                <div>
                  <div className="text-sm text-foreground" style={{ fontWeight: 600 }}>Validación segura</div>
                  <div className="text-xs text-muted-foreground">Protegemos tus datos</div>
                </div>
              </div>

              <div className="absolute top-1/2 -right-5 bg-white rounded-xl shadow-lg p-3.5 flex items-center gap-3 animate-float border border-border" style={{ animationDelay: '0.5s' }}>
                <div className="w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <MessageCircle className="w-4 h-4 text-primary" />
                </div>
                <div>
                  <div className="text-sm text-foreground" style={{ fontWeight: 600 }}>Respuesta clara</div>
                  <div className="text-xs text-muted-foreground">Te notificamos</div>
                </div>
              </div>

              <div className="absolute bottom-12 -left-5 bg-white rounded-xl shadow-lg p-3.5 flex items-center gap-3 animate-float-delayed border border-border" style={{ animationDelay: '1.5s' }}>
                <div className="w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <CheckCircle2 className="w-4 h-4 text-primary" />
                </div>
                <div>
                  <div className="text-sm text-foreground" style={{ fontWeight: 600 }}>Desembolso a cuenta</div>
                  <div className="text-xs text-muted-foreground">Si es aprobado</div>
                </div>
              </div>

              {/* Small disclaimer card at bottom */}
              <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-primary/90 backdrop-blur-sm text-white rounded-xl shadow-lg px-4 py-2.5 flex items-center gap-2 whitespace-nowrap">
                <Lock className="w-3.5 h-3.5" />
                <span className="text-xs">Aprobación sujeta a validación</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cómo funciona */}
      <section id="como-funciona" className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Así funciona tu crédito
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Un proceso claro, paso a paso, para que lo entiendas sin complicaciones
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: '1',
                icon: FileCheck,
                title: 'Llena tu solicitud',
                description: 'Completa el formulario con tus datos y el valor que necesitas. Es sencillo y solo toma unos minutos.',
              },
              {
                step: '2',
                icon: Shield,
                title: 'Validamos tu información',
                description: 'Revisamos tu solicitud de forma segura y confidencial. Tu privacidad es lo primero.',
              },
              {
                step: '3',
                icon: MessageCircle,
                title: 'Recibes una respuesta',
                description: 'Te notificamos de manera clara y directa sobre el estado de tu solicitud. Sin rodeos.',
              },
              {
                step: '4',
                icon: CheckCircle2,
                title: 'Desembolso a tu cuenta',
                description: 'Si tu solicitud es aprobada, el dinero llega directamente a tu cuenta bancaria registrada.',
              },
            ].map((item) => (
              <div key={item.step} className="relative">
                <div className="rounded-2xl p-6 lg:p-8 h-full border border-border hover:shadow-lg transition-shadow" style={{ background: 'linear-gradient(135deg, #f7f4ee, #ffffff)' }}>
                  <div className="absolute -top-4 -left-4 w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center font-bold text-lg shadow-lg">
                    {item.step}
                  </div>
                  <div className="mb-4 mt-2">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                      <item.icon className="w-6 h-6 text-primary" />
                    </div>
                  </div>
                  <h3 className="font-bold text-lg text-foreground mb-3">{item.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Beneficios */}
      <section id="beneficios" className="py-16 lg:py-24" style={{ background: 'linear-gradient(180deg, #f7f4ee 0%, #fdfcfa 100%)' }}>
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Una solución financiera clara y cercana
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Pensamos en lo que realmente importa para ti y para tu familia
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {[
              {
                icon: FileCheck,
                title: 'Solicitud fácil de hacer',
                description: 'Un formulario claro, sin términos raros ni procesos largos. Lo puedes hacer desde tu celular.',
              },
              {
                icon: Shield,
                title: 'Tu información está segura',
                description: 'Protegemos tus datos personales en cada paso del proceso, con los más altos estándares.',
              },
              {
                icon: Clock,
                title: 'Respuesta sin largas esperas',
                description: 'Recibe una respuesta clara y oportuna. Te avisamos sobre el estado de tu solicitud.',
              },
              {
                icon: Eye,
                title: 'Todo claro, sin letra pequeña',
                description: 'El proceso es transparente desde el inicio. Sabes exactamente qué esperar en cada momento.',
              },
              {
                icon: CheckCircle2,
                title: 'Desembolso confiable',
                description: 'Si tu crédito es aprobado, el dinero llega directo a tu cuenta bancaria, de forma segura.',
              },
              {
                icon: Headphones,
                title: 'Estamos contigo',
                description: 'Acompañamiento durante todo el proceso para resolver tus dudas y ayudarte cuando lo necesites.',
              },
            ].map((benefit, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 lg:p-8 border border-border hover:shadow-lg transition-shadow group">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <benefit.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-bold text-lg text-foreground mb-3">{benefit.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pensado para personas como tú */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Pensado para personas como tú
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              No importa en qué trabajas ni de dónde eres. Si necesitas un crédito claro y justo, Nexus es para ti.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: Store,
                title: 'Comerciantes y tenderos',
                description: 'Tienes una tienda, un puesto en la plaza o un negocio propio. Nexus te ayuda a abastecerte, mejorar tu local o darle ese impulso que necesitas.',
                image: 'https://images.unsplash.com/photo-1758540853499-5f7422dd9f46?auto=format&fit=crop&w=1080&q=80',
              },
              {
                icon: Briefcase,
                title: 'Trabajadores independientes',
                description: 'Trabajas por tu cuenta, prestas servicios o tienes un oficio. Nexus entiende que tus ingresos pueden ser variables y te ofrece una solución real.',
                image: 'https://images.unsplash.com/photo-1762628437902-315a5efb810c?auto=format&fit=crop&w=1080&q=80',
              },
              {
                icon: Sprout,
                title: 'Personas del campo',
                description: 'Si cultivas, criás animales o trabajas la tierra, sabes que cada temporada importa. Con Nexus puedes conseguir el capital para tu cosecha o producción.',
                image: 'https://images.unsplash.com/photo-1613324295685-e908a740736c?auto=format&fit=crop&w=1080&q=80',
              },
              {
                icon: Home,
                title: 'Familias con necesidades reales',
                description: 'A veces la vida pone gastos inesperados: salud, estudios, el hogar. Nexus está ahí para ayudarte con un crédito justo y un proceso acompañado.',
                image: 'https://images.unsplash.com/photo-1462902196181-bf933086acfe?auto=format&fit=crop&w=1080&q=80',
              },
              {
                icon: TrendingUp,
                title: 'Emprendedores locales',
                description: 'Tienes una idea, un proyecto o quieres crecer. No dejes que la falta de capital te detenga. Nexus te ayuda a dar el primer paso.',
                image: 'https://images.unsplash.com/photo-1759375290556-fa8d966b35f0?auto=format&fit=crop&w=1080&q=80',
              },
              {
                icon: Smartphone,
                title: 'Desde tu celular, donde estés',
                description: 'No necesitas ir a ninguna oficina. Puedes solicitar tu crédito desde casa, desde el negocio o desde el campo, con solo tu celular y unos minutos.',
                image: 'https://images.unsplash.com/photo-1560957123-81d48b38ab49?auto=format&fit=crop&w=1080&q=80',
              },
            ].map((profile, index) => (
              <div key={index} className="group relative overflow-hidden rounded-2xl bg-white border border-border hover:shadow-xl transition-all">
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={profile.image}
                    alt={profile.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <profile.icon className="w-5 h-5 text-primary" />
                    </div>
                    <h3 className="font-bold text-lg text-foreground">{profile.title}</h3>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">{profile.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sección de confianza */}
      <section className="py-16 lg:py-24 bg-primary text-white relative overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-10 pointer-events-none" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' stroke='%23ffffff' stroke-width='0.8'%3E%3Ccircle cx='20' cy='20' r='8'/%3E%3Ccircle cx='20' cy='20' r='16'/%3E%3Cpath d='M20 4 L20 36M4 20 L36 20'/%3E%3C/g%3E%3C/svg%3E")`,
        }} />
        <div className="container mx-auto px-4 lg:px-8 relative">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Tu proceso, en buenas manos
            </h2>
            <p className="text-lg text-white/90 max-w-2xl mx-auto">
              La seguridad, la transparencia y el acompañamiento son nuestra prioridad contigo
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
            {[
              { icon: Shield, title: 'Validación segura', desc: 'Revisamos tu info con cuidado' },
              { icon: Lock, title: 'Datos protegidos', desc: 'Tu privacidad es sagrada' },
              { icon: Eye, title: 'Proceso claro', desc: 'Sin sorpresas ni letra pequeña' },
              { icon: Headphones, title: 'Soporte humano', desc: 'Alguien real para ayudarte' },
              { icon: MessageCircle, title: 'Respuesta directa', desc: 'Te avisamos con claridad' },
            ].map((item, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 rounded-2xl bg-white/15 backdrop-blur-sm flex items-center justify-center mx-auto mb-4 group-hover:bg-white/25 transition-colors border border-white/20">
                  <item.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-bold text-lg mb-1">{item.title}</h3>
                <p className="text-sm text-white/75">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-16 lg:py-24" style={{ background: '#f7f4ee' }}>
        <div className="container mx-auto px-4 lg:px-8 max-w-3xl">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Preguntas frecuentes
            </h2>
            <p className="text-lg text-muted-foreground">
              Respuestas claras a lo que más nos preguntan
            </p>
          </div>

          <Accordion.Root type="single" collapsible value={openFaq} onValueChange={setOpenFaq}>
            {[
              {
                question: '¿Cómo solicito un crédito en Nexus?',
                answer: 'Es muy sencillo. Solo debes completar nuestro formulario en línea con tus datos personales y el valor que necesitas. Puedes hacerlo desde tu celular. Nosotros nos encargamos del resto y te avisamos sobre el resultado de tu solicitud.',
              },
              {
                question: '¿Cuánto tiempo tarda la respuesta?',
                answer: 'Trabajamos para darte una respuesta lo más pronto posible. Una vez enviada tu solicitud, revisamos tu información y te notificamos de forma clara sobre el estado de tu proceso. No te dejamos esperando sin saber nada.',
              },
              {
                question: '¿Qué necesito para solicitar un crédito?',
                answer: 'Necesitas tus datos personales actualizados, un documento de identidad válido y una cuenta bancaria a tu nombre. Esa es la cuenta donde desembolsamos el dinero si tu solicitud es aprobada.',
              },
              {
                question: '¿Mis datos están seguros?',
                answer: 'Absolutamente. Protegemos tu información con los más altos estándares de seguridad. Tus datos solo se usan para validar tu solicitud de crédito. Nunca los compartimos sin tu consentimiento.',
              },
              {
                question: '¿Cómo recibo el dinero si mi solicitud es aprobada?',
                answer: 'Si tu solicitud es aprobada tras la validación, el dinero se desembolsa directamente a la cuenta bancaria que registraste. Es un proceso seguro y confiable. Te notificamos el resultado de forma clara antes de cualquier movimiento.',
              },
              {
                question: '¿Puedo consultar el estado de mi solicitud?',
                answer: 'Sí, puedes consultar el estado de tu solicitud en cualquier momento usando la opción "Consultar solicitud" en nuestro sitio. También te notificamos directamente sobre cualquier novedad en tu proceso.',
              },
              {
                question: '¿Qué pasa si mi solicitud no es aprobada?',
                answer: 'Te notificamos el resultado de forma clara y directa. Si tu solicitud no es aprobada en esta ocasión, te lo comunicamos con respeto y claridad, para que puedas entender el motivo.',
              },
            ].map((faq, index) => (
              <Accordion.Item
                key={index}
                value={`item-${index}`}
                className="bg-white rounded-xl mb-4 border border-border overflow-hidden shadow-sm"
              >
                <Accordion.Trigger className="flex items-center justify-between w-full p-6 text-left hover:bg-muted/30 transition-colors group">
                  <span className="font-bold text-lg text-foreground pr-4">{faq.question}</span>
                  <ChevronDown className="w-5 h-5 text-primary transition-transform group-data-[state=open]:rotate-180 flex-shrink-0" />
                </Accordion.Trigger>
                <Accordion.Content className="px-6 pb-6 text-muted-foreground leading-relaxed">
                  {faq.answer}
                </Accordion.Content>
              </Accordion.Item>
            ))}
          </Accordion.Root>
        </div>
      </section>

      {/* CTA Final */}
      <section id="contacto" className="py-16 lg:py-24 relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #1a3a2e 0%, #2d5f4e 60%, #3a7a62 100%)' }}>
        {/* Background accent dots */}
        <div className="absolute inset-0 opacity-10 pointer-events-none" style={{
          backgroundImage: `radial-gradient(circle, #d4af7a 1px, transparent 1px)`,
          backgroundSize: '30px 30px',
        }} />

        <div className="container mx-auto px-4 lg:px-8 text-center relative">
          <div className="max-w-3xl mx-auto space-y-6">
            <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-white">
              Da el primer paso hoy
            </h2>
            <p className="text-lg lg:text-xl leading-relaxed" style={{ color: 'rgba(255,255,255,0.9)' }}>
              Solicitar tu crédito en Nexus es sencillo, claro y acompañado. Estamos aquí para ayudarte a avanzar.
            </p>

            <div className="pt-4">
              <Button
                variant="secondary"
                size="lg"
                className="text-lg bg-white text-primary hover:bg-white/95 border-0 shadow-lg"
              >
                Solicitar crédito
              </Button>
            </div>

            {/* Trust signals */}
            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8">
              <div className="flex items-center gap-2 text-white/80 text-sm">
                <CheckCircle2 className="w-4 h-4 flex-shrink-0" style={{ color: '#d4af7a' }} />
                <span>Aprobación sujeta a validación</span>
              </div>
              <div className="flex items-center gap-2 text-white/80 text-sm">
                <MessageCircle className="w-4 h-4 flex-shrink-0" style={{ color: '#d4af7a' }} />
                <span>Te notificamos el resultado de forma clara</span>
              </div>
              <div className="flex items-center gap-2 text-white/80 text-sm">
                <CheckCircle2 className="w-4 h-4 flex-shrink-0" style={{ color: '#d4af7a' }} />
                <span>Si es aprobado, desembolsamos a tu cuenta</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-white py-12">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center">
                  <span className="text-white font-bold text-xl">N</span>
                </div>
                <div>
                  <div className="font-bold text-lg">Nexus</div>
                  <div className="text-xs" style={{ color: 'rgba(255,255,255,0.7)' }}>Soluciones Financieras</div>
                </div>
              </div>
              <p className="text-sm" style={{ color: 'rgba(255,255,255,0.7)' }}>
                Tu crédito, claro y cercano. Un proceso seguro, acompañado y pensado para personas reales.
              </p>
            </div>

            <div>
              <h4 className="font-bold mb-4">Empresa</h4>
              <ul className="space-y-2 text-sm" style={{ color: 'rgba(255,255,255,0.7)' }}>
                <li><button className="hover:text-white transition-colors">Sobre nosotros</button></li>
                <li><button className="hover:text-white transition-colors">Términos y condiciones</button></li>
                <li><button className="hover:text-white transition-colors">Política de privacidad</button></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4">Ayuda</h4>
              <ul className="space-y-2 text-sm" style={{ color: 'rgba(255,255,255,0.7)' }}>
                <li><button className="hover:text-white transition-colors">Preguntas frecuentes</button></li>
                <li><button className="hover:text-white transition-colors">Centro de ayuda</button></li>
                <li><button className="hover:text-white transition-colors">Consultar solicitud</button></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4">Contacto</h4>
              <ul className="space-y-2 text-sm" style={{ color: 'rgba(255,255,255,0.7)' }}>
                <li>Email: ayuda@nexus.com</li>
                <li>Teléfono: 01 8000 123 456</li>
                <li>Lunes a Viernes, 8am – 6pm</li>
              </ul>
            </div>
          </div>

          <div className="border-t pt-8 text-center text-sm" style={{ borderColor: 'rgba(255,255,255,0.1)', color: 'rgba(255,255,255,0.7)' }}>
            <p>© 2026 Nexus Soluciones Financieras. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-8px); }
        }
        @keyframes float-delayed {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-8px); }
        }
        .animate-float {
          animation: float 3.5s ease-in-out infinite;
        }
        .animate-float-delayed {
          animation: float-delayed 3.5s ease-in-out infinite;
          animation-delay: 1.2s;
        }
      `}</style>
    </div>
  );
}

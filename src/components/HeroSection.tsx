import logoNewvox from "@/assets/logo-newvox.jpg";

export const HeroSection = () => {
  return (
    <section className="relative overflow-hidden py-16 md:py-24">
      {/* Background glow */}
      <div className="absolute left-1/2 top-0 -translate-x-1/2 h-[500px] w-[800px] rounded-full bg-primary/5 blur-[120px]" />

      <div className="container relative z-10 mx-auto max-w-4xl px-4 text-center">
        <div className="mb-8 flex justify-center">
          <img src={logoNewvox} alt="New Vox" className="h-16 w-auto object-contain" />
        </div>

        <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5">
          <div className="h-2 w-2 rounded-full gradient-primary animate-pulse" />
          <span className="text-xs font-medium text-primary">Calculadora de Crescimento</span>
        </div>

        <h1 className="mb-6 text-3xl font-bold leading-tight tracking-tight md:text-5xl lg:text-6xl">
          Descubra quanto sua clínica pode{" "}
          <span className="gradient-text">faturar</span>{" "}
          com um processo previsível
        </h1>

        <p className="mx-auto mb-4 max-w-2xl text-base text-muted-foreground md:text-lg">
          Ajuste os números da sua operação e veja em tempo real o potencial de faturamento, custo de aquisição e retorno do investimento.
        </p>

        <p className="mb-8 text-sm text-muted-foreground/60 italic">
          Ideal para clínicas que querem crescer com mais controle, previsibilidade e lucro.
        </p>

        <a
          href="#calculadora"
          className="inline-flex items-center gap-2 rounded-xl gradient-primary px-8 py-4 text-sm font-bold text-primary-foreground shadow-lg transition-all duration-300 hover:scale-105 glow-primary"
        >
          Calcular meu potencial
          <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </a>
      </div>
    </section>
  );
};

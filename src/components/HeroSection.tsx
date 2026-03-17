import logoNewvox from "@/assets/logo-newvox.jpg";

export const HeroSection = () => {
  return (
    <section className="relative overflow-hidden pt-10 pb-6 md:pt-16 md:pb-8">
      {/* Background glow */}
      <div className="absolute left-1/2 top-0 -translate-x-1/2 h-[500px] w-[800px] rounded-full bg-primary/5 blur-[120px]" />

      <div className="container relative z-10 mx-auto max-w-4xl px-4 text-center">
        <div className="mb-6 flex justify-center">
          <img src={logoNewvox} alt="New Vox" className="h-16 w-auto object-contain" />
        </div>

        <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5">
          <div className="h-2 w-2 rounded-full gradient-primary animate-pulse" />
          <span className="text-xs font-medium text-primary">Calculadora de Crescimento</span>
        </div>

        <h1 className="mb-4 text-3xl font-bold leading-tight tracking-tight md:text-5xl lg:text-6xl">
          Descubra quanto sua clínica pode{" "}
          <span className="gradient-text">faturar</span>{" "}
          com um processo previsível
        </h1>

        <p className="mx-auto mb-2 max-w-2xl text-base text-muted-foreground md:text-lg">
          Ajuste os números da sua operação e veja em tempo real o potencial de faturamento, custo de aquisição e retorno do investimento.
        </p>

        <p className="text-sm text-muted-foreground/60 italic">
          Ideal para clínicas que querem crescer com mais controle, previsibilidade e lucro.
        </p>
      </div>
    </section>
  );
};

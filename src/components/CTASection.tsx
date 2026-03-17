import { ArrowRight, CheckCircle } from "lucide-react";

export const CTASection = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto max-w-4xl px-4">
        {/* Proof bullets */}
        <div className="mb-12 grid gap-4 sm:grid-cols-3">
          {[
            "Entenda seus números com clareza",
            "Descubra seus gargalos comerciais",
            "Projete seu crescimento com previsibilidade",
          ].map((text, i) => (
            <div
              key={i}
              className="flex items-center gap-3 rounded-xl card-elevated p-4"
            >
              <CheckCircle className="h-5 w-5 shrink-0 text-primary" />
              <span className="text-sm font-medium text-foreground/80">{text}</span>
            </div>
          ))}
        </div>

        {/* CTA Block */}
        <div className="relative overflow-hidden rounded-2xl card-elevated p-8 text-center md:p-12 glow-primary-lg">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent" />
          <div className="relative z-10">
            <h2 className="mb-4 text-2xl font-bold md:text-3xl">
              Esses números fazem sentido para a sua clínica?
            </h2>
            <p className="mx-auto mb-8 max-w-xl text-muted-foreground">
              Se você quer estruturar sua aquisição de pacientes e transformar atendimento em faturamento previsível, fale com um especialista.
            </p>
            <a
              href="https://typebot.co/new-vox-1-zcuc43g"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 rounded-xl gradient-primary px-10 py-4 text-base font-bold text-primary-foreground shadow-xl transition-all duration-300 hover:scale-105 glow-primary"
            >
              Quero um diagnóstico da minha clínica
              <ArrowRight className="h-5 w-5" />
            </a>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-12 text-center">
          <p className="text-xs text-muted-foreground/50">
            © {new Date().getFullYear()} New Vox — Assessoria para Clínicas Odontológicas
          </p>
        </div>
      </div>
    </section>
  );
};

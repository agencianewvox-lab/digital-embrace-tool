import { AlertTriangle, TrendingUp, AlertCircle, CheckCircle } from "lucide-react";

interface InsightsPanelProps {
  taxaComparecimento: number;
  taxaFechamento: number;
  cac: number;
  roas: number;
  ticketMedio: number;
  procedimento: string;
}

export const InsightsPanel = ({
  taxaComparecimento,
  taxaFechamento,
  cac,
  roas,
  procedimento,
}: InsightsPanelProps) => {
  const insights: { icon: React.ReactNode; text: string; type: "warning" | "danger" | "success" | "info" }[] = [];

  if (taxaComparecimento < 60) {
    insights.push({
      icon: <AlertTriangle className="h-4 w-4" />,
      text: "Seu maior gargalo parece estar no comparecimento. Sua clínica pode estar perdendo pacientes entre o agendamento e a avaliação.",
      type: "warning",
    });
  }

  if (taxaFechamento < 20) {
    insights.push({
      icon: <AlertCircle className="h-4 w-4" />,
      text: "A clínica gera oportunidades, mas pode estar deixando faturamento na mesa na hora de converter avaliação em procedimento.",
      type: "danger",
    });
  }

  if (cac > 2000) {
    insights.push({
      icon: <AlertTriangle className="h-4 w-4" />,
      text: "Seu custo de aquisição está elevado. Vale revisar anúncios, pré-qualificação e atendimento comercial.",
      type: "warning",
    });
  }

  if (roas >= 5) {
    insights.push({
      icon: <TrendingUp className="h-4 w-4" />,
      text: "Seu cenário indica uma operação saudável e com potencial de escala.",
      type: "success",
    });
  } else if (roas >= 3) {
    insights.push({
      icon: <CheckCircle className="h-4 w-4" />,
      text: "Seus números mostram uma operação equilibrada. Há espaço para otimizar e escalar.",
      type: "info",
    });
  }

  // Procedimento-specific insights
  const procInsights: Record<string, string> = {
    implantes: "Tratamentos de maior ticket exigem atenção extra na taxa de comparecimento e fechamento.",
    facetas: "Procedimentos estéticos tendem a ter alto valor percebido. Invista em provas sociais e antes/depois.",
    ortodontia: "Tratamentos de menor ticket podem depender mais de volume e recorrência.",
    harmonizacao: "Harmonização facial tem alta demanda. Foque em diferenciação e autoridade clínica.",
    protocolo: "Prótese protocolo é um tratamento premium. Cada lead perdido tem alto custo de oportunidade.",
    geral: "Clínicas gerais podem se beneficiar de múltiplas frentes de captação e upsell de tratamentos.",
  };

  if (procInsights[procedimento]) {
    insights.push({
      icon: <CheckCircle className="h-4 w-4" />,
      text: procInsights[procedimento],
      type: "info",
    });
  }

  if (insights.length === 0) return null;

  const typeStyles = {
    warning: "border-warning/30 bg-warning/5 text-warning",
    danger: "border-destructive/30 bg-destructive/5 text-destructive",
    success: "border-success/30 bg-success/5 text-success",
    info: "border-info/30 bg-info/5 text-info",
  };

  return (
    <div className="space-y-3">
      <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
        Diagnóstico Inteligente
      </h3>
      <div className="space-y-2">
        {insights.map((insight, i) => (
          <div
            key={i}
            className={`flex items-start gap-3 rounded-lg border p-4 ${typeStyles[insight.type]}`}
          >
            <div className="mt-0.5 shrink-0">{insight.icon}</div>
            <p className="text-sm leading-relaxed">{insight.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

import { useState, useMemo } from "react";
import { CalculatorSlider } from "./CalculatorSlider";
import { ResultCard } from "./ResultCard";
import { InsightsPanel } from "./InsightsPanel";
import { ProcedureSelector } from "./ProcedureSelector";
import {
  Users,
  CalendarCheck,
  UserCheck,
  Handshake,
  DollarSign,
  Target,
  TrendingUp,
  Wallet,
  BarChart3,
} from "lucide-react";

const formatCurrency = (val: number) =>
  val.toLocaleString("pt-BR", { style: "currency", currency: "BRL", minimumFractionDigits: 2 });

const formatNumber = (val: number) =>
  val.toLocaleString("pt-BR", { maximumFractionDigits: 1 });

export const CalculatorSection = () => {
  const [investimento, setInvestimento] = useState(5000);
  const [custoLead, setCustoLead] = useState(35);
  const [taxaAgendamento, setTaxaAgendamento] = useState(25);
  const [taxaComparecimento, setTaxaComparecimento] = useState(70);
  const [taxaFechamento, setTaxaFechamento] = useState(25);
  const [ticketMedio, setTicketMedio] = useState(3500);
  const [recorrencia, setRecorrencia] = useState(10);
  const [procedimento, setProcedimento] = useState("implantes");

  const results = useMemo(() => {
    const leads = investimento / custoLead;
    const agendamentos = leads * (taxaAgendamento / 100);
    const comparecimentos = agendamentos * (taxaComparecimento / 100);
    const fechamentos = comparecimentos * (taxaFechamento / 100);
    const faturamentoBase = fechamentos * ticketMedio;
    const faturamentoRecorrencia = faturamentoBase + faturamentoBase * (recorrencia / 100);
    const custoAgendamento = agendamentos > 0 ? investimento / agendamentos : 0;
    const custoComparecimento = comparecimentos > 0 ? investimento / comparecimentos : 0;
    const cac = fechamentos > 0 ? investimento / fechamentos : 0;
    const roas = investimento > 0 ? faturamentoRecorrencia / investimento : 0;

    return {
      leads,
      agendamentos,
      comparecimentos,
      fechamentos,
      faturamentoRecorrencia,
      custoAgendamento,
      custoComparecimento,
      cac,
      roas,
    };
  }, [investimento, custoLead, taxaAgendamento, taxaComparecimento, taxaFechamento, ticketMedio, recorrencia]);

  return (
    <section id="calculadora" className="py-12 md:py-16">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="mb-8 text-center">
          <span className="text-xs font-semibold uppercase tracking-widest text-primary">Configure seu cenário</span>
        </div>

        <div className="grid gap-8 lg:grid-cols-5">
          {/* Inputs */}
          <div className="space-y-1 lg:col-span-3">
            <div className="card-elevated rounded-2xl p-6 md:p-8 space-y-8">
              <ProcedureSelector value={procedimento} onChange={setProcedimento} />

              <CalculatorSlider
                label="Investimento em marketing por mês"
                value={investimento}
                min={1000}
                max={100000}
                step={500}
                prefix="R$"
                onChange={setInvestimento}
              />
              <CalculatorSlider
                label="Custo por lead"
                value={custoLead}
                min={5}
                max={300}
                step={1}
                prefix="R$"
                onChange={setCustoLead}
              />
              <CalculatorSlider
                label="Taxa de agendamento"
                value={taxaAgendamento}
                min={5}
                max={80}
                step={1}
                suffix="%"
                hint="15-25% é a média"
                onChange={setTaxaAgendamento}
              />
              <CalculatorSlider
                label="Taxa de comparecimento"
                value={taxaComparecimento}
                min={30}
                max={100}
                step={1}
                suffix="%"
                hint="60-80% é a média"
                onChange={setTaxaComparecimento}
              />
              <CalculatorSlider
                label="Taxa de fechamento"
                value={taxaFechamento}
                min={5}
                max={80}
                step={1}
                suffix="%"
                hint="20-40% é a média"
                onChange={setTaxaFechamento}
              />
              <CalculatorSlider
                label="Ticket médio por tratamento"
                value={ticketMedio}
                min={300}
                max={30000}
                step={100}
                prefix="R$"
                onChange={setTicketMedio}
              />
              <CalculatorSlider
                label="Recompra / recorrência mensal"
                value={recorrencia}
                min={0}
                max={50}
                step={1}
                suffix="%"
                hint="Opcional"
                onChange={setRecorrencia}
              />
            </div>
          </div>

          {/* Results */}
          <div className="space-y-4 lg:col-span-2">
            <div className="sticky top-8 space-y-4">
              <div className="flex items-center gap-2 mb-2">
                <div className="h-2.5 w-2.5 rounded-full gradient-primary animate-pulse" />
                <span className="text-xs font-semibold uppercase tracking-widest text-primary">
                  Resultados em tempo real
                </span>
              </div>

              {/* Highlight card */}
              <ResultCard
                title="Faturamento estimado mensal"
                value={formatCurrency(results.faturamentoRecorrencia)}
                description="Receita projetada com recorrência inclusa"
                icon={<DollarSign className="h-5 w-5" />}
                highlight
              />

              <div className="grid grid-cols-2 gap-3">
                <ResultCard
                  title="Leads gerados"
                  value={formatNumber(results.leads)}
                  description="Contatos captados no mês"
                  icon={<Users className="h-4 w-4" />}
                />
                <ResultCard
                  title="Agendamentos"
                  value={formatNumber(results.agendamentos)}
                  description="Avaliações agendadas"
                  icon={<CalendarCheck className="h-4 w-4" />}
                />
                <ResultCard
                  title="Compareceram"
                  value={formatNumber(results.comparecimentos)}
                  description="Pacientes na clínica"
                  icon={<UserCheck className="h-4 w-4" />}
                />
                <ResultCard
                  title="Novos pacientes"
                  value={formatNumber(results.fechamentos)}
                  description="Tratamentos fechados"
                  icon={<Handshake className="h-4 w-4" />}
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <ResultCard
                  title="Custo / Agendamento"
                  value={formatCurrency(results.custoAgendamento)}
                  description="Investimento por avaliação agendada"
                  icon={<Wallet className="h-4 w-4" />}
                />
                <ResultCard
                  title="Custo / Comparecimento"
                  value={formatCurrency(results.custoComparecimento)}
                  description="Investimento por paciente presente"
                  icon={<Target className="h-4 w-4" />}
                />
                <ResultCard
                  title="CAC"
                  value={formatCurrency(results.cac)}
                  description="Quanto custa adquirir um paciente"
                  icon={<BarChart3 className="h-4 w-4" />}
                />
                <ResultCard
                  title="ROAS"
                  value={`${results.roas.toFixed(1)}x`}
                  description="Retorno para cada R$1 investido"
                  icon={<TrendingUp className="h-4 w-4" />}
                  highlight={results.roas >= 5}
                />
              </div>

              {/* Insights */}
              <InsightsPanel
                taxaComparecimento={taxaComparecimento}
                taxaFechamento={taxaFechamento}
                cac={results.cac}
                roas={results.roas}
                ticketMedio={ticketMedio}
                procedimento={procedimento}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

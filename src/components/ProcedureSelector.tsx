interface ProcedureSelectorProps {
  value: string;
  onChange: (value: string) => void;
}

const procedures = [
  { id: "implantes", label: "Implantes", emoji: "🦷" },
  { id: "facetas", label: "Facetas", emoji: "✨" },
  { id: "ortodontia", label: "Ortodontia", emoji: "😁" },
  { id: "harmonizacao", label: "Harmonização", emoji: "💉" },
  { id: "protocolo", label: "Prótese Protocolo", emoji: "🔧" },
  { id: "geral", label: "Clínico Geral", emoji: "🏥" },
];

export const ProcedureSelector = ({ value, onChange }: ProcedureSelectorProps) => {
  return (
    <div className="space-y-3">
      <label className="text-sm font-medium text-foreground/80">Procedimento principal da clínica</label>
      <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
        {procedures.map((proc) => (
          <button
            key={proc.id}
            onClick={() => onChange(proc.id)}
            className={`flex items-center gap-2 rounded-lg border px-3 py-2.5 text-sm font-medium transition-all duration-200 ${
              value === proc.id
                ? "border-primary/50 bg-primary/10 text-primary"
                : "border-border bg-secondary/50 text-muted-foreground hover:border-primary/30 hover:text-foreground"
            }`}
          >
            <span>{proc.emoji}</span>
            <span>{proc.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

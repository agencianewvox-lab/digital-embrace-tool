interface ResultCardProps {
  title: string;
  value: string;
  description: string;
  icon?: React.ReactNode;
  highlight?: boolean;
}

export const ResultCard = ({ title, value, description, icon, highlight = false }: ResultCardProps) => {
  return (
    <div
      className={`card-result rounded-xl p-5 transition-all duration-300 hover:scale-[1.02] ${
        highlight ? "glow-primary ring-1 ring-primary/30" : ""
      }`}
    >
      <div className="flex items-start justify-between">
        <div className="space-y-1.5">
          <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">{title}</p>
          <p className={`text-2xl font-bold font-display ${highlight ? "gradient-text" : "text-foreground"}`}>
            {value}
          </p>
          <p className="text-xs text-muted-foreground/70 leading-relaxed">{description}</p>
        </div>
        {icon && (
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10 text-primary">
            {icon}
          </div>
        )}
      </div>
    </div>
  );
};

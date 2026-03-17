import { useCallback } from "react";

interface CalculatorSliderProps {
  label: string;
  value: number;
  min: number;
  max: number;
  step?: number;
  prefix?: string;
  suffix?: string;
  hint?: string;
  onChange: (value: number) => void;
}

export const CalculatorSlider = ({
  label,
  value,
  min,
  max,
  step = 1,
  prefix = "",
  suffix = "",
  hint,
  onChange,
}: CalculatorSliderProps) => {
  const percentage = ((value - min) / (max - min)) * 100;

  const handleInputChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const raw = e.target.value.replace(/\D/g, "");
      const num = Number(raw);
      if (num >= min && num <= max) onChange(num);
      else if (num < min) onChange(min);
      else if (num > max) onChange(max);
    },
    [min, max, onChange]
  );

  const formatDisplay = (val: number) => {
    if (prefix === "R$") return val.toLocaleString("pt-BR");
    return val.toLocaleString("pt-BR");
  };

  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between gap-3">
        <label className="text-sm font-medium text-foreground/80">{label}</label>
        <div className="flex items-center gap-1.5 rounded-lg bg-secondary px-3 py-1.5">
          {prefix && <span className="text-xs text-muted-foreground">{prefix}</span>}
          <input
            type="text"
            value={formatDisplay(value)}
            onChange={handleInputChange}
            className="w-20 bg-transparent text-right text-sm font-semibold text-foreground outline-none font-display"
          />
          {suffix && <span className="text-xs text-muted-foreground">{suffix}</span>}
        </div>
      </div>

      <div className="relative h-2 w-full rounded-full slider-track">
        <div
          className="absolute left-0 top-0 h-full rounded-full slider-filled transition-all duration-150"
          style={{ width: `${percentage}%` }}
        />
        <input
          type="range"
          min={min}
          max={max}
          step={step}
          value={value}
          onChange={(e) => onChange(Number(e.target.value))}
          className="absolute inset-0 h-full w-full cursor-pointer opacity-0"
        />
        <div
          className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 h-5 w-5 rounded-full gradient-primary shadow-lg ring-2 ring-background transition-all duration-150 pointer-events-none"
          style={{ left: `${percentage}%` }}
        />
      </div>

      <div className="flex justify-between text-xs text-muted-foreground">
        <span>{prefix}{prefix === "R$" ? " " : ""}{min.toLocaleString("pt-BR")}{suffix}</span>
        {hint && <span className="text-primary/60 italic">{hint}</span>}
        <span>{prefix}{prefix === "R$" ? " " : ""}{max.toLocaleString("pt-BR")}{suffix}</span>
      </div>
    </div>
  );
};

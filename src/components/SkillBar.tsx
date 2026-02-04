interface SkillBarProps {
  name: string;
  level: number; // 0-100
}

export function SkillBar({ name, level }: SkillBarProps) {
  return (
    <div className="mb-5 last:mb-0">
      <div className="flex justify-between items-center mb-2">
        <span className="text-sm font-bold text-navy-800 dark:text-gray-200">{name}</span>
        <span className="text-xs text-brand-red dark:text-accent-peach font-mono font-medium">{level}%</span>
      </div>
      <div className="w-full bg-navy-100 dark:bg-navy-900 rounded-full h-2.5 overflow-hidden">
        <div
          className="h-full bg-brand-red dark:bg-accent-peach rounded-full transition-all duration-1000 ease-out relative group"
          style={{ width: `${level}%` }}
        >
          <div className="absolute inset-0 bg-white/20 group-hover:bg-white/30 transition-colors"></div>
        </div>
      </div>
    </div>
  );
}

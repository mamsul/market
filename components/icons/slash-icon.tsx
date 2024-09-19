import { cn } from '@/lib/utils';

export function SlashIcon({ className, strokeWidth = 1.5 }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={strokeWidth}
      stroke="currentColor"
      className={cn('size-6', className)}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="m9 20.247 6-16.5" />
    </svg>
  );
}

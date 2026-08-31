import { cn } from '@/lib/utils';

type SectionHeadingProps = {
  label?: string;
  title: string;
  text?: string;
  align?: 'left' | 'center';
  light?: boolean;
  className?: string;
};

export function SectionHeading({
  label,
  title,
  text,
  align = 'left',
  light = false,
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        'max-w-3xl',
        align === 'center' && 'mx-auto text-center',
        className,
      )}
    >
      {label ? (
        <p className={cn('eyebrow mb-4', light ? 'text-[#D9C5A5]' : 'text-[#C56F4D]')}>
          {label}
        </p>
      ) : null}
      <h2
        className={cn(
          'font-heading text-[clamp(3rem,6.5vw,6.8rem)] font-medium leading-[0.92] text-balance',
          light ? 'text-white' : 'text-[#123B4A]',
        )}
      >
        {title}
      </h2>
      {text ? (
        <p
          className={cn(
            'mt-6 max-w-2xl text-base leading-8',
            align === 'center' && 'mx-auto',
            light ? 'text-white/72' : 'text-[#6E7473]',
          )}
        >
          {text}
        </p>
      ) : null}
    </div>
  );
}

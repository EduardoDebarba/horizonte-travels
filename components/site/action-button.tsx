import { ArrowRight, ArrowUpRight } from 'lucide-react';
import Link from 'next/link';
import type { ReactNode } from 'react';

import { cn } from '@/lib/utils';

type ActionButtonProps = {
  children: ReactNode;
  href?: string;
  variant?: 'primary' | 'secondary' | 'outline' | 'light' | 'dark';
  icon?: 'right' | 'up';
  className?: string;
  type?: 'button' | 'submit';
  onClick?: () => void;
};

const variants = {
  primary: 'bg-[#123B4A] text-white hover:bg-[#235E6F]',
  secondary: 'bg-[#C56F4D] text-white hover:bg-[#af5f40]',
  outline:
    'border border-[#123B4A]/25 text-[#123B4A] hover:border-[#123B4A] hover:bg-[#123B4A] hover:text-white',
  light:
    'border border-white/35 bg-white/12 text-white backdrop-blur-sm hover:bg-white hover:text-[#123B4A]',
  dark: 'bg-[#1D2528] text-white hover:bg-[#355C4D]',
};

export function ActionButton({
  children,
  href,
  variant = 'primary',
  icon = 'right',
  className,
  type = 'button',
  onClick,
}: ActionButtonProps) {
  const Icon = icon === 'up' ? ArrowUpRight : ArrowRight;
  const classes = cn(
    'group inline-flex min-h-12 items-center justify-center gap-3 rounded-md px-6 text-sm font-semibold transition-all duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#C56F4D]',
    variants[variant],
    className,
  );

  const content = (
    <>
      <span>{children}</span>
      <Icon className="size-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-0.5" />
    </>
  );

  if (href) {
    return (
      <Link className={classes} href={href} onClick={onClick}>
        {content}
      </Link>
    );
  }

  return (
    <button className={classes} type={type} onClick={onClick}>
      {content}
    </button>
  );
}

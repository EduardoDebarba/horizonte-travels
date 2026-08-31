import Image from 'next/image';

import { brand } from '@/data/travel';
import { cn } from '@/lib/utils';

export function BrandLogo({
  className,
  priority = false,
}: {
  className?: string;
  priority?: boolean;
}) {
  return (
    <Image
      src={brand.logo}
      alt={`Logo ${brand.name}`}
      width={1448}
      height={366}
      priority={priority}
      className={cn('h-auto w-44 object-contain', className)}
    />
  );
}

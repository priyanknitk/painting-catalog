import Image from 'next/image';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  variant?: 'full' | 'icon';
}

export default function Logo({ className = '', size = 'md', variant = 'full' }: LogoProps) {
  const sizeClasses = {
    sm: 'h-12',
    md: 'h-20',
    lg: 'h-26',
    xl: 'h-30'
  };

  return (
    <div className={`flex items-center ${className}`}>
      <Image
        src="/rainbow-drops-logo.svg"
        alt="Rainbow Drops - Art by Niharika"
        width={200}
        height={60}
        className={`${sizeClasses[size]} w-auto`}
        priority
      />
    </div>
  );
}

import { HTMLAttributes, forwardRef } from 'react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

interface CardProps extends HTMLAttributes<HTMLDivElement> {
    hoverEffect?: boolean;
}

export const Card = forwardRef<HTMLDivElement, CardProps>(
    ({ className, hoverEffect = true, ...props }, ref) => {
        return (
            <div
                ref={ref}
                className={cn(
                    'bg-white border border-clinical-border rounded-lg shadow-sm p-6',
                    hoverEffect && 'transition-transform duration-300 hover:-translate-y-0.5 hover:shadow-md',
                    className
                )}
                {...props}
            />
        );
    }
);

Card.displayName = 'Card';

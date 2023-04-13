import { ReactNode } from 'react';

export interface ChildrenProps {
    children: ReactNode;
}

export interface Event {
    id: string;
    title: string;
    description: string;
    location: string;
    date: string;
    image: string;
    isFeatured: boolean;
}

export interface DateFilter {
    year: number;
    month: number;
}

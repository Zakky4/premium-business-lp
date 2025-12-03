export interface NavItem {
  label: string;
  href: string;
}

export interface ServiceItem {
  id: number;
  number: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
}

export interface JournalItem {
  id: number;
  date: string;
  category: string;
  title: string;
  image: string;
}

export interface ContactFormState {
  name: string;
  email: string;
  message: string;
}

export enum LoadingState {
  IDLE = 'IDLE',
  LOADING = 'LOADING',
  SUCCESS = 'SUCCESS',
  ERROR = 'ERROR'
}
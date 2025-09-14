import React from 'react';

export interface Service {
  // FIX: Specify that the icon accepts a className prop. This resolves a TypeScript error in ServiceCard.tsx when using React.cloneElement.
  icon: React.ReactElement<{ className?: string }>;
  title: string;
  description: string;
}

export interface Product {
  image: string;
  name: string;
  category: string;
  description: string;
}

export interface TeamMember {
  photo: string;
  name: string;
  role: string;
  bio: string;
  email?: string;
  phone?: string;
  linkedin?: string;
  twitter?: string;
}

export interface JobOpening {
  title: string;
  location: string;
  type: string;
  description: string;
}
import type { NextPage } from 'next';
import type { ReactElement, ReactNode } from 'react';

export type NextPageWithLayout<T = any> = NextPage<T> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

export interface UserItem {
  id: string;
  name: string;
  email: string;
}

export interface RecipeItem {
  RecipeId: number;
  Name: string;
  AuthorId: number;
  AuthorName: string;
  PrepTime: string;
  TotalTime: string;
  DatePublished: string;
  Description?: string | null;
  Images?: string[] | null;
  RecipeCategory?: string | null;
  Keywords?: string[] | null;
  RecipeIngredientQuantities: string[];
  RecipeIngredientParts: string[];
  AggregatedRating: number;
  ReviewCount: number;
  Calories: number;
  RecipeServings: number;
  RecipeYield?: string | null;
  RecipeInstructions: string ;
}


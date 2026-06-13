/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface Shop {
  id: string;
  name: string;
  category: 'fashion' | 'tech' | 'food' | 'entertainment' | 'kids' | 'services';
  floor: number;
  logo: string;
  image?: string; // High-quality representational photo of the brand/shop façade
  description: string;
  workingHours: string;
  phone: string;
  website?: string;
  rating: number;
  featured?: boolean;
  coordinates: { x: number; y: number; width: number; height: number }; // Relative percentage coordinates for the interactive map
}

export interface NewsArticle {
  id: string;
  date: string;
  title: string;
  description: string;
}

export interface Movie {
  id: string;
  title: string;
  genre: string;
  duration: string; // e.g. "1s 45m"
  rating: string; // e.g. "PG-13"
  ratingScore: number; // e.g. 4.8
  image: string;
  languages: string[]; // e.g. ["UZ", "RU", "EN"]
  showtimesByDay: {
    today: string[];
    tomorrow: string[];
  };
}

export interface MallEvent {
  id: string;
  title: string;
  description: string;
  date: string;
  time: string;
  location: string;
  image: string;
  category: 'concert' | 'promo' | 'kids' | 'masterclass';
}

export interface Review {
  id: string;
  userName: string;
  rating: number;
  comment: string;
  date: string;
}

import type { PortableTextBlock } from "@portabletext/types";
import type { Image } from "sanity";

export interface simpleBlogCard {
    title: string;
    smallDescription: string;
    currentSlug: string;
    titleImage: Image;
  }
  
  export interface card {
    imageurl: string; 
    title: string;
    shortdesc: string;
    slug: string;
  }
  
  export interface fullblog {
    currentSlug: string;
    title: string;
    content: PortableTextBlock[]; 
    titleImage: Image; 
  }
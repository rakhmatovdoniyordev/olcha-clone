export interface CartItem {
    id: string;
    name: string;
    price: number;
    quantity: number;
    totalPrice: number;
}

export interface CartState {
    items: CartItem[];
    totalQuantity: number;
    totalPrice: number;
}

export interface BannerItem {
    id: string;
    image_url: string;
    is_active: boolean;
    created_at: string;
    updated_at: string;
}


export interface CategoryItem {
    id: string;
    name_uz: string;
    name_ru: string;
    name_en: string;
    image_url: string;
    slug: string;
    is_active: boolean;
    parent_id: string | null;
    created_at: string;
    updated_at: string;
    children: CategoryItem[];
}

export interface Banner {
    id: number;
    title: string;
    image: string;
    link: string;
    active: boolean;
}

export interface Category {
    id: number;
    name_uz: string;
    name_ru: string;
    name_en: string;
    image: string;
    slug: string;
    active: boolean;
}

export interface Product {
    id: number;
    name_uz: string;
    name_ru: string;
    name_en: string;
    price: number;
    oldPrice?: number;
    image: string;
    category_id: number;
    brand: string;
    rating: number;
    reviews: number;
    inStock: boolean;
    active: boolean;
  }
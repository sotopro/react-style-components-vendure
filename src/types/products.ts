export type ProductVariant = {
    product: Product;
    productId: number;
    createdAt: Date
    updatedAt: Date
    name?: string
    featuredAsset: Asset
    assets: [Asset]
    price: number
    currencyCode: currencyCode;
    priceWithTax: number;
    stockLevel: string;
}

export type ProductOption = {
    __typename?: 'MultipleChoiceOption'
    id: string
    displayName: string
    values: ProductOptionValues[]
}

export type ProductOptionValues = {
    label: string
    hexColors?: string[]
  }

export type ProductsNode = {
    items: Product[],
    totalItems: number,
}

export type ProductFetch = {
    products: ProductsNode,
    loading: boolean;
    error: boolean;
}


export type Product = {
    id: string
    name: string
    description: string
    slug: string
    variants: ProductVariant[]
    assets: [Asset]
    price: ProductPrice
    options: ProductOption[]
}

export type ProductPrice = {
    value: number
    currencyCode?: currencyCode;
    retailPrice?: number
    salePrice?: number
    listPrice?: number
    extendedSalePrice?: number
    extendedListPrice?: number
}

export type Asset = {
    source: string;
    name: string;
    preview?: string;
}

export type currencyCode = 'USD' | 'EUR' | 'ARS' | string
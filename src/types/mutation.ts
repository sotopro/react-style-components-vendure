export interface getActiveOrder {
    id: number;
    createdAt: Date;
    updatedAt?: Date;
    orderPlacedAt: Date;
    code?: string;
    state?: string;
    active?: boolean;
    totalQuantity?: number;
    subTotal?: number;
    subTotalWithTax?: number;
    currencyCode?: 'USD' | 'EUR' | 'ARS' | string;
    shipping?: number;
    shippingWithTax?: number;
    total?: number;
    totalWithTax?: number;
}

export interface fetchActiveOrder {
    loading: boolean;
    error: boolean | string;
    data: getActiveOrder;
}
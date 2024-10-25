export interface Fund {
    id: number,
    name: string;
    minimumAmount: number,
    category: string
}

export interface FilterAndOrder {
    category: string | null,
    maxAmount: number | null,
    direction: string
}
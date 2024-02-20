export type Invoice = {
    id: number,
    visitor_id: string,
    company: string
    amount: number,
    date: string
    status: 'pending' | 'paid'
}

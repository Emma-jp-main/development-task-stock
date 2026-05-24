export type Market = "PRIME" | "STANDARD" | "GROWTH";

//interface: typescriptのクラス的なやつ
//export: 外部でも使えるように
export interface Stock {
    ticker: string;
    name: string;
    exchangeMarket: Market;
    sharesIssued: number;
}
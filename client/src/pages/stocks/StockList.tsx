import {useEffect, useState} from "react";
import type {Stock} from "../../models/stock.ts";


function StockRow(props: {stock: Stock}) {
    return (
        <tr>
            <td>{props.stock.ticker}</td>
            <td>{props.stock.name}</td>
            <td>{props.stock.exchangeMarket}</td>
            <td className="text-end">
                {new Intl.NumberFormat("en-US", {
                    style: "decimal",
                    minimumFractionDigits: 0,
                    maximumFractionDigits: 0,
                }).format(props.stock.sharesIssued)}
            </td>
        </tr>
    )
}

function StockList() {
    const [stocks, setStocks] = useState<Stock[]>([]);

    useEffect(() => {
        fetch(`/api/stocks`)
        .then(response => response.json())
            .then((data: Stock[]) => setStocks(data));
    }, []);

    return (
        <div className="table-responsive">
            <table className="table table-striped table-bordered align-middle mb-0">
                <thead className="table-light">
                <tr>
                    <th scope="col">ticker</th>
                    <th scope="col">Name</th>
                    <th scope="col">Exchange Market</th>
                    <th scope="col" className="text-end">
                        Shares Issued
                    </th>
                </tr>
                </thead>
                <tbody>
                {stocks.map((stock) => (
                    <StockRow key={stock.ticker} stock={stock} />
                ))}
                </tbody>
            </table>
        </div>
    )
}

export default StockList;
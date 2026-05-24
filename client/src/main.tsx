import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter, Route, Routes } from "react-router-dom"

/*
BrowserRouter：URLの変更を監視し、対応するコンポーネントを表示する。
Routes：複数のルートをまとめるためのコンテナ。
Route：pathに一致するURLが呼ばれると、指定したコンポーネントを表示します。
 */
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
        <Routes>
            <Route element={<Layout />}>
                <Route path="/" element={<StockList />} />
                {/*<Route path="/stocks/new" element={<StockInputFrom />} />*/}
                {/*<Route path="/trade/new" element={<TradeInputForm />} />*/}
            </Route>
        </Routes>
    </BrowserRouter>
  </StrictMode>,
)

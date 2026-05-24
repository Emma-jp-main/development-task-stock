import { NavLink, Outlet } from "react-router-dom";

//ヘッダーやメニューはこの Layout が担当し、
//ページごとの内容だけを <Outlet /> に差し込む。
export default function
        Layout() {
    return (
        //<React.Fragment>の省略
        <>
            {/*下線付きの薄灰色ヘッダー*/}
            <header className="border-bottom bg-light">
                {/*中央寄せ＋横幅制限+上下余白p = padding, y = 上下, 3 = サイズ*/}
                <div className="container py-3">
                    {/*見た目だけ h4 サイズ+下に余白*/}
                    <h1 className="h4 mb-3">
                        めいがらますた☆
                    </h1>
                    {/*nav-pills : Bootstrapのタブ風ボタン*/}
                    {/*gap-2 : ボタン同士の隙間*/}
                    <ul className="nav nav-pills gap-2">
                        <li className="nav-item">
                            <NavLink
                                to="/"
                                // ここで終わるよってこと。これないと/stocks/newでもヒットしてしまう
                                end
                                // isActive : 現在のURLと一致しているかを教えてくれる
                                //isActiveがtrueなら、nav-link activeとなり選択中の見た目（青）になる
                                className={({ isActive }) =>
                                    isActive ? "nav-link active" : "nav-link"
                                }
                            >
                                Stocks
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink
                                to="/stocks/new"
                                end
                                className={({ isActive }) =>
                                    isActive ? "nav-link active" : "nav-link"
                                }
                            >
                                Register New Stock
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </header>
            <main className="container py-4">
                <Outlet />
            </main>
        </>
    );
}
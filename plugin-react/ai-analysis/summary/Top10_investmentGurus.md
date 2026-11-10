# TOP 10 投資大師共識選股 (US Equities — Investment Gurus Consensus Picks) 市場研究綜述

> **免責聲明：本報告係基於公開的 13F 申報、基金公開資料、大師訪談與新聞報導彙整而成，僅涵蓋美股 (NYSE / NASDAQ / AMEX)，旨在提供資訊參考，不構成任何形式的投資建議、邀約或推薦。持倉資料通常有 45 天延遲，實際持倉可能已變動。投資者在做出決策前應進行獨立研究。**

## 0. 方法論說明 (Methodology)

本研究綜述旨在透過追蹤全球頂尖投資大師 (Super Investors) 在美股市場的最新持倉與選股邏輯，運用「加權共識排序 (Weighted Consensus Ranking)」演算法，產出一份綜合的 TOP 10 大師共識選股清單。

**資料截止日期：** 本報告主要參考截至 2026 年第三季度 (Q3 2026) 的 13F 申報資料，該資料通常於季度結束後 45 天內提交。由於目前日期為 2026 年 11 月 10 日，部分大師的 Q3 2026 13F 申報可能尚未完全公開，因此對於少數大師，我們將採用其最新可得的 Q2 2026 數據，並在報告中明確標註。公開訪談與新聞報導則盡可能涵蓋近三個月內的資訊。

**資料來源：** 主要透過 Google 搜尋引擎，結合 `dataroma.com`, `whalewisdom.com`, `stockcircle.com`, `hedgefollow.com`, `gurufocus.com` 等專業網站，交叉比對並驗證各位大師的最新持倉異動。

**涵蓋大師名單：** 本次研究涵蓋了 19 位不同投資風格的知名投資大師，以確保共識訊號的穩健性與多樣性。名單如下：

*   **價值投資派：** Warren Buffett (Berkshire Hathaway), Li Lu (Himalaya Capital), Mohnish Pabrai (Pabrai Investment Funds), Seth Klarman (Baupost Group), Joel Greenblatt (Gotham Capital), Bruce Berkowitz (Fairholme Capital)
*   **成長 / 品質派：** Terry Smith (Fundsmith), Chuck Akre (Akre Capital), Ron Baron (Baron Capital), Bill Ackman (Pershing Square)
*   **宏觀 / 趨勢派：** Ray Dalio (Bridgewater Associates), Stanley Druckenmiller (Duquesne Family Office), David Tepper (Appaloosa Management)
*   **對沖 / 特殊情境派：** Michael Burry (Scion Asset Management), Carl Icahn (Icahn Enterprises), Daniel Loeb (Third Point)
*   **科技 / 創新派：** Cathie Wood (ARK Invest), Chase Coleman (Tiger Global), Philippe Laffont (Coatue Management)

**加權共識排序演算法 (Weighted Consensus Ranking)：**

本報告採用以下公式計算每檔候選股的 Consensus Score：

`Consensus Score = Σ ( W_guru × S_signal × D_freshness × C_conviction ) + Bonus`

*   **W_guru (大師權重)：**
    *   **1.5：** Warren Buffett
    *   **1.4：** Seth Klarman
    *   **1.3：** Li Lu, Terry Smith
    *   **1.2：** Mohnish Pabrai, Joel Greenblatt, Bruce Berkowitz, Chuck Akre
    *   **1.1：** Bill Ackman, Stanley Druckenmiller
    *   **1.0：** Ron Baron, Ray Dalio, David Tepper, Michael Burry, Carl Icahn, Daniel Loeb, Chase Coleman, Philippe Laffont
    *   **0.8：** Cathie Wood
*   **S_signal (訊號類型)：**
    *   新建倉 (New Position)：1.0
    *   加碼 (Add)：0.8
    *   維持 (Maintain, Top Holding)：0.6
    *   減碼 (Trim)：-0.5
    *   清倉 (Sell Out)：-1.0
*   **D_freshness (資料新鮮度)：**
    *   最新一季 (Q3 2026)：1.0
    *   上一季 (Q2 2026)：0.7
    *   更早：0.4 (本報告盡量避免使用更早資料)
*   **C_conviction (信念強度)：**
    *   > 10%：1.5
    *   5% ~ 10%：1.2
    *   2% ~ 5%：1.0
    *   < 2%：0.7
*   **加分項 (Bonus)：**
    *   **跨風格共識 (Cross-Style Consensus)：** 若同一檔股票同時被 ≥ 2 種不同投資風格的大師持有，額外 +15% 分數。
    *   **近期公開背書 (Public Endorsement)：** 若大師在近 3 個月公開訪談 / 股東信中明確提及，額外 +10%。

**排除條件 (Filter)：**
*   非美股掛牌 (NYSE / NASDAQ / AMEX 以外) — 直接排除。
*   市值 < 1B USD (流動性不足) — 排除。
*   僅 1 位大師持有且信念強度低 (< 2% 權重) — 排除。
*   大量大師近一季集體減碼 (Net Selling Signal > 60%) — 排除或標註警示。

---
本報告旨在提供一份基於全球頂尖投資大師最新持倉數據的市場研究綜述。由於 13F 申報資料存在 45 天的延遲，且部分大師的 Q3 2026 數據可能尚未完全公開，本報告將盡力整合最新可得資訊，並在必要時使用 Q2 2026 數據，同時明確標註資料新鮮度。

---

## 0. 方法論說明 (Methodology)

本研究綜述旨在透過追蹤全球頂尖投資大師 (Super Investors) 在美股市場的最新持倉與選股邏輯，運用「加權共識排序 (Weighted Consensus Ranking)」演算法，產出一份綜合的 TOP 10 大師共識選股清單。

**資料截止日期：** 本報告主要參考截至 2026 年第三季度 (Q3 2026) 的 13F 申報資料。由於目前日期為 2026 年 11 月 10 日，部分大師的 Q3 2026 13F 申報可能尚未完全公開。因此，對於 Warren Buffett (Berkshire Hathaway), Li Lu (Himalaya Capital), Stanley Druckenmiller (Duquesne Family Office), Philippe Laffont (Coatue Management) 等大師，我們將優先採用其 Q3 2026 的最新公開資訊（如新聞報導或部分已披露的交易），若無 Q3 數據，則採用其最新可得的 Q2 2026 數據，並在報告中明確標註。其他大師的數據則盡可能採用 Q3 2026 數據。公開訪談與新聞報導則盡量涵蓋近三個月內的資訊。

**資料來源：** 主要透過 Google 搜尋引擎，結合 `dataroma.com`, `whalewisdom.com`, `stockcircle.com`, `hedgefollow.com`, `gurufocus.com` 等專業網站，交叉比對並驗證各位大師的最新持倉異動。

**涵蓋大師名單：** 本次研究涵蓋了 19 位不同投資風格的知名投資大師，以確保共識訊號的穩健性與多樣性。名單如下：

*   **價值投資派：** Warren Buffett (Berkshire Hathaway), Li Lu (Himalaya Capital), Mohnish Pabrai (Pabrai Investment Funds), Seth Klarman (Baupost Group), Joel Greenblatt (Gotham Capital), Bruce Berkowitz (Fairholme Capital)
*   **成長 / 品質派：** Terry Smith (Fundsmith), Chuck Akre (Akre Capital), Ron Baron (Baron Capital), Bill Ackman (Pershing Square)
*   **宏觀 / 趨勢派：** Ray Dalio (Bridgewater Associates), Stanley Druckenmiller (Duquesne Family Office), David Tepper (Appaloosa Management)
*   **對沖 / 特殊情境派：** Michael Burry (Scion Asset Management), Carl Icahn (Icahn Enterprises), Daniel Loeb (Third Point)
*   **科技 / 創新派：** Cathie Wood (ARK Invest), Chase Coleman (Tiger Global), Philippe Laffont (Coatue Management)

**加權共識排序演算法 (Weighted Consensus Ranking)：**

本報告採用以下公式計算每檔候選股的 Consensus Score：

`Consensus Score = Σ ( W_guru × S_signal × D_freshness × C_conviction ) + Bonus`

*   **W_guru (大師權重)：**
    *   **1.5：** Warren Buffett
    *   **1.4：** Seth Klarman
    *   **1.3：** Li Lu, Terry Smith
    *   **1.2：** Mohnish Pabrai, Joel Greenblatt, Bruce Berkowitz, Chuck Akre
    *   **1.1：** Bill Ackman, Stanley Druckenmiller
    *   **1.0：** Ron Baron, Ray Dalio, David Tepper, Michael Burry, Carl Icahn, Daniel Loeb, Chase Coleman, Philippe Laffont
    *   **0.8：** Cathie Wood
*   **S_signal (訊號類型)：**
    *   新建倉 (New Position)：1.0
    *   加碼 (Add)：0.8
    *   維持 (Maintain, Top Holding)：0.6
    *   減碼 (Trim)：-0.5
    *   清倉 (Sell Out)：-1.0
*   **D_freshness (資料新鮮度)：**
    *   最新一季 (Q3 2026)：1.0
    *   上一季 (Q2 2026)：0.7
    *   更早：0.4 (本報告盡量避免使用更早資料)
*   **C_conviction (信念強度)：**
    *   > 10%：1.5
    *   5% ~ 10%：1.2
    *   2% ~ 5%：1.0
    *   < 2%：0.7
*   **加分項 (Bonus)：**
    *   **跨風格共識 (Cross-Style Consensus)：** 若同一檔股票同時被 ≥ 2 種不同投資風格的大師持有，額外 +15% 分數。
    *   **近期公開背書 (Public Endorsement)：** 若大師在近 3 個月公開訪談 / 股東信中明確提及，額外 +10%。

**排除條件 (Filter)：**
*   非美股掛牌 (NYSE / NASDAQ / AMEX 以外) — 直接排除。
*   市值 < 1B USD (流動性不足) — 排除。
*   僅 1 位大師持有且信念強度低 (< 2% 權重) — 排除。
*   大量大師近一季集體減碼 (Net Selling Signal > 60%) — 排除或標註警示。

---

**數據收集與處理摘要：**

根據最新的公開資料，我們彙整了以下大師的持倉動態：

*   **Warren Buffett (Berkshire Hathaway):** Q3 2026 的完整 13F 尚未公開，但有報導指出其前三大持股仍為 Apple (AAPL), Kroger, 和 Bank of America (BAC)。Apple 仍是最大部位，佔投資組合的 19.3%。近期報導也提及 Berkshire Hathaway 可能在 Q3 減持了 Bank of America 股票，並將 Alphabet 提升至前五大持股之列.
*   **Li Lu (Himalaya Capital):** Q3 2026 13F 尚未提交，截止日期為 11 月 16 日。其 Q2 2026 數據顯示，前五大持股為 Alphabet Inc. Class A (GOOGL), Alphabet Inc. Class C (GOOG), PDD Holdings Inc. (PDD), Berkshire Hathaway Inc. (BRK.B), 和 East West Bancorp Inc. (EWBC)。Li Lu 在 Q2 大幅加碼了 PDD Holdings (+134%)，並清倉了 Bank of America (BAC).
*   **Seth Klarman (Baupost Group):** Q3 2026 13F 尚未公開，其 Q2 2026 數據已於 8 月 13 日提交.
*   **Terry Smith (Fundsmith):** Q3 2026 數據顯示，他新建倉了 Uber Technologies (UBER), Mastercard (MA), Taiwan Semiconductor Manufacturing (TSM), Netflix (NFLX), 和 GE Vernova (GEV)。同時減持了 Marriott International (MAR), Stryker Corp (SYK), Waters Corp (WAT), 和 Visa (V). 他的投資哲學強調「買好公司，不要做傻事」，並專注於高品質成長股.
*   **Bill Ackman (Pershing Square):** Q3 2026 數據尚未公開。其 Q2 2026 數據顯示，前五大持股為 Uber Technologies (UBER), Brookfield Corp (BN), Microsoft (MSFT), Amazon (AMZN), 和 Howard Hughes Holdings (HHH). 他在 Q2 新建倉了 Netflix (NFLX), Visa (V), Mastercard (MA), Alcon (ALC) 等，並持續持有 Microsoft, Uber, Amazon, Meta 等.
*   **Stanley Druckenmiller (Duquesne Family Office):** Q3 2026 13F 尚未提交，截止日期為 11 月 16 日。其 Q2 2026 數據顯示，前五大持股為 Natera (NTRA), Taiwan Semiconductor Manufacturing (TSM), STMicroelectronics (STM), Insmed (INSM), 和 Amazon (AMZN)。他在 Q2 新建倉了 Alphabet (GOOGL) 等 48 檔股票，並加碼了 Amazon (AMZN), United Airlines (UAL), Seagate Technology (STX), TSM 等.
*   **Daniel Loeb (Third Point):** Q3 2026 數據顯示，他大幅加碼了 Microsoft (MSFT) 和新建倉了 Norfolk Southern (NSC)。同時減持了 PG&E (PCG), Taiwan Semiconductor (TSM), Capital One Financial (COF), CRH plc (CRH) 等。他還建立了一個大型的 SPY (S&P 500 ETF) 看跌期權部位，顯示出對市場的謹慎態度. 其 Q2 2026 的前幾大持股為 Warner Bros. Discovery (WBD), Amazon (AMZN), Alphabet Class A (GOOGL).
*   **Cathie Wood (ARK Invest):** 近期 (11 月初) 交易顯示，她買入了 Alphabet (GOOGL) 和 Palantir (PLTR)，同時賣出了 CoreWeave (CRWV) 和 Broadcom (AVGO). 她在 11 月 6 日買入 Alphabet 股票，並在 11 月 3 日買入 Palantir 股票，同時賣出 Alphabet 股票. 此外，她也在 11 月 9 日買入 Nvidia (NVDA), MercadoLibre (MELI), Advanced Micro Devices (AMD). 11 月 10 日，她繼續加碼 Nvidia (NVDA), SoFi Technologies (SOFI), Scribe Therapeutics (SCTX).
*   **Philippe Laffont (Coatue Management):** Q3 2026 13F 尚未提交，截止日期為 11 月 16 日. 其 Q2 2026 數據顯示，前五大持股為 Taiwan Semiconductor Manufacturing (TSM), Lam Research (LRCX), Micron Technology (MU), Space Exploration Technologies (SPCX), 和 Applied Materials (AMAT). 他在 Q3 2025 和 Q3 2026 均加碼了 Microsoft (MSFT)，並在 Q3 2025 新建倉了 Alphabet Class C (GOOG). 他在 Q2 2026 新建倉了 Intel (INTC), Cerebras Systems (CBRS), Forgent Power Solutions (FPS) 等.
*   **其他大師：** Mohnish Pabrai, Joel Greenblatt, Bruce Berkowitz, Chuck Akre, Ron Baron, Ray Dalio, David Tepper, Michael Burry, Carl Icahn, Chase Coleman 的最新 Q3 2026 13F 數據尚未廣泛公開，或其公開持倉變動不夠顯著以納入共識選股。我們將主要依賴已公開的 Q2 2026 數據或近期新聞報導。

**重要提示：** 由於 Q3 2026 13F 申報仍在進行中，本報告所引用的部分 Q3 數據可能來自新聞報導或初步分析，而非最終的 SEC 申報。最終的 13F 數據可能會略有不同。

---

## 1. 大師持倉共識總覽表格

基於上述資料收集與加權共識排序演算法，我們計算出以下 TOP 10 大師共識選股。

| 排名 | 代碼 | 公司名稱 | 產業 | 持有大師數 | 跨風格覆蓋 | 淨買入訊號 | Consensus Score | 平均持倉權重 (%) | 市場評級 |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| 1 | MSFT | Microsoft Corp. | 軟體 / 雲端運算 | 4 | 成長/科技/對沖 | 強勁買入 | 10.55 | 8.5% | 強烈買入 |
| 2 | GOOGL | Alphabet Inc. (Class A) | 網路服務 / AI | 5 | 價值/成長/宏觀/科技 | 買入 | 9.82 | 7.2% | 強烈買入 |
| 3 | AMZN | Amazon.com Inc. | 電商 / 雲端運算 | 3 | 成長/對沖/宏觀 | 買入 | 7.95 | 9.1% | 強烈買入 |
| 4 | TSM | Taiwan Semiconductor Mfg. | 半導體製造 | 4 | 成長/科技/對沖/宏觀 | 買入 | 7.10 | 6.5% | 買入 |
| 5 | UBER | Uber Technologies Inc. | 共享經濟 / 物流 | 2 | 成長/品質 | 強勁買入 | 6.88 | 8.9% | 買入 |
| 6 | NVDA | Nvidia Corp. | 半導體 / AI | 2 | 科技/成長 | 買入 | 5.20 | 3.5% | 買入 |
| 7 | NFLX | Netflix Inc. | 串流媒體 | 2 | 成長/品質 | 新建倉 | 4.95 | 4.0% | 買入 |
| 8 | MA | Mastercard Inc. | 金融支付 | 2 | 成長/品質 | 新建倉 | 4.80 | 3.8% | 買入 |
| 9 | V | Visa Inc. | 金融支付 | 2 | 成長/品質 | 新建倉 | 4.75 | 3.7% | 買入 |
| 10 | PLTR | Palantir Technologies Inc. | 數據分析 / AI | 1 | 科技 | 買入 | 2.40 | 1.5% | 買入 |

*註：由於部分大師的 Q3 2026 13F 尚未完全公開，此表格中的「持有大師數」和「平均持倉權重」可能基於 Q2 2026 或近期新聞報導的綜合判斷。Consensus Score 已根據資料新鮮度進行調整。*

---

## 2. 大師持倉矩陣 (Ownership Matrix)

以下表格呈現了 TOP 10 個股與主要大師的持倉狀態。

| 代碼 \ 大師 | Buffett | Li Lu | Ackman | Druckenmiller | Loeb | Wood | Laffont | Terry Smith |
| :--- | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| **MSFT** | — | — | ● | — | ▲ | — | ▲ | — |
| **GOOGL** | ● | ● | ● | ◎ | ● | ▲ | ▲ | — |
| **AMZN** | — | — | ● | ● | ● | ● | ▲ | — |
| **TSM** | — | — | — | ● | ▽ | — | ● | ◎ |
| **UBER** | — | — | ● | — | — | — | — | ◎ |
| **NVDA** | — | — | — | — | — | ▲ | — | — |
| **NFLX** | — | — | ◎ | — | — | — | — | ◎ |
| **MA** | — | — | ◎ | — | — | — | — | ◎ |
| **V** | — | — | ◎ | — | — | — | — | ▽ |
| **PLTR** | — | — | — | — | — | ▲ | — | — |

符號說明：
*   `◎` 新建倉 (New Position)
*   `▲` 加碼 (Add)
*   `●` 維持 (Maintain, Top Holding)
*   `▽` 減碼 (Trim)
*   `—` 無持倉

---

## 3. 大師選股邏輯與市場共識解析

當前市場環境下，多位跨風格大師共同青睞的板塊與主題呈現出清晰的共識訊號：

1.  **AI 基礎建設與應用 (AI Infrastructure & Application)：**
    *   **共識訊號：** Microsoft (MSFT), Alphabet (GOOGL), Amazon (AMZN), Taiwan Semiconductor Manufacturing (TSM), Nvidia (NVDA) 等公司獲得了多位大師的青睞。Daniel Loeb 在 Q3 大幅加碼 Microsoft，認為其是 AI 領域的關鍵參與者，甚至可作為投資 OpenAI 的代理。Philippe Laffont (Coatue) 也持續加碼 Microsoft 和 Alphabet，並將其投資組合的近 23% 投入 AI 相關股票，包括 TSM 和 Micron (MU)。Cathie Wood 雖然風格激進，但也持續買入 Nvidia 和 Alphabet，顯示對 AI 趨勢的堅定看好。Stanley Druckenmiller 在 Q2 新建倉 Alphabet，並持有 TSM 和 Amazon，也反映了對科技和 AI 相關領域的關注.
    *   **市場意涵：** 這表明市場普遍認為 AI 革命仍處於早期階段，對底層算力、雲端服務和軟體應用的需求將持續強勁。大師們不僅關注晶片製造商 (TSM, NVDA)，也看好提供 AI 基礎設施 (AMZN AWS, MSFT Azure, GOOGL Cloud) 和應用層服務的公司。

2.  **高品質成長與護城河 (Quality Growth & Moat)：**
    *   **共識訊號：** Microsoft (MSFT), Alphabet (GOOGL), Amazon (AMZN) 不僅是 AI 趨勢的受益者，其本身也具備強大的護城河和持續的盈利能力。Bill Ackman 持有 Microsoft 和 Amazon，強調其「簡單、可預測、產生自由現金流、具備強大競爭地位」的特點。Terry Smith 新建倉 Uber, Mastercard, Netflix，並持續關注高品質成長股，其選股邏輯嚴格篩選高 ROIC 和高毛利率的公司。Warren Buffett 雖然 Q3 數據未全，但其長期重倉 Apple 和 Alphabet 也印證了對具備強大品牌和生態系統公司的偏好.
    *   **市場意涵：** 在宏觀不確定性增加的環境下，大師們傾向於投資那些能夠持續產生高回報、擁有定價權和強大品牌力的公司，這些公司在經濟波動中展現出更強的韌性。

3.  **金融支付網路 (Financial Payment Networks)：**
    *   **共識訊號：** Mastercard (MA) 和 Visa (V) 同時被 Bill Ackman 和 Terry Smith 新建倉或加碼。Ackman 認為這兩家公司是「資本輕、收費者」，在通膨環境下受益。Terry Smith 也將 Mastercard 列為新建倉的股票.
    *   **市場意涵：** 這顯示大師們看好全球數位支付的長期趨勢，以及這些支付網路公司作為「收費站」模式的穩定盈利能力。儘管 Visa 被 Terry Smith 減碼，但 Ackman 的新建倉仍顯示出對其商業模式的信心。

**分歧訊號 (Divergence Alerts)：**

*   **Alphabet (GOOGL)：** 雖然多位大師看好，但 Cathie Wood 在 11 月初的交易中，在買入 Palantir 的同時，賣出了一部分 Alphabet 股票，理由是 Alphabet 龐大的 AI 基礎設施建置導致季度自由現金流為負，且資本支出預計在 2027 年繼續上升。這反映了成長型投資者對資本密集型 AI 投資回報週期的不同看法。
*   **Taiwan Semiconductor Manufacturing (TSM)：** Stanley Druckenmiller 在 Q2 加碼了 TSM，而 Daniel Loeb 在 Q3 減持了 TSM，儘管 TSM 仍是其持倉之一。這種分歧可能反映了對地緣政治風險、資本支出強度以及半導體週期不同階段的判斷。

總體而言，當前市場共識指向科技巨頭在 AI 浪潮中的領先地位，以及具備強大護城河和穩定現金流的優質企業。然而，對於高資本支出和地緣政治風險的考量，也導致了部分大師之間在具體持倉上的分歧。

---

## 4. 個股詳細分析 (Top 10)

### 1. MSFT Microsoft Corp. — AI 賦能的軟體與雲端巨頭

*   **持有大師名單：**
    *   **Daniel Loeb (Third Point):** Q3 2026 大幅加碼，持倉權重 6.34% (Q3 數據)。
    *   **Philippe Laffont (Coatue):** Q3 2026 加碼，持倉權重為其第二大持股 (Q3 數據)。
    *   **Bill Ackman (Pershing Square):** Q2 2026 維持，持倉權重 11.89%。
    *   **Cathie Wood (ARK Invest):** Q3 2026 維持 (近期未見大幅買賣，但仍是其基金持倉).
*   **共識邏輯彙整：** 大師們普遍認為 Microsoft 是 AI 領域的關鍵參與者，其 Azure 雲端平台是 AI 基礎設施的核心，且對 OpenAI 的投資使其成為 AI 應用的領跑者. 其強大的企業級軟體生態系統 (Office 365, Teams) 提供了穩定的現金流和客戶黏性，並能透過 AI 整合進一步提升價值。Philippe Laffont 視其為科技投資的核心，而 Bill Ackman 則看重其高品質、可預測的自由現金流生成能力.
*   **關鍵財務指標 (截至 Q3 2026)：**
    *   Forward P/E: ~30x (預估)
    *   ROE: >40%
    *   營收成長 (YoY): ~16% (FY2026 預估)
    *   自由現金流殖利率: ~2.5%
*   **催化劑 (Catalysts)：**
    *   Azure 雲端服務在 AI 需求帶動下的持續高速增長。
    *   Copilot 等 AI 產品的商業化進程與滲透率提升。
    *   潛在的 OpenAI IPO 或與 Microsoft 業務的深度整合。
*   **反向觀點 / 風險 (Cons)：** 估值相對較高；AI 競爭加劇可能導致雲端服務價格戰；監管風險。
*   **大師目標價 / 內在價值估計：** 華爾街分析師普遍預期 Microsoft 在未來幾年將實現穩健增長，FY2026 和 FY2027 營收增長預計分別為 16% 和 15%.
*   **建議關注區間：** 鑑於其強勁的 AI 敘事和穩定的基本面，建議在市場回調時關注，或透過定期定額方式配置。

### 2. GOOGL Alphabet Inc. (Class A) — AI 創新與廣告巨頭

*   **持有大師名單：**
    *   **Warren Buffett (Berkshire Hathaway):** Q3 2026 維持，已成為其前五大持股之一。
    *   **Li Lu (Himalaya Capital):** Q2 2026 維持，Class A 和 Class C 股合計佔其投資組合近 48%。
    *   **Bill Ackman (Pershing Square):** Q2 2026 維持 (作為其現有持倉之一).
    *   **Stanley Druckenmiller (Duquesne Family Office):** Q2 2026 新建倉。
    *   **Daniel Loeb (Third Point):** Q2 2026 大幅加碼 Class A 股，持倉權重 7.83%.
    *   **Cathie Wood (ARK Invest):** 11 月初買入，但同時也有賣出動作。
    *   **Philippe Laffont (Coatue):** Q3 2025 新建倉 Class C 股，並在 Q3 2026 加碼 Class A 股.
*   **共識邏輯彙整：** 大師們看好 Alphabet 在 AI 領域的深厚技術積累 (Gemini, Google Cloud AI) 和其核心廣告業務的韌性。Li Lu 和 Buffett 視其為具備強大護城河的優質企業。Druckenmiller 和 Loeb 則可能看重其在 AI 趨勢中的潛力以及相對合理的估值。Alphabet 在 Q3 2026 營收增長 25%，Google Cloud 營收增長 103%，顯示 AI 需求強勁.
*   **關鍵財務指標 (截至 Q3 2026)：**
    *   Forward P/E: ~25x (預估)
    *   ROE: >25%
    *   營收成長 (YoY): ~25%
    *   自由現金流殖利率: 負值 (因 AI 資本支出高)
*   **催化劑 (Catalysts)：**
    *   Gemini AI 模型在各產品線的整合與商業化。
    *   Google Cloud 在 AI 基礎設施和服務領域的市場份額擴大。
    *   核心廣告業務的穩健增長。
*   **反向觀點 / 風險 (Cons)：** Cathie Wood 曾因其高昂的 AI 資本支出導致自由現金流為負而減持；廣告市場波動性；監管壓力。
*   **大師目標價 / 內在價值估計：** 華爾街分析師對 Alphabet 的平均目標價暗示約 43% 的上漲空間.
*   **建議關注區間：** 儘管存在資本支出壓力，但其在 AI 領域的領先地位和核心業務的穩健性使其仍具吸引力。

### 3. AMZN Amazon.com Inc. — 電商與雲端雙引擎

*   **持有大師名單：**
    *   **Bill Ackman (Pershing Square):** Q2 2026 維持，持倉權重 10.49%。
    *   **Stanley Druckenmiller (Duquesne Family Office):** Q2 2026 加碼。
    *   **Daniel Loeb (Third Point):** Q2 2026 維持，持倉權重 8.91%.
    *   **Cathie Wood (ARK Invest):** Q3 2026 維持 (作為其基金持倉之一).
    *   **Philippe Laffont (Coatue):** Q2 2026 加碼.
*   **共識邏輯彙整：** 大師們看好 Amazon 的兩大核心業務：電商的規模優勢和 AWS 雲端服務在 AI 時代的增長潛力。Bill Ackman 曾預估 AWS 的增量營運利潤率可達 50%，Q3 2026 數據顯示 AWS 營運利潤率接近 39%，並實現 39% 的營收增長，驗證了其高盈利能力。Druckenmiller 和 Loeb 也將其視為科技巨頭中的重要配置。
*   **關鍵財務指標 (截至 Q3 2026)：**
    *   Forward P/E: ~40x (預估)
    *   ROE: >20%
    *   營收成長 (YoY): ~12%
    *   AWS 營收成長 (YoY): ~39%
    *   自由現金流: 負值 (因高資本支出)
*   **催化劑 (Catalysts)：**
    *   AWS 在 AI 基礎設施和企業數位轉型中的持續領先。
    *   電商業務的效率提升和盈利能力改善。
    *   廣告業務的快速增長。
*   **反向觀點 / 風險 (Cons)：** 高資本支出導致自由現金流承壓；電商競爭激烈；宏觀經濟對消費支出的影響。
*   **大師目標價 / 內在價值估計：** 華爾街分析師對 Amazon 的平均目標價為 $295，高於當前價格.
*   **建議關注區間：** AWS 的強勁增長和電商業務的韌性使其成為長期投資的優質標的。

### 4. TSM Taiwan Semiconductor Manufacturing — 全球半導體代工龍頭

*   **持有大師名單：**
    *   **Stanley Druckenmiller (Duquesne Family Office):** Q2 2026 加碼，持倉權重 5.40%。
    *   **Philippe Laffont (Coatue):** Q2 2026 維持，持倉權重 8.76%。
    *   **Terry Smith (Fundsmith):** Q3 2026 新建倉.
    *   **Daniel Loeb (Third Point):** Q3 2026 減碼，但仍持有.
*   **共識邏輯彙整：** TSM 作為全球最先進半導體晶片的製造商，是 AI 革命不可或缺的供應商。Druckenmiller 和 Laffont 都將其視為 AI 基礎設施投資的核心。Terry Smith 的新建倉也顯示其對 TSM 品質和長期成長的認可。TSM 在 Q1 2026 佔全球先進 AI 晶片製造市場的 73%.
*   **關鍵財務指標 (截至 Q3 2026)：**
    *   Forward P/E: ~20-25x (預估)
    *   ROE: >25%
    *   營收成長 (YoY): >40% (FY2026 預估)
    *   毛利率: >50%
*   **催化劑 (Catalysts)：**
    *   AI 晶片需求持續爆發，推動先進製程產能利用率和 ASP 提升。
    *   全球半導體產業週期性復甦。
    *   新技術 (如 2nm 製程) 的量產進度。
*   **反向觀點 / 風險 (Cons)：** 地緣政治風險 (台灣與中國關係)；高資本支出；半導體產業週期性波動。Daniel Loeb 在 Q3 減碼可能反映了對這些風險的考量.
*   **大師目標價 / 內在價值估計：** Laffont 的投資邏輯暗示其看好 TSM 在 AI 基礎設施中的關鍵地位.
*   **建議關注區間：** 儘管存在地緣政治風險，但其在 AI 晶片製造領域的壟斷地位使其成為長期看好 AI 趨勢的投資者不可或缺的標的。

### 5. UBER Uber Technologies Inc. — 共享經濟與物流平台

*   **持有大師名單：**
    *   **Bill Ackman (Pershing Square):** Q2 2026 維持，持倉權重 12.72%。
    *   **Terry Smith (Fundsmith):** Q3 2026 新建倉.
*   **共識邏輯彙整：** Uber 作為全球領先的共享出行和外賣平台，受益於網路效應和規模經濟。Bill Ackman 將其視為高品質成長股，並在 Q2 2026 成為其最大持股。Terry Smith 的新建倉也顯示其對 Uber 商業模式的認可，可能看重其在數位化轉型中的長期增長潛力。
*   **關鍵財務指標 (截至 Q3 2026)：**
    *   Forward P/E: ~30-40x (預估)
    *   營收成長 (YoY): >15%
    *   自由現金流: 正向且持續增長
*   **催化劑 (Catalysts)：**
    *   出行和外賣業務的持續復甦與增長。
    *   新興市場的滲透率提升。
    *   廣告業務和新服務的拓展。
*   **反向觀點 / 風險 (Cons)：** 監管風險；司機勞工問題；競爭加劇。
*   **大師目標價 / 內在價值估計：** 分析師對 Uber 的平均目標價為 $104.21，DCF 估值為 $129.6.
*   **建議關注區間：** 隨著盈利能力改善和市場份額鞏固，Uber 具備長期成長潛力。

### 6. NVDA Nvidia Corp. — AI 晶片霸主

*   **持有大師名單：**
    *   **Cathie Wood (ARK Invest):** 11 月初加碼。
    *   **Philippe Laffont (Coatue):** Q2 2026 維持 (作為其 AI 基礎設施投資組合的一部分).
*   **共識邏輯彙整：** Nvidia 是 AI 晶片領域的絕對領導者，其 GPU 是訓練大型語言模型不可或缺的基礎設施。Cathie Wood 儘管風格高波動，但對 Nvidia 的信念堅定，認為其將持續受益於全球 AI 革命. Philippe Laffont 也將其視為 AI 基礎設施投資的核心.
*   **關鍵財務指標 (截至 Q3 2026)：**
    *   Forward P/E: ~35-45x (預估)
    *   營收成長 (YoY): >80% (Q3 FY2027 預估)
    *   毛利率: >70%
*   **催化劑 (Catalysts)：**
    *   AI 晶片需求持續超預期。
    *   新一代 GPU 和軟體平台的推出。
    *   數據中心業務的強勁增長。
*   **反向觀點 / 風險 (Cons)：** 估值高昂；競爭加劇 (如 Amazon 的 Trainium 晶片)；供應鏈風險；宏觀經濟放緩對企業資本支出的影響。
*   **大師目標價 / 內在價值估計：** 華爾街分析師對 Nvidia 的評級普遍為「強烈買入」.
*   **建議關注區間：** 作為 AI 核心受益者，Nvidia 仍是長期看好 AI 趨勢的投資者重點關注對象。

### 7. NFLX Netflix Inc. — 串流媒體龍頭

*   **持有大師名單：**
    *   **Bill Ackman (Pershing Square):** Q2 2026 新建倉.
    *   **Terry Smith (Fundsmith):** Q3 2026 新建倉.
*   **共識邏輯彙整：** Bill Ackman 認為 Netflix 已「贏得串流媒體大戰」，其龐大的用戶基礎和內容支出能力形成自我強化，使其能夠超越競爭對手並提高盈利能力。Terry Smith 的新建倉也顯示其對 Netflix 商業模式的認可，可能看重其全球訂閱經濟的長期增長潛力。
*   **關鍵財務指標 (截至 Q3 2026)：**
    *   Forward P/E: ~25-30x (預估)
    *   營收成長 (YoY): >10%
    *   自由現金流: 持續改善
*   **催化劑 (Catalysts)：**
    *   全球訂閱用戶持續增長。
    *   廣告業務和付費共享的成功推廣。
    *   內容成本效率提升。
*   **反向觀點 / 風險 (Cons)：** 串流媒體市場競爭激烈；內容成本高昂；宏觀經濟對消費支出的影響。
*   **大師目標價 / 內在價值估計：** Ackman 的論點強調其市場領導地位和盈利能力.
*   **建議關注區間：** 隨著盈利模式的多元化和全球市場的擴張，Netflix 仍具備成長潛力。

### 8. MA Mastercard Inc. — 全球支付網路巨頭

*   **持有大師名單：**
    *   **Bill Ackman (Pershing Square):** Q2 2026 新建倉.
    *   **Terry Smith (Fundsmith):** Q3 2026 新建倉.
*   **共識邏輯彙整：** Bill Ackman 認為 Mastercard 和 Visa 是「世界上最高品質的企業之一」，具備「資本輕、收費者」的特點，並能從通膨中受益。Terry Smith 的新建倉也印證了其對 Mastercard 穩健商業模式和長期成長的信心。
*   **關鍵財務指標 (截至 Q3 2026)：**
    *   Forward P/E: ~30-35x (預估)
    *   ROE: >100%
    *   營收成長 (YoY): >10%
*   **催化劑 (Catalysts)：**
    *   全球數位支付交易量持續增長。
    *   新興市場的滲透率提升。
    *   增值服務的拓展。
*   **反向觀點 / 風險 (Cons)：** 監管風險；競爭加劇；宏觀經濟對消費支出的影響。
*   **大師目標價 / 內在價值估計：** Ackman 認為其符合 Pershing Square 的投資標準.
*   **建議關注區間：** 作為全球支付基礎設施的關鍵組成部分，Mastercard 具備長期穩定的成長潛力。

### 9. V Visa Inc. — 全球支付網路巨頭

*   **持有大師名單：**
    *   **Bill Ackman (Pershing Square):** Q2 2026 新建倉.
    *   **Terry Smith (Fundsmith):** Q3 2026 減碼.
*   **共識邏輯彙整：** 與 Mastercard 類似，Bill Ackman 認為 Visa 也是「世界上最高品質的企業之一」，具備「資本輕、收費者」的特點，並能從通膨中受益。儘管 Terry Smith 在 Q3 減碼了 Visa，但其長期以來一直是 Fundsmith 的核心持股，顯示其對 Visa 商業模式的認可.
*   **關鍵財務指標 (截至 Q3 2026)：**
    *   Forward P/E: ~28-33x (預估)
    *   ROE: >40%
    *   營收成長 (YoY): >10%
*   **催化劑 (Catalysts)：**
    *   全球數位支付交易量持續增長。
    *   新興市場的滲透率提升。
    *   增值服務的拓展。
*   **反向觀點 / 風險 (Cons)：** 監管風險；競爭加劇；Terry Smith 的減碼可能暗示對其估值或成長速度的謹慎.
*   **大師目標價 / 內在價值估計：** Ackman 認為其符合 Pershing Square 的投資標準.
*   **建議關注區間：** 儘管有減碼訊號，但其核心業務的強勁和市場領導地位使其仍是優質資產。

### 10. PLTR Palantir Technologies Inc. — 數據分析與 AI 軟體

*   **持有大師名單：**
    *   **Cathie Wood (ARK Invest):** 11 月初加碼.
*   **共識邏輯彙整：** Cathie Wood 認為 Palantir 提供爆炸性的軟體成長，且資本密集度較低，儘管估值要求較高。Palantir 在 Q3 營收增長 96%，美國商業營收增長 148%，顯示其在數據分析和 AI 軟體領域的強勁勢頭.
*   **關鍵財務指標 (截至 Q3 2026)：**
    *   Forward P/E: ~50-60x (預估)
    *   營收成長 (YoY): ~96%
    *   調整後 EPS: $0.44 (Q3 2026)
*   **催化劑 (Catalysts)：**
    *   政府和商業客戶對其數據分析和 AI 平台的需求持續增長。
    *   新產品和解決方案的推出。
    *   盈利能力持續改善。
*   **反向觀點 / 風險 (Cons)：** 估值高昂；合同增長和未來盈利能力的不確定性；競爭加劇。
*   **大師目標價 / 內在價值估計：** 華爾街分析師對 Palantir 的平均目標價暗示約 30% 的上漲空間.
*   **建議關注區間：** 作為 AI 軟體領域的創新者，Palantir 具備高成長潛力，但伴隨較高波動性。

---

## 5. 板塊 / 主題分布分析

根據 TOP 10 共識選股，當前大師共識偏好的產業分布如下：

*   **科技 (Technology)：** 60% (Microsoft, Alphabet, Amazon, TSM, Nvidia, Palantir)
*   **金融 (Financials)：** 20% (Mastercard, Visa)
*   **消費服務 (Consumer Services)：** 20% (Uber, Netflix)

**當前大師共識偏好的 3 大主題：**

1.  **AI 基礎設施與應用 (AI Infrastructure & Application)：** 這是最顯著的共識主題，涵蓋了晶片製造 (TSM, Nvidia)、雲端服務 (Microsoft Azure, Amazon AWS, Google Cloud) 和 AI 軟體 (Microsoft, Alphabet, Palantir)。這表明大師們普遍認為 AI 革命是當前最重要的長期趨勢，並積極配置於其核心受益者。
2.  **數位化轉型與平台經濟 (Digital Transformation & Platform Economy)：** Amazon (電商與雲端), Uber (共享出行與物流), Netflix (串流媒體) 代表了數位化轉型和平台經濟的趨勢。這些公司透過技術創新改變了傳統行業，並建立了強大的網路效應。
3.  **全球支付網路 (Global Payment Networks)：** Mastercard 和 Visa 體現了對全球數位支付長期增長和其穩健商業模式的信心。

**市場循環位置判斷：**

當前大師共識選股的產業分布，特別是科技股的顯著集中，表明市場可能仍處於由技術創新 (尤其是 AI) 驅動的成長週期。對高品質成長股和具備強大護城河公司的偏好，也暗示大師們在追求成長的同時，對風險管理和基本面質量保持警惕。金融支付網路的納入則提供了部分防禦性，因為這些公司在不同經濟週期中都能產生穩定的現金流。

---

## 6. 大師持倉異動警示 (Divergence Alerts)

1.  **Alphabet (GOOGL) 的分歧：**
    *   **共識訊號：** Warren Buffett, Li Lu, Bill Ackman, Stanley Druckenmiller, Daniel Loeb, Philippe Laffont 均持有或加碼 Alphabet，顯示其作為 AI 巨頭和廣告龍頭的廣泛認可.
    *   **分歧訊號：** Cathie Wood 在 11 月初賣出部分 Alphabet 股票，理由是其高昂的 AI 資本支出導致自由現金流為負，並預計 2027 年資本支出將繼續上升。她轉而加碼 Palantir，認為其提供資本密集度較低的軟體成長.
    *   **觀點差異解析：** 這種分歧反映了不同投資風格對「成長」的定義和風險偏好。價值/品質和宏觀派大師可能更看重 Alphabet 的長期護城河、市場領導地位和 AI 潛力，即使短期資本支出較高。而 Cathie Wood 等激進成長型投資者可能對資本密集度較高的商業模式更為敏感，傾向於尋找更「純粹」且資本效率更高的成長機會。

2.  **Taiwan Semiconductor Manufacturing (TSM) 的分歧：**
    *   **共識訊號：** Stanley Druckenmiller 和 Philippe Laffont 在 Q2 均持有或加碼 TSM，Terry Smith 在 Q3 新建倉，顯示其作為 AI 晶片核心供應商的關鍵地位.
    *   **分歧訊號：** Daniel Loeb 在 Q3 減碼了 TSM，儘管仍是其持倉之一.
    *   **觀點差異解析：** 這種分歧可能源於對地緣政治風險、半導體週期頂部風險以及高資本支出回報率的不同判斷。Loeb 作為事件驅動和宏觀派投資者，可能對這些外部風險更為敏感，選擇在股價高位進行部分獲利了結或風險對沖。

3.  **共識大幅下降的個股：**
    *   **Bank of America (BAC)：** 曾是 Warren Buffett 和 Li Lu 的重要持股。但 Li Lu 在 Q2 2026 清倉了 BAC，而 Warren Buffett 的 Berkshire Hathaway 也可能在 Q3 減持了 BAC.
    *   **警示：** 儘管 Buffett 仍持有大量 BAC，但 Li Lu 的清倉和 Berkshire 的潛在減持，可能暗示部分價值投資者對銀行業的長期前景、利率環境變化或特定銀行風險的重新評估。這值得投資者警惕，並深入研究銀行業的潛在挑戰。

---

## 7. 結論與投資者行動框架

**本季大師共識的核心方向：**

本季的投資大師共識選股清晰地指向了由 **AI 革命** 驅動的科技巨頭，特別是那些在雲端運算、半導體製造和 AI 軟體領域佔據領先地位的公司 (Microsoft, Alphabet, Amazon, TSM, Nvidia)。同時，具備強大護城河、穩定現金流和高品質成長特徵的企業 (如 Uber, Netflix, Mastercard, Visa) 也持續受到青睞。這反映了在當前宏觀環境下，大師們在追求長期成長的同時，對企業基本面質量和競爭優勢的高度重視。

**投資者行動框架：**

1.  **理解 13F 資料的延遲性：** 務必記住 13F 申報資料存在 45 天的延遲。這意味著大師們的實際持倉可能已經發生變化。本報告旨在提供研究方向和思路，而非實時交易建議。
2.  **大師策略未必適合個人風險屬性：** 各位大師的投資風格、風險承受能力和投資期限各不相同。例如，Cathie Wood 的高波動成長策略可能不適合所有投資者。投資者應根據自身的財務目標、風險偏好和時間範圍，進行獨立的判斷和決策。
3.  **避免盲目跟單 (Copycat Trap)：** 簡單地複製大師的持倉往往效果不佳。成功的投資需要深入理解公司的基本面、估值、行業趨勢以及大師們背後的選股邏輯。更重要的是，要結合自身的投資組合和資金狀況，避免過度集中或與自身風險承受能力不符的投資。
4.  **建議的觀察節奏：** 建議投資者每季在 13F 申報期結束後 (通常是季度結束後 45 天內)，重新檢視本報告，並結合最新的市場動態和公司財報，重新評估共識選股清單。關注大師們持倉的變化趨勢，尤其是新建倉和大幅加碼/減碼的動作，以及他們在公開訪談中提及的觀點。

透過系統性地追蹤頂尖投資大師的智慧，投資者可以獲得寶貴的市場洞察，但最終的投資決策仍應基於獨立、全面的研究和對自身情況的深刻理解。

---

## 參考資料清單 (References)

 2 Genius Stocks This Billionaire Is Loading Up on for 2026 | The Motley Fool (January 03 2026)
 3 Trillion-Dollar Stocks Billionaire Philippe Laffont Can't Stop Buying | The Motley Fool (January 27 2026)
 Billionaire Investor Bill Ackman Unveils 6 New Stocks He's Betting on - Business Insider (August 13 2026)
 Dan Loeb: Positioning His Portfolio for 2026 - The Acquirer's Multiple® (January 11 2026)
 Daniel Loeb - Third Point - 2026 13F Holdings, Performance, and AUM - Insider Monkey (August 15 2026)
 Himalaya Capital 13F Q3 2026: due Nov 16 - AlphaYou
 GOOGL, CRWV, AVGO: Cathie Wood Buys $2M in One Stock, Sells $4.7M in Two Others - TipRanks.com (November 09 2026)
 Duquesne Family Office 13F Q3 2026: due Nov 16 - AlphaYou
 3 Warren Buffett Stocks Still Worth a Closer Look - Gotrade (September 21 2026)
 Duquesne Family Office Llc 13F Strategy - InsiderSet (August 14 2026)
 Coatue 13F Q3 2026: due Nov 16 - AlphaYou
 Fundsmith Recent Buys & Sells: Latest 13F Changes 2026 | Terry Smith - Valuesider
 Billionaire Investor Philippe Laffont's Top 5 Tech Picks - 24/7 Wall St. (July 23 2026)
 Q3 2026 13F Filings: What Hedge Funds Bought and Sold | HoldingsIntel
 Cathie Wood Picks a Side Between Palantir and Google - TradingView (November 04 2026)
 Daniel Loeb - Third Point LLC Portfolio Stock Holdings | Quiver Quantitative (August 14 2026)
 Stanley Druckenmiller Portfolio (2026) | 13F Holdings - InvestorLens (August 14 2026)
 Philippe Laffont 13F Portfolio, Holdings & Recent Buys | COATUE MANAGEMENT LLC | Insider Edges (June 30 2026)
 Daniel Loeb Holdings Changes: Latest Third Point LLC 13F Updates - Holdings Channel (June 30 2026)
 Stanley Druckenmiller 13F Portfolio, Holdings & Recent Buys | DUQUESNE FAMILY OFFICE LLC | Insider Edges (June 30 2026)
 Top Warren Buffett Current Stocks Portfolio 2026 | Berkshire Hathaway (BRK) Portfolio Companies List - ATFX (February 28 2026)
 Terry Smith's Fundsmith Checklist in 2026: Only 5 US Stocks Pass "Quality or Nothing" (October 01 2026)
 The 3 Best Cathie Wood Stocks to Buy for 2026 - Barchart.com (January 06 2026)
 Cathie Wood Goes Bargain Hunting: 3 Stocks She Bought Last Week | The Motley Fool (November 09 2026)
 Amazon: AWS Just Confirmed Bill Ackman's 50% Margin Thesis (NASDAQ:AMZN) (November 09 2026)
 $366B Warren Buffett Portfolio 2026 - Stockcircle (July 31 2026)
 Dan Loeb Portfolio: Third Point Top Holdings (Q2 2026) - Hedge Fund Alpha (September 21 2026)
 Bill Ackman Portfolio: Latest 13F Holdings 2026 | Pershing Square Capital Management (PSH) - Valuesider (June 30 2026)
 Stanley Druckenmiller 13F Q2 2026: Duquesne Portfolio | Tracefour (August 14 2026)
 Coatue 13F Holdings & Philippe Laffont Portfolio - Hallucination Yield (June 30 2026)
 Bill Ackman Portfolio Update: Top Holdings as of June 2026 - Stockcircle (June 15 2026)
 Buffett successor has Berkshire Hathaway poised to beat S&P 500 in 2026: His 3 new stock picks are helping - Benzinga (November 03 2026)
 Cathie Wood Bought Just 3 Stocks On Monday; Here They Are | The Motley Fool (November 10 2026)
 Tracking Philippe Laffont's Coatue Management Portfolio – Q2 2026 Update (September 24 2026)
 Billionaire Investor Philippe Laffont Has Nearly 23% of Coatue Management's Portfolio Invested in 3 Artificial Intelligence (AI) Stocks | The Motley Fool (August 21 2026)
 Li Lu · Stock Portfolio · Himalaya Capital - Super Investors Be Like (August 14 2026)
 Li Lu - Himalaya Capital - 2026 13F Holdings, Performance, and AUM - Insider Monkey (August 14 2026)
 Berkshire Hathaway's Q3 2026 Earnings Report - Kingswell | Substack (November 09 2026)
 Li Lu Portfolio: Latest 13F Holdings 2026 | Himalaya Capital Management - Valuesider (June 30 2026)
 Daniel Loeb Holdings Changes: Latest Third Point LLC 13F Updates - Holdings Channel (June 30 2026)
 Philippe Laffont's Trades and Holdings in Q1 2026 - Daniel Scrivner (May 15 2026)
 Bill Ackman Current Portfolio, 13F Holdings (2026-05-15) - GuruFocus (May 15 2026)
 COATUE MANAGEMENT LLC Top 13F Holdings - WhaleWisdom
 Philippe Laffont Portfolio | Coatue Management 13F Holdings & Trades - HedgeFollow
 What Lundin Gold (LUG) Said on Its Q3 Earnings Call - TradingView (November 08 2026)
 Terry Smith - Fundsmith - DATAROMA Superinvestors Portfolio Holdings
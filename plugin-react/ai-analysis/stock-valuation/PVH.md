為了對美股公司 PVH 進行全面的股票估值分析，我將首先查詢其最新的財務報告、市場動態和產業趨勢，以補充您提供的基本面數據。隨後，我將應用折現現金流模型（DCF）、相對估值法和股息折現模型（DDM）進行分析，並得出綜合結論。

### 1. 查詢最新資訊

我將查詢以下資訊：
*   PVH 最新財報（例如，2023年第四季度或2024年第一季度財報）
*   PVH 近期新聞和市場動態
*   服裝零售業的最新趨勢和展望
*   PVH 的主要競爭對手

The search results provide a wealth of recent information for PVH, including:

*   **Latest Earnings:** PVH reported Q4 2025 earnings on March 31, 2026, with an EPS of $3.82, beating estimates. Full-year 2025 non-GAAP EPS was $11.40. They also reported Q1 2024 earnings (released June 4, 2024) with GAAP EPS of $2.59 and non-GAAP EPS of $2.45.
*   **Revenue:** Q4 2025 revenue was $2.505 billion, up 6% year-over-year (flat constant currency). Full-year 2025 revenue was $8.950 billion, up 3% (flat to slightly up constant currency). Q1 2024 revenue was $1.952 billion, a 10% decrease year-over-year (9% decrease on a constant currency basis), partly due to the sale of the Heritage Brands women's intimates business.
*   **Outlook (2026):**
    *   Revenue projected to increase slightly compared to 2025.
    *   Non-GAAP operating margins projected to be stable at approximately 8.8%, with underlying progress offset by approximately 215 basis points projected negative impact of gross tariffs.
    *   Non-GAAP EPS projected to be in the range of $11.80 to $12.10.
    *   Expects direct-to-consumer (DTC) growth for both Calvin Klein and Tommy Hilfiger across all regions.
    *   Targeting at least $300 million in stock repurchases in 2026.
*   **Key Initiatives:** PVH+ Plan focuses on building Calvin Klein and Tommy Hilfiger into desirable lifestyle brands, driving consumer engagement, and improving gross margins through a demand-driven supply chain and targeted investments.
*   **Gross Margin:** Q1 2024 gross margin increased 350 basis points to 61.4% compared to 57.9% in the prior year period.
*   **Inventory:** Decreased 22% in Q1 2024 compared to the prior year, indicating proactive management.
*   **Analyst Sentiment:** Needham raised its price target to $107 from $100, maintaining a Buy rating, with updated EPS forecasts for fiscal years 2026 and 2027 at $12.06 and $13.40, respectively.
*   **Competitors:** Main competitors include Columbia Sportswear (COLM), Crocs (CROX), G-III Apparel Group (GIII), Steven Madden (SHOO), Gildan Activewear (GIL), Levi Strauss & Co., Ralph Lauren, Tapestry, Inditex (Zara), and H&M Group.
*   **Industry Trends:** Global fashion revenue is expected to hit $770.9 billion in 2024, on its way to $1 trillion by 2029, with a projected 8.94% CAGR through 2029. Key trends include a shift to online, reimagining stores, digital innovation (social commerce, metaverse), supply chain resilience, and ESG/circular economy focus. Online sales are a significant driver, with e-commerce revenue nearing $975 billion in 2025. Sustainability and personalized customer experiences are also crucial.

**Updated Financial Data (from search results, prioritizing latest fiscal year 2025 and 2026 outlook):**
*   **Latest Full Year Revenue (FY2025):** $8.950 billion
*   **Latest Full Year Non-GAAP EPS (FY2025):** $11.40
*   **2026 Non-GAAP EPS Outlook:** $11.80 - $12.10 (Needham's forecast: $12.06 for FY2026, $13.40 for FY2027)
*   **2026 Revenue Outlook:** Projected to increase slightly compared to 2025.
*   **2026 Non-GAAP Operating Margin Outlook:** Approximately 8.8%.
*   **Dividend:** Quarterly cash dividend of $0.0375 per share (declared Feb 4, 2026). This is very low, confirming DDM might not be the primary method.

Now, let's proceed with the valuation models.

### 2. 估值假設

在進行估值之前，我們需要設定一些關鍵假設：

*   **折現率 (WACC - Weighted Average Cost of Capital):**
    *   由於沒有直接提供 WACC，我們將估計它。
    *   **股權成本 (Cost of Equity):** 我們將使用資本資產定價模型 (CAPM)。
        *   無風險利率 (Risk-Free Rate): 參考美國10年期國債收益率。假設為 4.5%。
        *   市場風險溢價 (Market Risk Premium): 假設為 5.5%。
        *   Beta: 您提供的數據中沒有 Beta，但搜索結果提到 PVH 的 Beta 為 1.61 (相對於標普500)。
        *   股權成本 = 無風險利率 + Beta * 市場風險溢價 = 4.5% + 1.61 * 5.5% = 4.5% + 8.855% = 13.355%
    *   **債務成本 (Cost of Debt):** 假設 PVH 的稅前債務成本為 6.0%。
    *   **稅率 (Tax Rate):** 根據 PVH 2023年財報，其 GAAP 稅率約為 21% (Q4 2023)。 我們使用 21%。
    *   **債務權益比 (Debt/Equity Ratio):** 您提供的數據為 0.9。
    *   **WACC 計算:**
        *   E / (D+E) = 1 / (0.9 + 1) = 1 / 1.9 = 0.5263
        *   D / (D+E) = 0.9 / (0.9 + 1) = 0.9 / 1.9 = 0.4737
        *   WACC = (E/(D+E)) * 股權成本 + (D/(D+E)) * 債務成本 * (1 - 稅率)
        *   WACC = 0.5263 * 13.355% + 0.4737 * 6.0% * (1 - 0.21)
        *   WACC = 0.0703 + 0.4737 * 0.06 * 0.79 = 0.0703 + 0.0225 = 0.0928 = 9.28%

*   **長期增長率 (Long-Term Growth Rate):** 考慮到服裝行業的成熟性以及 PVH 的規模，我們假設長期增長率為 2.5% (略高於通脹，但低於全球GDP增長)。服裝行業預計到2029年複合年增長率為8.94%，但這包括了新興市場和線上銷售的快速增長，對於PVH這樣的大型成熟公司，保守估計更為穩妥。

*   **預測期間 (Forecast Period):** 5年。

### 3. 估值模型

#### 3.1. 折現現金流模型 (Discounted Cash Flow, DCF)

DCF 模型需要預測未來自由現金流 (Free Cash Flow, FCF)。由於我們沒有詳細的財務報表來精確預測資本支出和營運資本變動，我們將基於營收和利潤率的預期來估計 FCF。

**假設：**
*   **起始營收 (FY2025):** $8.950 billion
*   **營收增長率 (Revenue Growth Rate):**
    *   2026年：略微增長 (根據公司指引)。我們假設 1.0%。
    *   2027-2028年：考慮到行業趨勢和公司戰略，假設為 2.0%。
    *   2029-2030年：增長放緩至 1.5%。
*   **營業利潤率 (Operating Margin):** 公司預計2026年非GAAP營業利潤率約為8.8%。 我們將在預測期內逐步調整至此水平。
    *   FY2025 營業利潤率 (基於 FY2025 營收 $8.95B 和非GAAP EPS $11.40，以及給定的利潤率數據，但由於EPS和營收的關係複雜，我們直接使用公司指引的營業利潤率作為基礎)。
    *   我們將使用 FY2025 的非GAAP營業利潤率 8.8% 作為基礎，並假設在預測期內保持穩定或略有改善。
*   **稅率:** 21%。
*   **非現金費用 (Non-Cash Charges):** 主要指折舊與攤銷 (D&A)。我們假設 D&A 佔營收的 2.5%。
*   **資本支出 (Capital Expenditure, CapEx):** 假設 CapEx 佔營收的 2.0%。
*   **營運資本變動 (Change in Working Capital):** 假設為營收的 0.5%。

**計算步驟：**

1.  **預測營收 (Revenue)**
2.  **預測營業利潤 (EBIT)** = Revenue * Operating Margin
3.  **預測稅後營業利潤 (NOPAT)** = EBIT * (1 - Tax Rate)
4.  **預測自由現金流 (FCF)** = NOPAT + D&A - CapEx - Change in Working Capital
5.  **計算終值 (Terminal Value, TV)** = (FCF_last_forecast_year * (1 + Long-Term Growth Rate)) / (WACC - Long-Term Growth Rate)
6.  **折現 FCF 和 TV** 至現值。

| 年度 | 營收 (Billion USD) | 增長率 | 營業利潤率 | EBIT (Billion USD) | 稅後營業利潤 (NOPAT) (Billion USD) | D&A (Billion USD) | CapEx (Billion USD) | 營運資本變動 (Billion USD) | FCF (Billion USD) | 折現因子 (WACC=9.28%) | FCF 現值 (Billion USD) |
| :--- | :----------------- | :----- | :--------- | :----------------- | :--------------------------------- | :---------------- | :------------------ | :-------------------------- | :---------------- | :--------------------- | :----------------------- |
| 2025 | 8.950              | -      | 8.8%       | 0.788              | 0.622                              | 0.224             | 0.179               | 0.045                       | 0.622             | 1.000                  | 0.622                    |
| 2026 | 9.039              | 1.0%   | 8.8%       | 0.795              | 0.628                              | 0.226             | 0.181               | 0.045                       | 0.628             | 0.915                  | 0.575                    |
| 2027 | 9.220              | 2.0%   | 8.8%       | 0.811              | 0.641                              | 0.231             | 0.184               | 0.046                       | 0.641             | 0.837                  | 0.536                    |
| 2028 | 9.404              | 2.0%   | 8.8%       | 0.828              | 0.654                              | 0.235             | 0.188               | 0.047                       | 0.654             | 0.766                  | 0.501                    |
| 2029 | 9.545              | 1.5%   | 8.8%       | 0.840              | 0.664                              | 0.239             | 0.191               | 0.048                       | 0.664             | 0.701                  | 0.465                    |
| 2030 | 9.688              | 1.5%   | 8.8%       | 0.852              | 0.673                              | 0.242             | 0.194               | 0.048                       | 0.673             | 0.641                  | 0.431                    |

*   **終值 (Terminal Value) 計算 (基於 2030 年 FCF):**
    *   TV = (0.673 * (1 + 0.025)) / (0.0928 - 0.025) = (0.673 * 1.025) / 0.0678 = 0.6903 / 0.0678 = 10.181 Billion USD
*   **終值現值 (Present Value of Terminal Value):**
    *   PV(TV) = 10.181 / (1 + 0.0928)^5 = 10.181 / 1.559 = 6.530 Billion USD

*   **DCF 估值 (企業價值 Enterprise Value):**
    *   所有 FCF 現值之和 + 終值現值 = (0.575 + 0.536 + 0.501 + 0.465 + 0.431) + 6.530 = 2.508 + 6.530 = 9.038 Billion USD

*   **股權價值 (Equity Value):**
    *   企業價值 + 現金及約當現金 - 總債務
    *   根據 PVH Q1 2024 財報，流動性約為 $1.8B (現金及可用借款)。 我們假設現金為 $1.0B (保守估計)。
    *   總債務：根據 Debt/Eq 0.9 和 Market Cap $4.29B，股權價值約為 $4.29B。那麼債務約為 $4.29B * 0.9 = $3.86B。
    *   股權價值 = 9.038B + 1.0B - 3.86B = 6.178 Billion USD

*   **每股估值 (Per Share Value):**
    *   流通股數 = Market Cap / Close Price = 4.29B / 93.64 = 45.815 Million 股
    *   每股估值 = 6.178B / 45.815M = **$134.85**

**DCF 估值結果：**
*   **合理價位區間：** 考慮到假設的敏感性，我們設定一個區間。
    *   如果 WACC 變動 +/- 0.5%，長期增長率變動 +/- 0.5%，估值會有顯著變化。
    *   保守估計：$120 - $150

#### 3.2. 相對估值 (Comparable Company Analysis)

我們將使用 P/E (本益比)、Forward P/E (預期本益比)、P/S (市銷率) 和 EV/EBITDA 等倍數進行比較。

**可比公司 (來自搜尋結果):** Columbia Sportswear (COLM), Crocs (CROX), G-III Apparel Group (GIII), Steven Madden (SHOO), Gildan Activewear (GIL), Ralph Lauren (RL), Levi Strauss & Co. (LEVI), Tapestry (TPR).

為了簡化，我們將選擇幾個代表性公司進行比較。

**PVH 數據：**
*   Close Price: $93.64
*   P/E: 248.18
*   Forward P/E: 6.89
*   P/S: 0.48
*   Market Cap: $4.29 Billion
*   FY2025 Revenue: $8.950 Billion
*   FY2025 Non-GAAP EPS: $11.40
*   FY2026 Non-GAAP EPS Outlook: $11.80 - $12.10 (取中位數 $11.95)

**可比公司數據 (需要即時查詢):**

**可比公司估值倍數 (截至 2026 年 4 月中下旬):**

| 公司名稱             | 股票代碼 | P/E (TTM) | Forward P/E | P/S (TTM) | EV/EBITDA (TTM) |
| :------------------- | :------- | :-------- | :---------- | :-------- | :---------------- |
| Columbia Sportswear  | COLM     | 19.74   | 18.51     | 0.99    | 10.37         |
| Crocs                | CROX     | -89.67  | 7.77      | 1.30    | 6.94          |
| G-III Apparel Group  | GIII     | 20.19   | 14.59     | 0.44    | 6.27          |
| Steven Madden        | SHOO     | 60.25   | 18.13     | 1.06    | 10.95         |
| Gildan Activewear    | GIL      | 23.00   | 13.88     | 3.11    | 17.31         |
| Ralph Lauren         | RL       | 25.32   | 21.11     | 2.87    | 16.88         |
| Levi Strauss & Co.   | LEVI     | 14.31   | 14.48     | 1.32    | 10.66         |
| Tapestry             | TPR      | 64.10   | 22.76     | 4.20    | 18.98         |
| **PVH (您的數據)** | PVH      | 248.18    | 6.89        | 0.48      | -                 |

**注意事項：**
*   Crocs 的 P/E (TTM) 為負值，表示其在過去12個月內虧損，因此該倍數不適用於比較。
*   PVH 的 P/E (TTM) 異常高，這與其極低的 ROE 和 Profit Margin 一致，表明其近期盈利能力非常弱。然而，其 Forward P/E 顯著降低，預示未來盈利將大幅改善。

**計算平均倍數 (排除異常值和負值):**

*   **P/E (TTM) 平均 (排除 PVH 和 CROX):** (19.74 + 20.19 + 60.25 + 23.00 + 25.32 + 14.31 + 64.10) / 7 = 32.42
*   **Forward P/E 平均 (排除 PVH):** (18.51 + 7.77 + 14.59 + 18.13 + 13.88 + 21.11 + 14.48 + 22.76) / 8 = 16.40
*   **P/S (TTM) 平均:** (0.99 + 1.30 + 0.44 + 1.06 + 3.11 + 2.87 + 1.32 + 4.20) / 8 = 1.91
*   **EV/EBITDA (TTM) 平均:** (10.37 + 6.94 + 6.27 + 10.95 + 17.31 + 16.88 + 10.66 + 18.98) / 8 = 12.30

**應用平均倍數估值 PVH：**

*   **基於 Forward P/E:**
    *   PVH 2026年預期非GAAP EPS (中位數) = $11.95
    *   估值 = 11.95 * 16.40 = **$195.98**

*   **基於 P/S (TTM):**
    *   PVH FY2025 營收 = $8.950 Billion
    *   估值市值 = 8.950B * 1.91 = 17.105 Billion USD
    *   每股估值 = 17.105B / 45.815M = **$373.34** (這個數字顯然過高，可能因為 PVH 的 P/S 遠低於行業平均，或者行業平均 P/S 被一些高增長公司拉高)

*   **基於 EV/EBITDA (TTM):**
    *   我們需要估計 PVH 的 EBITDA。
    *   FY2025 營收 $8.950B，營業利潤率 8.8%，EBIT = 8.950B * 0.088 = 0.788B
    *   假設 D&A 佔營收的 2.5% (如 DCF 模型)，D&A = 8.950B * 0.025 = 0.224B
    *   EBITDA = EBIT + D&A = 0.788B + 0.224B = 1.012 Billion USD
    *   企業價值 (EV) = 1.012B * 12.30 = 12.448 Billion USD
    *   股權價值 = EV + 現金 - 債務 = 12.448B + 1.0B - 3.86B = 9.588 Billion USD
    *   每股估值 = 9.588B / 45.815M = **$209.27**

**相對估值結果：**
*   **Forward P/E 估值：** $195.98
*   **P/S 估值：** $373.34 (可能不適用，因為 PVH 的 P/S 遠低於行業平均，需要進一步分析原因)
*   **EV/EBITDA 估值：** $209.27

*   **合理價位區間：** 考慮到 P/S 估值的異常，我們主要參考 Forward P/E 和 EV/EBITDA。
    *   $190 - $220

#### 3.3. 股息折現模型 (Dividend Discount Model, DDM)

PVH 的股息率為 0.0016 (0.16%)，每股季度股息為 $0.0375。這是一個非常低的股息，表明公司更傾向於將利潤再投資或進行股票回購，而不是通過股息回報股東。因此，DDM 可能不是評估 PVH 價值的最合適模型。

如果我們仍然嘗試應用 DDM (戈登增長模型)，我們需要一個股息增長率。
*   當前年度股息 = $0.0375 * 4 = $0.15
*   假設股息長期增長率 (g) = 2.0% (低於 FCF 的長期增長率，因為公司可能不會將所有 FCF 都用於股息)
*   DDM 估值 = D1 / (r - g) = ($0.15 * (1 + 0.02)) / (0.13355 - 0.02) = $0.153 / 0.11355 = **$1.35**

這個估值遠低於當前股價，再次證明 DDM 不適用於 PVH。

### 4. 綜合結論與比較

| 估值模型             | 每股估值 (USD) | 合理價位區間 (USD) |
| :------------------- | :------------- | :----------------- |
| 折現現金流模型 (DCF) | $134.85        | $120 - $150        |
| 相對估值 (Forward P/E) | $195.98        | $190 - $220        |
| 相對估值 (EV/EBITDA) | $209.27        | $190 - $220        |
| 股息折現模型 (DDM)   | $1.35          | 不適用             |

**綜合分析：**

1.  **DDM 不適用：** PVH 的股息非常低，不適合使用 DDM 進行估值。
2.  **P/E (TTM) 異常：** PVH 的 P/E (TTM) 248.18 遠高於行業平均 32.42，這主要是由於其過去12個月的盈利能力極低 (EPS this Y: 0.063, Profit Margin: 0.0028)。這使得 P/E (TTM) 成為一個誤導性指標。
3.  **Forward P/E 和 EV/EBITDA 更具參考價值：** PVH 的 Forward P/E 6.89 遠低於行業平均 16.40，這表明市場預期其未來盈利將大幅改善。EV/EBITDA 估值也顯示出較高的潛在價值。
4.  **DCF 估值：** DCF 模型給出的估值為 $134.85，介於當前股價和相對估值之間。這是一個基於內在價值的估計，受假設影響較大。
5.  **相對估值 (P/S) 異常：** PVH 的 P/S 0.48 遠低於行業平均 1.91，這導致基於 P/S 的估值異常高。這可能反映了市場對 PVH 營收質量或未來營收增長的擔憂，或者其利潤率遠低於行業平均。

**結論：**

PVH 目前的股價 $93.64 似乎被低估，特別是考慮到其預期的盈利復甦。

*   **DCF 模型** 顯示其內在價值約為 **$134.85**。
*   **相對估值模型 (基於 Forward P/E 和 EV/EBITDA)** 則給出了更高的估值，約在 **$195.98 至 $209.27** 之間。

這種差異可能源於：
*   **市場對 PVH 盈利復甦的信心程度：** 相對估值模型更多地反映了市場對未來盈利增長的預期，而 PVH 的 Forward P/E 遠低於行業平均，可能暗示市場尚未完全消化其預期的盈利改善。
*   **DCF 模型的保守假設：** 我們在 DCF 模型中使用的營收增長率和營業利潤率可能相對保守。如果公司能實現更強勁的增長或更高的利潤率，DCF 估值會更高。
*   **P/S 差異：** PVH 的 P/S 遠低於行業平均，這可能反映了其較低的利潤率。即使營收增長，如果利潤率無法達到行業平均水平，其市值相對於營收的倍數也會較低。

綜合來看，PVH 的股票在當前價格下具有一定的吸引力。其極低的 Forward P/E 和相對較低的 P/FCF (7.97) 表明，如果公司能夠成功執行其 PVH+ 計劃，改善盈利能力並應對關稅等挑戰，其股價有顯著上漲空間。分析師給出的目標價 $92.73 與當前股價接近，但 Needham 等機構已將目標價上調至 $107，並預計 2026 和 2027 年 EPS 將持續增長。

**合理價位區間的綜合判斷：**

考慮到 DCF 估值和相對估值 (Forward P/E, EV/EBITDA) 的結果，並權衡其盈利復甦的潛力與行業競爭及關稅等風險，PVH 的合理價位區間可能在 **$130 - $200** 之間。當前股價 $93.64 位於此區間的下限，表明存在潛在的上升空間。

### 5. 與同產業可比公司的估值比較

從相對估值數據來看：

*   **P/E (TTM):** PVH 的 P/E (248.18) 遠高於所有可比公司 (平均 32.42)，這是一個警示信號，但如前所述，這是由於其近期盈利極低。
*   **Forward P/E:** PVH 的 Forward P/E (6.89) 遠低於可比公司平均 (16.40)，這是一個非常積極的信號，表明市場預期其未來盈利將大幅增長，且相對於同行，其未來盈利的定價更低。
*   **P/S (TTM):** PVH 的 P/S (0.48) 遠低於可比公司平均 (1.91)。這可能反映了其較低的利潤率，或者市場對其營收增長質量和可持續性的擔憂。
*   **EV/EBITDA (TTM):** 雖然沒有直接提供 PVH 的 EV/EBITDA，但我們估計的 EBITDA 應用行業平均倍數後，其估值與 Forward P/E 估值接近，且高於當前股價。

總體而言，PVH 在 Forward P/E 和 P/S 倍數上顯著低於行業平均，這可能暗示其被低估，前提是其預期的盈利復甦能夠實現。然而，其歷史 P/E 和極低的利潤率也提醒投資者，公司面臨的挑戰不容忽視。
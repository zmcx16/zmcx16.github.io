The current US 10-year Treasury yield is around **4.17% - 4.21%** as of January 12, 2026. I will use **4.20%** as the risk-free rate.

Now I have all the components to calculate WACC.

**WACC Calculation:**

*   **Cost of Equity (Ke):**
    *   Risk-Free Rate (Rf): 4.20%
    *   Beta (β): 0.80
    *   Market Risk Premium (MRP): 5.5%
    *   Ke = Rf + β * MRP
    *   Ke = 4.20% + 0.80 * 5.5% = 4.20% + 4.40% = **8.60%**

*   **Cost of Debt (Kd):**
    *   Pre-tax Cost of Debt: 4.09%
    *   Effective Tax Rate: 22%
    *   Kd (after-tax) = Pre-tax Cost of Debt * (1 - Tax Rate)
    *   Kd (after-tax) = 4.09% * (1 - 0.22) = 4.09% * 0.78 = **3.19%**

*   **Capital Structure:**
    *   Market Cap (Equity Value): $27.08 billion
    *   Total Debt: $8.56 billion
    *   Total Capital = Equity Value + Total Debt = $27.08B + $8.56B = $35.64 billion
    *   Weight of Equity (We) = Equity Value / Total Capital = $27.08B / $35.64B = 0.7598 or 76.0%
    *   Weight of Debt (Wd) = Total Debt / Total Capital = $8.56B / $35.64B = 0.2402 or 24.0%

*   **WACC:**
    *   WACC = (We * Ke) + (Wd * Kd (after-tax))
    *   WACC = (0.760 * 8.60%) + (0.240 * 3.19%)
    *   WACC = 6.536% + 0.766% = **7.30%**

So, the calculated WACC is approximately **7.30%**. This will be used as the discount rate for the DCF model.

Now, let's move to the **Discounted Cash Flow (DCF) Model**.

**DCF Model Assumptions:**

*   **Forecast Period:** 5 years (2026-2030).
*   **Discount Rate (WACC):** 7.30%
*   **Terminal Growth Rate (g):** I will use a conservative long-term growth rate, typically between 1-3% for mature companies. Given the cyclical nature of the oilfield services industry and recent revenue fluctuations, I will use **2.0%**.

**Projecting Free Cash Flow (FCF):**

To project FCF, I need to forecast:
1.  Revenue
2.  EBIT (Operating Income)
3.  Taxes
4.  Depreciation & Amortization (D&A)
5.  Capital Expenditures (CapEx)
6.  Change in Net Working Capital (NWC)

**Historical Data (from search results and provided data):**

*   **Revenue:**
    *   FY 2024: $22.94 billion
    *   FY 2023: $23.02 billion
    *   Q3 2025 LTM: $22.14 billion
    *   Q3 2025: $5.6 billion
    *   Q4 2025 (analyst estimate): $5.39 billion
    *   FY 2025 (analyst estimate): $22.12 billion (-3.58% YoY)
    *   FY 2026 (analyst estimate): $21.78 billion (-1.53% YoY)
    *   3-year revenue growth rate: 14.90% (as of Sep 2025)
    *   Latest twelve months revenue growth: -4.1%

*   **Operating Margin:**
    *   Q3 2025 Adjusted Operating Margin: 13%
    *   Provided Oper. Margin: 14.64%

*   **Capital Expenditures (CapEx):**
    *   LTM ending Sep 30, 2025: $1.343 billion
    *   FY 2024: $1.442 billion
    *   2026 guidance: around $1 billion (excluding VoltaGrid-related investments)

*   **Depreciation & Amortization (D&A):** I need to find D&A. I will assume D&A is a percentage of revenue or CapEx if not found directly.

*   **Change in Net Working Capital (NWC):**
    *   2024 Net Working Capital Change: decreased, primarily driven by $186M decrease in Inventory, $414M increase in Other Current Assets, $21M decrease in Other Current Liabilities, $621M decrease in Others.
    *   This is quite detailed, but for forecasting, I will use NWC as a percentage of revenue.

Let's search for D&A and more consistent revenue growth projections.I have successfully gathered the D&A and more detailed revenue forecasts.

**Depreciation & Amortization (D&A):**
*   LTM ending Sep 30, 2025: $1.106 billion
*   FY 2024: $1.079 billion
*   Q3 2025: $285 million
*   Q1 2025: $277 million

**Revenue Growth Forecasts:**
*   FY 2025 (analyst estimate): $22.12 billion (-3.58% YoY)
*   FY 2026 (analyst estimate): $21.78 billion (-1.53% YoY)
*   Simply Wall St forecast: 1.3% per annum revenue growth
*   WallStreetZen forecast: Avg 1 year forecast $21.8B (-1.59%), Avg 3 year forecast $23.7B (+7.25%)

Given the conflicting revenue growth rates, I will use a blended approach:
*   **2025:** Use the analyst estimate of $22.12 billion.
*   **2026:** Use the analyst estimate of $21.78 billion.
*   **2027-2030:** I will use a more conservative growth rate, starting with a slight increase and then tapering to the terminal growth rate. Given the industry outlook and HAL's strategic priorities, a modest growth is reasonable. I will use 1.5% for 2027, 1.0% for 2028, and 0.5% for 2029, before reaching the terminal growth rate of 2.0% in perpetuity. This is a bit of a contradiction with the 3-year forecast of +7.25% from WallStreetZen, but the individual year forecasts from other sources are negative for 2025 and 2026. I will prioritize the more granular near-term analyst estimates and then apply a conservative long-term growth.

**Historical Free Cash Flow (FCF):**
*   LTM ending Sep 30, 2025: $1.874 billion
*   FY 2024: $2.646 billion
*   FY 2023: $2.274 billion
*   FY 2022: $1.431 billion
*   FY 2021: $1.112 billion
*   FY 2020: $1.24 billion

Now I have all the necessary inputs for the DCF model.

---

### **美股公司 HAL (Halliburton) 股票估值分析**

本報告旨在對美股公司 Halliburton (HAL) 進行全面的股票估值分析，結合其基本面數據、最新市場資訊及多種估值模型，以得出合理的股價區間。

#### **1. 公司概況與最新市場動態**

Halliburton (HAL) 是全球領先的能源產業產品和服務供應商之一，業務涵蓋油氣儲層的勘探、鑽井、完井、生產優化及廢棄等整個生命週期。

**最新財務表現 (截至 2025 年第三季度，2025 年 10 月 21 日發布):**
*   **營收 (Q3 2025):** 56 億美元，較上一季度增長 1.6%，較去年同期增長 1.7%。
*   **調整後淨利潤 (Q3 2025):** 4.96 億美元，或每股 0.58 美元，超出分析師預期。
*   **自由現金流 (Q3 2025):** 2.76 億美元。
*   **調整後營運利潤率 (Q3 2025):** 13%。
*   **2024 財年營收:** 229.4 億美元，較 2023 年略微下降 0.32%。

**市場與產業趨勢:**
*   Halliburton 預計 2025 年北美市場將相對疲軟，但國際市場將實現增長。
*   公司將重點放在資本紀律、股東回報、差異化技術投資以及數位化和自動化轉型上。
*   委內瑞拉市場的重新開放為長期增長提供了機會，但伴隨著顯著的資本支出和政治風險。
*   分析師對 HAL 的平均目標價為 31.94 美元，預計未來一年股價將下跌 2.11%，但共識評級為「買入」或「跑贏大盤」。

**基本面數據 (截至 2026 年 1 月 12 日):**
*   **收盤價 (Close):** 32.63 美元
*   **市值 (Market Cap):** 270.8 億美元
*   **市盈率 (P/E):** 21.6
*   **預期市盈率 (Forward P/E):** 14.87
*   **市淨率 (P/B):** 2.7
*   **股息率 (Dividend %):** 2.08% (年度股息 0.68 美元，每季度 0.17 美元)
*   **股東權益報酬率 (ROE):** 12.77%
*   **資產報酬率 (ROA):** 5.18%
*   **投資報酬率 (ROI):** 7.23%
*   **毛利率 (Gross Margin):** 16.17%
*   **營運利潤率 (Oper. Margin):** 14.64%
*   **淨利率 (Profit Margin):** 5.91%
*   **負債權益比 (Debt/Eq):** 0.84
*   **流動比率 (Current Ratio):** 1.95
*   **速動比率 (Quick Ratio):** 1.43
*   **52 週股價區間:** 18.72 - 33.03 美元

#### **2. 估值假設**

在進行估值分析之前，我們首先確立關鍵假設：

**2.1 加權平均資本成本 (WACC)**

WACC 是用於折現未來現金流的折現率。
*   **無風險利率 (Risk-Free Rate):** 採用當前美國 10 年期國債收益率 **4.20%**。
*   **市場風險溢酬 (Market Risk Premium, MRP):** 採用行業標準 **5.5%**。
*   **Beta (β):** 採用近期較為一致的 Beta 值 **0.80**。
*   **股權成本 (Cost of Equity, Ke):**
    *   Ke = 無風險利率 + Beta * 市場風險溢酬
    *   Ke = 4.20% + 0.80 * 5.5% = 4.20% + 4.40% = **8.60%**

*   **稅前債務成本 (Pre-tax Cost of Debt):**
    *   總債務 (截至 2025 年 9 月): 85.6 億美元。
    *   年度利息支出 (估計): 3.5 億美元 (基於 Q3 2025 淨利息支出 8800 萬美元年化)。
    *   稅前債務成本 = 年度利息支出 / 總債務 = 3.5 億美元 / 85.6 億美元 = **4.09%**。

*   **有效稅率 (Effective Tax Rate):** 考慮到近期稅率波動及一次性費用影響，採用較為穩定的 **22%**。
*   **稅後債務成本 (After-tax Cost of Debt, Kd):**
    *   Kd = 稅前債務成本 * (1 - 有效稅率)
    *   Kd = 4.09% * (1 - 0.22) = 4.09% * 0.78 = **3.19%**

*   **資本結構:**
    *   股權市值 (Market Cap): 270.8 億美元
    *   債務市值 (Total Debt): 85.6 億美元
    *   總資本 = 270.8 億美元 + 85.6 億美元 = 356.4 億美元
    *   股權權重 (We) = 270.8 億美元 / 356.4 億美元 = 76.0%
    *   債務權重 (Wd) = 85.6 億美元 / 356.4 億美元 = 24.0%

*   **WACC 計算:**
    *   WACC = (We * Ke) + (Wd * Kd)
    *   WACC = (0.760 * 8.60%) + (0.240 * 3.19%) = 6.536% + 0.766% = **7.30%**

**2.2 預測期間與長期增長率**
*   **預測期間:** 5 年 (2026 年至 2030 年)。
*   **永續增長率 (Terminal Growth Rate, g):** 考慮到油田服務行業的成熟性和週期性，採用保守的 **2.0%**。

#### **3. 估值模型與結果**

**3.1 折現現金流模型 (Discounted Cash Flow, DCF)**

DCF 模型通過預測公司未來的自由現金流並將其折現至現值來估計公司價值。

**關鍵假設與預測:**

*   **起始營收 (2025 年):** 221.2 億美元 (分析師預期)。
*   **營收增長率:**
    *   2026 年: -1.53% (分析師預期)
    *   2027 年: 1.5%
    *   2028 年: 1.0%
    *   2029 年: 0.5%
    *   2030 年及以後: 2.0% (永續增長率)
*   **調整後營運利潤率:** 保持在 13% (Q3 2025 調整後營運利潤率)。
*   **有效稅率:** 22%。
*   **折舊與攤銷 (D&A):** 預計為營收的 4.9% (基於 2024 年 D&A 10.79 億美元 / 2024 年營收 229.4 億美元)。
*   **資本支出 (CapEx):**
    *   2026 年: 10 億美元 (公司指引)。
    *   之後年度預計為營收的 4.5% (接近歷史平均水平)。
*   **營運資本變動 (Change in NWC):** 預計為營收的 -0.5% (保守估計，考慮到歷史波動和管理層對資本效率的關注)。

**自由現金流 (FCF) 預測 (單位: 億美元):**

| 年度 | 營收 (Revenue) | 營運利潤 (EBIT) | 稅後營運利潤 (NOPAT) | D&A | CapEx | NWC 變動 | 自由現金流 (FCF) | 折現因子 (DF) | 折現後 FCF |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| 2025 (估計) | 221.20 | 28.76 | 22.43 | 10.84 | 13.43 | -1.11 | 20.95 | 1.0000 | 20.95 |
| 2026 | 217.81 | 28.31 | 22.08 | 10.67 | 10.00 | -0.17 | 23.58 | 0.9320 | 21.98 |
| 2027 | 221.08 | 28.74 | 22.42 | 10.83 | 9.95 | -0.16 | 23.46 | 0.8686 | 20.38 |
| 2028 | 223.29 | 29.03 | 22.64 | 10.94 | 10.05 | -0.11 | 23.62 | 0.8095 | 19.12 |
| 2029 | 224.41 | 29.17 | 22.75 | 11.00 | 10.09 | -0.06 | 23.66 | 0.7544 | 17.85 |
| 2030 | 225.53 | 29.32 | 22.87 | 11.06 | 10.15 | -0.06 | 23.72 | 0.7031 | 16.68 |

*註：2025 年 FCF 採用 LTM 數據 18.74 億美元 作為基數，並調整為預期營收。D&A 和 CapEx 預測基於營收百分比或公司指引。*

**終值 (Terminal Value) 計算:**
*   永續增長率 (g): 2.0%
*   終值 FCF (2030 年): 23.72 億美元
*   終值 = 終值 FCF * (1 + g) / (WACC - g)
*   終值 = 23.72 億美元 * (1 + 0.02) / (0.0730 - 0.02)
*   終值 = 23.72 億美元 * 1.02 / 0.0530 = 24.1944 億美元 / 0.0530 = 456.498 億美元

**終值現值 (Present Value of Terminal Value):**
*   終值現值 = 終值 / (1 + WACC)^5
*   終值現值 = 456.498 億美元 / (1.0730)^5 = 456.498 億美元 / 1.4226 = **320.90 億美元**

**公司總價值 (Enterprise Value):**
*   公司總價值 = 預測期內折現後 FCF 之和 + 終值現值
*   公司總價值 = (21.98 + 20.38 + 19.12 + 17.85 + 16.68) 億美元 + 320.90 億美元
*   公司總價值 = 96.01 億美元 + 320.90 億美元 = **416.91 億美元**

**股權價值 (Equity Value):**
*   股權價值 = 公司總價值 + 現金及約當現金 - 總債務
*   現金及約當現金 (截至 2025 年 9 月): 20.3 億美元。
*   總債務 (截至 2025 年 9 月): 85.6 億美元。
*   股權價值 = 416.91 億美元 + 20.3 億美元 - 85.6 億美元 = **351.61 億美元**

**每股估值 (Intrinsic Value Per Share):**
*   流通股數 (Shares Outstanding): 市值 / 股價 = 270.8 億美元 / 32.63 美元 = 8.299 億股 (約 8.3 億股)。
*   每股估值 = 股權價值 / 流通股數
*   每股估值 = 351.61 億美元 / 8.3 億股 = **42.36 美元**

**DCF 模型合理價位區間:**
*   考慮到假設的敏感性，合理價位區間可能在 **38.00 美元至 46.00 美元**。

**3.2 股息折現模型 (Dividend Discount Model, DDM)**

Halliburton 支付季度股息，目前年度股息為 0.68 美元 (每股 0.17 美元)。公司承諾將至少 50% 的年度自由現金流返還給股東。

*   **當前股息 (D0):** 0.68 美元
*   **股權成本 (Ke):** 8.60%
*   **股息增長率 (g):** 過去 12 個月股息增長率為 1.49%，過去三年平均為 30%，但長期來看，考慮到行業成熟度，採用更為保守的長期增長率。由於公司承諾將 FCF 的 50% 返還給股東，且 FCF 增長率波動，我們採用一個與永續增長率相近的保守股息增長率，例如 **2.0%**。

*   **DDM 估值 = D0 * (1 + g) / (Ke - g)**
*   DDM 估值 = 0.68 * (1 + 0.02) / (0.0860 - 0.02)
*   DDM 估值 = 0.68 * 1.02 / 0.0660 = 0.6936 / 0.0660 = **10.51 美元**

**DDM 模型合理價位區間:**
*   由於股息增長率的波動性和保守假設，DDM 估值顯著低於當前股價。這表明市場可能預期更高的股息增長，或者 DDM 模型對於 HAL 這種 FCF 波動較大的公司可能不是最合適的估值方法。如果採用更高的股息增長率，例如 3-4%，估值會顯著提高，但這與長期永續增長率的假設可能不符。因此，DDM 在此情況下可能僅作為參考。

**3.3 相對估值 (Comparable Company Analysis)**

我們將 Halliburton 與其主要競爭對手進行比較，包括 Schlumberger (SLB)、Baker Hughes (BKR)、NOV Inc (NOV) 和 TechnipFMC (FTI)。

**可比公司數據 (截至 2026 年 1 月 12 日，數據為近似值):**

| 公司名稱 | 市值 (Billion USD) | 股價 (USD) | P/E | Forward P/E | P/B | P/S | P/FCF | EV/EBITDA |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **Halliburton (HAL)** | **27.08** | **32.63** | **21.6** | **14.87** | **2.7** | **1.22** | **14.45** | **?** |
| Schlumberger (SLB) | 65.18 | 42.37 | 20.41 | 15.00 (估計) | 2.50 (估計) | 2.00 (估計) | 18.00 (估計) | 10.00 (估計) |
| Baker Hughes (BKR) | 48.73 | 48.84 | 25.00 (估計) | 16.50 (估計) | 2.20 (估計) | 1.50 (估計) | 16.00 (估計) | 9.50 (估計) |
| NOV Inc (NOV) | 6.16 | 16.84 | 18.00 (估計) | 12.00 (估計) | 1.50 (估計) | 0.80 (估計) | 10.00 (估計) | 7.00 (估計) |
| TechnipFMC (FTI) | 19.55 | 49.18 | 17.67 | 13.00 (估計) | 2.00 (估計) | 1.00 (估計) | 12.00 (估計) | 8.50 (估計) |

*註：可比公司數據為估計值，實際數據可能因時間點和來源而異。*

**計算 HAL 的 EV/EBITDA:**
*   市值 (Market Cap): 270.8 億美元
*   總債務 (Total Debt): 85.6 億美元
*   現金及約當現金 (Cash & Equivalents): 20.3 億美元
*   企業價值 (Enterprise Value, EV) = 市值 + 總債務 - 現金 = 270.8 + 85.6 - 20.3 = 336.1 億美元
*   EBITDA (LTM Sep 2025): 42.0 億美元
*   **EV/EBITDA = 336.1 億美元 / 42.0 億美元 = 8.00x**

**相對估值比較:**

| 指標 | HAL | SLB (估計) | BKR (估計) | NOV (估計) | FTI (估計) | 行業平均 (不含HAL) |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| P/E | 21.6 | 20.41 | 25.00 | 18.00 | 17.67 | 20.27 |
| Forward P/E | 14.87 | 15.00 | 16.50 | 12.00 | 13.00 | 14.13 |
| P/B | 2.7 | 2.50 | 2.20 | 1.50 | 2.00 | 2.05 |
| P/S | 1.22 | 2.00 | 1.50 | 0.80 | 1.00 | 1.33 |
| P/FCF | 14.45 | 18.00 | 16.00 | 10.00 | 12.00 | 14.00 |
| EV/EBITDA | 8.00 | 10.00 | 9.50 | 7.00 | 8.50 | 8.75 |

**相對估值分析:**
*   **P/E 和 Forward P/E:** HAL 的 P/E 略高於行業平均，但 Forward P/E 與行業平均接近。這可能表明市場對其近期盈利增長持謹慎態度，但對未來盈利預期較為樂觀。
*   **P/B 和 P/S:** HAL 的 P/B 和 P/S 略高於行業平均，表明其資產和銷售額的估值相對較高。
*   **P/FCF:** HAL 的 P/FCF 略低於行業平均，這可能表明其自由現金流產生能力相對較好，或者市場對其 FCF 的估值相對保守。
*   **EV/EBITDA:** HAL 的 EV/EBITDA 略低於行業平均，這可能表明其企業價值相對於其核心盈利能力被低估。

綜合來看，HAL 在某些倍數上略高於或接近行業平均，在 EV/EBITDA 和 P/FCF 上則略低於行業平均。這表明 HAL 的估值處於行業中等偏低的水平，可能存在一定的吸引力。

**相對估值合理價位區間:**
*   基於行業平均倍數，我們可以推導出一個估值範圍。例如，如果 HAL 的 EV/EBITDA 達到行業平均 8.75x，則其企業價值為 8.75 * 42.0 億美元 = 367.5 億美元。
*   股權價值 = 367.5 億美元 + 20.3 億美元 - 85.6 億美元 = 302.2 億美元。
*   每股估值 = 302.2 億美元 / 8.3 億股 = **36.41 美元**。
*   考慮到倍數的波動性，合理價位區間可能在 **30.00 美元至 40.00 美元**。

#### **4. 綜合結論**

綜合以上估值模型，我們得出以下結論：

*   **DCF 模型估值:** 42.36 美元 (合理價位區間：38.00 美元至 46.00 美元)
*   **DDM 模型估值:** 10.51 美元 (由於股息增長率假設的敏感性，此估值僅供參考)
*   **相對估值模型估值:** 36.41 美元 (合理價位區間：30.00 美元至 40.00 美元)

DCF 模型給出的估值最高，為 42.36 美元，這反映了對公司未來自由現金流增長的預期。相對估值模型給出的估值為 36.41 美元，表明 HAL 相對於同行可能存在一定的估值吸引力。DDM 模型由於其對股息增長率的敏感性，且 HAL 的股息增長歷史波動較大，導致估值較低，可能無法完全反映公司的內在價值。

考慮到 DCF 模型對公司長期增長潛力的捕捉以及相對估值模型對市場現狀的反映，我們認為 HAL 的合理股價應介於 DCF 和相對估值模型的結果之間。

**綜合合理價位區間:**
基於 DCF 和相對估值模型的結果，我們認為 Halliburton (HAL) 的合理股價區間為 **36.00 美元至 42.00 美元**。

**與當前股價 (32.63 美元) 比較:**
當前股價 32.63 美元位於我們綜合合理價位區間的下限附近，甚至略低於區間。這表明 Halliburton 的股票可能被市場低估，或者至少具有一定的上漲潛力。分析師的平均目標價 31.94 美元也與當前股價接近，但預期略有下跌，這可能反映了對短期市場逆風的擔憂。然而，考慮到公司在國際市場的增長潛力、對資本效率的承諾以及數位化轉型的戰略，長期來看，HAL 仍具備投資價值。

**投資建議:**
基於上述分析，Halliburton (HAL) 在當前價格下可能是一個具有吸引力的投資標的，尤其對於看好油田服務行業長期復甦和公司戰略轉型的投資者。然而，投資者應密切關注油價波動、地緣政治風險以及公司在北美市場的表現。
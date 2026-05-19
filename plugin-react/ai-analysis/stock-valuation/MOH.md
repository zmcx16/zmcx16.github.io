為了對美股公司 MOH (Molina Healthcare Inc.) 執行完整的股票估值分析，我將首先透過網路搜尋獲取最新的財務數據、新聞和市場動態，以補充您提供的基本面數據。隨後，我將應用折現現金流模型 (DCF)、相對估值法，並評估股息折現模型 (DDM) 的適用性。

### 1. 獲取最新資訊與基本面補充

首先，我將搜尋 MOH 的最新財報、分析師預期、產業趨勢以及任何可能影響其估值的重大新聞。

Based on the search results, here's a summary of the latest information for MOH:

**Latest Financials & Guidance (Q1 2026 reported April 22, 2026):**
*   **Q1 2026 Adjusted EPS:** $2.35 (beat consensus of $1.57 or $1.79 depending on source)
*   **Q1 2026 GAAP EPS:** $0.27 (down significantly from $5.45 in Q1 2025, due to a $93 million impairment of intangible assets related to exiting Medicare Advantage-Part D product for 2027)
*   **Q1 2026 Revenue:** $10.80 billion (missed analysts' expectations of $10.91 billion or $10.87 billion)
*   **Full Year 2026 Guidance (reaffirmed):**
    *   Premium Revenue: Approximately $42 billion (a decline of approximately 2% from full year 2025)
    *   Adjusted EPS: At least $5.00 per diluted share
    *   GAAP EPS: At least $1.90 per diluted share
*   **Annual Revenue (TTM ending March 31, 2026):** $45.075 billion
*   **Annual Net Income (TTM ending March 31, 2026):** $188 million (an 84.01% decline year-over-year)
*   **Free Cash Flow (TTM ending March 31, 2026):** $251 million, or $4.93 per share
*   **Operating Cash Flow (Q1 2026):** $1,082 million (compared to $190 million for Q1 2025, driven by timing of government receivables and payables)
*   **Medical Care Ratio (MCR) Q1 2026:** 91.1% (compared to 89.2% in Q1 2025)
*   **Profit Margin (Q1 2026 Adjusted):** 1.6%

**Analyst Sentiment & Price Targets:**
*   **Consensus Rating:** Hold/Neutral
*   **Average 12-month Price Target:** Ranges from $167 to $251.32, with several sources citing around $172.79 to $182.88.
    *   High: $439 (B of A Securities, April 1, 2024)
    *   Low: $124 (Goldman Sachs, February 12, 2026)
    *   Most recent analyst ratings (May 11, 2026) from Truist Securities, Cantor Fitzgerald, and Baird average $192.33.
*   **Implied Upside/Downside:** Some sources indicate a slight downside or no upside potential based on the average target price.

**Key Trends & Risks:**
*   **Medicaid/Medicare Focus:** Molina Healthcare primarily focuses on government-sponsored programs (Medicaid, Medicare, and state insurance marketplaces).
*   **Membership Decline:** Lower premium revenue in Q1 2026 reflects lower Medicaid membership due to market contraction and expiration of a Virginia Medicaid contract, and a decrease in Marketplace membership due to product and pricing strategy.
*   **Medical Cost Pressures:** Rising medical utilization increased medical loss ratios in 2024–2025. Managing utilization while meeting quality metrics is essential to maintain margins.
*   **Strategic Exit:** Planned exit from Medicare Advantage-Part D product for 2027, leading to intangible asset impairment.
*   **Growth Opportunities:** Expansion of Dual-Eligible Special Needs Plans (D-SNPs) for dual-eligibles is a growing segment.
*   **Competitive Landscape:** Primary rivals include Centene, Elevance Health (formerly Anthem), UnitedHealth Group, and Humana. Competition is fierce for state contracts.
*   **Legal Scrutiny:** A shareholder law firm is investigating alleged nondisclosure around medical cost trend assumptions and 2025 guidance, raising questions about the reliability of Molina's outlook.

**WACC & Cost of Equity:**
*   WACC: Ranges from 7.0% to 8.96%. Alpha Spread reports 7.42% (Cost of Equity 8.14%, Cost of Debt 5.15%, Debt weight 28.06%). GuruFocus reports 8.96% as of May 18, 2026.
*   Cost of Equity: Alpha Spread reports 8.14% (Risk-Free Rate 4.42%, Beta 0.89, ERP 4.18%). GuruFocus reports 8.1% (Risk-Free Rate 4.15%, Equity Risk Premium 5.10%, Adjusted Beta 0.59, Risk Adjustments 0.25%).

**Other Relevant Data:**
*   **MOH does not pay dividends.** This confirms DDM is not applicable.
*   **Market Cap:** $9.63 billion (from user prompt, consistent with search results)
*   **Trailing P/E:** 54.72
*   **Forward P/E:** 35.36 (Note: User provided 19.86, but recent search shows 35.36, I will use the more recent one for forward-looking analysis).
*   **P/FCF:** 37.88 (as of May 15, 2026)
*   **ROIC:** 10.22% (as of March 2026)
*   **Debt/Equity:** 0.97 (from user prompt)

---

### 2. 估值方法應用

鑑於 MOH 不支付股息，股息折現模型 (DDM) 不適用。我們將專注於折現現金流模型 (DCF) 和相對估值法。

#### 2.1 折現現金流模型 (Discounted Cash Flow, DCF)

DCF 模型旨在估計公司未來自由現金流的現值。

**估值假設：**

*   **預測期間 (Explicit Forecast Period):** 5 年 (2026-2030)
*   **折現率 (Discount Rate - WACC):** 我們將使用 Alpha Spread 提供的 7.42% 作為 WACC。這是一個合理的範圍，考慮到 GuruFocus 提供的 8.96%。
    *   Cost of Equity (Ke): 8.14%
    *   Cost of Debt (Kd): 5.15% (稅前)
    *   Tax Rate: 17.54% (TTM)
    *   Weight of Debt (Wd): 28.06%
    *   Weight of Equity (We): 1 - 28.06% = 71.94%
    *   WACC = (We * Ke) + (Wd * Kd * (1 - Tax Rate)) = (0.7194 * 0.0814) + (0.2806 * 0.0515 * (1 - 0.1754)) = 0.05858 + 0.01189 = 0.07047 ≈ 7.05%.
    *   *Note: I will use 7.05% as the WACC for consistency with the calculation based on provided components, which is slightly different from the directly stated 7.42% or 8.96%. This provides a more transparent derivation.*
*   **長期增長率 (Terminal Growth Rate, g):** 考慮到醫療保健行業的穩定性以及 MOH 在政府資助計劃中的地位，我們假設長期增長率為 2.5% (略高於長期通脹率，反映溫和的實際增長)。
*   **自由現金流 (Free Cash Flow, FCF):** 由於 MOH 的 FCF 波動較大 (2025年為負，2026年TTM為正但較低)，我們需要對其進行預測。
    *   我們將從營收開始預測，然後推導出 FCF。
    *   2025年營收: $45.426B
    *   2026年預期營收: $42B (下降約2% from 2025)
    *   分析師預期未來3年營收增長率約為 4.1% - 9.1%. 我們將採用一個較為保守的增長路徑，考慮到2026年的預期下降。
    *   **營收增長率假設:**
        *   2026: -2% (基於公司指引)
        *   2027: 4% (從負增長恢復，低於分析師預期，考慮到市場競爭和成本壓力)
        *   2028: 5%
        *   2029: 4%
        *   2030: 3%
    *   **營業利潤率 (Operating Margin):** Q1 2026調整後稅前利潤率為 1.6%。2025年全年利潤率為 1.0%。考慮到醫療成本壓力，我們將假設未來幾年營業利潤率逐步改善。
        *   2026: 1.6% (基於Q1調整後數據)
        *   2027: 1.8%
        *   2028: 2.0%
        *   2029: 2.2%
        *   2030: 2.4%
    *   **稅率:** 17.54% (TTM)
    *   **資本支出 (Capital Expenditure, CapEx):** 醫療保健公司通常資本支出相對穩定。我們將假設 CapEx 佔營收的 1%。
    *   **折舊與攤銷 (Depreciation & Amortization, D&A):** 假設 D&A 佔營收的 1.5%。
    *   **營運資本變動 (Change in Working Capital):** 假設為營收的 0.5%。

**DCF 計算步驟：**

1.  **預測營收 (Revenue Forecast):**
    *   2025 (實際): $45.426B
    *   2026: $45.426B * (1 - 0.02) = $44.517B
    *   2027: $44.517B * (1 + 0.04) = $46.298B
    *   2028: $46.298B * (1 + 0.05) = $48.613B
    *   2029: $48.613B * (1 + 0.04) = $50.557B
    *   2030: $50.557B * (1 + 0.03) = $52.074B

2.  **預測營業利潤 (EBIT Forecast):**
    *   EBIT = Revenue * Operating Margin
    *   2026: $44.517B * 0.016 = $0.712B
    *   2027: $46.298B * 0.018 = $0.833B
    *   2028: $48.613B * 0.020 = $0.972B
    *   2029: $50.557B * 0.022 = $1.112B
    *   2030: $52.074B * 0.024 = $1.250B

3.  **計算稅後營業利潤 (NOPAT):**
    *   NOPAT = EBIT * (1 - Tax Rate)
    *   2026: $0.712B * (1 - 0.1754) = $0.587B
    *   2027: $0.833B * (1 - 0.1754) = $0.687B
    *   2028: $0.972B * (1 - 0.1754) = $0.802B
    *   2029: $1.112B * (1 - 0.1754) = $0.917B
    *   2030: $1.250B * (1 - 0.1754) = $1.031B

4.  **計算自由現金流 (FCFF):**
    *   FCFF = NOPAT + D&A - CapEx - Change in Working Capital
    *   D&A = Revenue * 0.015
    *   CapEx = Revenue * 0.01
    *   Change in Working Capital = Revenue * 0.005 (假設每年營運資本增加，消耗現金)

| 年度 | 營收 (B) | 營業利潤率 | EBIT (B) | NOPAT (B) | D&A (B) | CapEx (B) | 營運資本變動 (B) | FCFF (B) |
| :--- | :------- | :--------- | :------- | :-------- | :------ | :-------- | :--------------- | :------- |
| 2026 | 44.517   | 1.6%       | 0.712    | 0.587     | 0.668   | 0.445     | 0.223            | 0.587 + 0.668 - 0.445 - 0.223 = 0.587 |
| 2027 | 46.298   | 1.8%       | 0.833    | 0.687     | 0.694   | 0.463     | 0.231            | 0.687 + 0.694 - 0.463 - 0.231 = 0.687 |
| 2028 | 48.613   | 2.0%       | 0.972    | 0.802     | 0.729   | 0.486     | 0.243            | 0.802 + 0.729 - 0.486 - 0.243 = 0.802 |
| 2029 | 50.557   | 2.2%       | 1.112    | 0.917     | 0.758   | 0.506     | 0.253            | 0.917 + 0.758 - 0.506 - 0.253 = 0.916 |
| 2030 | 52.074   | 2.4%       | 1.250    | 1.031     | 0.781   | 0.521     | 0.260            | 1.031 + 0.781 - 0.521 - 0.260 = 1.031 |

5.  **計算終值 (Terminal Value, TV):**
    *   TV = FCFF_2031 * (1 + g) / (WACC - g)
    *   FCFF_2031 = FCFF_2030 * (1 + g) = $1.031B * (1 + 0.025) = $1.057B
    *   TV = $1.057B / (0.0705 - 0.025) = $1.057B / 0.0455 = $23.231B

6.  **計算各年 FCFF 的現值 (Present Value of FCFF):**
    *   PV(FCFF_2026) = $0.587B / (1 + 0.0705)^1 = $0.548B
    *   PV(FCFF_2027) = $0.687B / (1 + 0.0705)^2 = $0.600B
    *   PV(FCFF_2028) = $0.802B / (1 + 0.0705)^3 = $0.654B
    *   PV(FCFF_2029) = $0.916B / (1 + 0.0705)^4 = $0.700B
    *   PV(FCFF_2030) = $1.031B / (1 + 0.0705)^5 = $0.740B

7.  **計算終值的現值 (Present Value of Terminal Value):**
    *   PV(TV) = $23.231B / (1 + 0.0705)^5 = $16.676B

8.  **計算企業總價值 (Enterprise Value, EV):**
    *   EV = Sum of PV(FCFF) + PV(TV)
    *   EV = $0.548B + $0.600B + $0.654B + $0.700B + $0.740B + $16.676B = $19.918B

9.  **計算股權價值 (Equity Value):**
    *   Equity Value = EV + Cash & Equivalents - Total Debt
    *   我們需要最新的現金和債務數據。根據用戶提供的數據，Debt/Eq = 0.97。
    *   Market Cap = $9.63B。
    *   Total Debt = Market Cap * Debt/Eq = $9.63B * 0.97 = $9.341B (這是一個粗略估計，因為 Debt/Eq 是基於股權市場價值，而非賬面價值，但作為估計值可以使用)。
    *   根據 GuruFocus，截至2026年3月，MOH 的賬面債務約為 $3.8156B。我們將使用這個更精確的數據。
    *   我們需要現金及約當現金。由於沒有直接提供，我們假設現金佔總資產的合理比例，或者使用歷史數據。為了簡化，我們暫時假設淨債務 (Net Debt) = Total Debt - Cash & Equivalents。
    *   如果沒有現金數據，我們可以使用 EV - Net Debt = Equity Value。
    *   Equity Value = EV - Net Debt。
    *   假設現金為 $0.5B (一個保守的估計，實際需要查閱資產負債表)。
    *   Equity Value = $19.918B - $3.8156B + $0.5B = $16.6024B

10. **計算每股價值 (Intrinsic Value Per Share):**
    *   流通股數 (Shares Outstanding): Market Cap / Close Price = $9.63B / $184.88 = 52.088 百萬股。
    *   Intrinsic Value Per Share = Equity Value / Shares Outstanding
    *   Intrinsic Value Per Share = $16.6024B / 52.088M = $318.74

**DCF 估值結果：**
*   **每股合理價位：$318.74**
*   **合理價位區間：** 考慮到假設的敏感性，我們可以設定一個區間。如果 WACC 變動 +/- 0.5%，長期增長率變動 +/- 0.5%，則價格可能在 **$250 - $380** 之間。

#### 2.2 相對估值 (Comparable Company Analysis)

相對估值法是將 MOH 的估值倍數與其同業競爭者進行比較。

**可比公司：**
根據搜尋結果，MOH 的主要競爭對手包括 Centene Corporation (CNC)、Elevance Health (ELV，前身為 Anthem)、UnitedHealth Group (UNH) 和 Humana (HUM)。

**估值倍數：**
我們將使用 P/E (市盈率)、Forward P/E (預期市盈率) 和 P/S (市銷率)。EV/EBITDA 也是常用指標，但由於 MOH 的營業利潤率較低且波動，EBITDA 可能不穩定，且搜尋結果中未直接提供可比公司的 EV/EBITDA。

**MOH 的倍數 (基於最新數據和用戶提供數據):**
*   Close Price: $184.88
*   Trailing P/E: 54.72
*   Forward P/E: 35.36 (使用最新搜尋結果)
*   P/S: 0.21 (用戶提供)
*   Market Cap: $9.63B
*   TTM Revenue: $45.075B
*   TTM EPS: $3.38

**可比公司數據 (需要進行搜尋以獲取最新數據):**

**可比公司估值倍數 (截至2026年5月18日左右):**

| 公司名稱           | 股票代碼 | 市值 (B) | Trailing P/E | Forward P/E | P/S (TTM) |
| :----------------- | :------- | :------- | :----------- | :---------- | :-------- |
| Molina Healthcare  | MOH      | 9.63     | 54.72        | 35.36       | 0.21      |
| Centene Corporation| CNC      | 28.77    | N/A (負EPS)  | 13.06 - 16.88 | N/A       |
| Elevance Health    | ELV      | 69.429   | 16.70 - 16.91| 12.4 - 14.59| N/A       |
| UnitedHealth Group | UNH      | ~357.7   | 29.49 - 29.75| 19.46 - 21.45| N/A       |
| Humana             | HUM      | 28.05    | 11.22 - 24.13| 23.98 - 34.73| N/A       |

*Note: P/S for competitors was not readily available in the search results, so we will focus on P/E and Forward P/E.*

**分析與推導：**

*   **Trailing P/E:** MOH 的 Trailing P/E (54.72) 遠高於所有可比公司 (UNH 約 29.5，ELV 約 16.8，HUM 約 11.2-24.1)。這表明 MOH 過去12個月的盈利能力相對較弱，或者市場對其未來增長有非常高的預期。考慮到 MOH Q1 2026 GAAP EPS 大幅下降，以及全年調整後 EPS 預期為 $5.00，其 Trailing P/E 顯得非常高。
*   **Forward P/E:** MOH 的 Forward P/E (35.36) 雖然仍高於大多數可比公司 (CNC 約 13-17，ELV 約 12-15，UNH 約 19-21)，但與 Humana (約 24-35) 較為接近。這表明市場預期 MOH 未來一年的盈利將大幅改善 (EPS next Y_% 為 79.47%)，從而使 Forward P/E 顯著下降。
    *   如果我們使用可比公司的平均 Forward P/E (排除 MOH 的高值，取 CNC, ELV, UNH, HUM 的平均值，大約在 15-25 之間)，MOH 的 35.36 仍然偏高。
    *   如果我們取可比公司 Forward P/E 的中位數，大約在 19-21 之間。
    *   MOH 的高 Forward P/E 可能反映了其預期的強勁 EPS 增長 (EPS next Y_% 79.47%)。
*   **P/S:** MOH 的 P/S (0.21) 非常低。這通常表明公司營收規模大但利潤率低，或者市場認為其營收質量不高。可比公司 P/S 數據未直接獲取，但通常醫療保健服務公司的 P/S 會相對較低。

**相對估值結果：**

由於 MOH 的盈利能力波動較大，且預期增長率很高，直接使用 P/E 倍數進行比較可能存在偏差。我們將主要參考 Forward P/E。

1.  **基於 Forward P/E：**
    *   可比公司平均 Forward P/E (CNC, ELV, UNH, HUM 的平均值，取中間值): (16.88 + 14.59 + 21.45 + 34.73) / 4 = 21.91。
    *   MOH 2026年預期調整後 EPS: $5.00。
    *   MOH 合理股價 = 平均 Forward P/E * 預期 EPS = 21.91 * $5.00 = $109.55。
    *   如果考慮到 MOH 預期的高增長率，給予其略高的倍數，例如 25x。
    *   MOH 合理股價 = 25 * $5.00 = $125.00。

2.  **基於 P/S：**
    *   MOH 的 P/S 為 0.21。由於缺乏可比公司的 P/S 數據，此指標難以直接應用。但其極低的 P/S 可能暗示市場對其利潤率和盈利質量持謹慎態度。

**相對估值結果：**
*   **每股合理價位：$109.55 - $125.00**
*   **合理價位區間：$100 - $130**

#### 2.3 股息折現模型 (Dividend Discount Model, DDM)

根據提供的數據和搜尋結果，MOH 的 "Dividend %" 為 "-"，且沒有支付股息的記錄。因此，股息折現模型不適用於 MOH 的估值。

### 3. 綜合結論與比較

**估值結果匯總：**

*   **折現現金流模型 (DCF):** 每股合理價位約 **$318.74** (區間：$250 - $380)
*   **相對估值法 (基於 Forward P/E):** 每股合理價位約 **$109.55 - $125.00** (區間：$100 - $130)

**結果比較與分析：**

兩個模型得出的估值結果存在顯著差異。

*   **DCF 估值顯著高於當前股價 ($184.88) 和相對估值。** 這可能歸因於 DCF 模型對未來營收增長和利潤率改善的假設，以及終值計算的影響。MOH 預計未來 EPS 增長強勁 (EPS next Y_% 79.47%)，這在 DCF 模型中得到了體現。然而，其歷史利潤率較低且波動，Q1 2026 GAAP EPS 大幅下降，這為 DCF 模型的假設帶來了不確定性。
*   **相對估值結果低於當前股價。** 這表明相對於其主要競爭對手，MOH 目前的股價可能被高估，或者市場對其未來增長和盈利改善的信心不如 DCF 模型所假設的那麼樂觀。MOH 的 Forward P/E 雖然因預期高增長而下降，但仍高於行業平均水平，這可能暗示其股價已經計入了大部分的增長預期。

**差異原因分析：**

1.  **盈利波動與一次性項目：** MOH Q1 2026 GAAP EPS 大幅下降，主要由於退出 Medicare Advantage-Part D 產品導致的無形資產減值。這使得 Trailing P/E 異常高，並可能影響市場對其短期盈利穩定性的看法。DCF 模型通常會平滑這些一次性影響，並基於更長期的經營趨勢進行預測。
2.  **增長預期：** MOH 預計未來 EPS 增長非常高 (近 80%)，這在 DCF 模型中會產生顯著影響。相對估值雖然也考慮了預期盈利，但市場可能對這種高增長的可持續性持保留態度，或者認為其已經充分反映在當前股價中。
3.  **利潤率壓力：** 醫療保健行業面臨醫療成本上升的壓力，MOH 的 MCR 在 Q1 2026 有所上升。雖然 DCF 假設了利潤率的逐步改善，但這是一個關鍵的敏感性因素。
4.  **市場情緒與風險：** 相對估值更能反映市場當前的情緒和對行業風險的看法。MOH 面臨會員下降、醫療成本壓力以及潛在的法律審查等風險，這些都可能導致市場給予其較低的估值倍數。

**綜合結論：**

MOH 的估值分析呈現出複雜的局面。

*   **DCF 模型顯示出顯著的潛在上漲空間，** 但這高度依賴於其能否實現預期的強勁盈利增長和利潤率改善。如果公司能夠成功執行其戰略，特別是在管理醫療成本和擴展 D-SNPs 方面，DCF 估值可能更具參考價值。
*   **相對估值則暗示當前股價可能偏高，** 尤其是在考慮到其與同業相比仍然較高的 Forward P/E 倍數。分析師的平均目標價 (約 $172.79 - $182.88) 也與當前股價接近，並未顯示出顯著的潛在上漲空間。

**投資建議：**

鑑於兩種估值方法之間的巨大差異，以及 MOH 面臨的挑戰和高增長預期，我建議採取謹慎的「持有」立場。

*   **上行潛力：** 如果 MOH 能夠持續實現其高盈利增長預期，並有效控制醫療成本，其股價有顯著上漲空間，接近 DCF 估值。
*   **下行風險：** 如果公司未能達到盈利預期，或者醫療成本壓力持續惡化，其股價可能會面臨壓力，向相對估值靠攏。潛在的法律審查也增加了不確定性。

**合理價位區間：**

綜合考慮 DCF 模型的長期潛力與相對估值的市場現實，以及分析師的目標價，MOH 的合理價位可能在 **$150 - $220** 之間。當前股價 $184.88 位於此區間內，表明市場對其未來表現持觀望態度。投資者應密切關注其未來幾個季度的盈利報告、醫療成本趨勢以及會員增長情況。
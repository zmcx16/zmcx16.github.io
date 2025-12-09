ev_prompt = """請根據「決策樹分析（Decision Tree）」與「期望值分析（Expected Value Analysis）」評估美股公司 **{symbol}** 目前是否適合投資。
分析時請務必包含以下要求：
1. **繪製完整的決策樹（使用 Markdown）**：
   * 每一個節點都需標示：
     * 預測情境名稱
     * 對應的機率（Probability）
     * 預期報酬 / 期望值（Expected Value）
2. **明確列出所有計算過程**：
   * 節點的期望值計算方式
   * 核心假設（市場、財務、產業趨勢）
3. **最終結論**：
   * 根據計算過的整體期望值，給出「適合投資 / 不適合投資」的判斷
   * 附上簡短理由
請使用 **Markdown 格式** 輸出所有內容。
"""

prompts = {
  "ev-analysis": ev_prompt
}

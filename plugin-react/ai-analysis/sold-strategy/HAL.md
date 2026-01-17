content=Content(
  role='model'
) citation_metadata=None finish_message=None token_count=None finish_reason=<FinishReason.STOP: 'STOP'> avg_logprobs=None grounding_metadata=GroundingMetadata(
  search_entry_point=SearchEntryPoint(
    rendered_content="""<style>
.container {
  align-items: center;
  border-radius: 8px;
  display: flex;
  font-family: Google Sans, Roboto, sans-serif;
  font-size: 14px;
  line-height: 20px;
  padding: 8px 12px;
}
.chip {
  display: inline-block;
  border: solid 1px;
  border-radius: 16px;
  min-width: 14px;
  padding: 5px 16px;
  text-align: center;
  user-select: none;
  margin: 0 8px;
  -webkit-tap-highlight-color: transparent;
}
.carousel {
  overflow: auto;
  scrollbar-width: none;
  white-space: nowrap;
  margin-right: -12px;
}
.headline {
  display: flex;
  margin-right: 4px;
}
.gradient-container {
  position: relative;
}
.gradient {
  position: absolute;
  transform: translate(3px, -9px);
  height: 36px;
  width: 9px;
}
@media (prefers-color-scheme: light) {
  .container {
    background-color: #fafafa;
    box-shadow: 0 0 0 1px #0000000f;
  }
  .headline-label {
    color: #1f1f1f;
  }
  .chip {
    background-color: #ffffff;
    border-color: #d2d2d2;
    color: #5e5e5e;
    text-decoration: none;
  }
  .chip:hover {
    background-color: #f2f2f2;
  }
  .chip:focus {
    background-color: #f2f2f2;
  }
  .chip:active {
    background-color: #d8d8d8;
    border-color: #b6b6b6;
  }
  .logo-dark {
    display: none;
  }
  .gradient {
    background: linear-gradient(90deg, #fafafa 15%, #fafafa00 100%);
  }
}
@media (prefers-color-scheme: dark) {
  .container {
    background-color: #1f1f1f;
    box-shadow: 0 0 0 1px #ffffff26;
  }
  .headline-label {
    color: #fff;
  }
  .chip {
    background-color: #2c2c2c;
    border-color: #3c4043;
    color: #fff;
    text-decoration: none;
  }
  .chip:hover {
    background-color: #353536;
  }
  .chip:focus {
    background-color: #353536;
  }
  .chip:active {
    background-color: #464849;
    border-color: #53575b;
  }
  .logo-light {
    display: none;
  }
  .gradient {
    background: linear-gradient(90deg, #1f1f1f 15%, #1f1f1f00 100%);
  }
}
</style>
<div class="container">
  <div class="headline">
    <svg class="logo-light" width="18" height="18" viewBox="9 9 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fill-rule="evenodd" clip-rule="evenodd" d="M42.8622 27.0064C42.8622 25.7839 42.7525 24.6084 42.5487 23.4799H26.3109V30.1568H35.5897C35.1821 32.3041 33.9596 34.1222 32.1258 35.3448V39.6864H37.7213C40.9814 36.677 42.8622 32.2571 42.8622 27.0064V27.0064Z" fill="#4285F4"/>
      <path fill-rule="evenodd" clip-rule="evenodd" d="M26.3109 43.8555C30.9659 43.8555 34.8687 42.3195 37.7213 39.6863L32.1258 35.3447C30.5898 36.3792 28.6306 37.0061 26.3109 37.0061C21.8282 37.0061 18.0195 33.9811 16.6559 29.906H10.9194V34.3573C13.7563 39.9841 19.5712 43.8555 26.3109 43.8555V43.8555Z" fill="#34A853"/>
      <path fill-rule="evenodd" clip-rule="evenodd" d="M16.6559 29.8904C16.3111 28.8559 16.1074 27.7588 16.1074 26.6146C16.1074 25.4704 16.3111 24.3733 16.6559 23.3388V18.8875H10.9194C9.74388 21.2072 9.06992 23.8247 9.06992 26.6146C9.06992 29.4045 9.74388 32.022 10.9194 34.3417L15.3864 30.8621L16.6559 29.8904V29.8904Z" fill="#FBBC05"/>
      <path fill-rule="evenodd" clip-rule="evenodd" d="M26.3109 16.2386C28.85 16.2386 31.107 17.1164 32.9095 18.8091L37.8466 13.8719C34.853 11.082 30.9659 9.3736 26.3109 9.3736C19.5712 9.3736 13.7563 13.245 10.9194 18.8875L16.6559 23.3388C18.0195 19.2636 21.8282 16.2386 26.3109 16.2386V16.2386Z" fill="#EA4335"/>
    </svg>
    <svg class="logo-dark" width="18" height="18" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
      <circle cx="24" cy="23" fill="#FFF" r="22"/>
      <path d="M33.76 34.26c2.75-2.56 4.49-6.37 4.49-11.26 0-.89-.08-1.84-.29-3H24.01v5.99h8.03c-.4 2.02-1.5 3.56-3.07 4.56v.75l3.91 2.97h.88z" fill="#4285F4"/>
      <path d="M15.58 25.77A8.845 8.845 0 0 0 24 31.86c1.92 0 3.62-.46 4.97-1.31l4.79 3.71C31.14 36.7 27.65 38 24 38c-5.93 0-11.01-3.4-13.45-8.36l.17-1.01 4.06-2.85h.8z" fill="#34A853"/>
      <path d="M15.59 20.21a8.864 8.864 0 0 0 0 5.58l-5.03 3.86c-.98-2-1.53-4.25-1.53-6.64 0-2.39.55-4.64 1.53-6.64l1-.22 3.81 2.98.22 1.08z" fill="#FBBC05"/>
      <path d="M24 14.14c2.11 0 4.02.75 5.52 1.98l4.36-4.36C31.22 9.43 27.81 8 24 8c-5.93 0-11.01 3.4-13.45 8.36l5.03 3.85A8.86 8.86 0 0 1 24 14.14z" fill="#EA4335"/>
    </svg>
    <div class="gradient-container"><div class="gradient"></div></div>
  </div>
  <div class="carousel">
    <a class="chip" href="https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQGhYn4vC589RP4NP5BxH3Pvy_dFCq0SIPLmn52ksSlaMqF9b6PkPnFrF4jltiXm05PxpxLB_bgUGDjExHIsAixtVnCTkzk964_0Ln9oh-ytpvdvdSvCQiK8JgBIkuW0hwzEqJNmj4krBTwpPKO1lR_Pk6gT1z9mM73hgQZU5HALmYZfEA7Sks65zYhT2j2ZX57pSeLvZpn7xTcTszCYRA==">HAL moving averages current</a>
    <a class="chip" href="https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQEFKwOFsEta5-b0NEI1Ak8L3ggmC7vxd07rVEJLw1l-8m8PbE4tsWw0NPZbC9dMWmeapZdyv1d4j8BhDxxiA5iZrwULbQQP57re2M7wyTSi6sSKgkfpjDlJmWqzbvXG41QNgyplRVAXqFIssQbGTeBBQpX_d2HxaGbmN0c-wh4ONh4LDJvvil4QOZ3uKacy2FrvFy8tbg==">HAL trading volume</a>
    <a class="chip" href="https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQGs12Z3LRku5zrqOP3yen5FRJNFpBHd6xNe8vZ-mNcg0JqnubG-hK6aW6CtbbT0EEHvjhSd7YUNveTM60_0RI_cra9z-nH93egUG56AXK4CE4x-s-PiNtTaVaBnD_0sSFsLFGPf5-lwZvw4jphfEVNvvNJumcmS3y1ANhMEfk4-pLNGXaT1o9Pch82Y9c67gIn27xqCyKDjc8EW">HAL stock price history</a>
    <a class="chip" href="https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQFfB9ciIDfYLiVgUq1yulv3k5tMJsEbMmAO7WaYrikrErYUx5I74wRQOTuOXZPAa4gtjxsV5oD-kTZjKq9Cep_jXXwFhL0bLDNWM-HjUiwMzGnXnln_9tWumgKjfCZ9ZsWPa5vXzHlGFSSlYBTjPOcrWy-jkP1QqBg6MdU1G1VSBWk4R5rnseObI1GeAcxESo60OK98tw47xW4nkDSv8uKnw8PZVkvPays1mx9PQrQ3Iq9LoFsBG99vH4ggpPzx">HAL technical analysis indicators RSI MACD Bollinger Bands</a>
    <a class="chip" href="https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQEVVdiZZEMG1A1QbS8O2b1dSMkh6W7QY-rmepQ--A4zEz-d4nBUOkmVv0x145xjoDjpZJ4H1K8W9qf4lTjE4zQ7mpo1IuiHrNJYluvwTCWzVpNWQBiArxE4wN3MJIMCdjRxE0z3kTWeFmoJHnZGWPgMJAAKX2uuqD3ZIFK1h5QTe7gmDMOKEJpA8lNviUzODedYYQvH-WhBOA==">HAL stock news latest</a>
    <a class="chip" href="https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQGFlT-Yzs1BDxKP9QMYVKkXJ7pIEkd8X-KlTYyCfEZiu7-Y9LeD-WzenDeBLJrg84tcsiSw8ituQYzCmlHkeT2UV0gKeN3CsrPJVEr29x_JyZGmhOJz7qr4HVARpAtzx216ZvJfgJNX-td2Dfzf2GCaQxjSEzgi4NM_opgB7-ze8XYJfEyJfoXXoMQ2nhO3CZJaZjn3zcDTp6fBZu6N-2b6wTRuCio=">Halliburton latest earnings report</a>
    <a class="chip" href="https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQED233nLLCb2VcRsHXDGIKN0S9cileEtCEw6u7klsZATaofskl-h3IFWAQb-RVl2vMyZKSqs3AOx5tj9MGsU50yl_PWYTtuXknQxmlPfRAXPADtAZLeOjCHtuQ_tvyKf9WqiuWtniTWSQCuX59mHxbNHGPjsHgQNdwDygQuVSd4zJ0Nu3stbb12T2T89Z6YFK-VqIA_gmQiepMkXG8jO5T01Htl">Halliburton financial statements</a>
    <a class="chip" href="https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQEUK_QrUrAqrL0I-5zbrI4XMW7OmYCtSWoQ7wEqgQDMAHtaFdaHD14q1CGuaCUDV5u_f9bDdQ0wnjvshN_UVQLc-EwwUBSU3HHcz-SKU-FyQhDCTMFbuRDgtJuBnfLldG4I43_ZKPLVTxxr5f0l_Zx26yv3KT-W5WPN47EJQoVqW9ZHrjTVFE8-NUTFPi3ZGfWCt2CoIcOKoUaYNY8tryO_">Crude oil price forecast 2026</a>
    <a class="chip" href="https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQG1Q_XrA9U0LxKBAHdeY7vj3iIMOIVfOcSsQQP8Qj9dVmLXUcSO5GxuwFhgwXf3OS0rGpkh1yB7AkBmm3E8LnlvnMiH-Nn2AOloNqfX1ps1CoIfgxvzo_f3yo7n2CSQhSwCKBXbWlz5FntlMao93sIQX3XEOTH9ExIqf61HtW_b2SNYoPXDC2m95hjvL32klnr6B1Dw-Z3o9cArijeY_R4unMwE">Energy sector market trends 2026</a>
    <a class="chip" href="https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQHTscLEOQFXL-uw2OhloDtbAKPVx4yi3ivSpXnAiyjWHzVb1QdlXecwEHbScLVG9QgVXn4bBP0cFjuTINRpQbGCShZ6Etbc3Q5TM2mAGDoB7kyq1nSIskkgHED_ZC6xL7kF9GbIKF7I03r-gyS6YlyiziFh_svTcgVFff7CoAhGbWy7Oe7GfCawoojw0ufDm2tfY-TxTuel-MuxjYsR">HAL insider trading recent</a>
    <a class="chip" href="https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQEWpo00xfylUtFV2SrppJV9mxJSDpulWEEEOaCjG_2yrAhChxxpur0UoTfMk-uWoD3Z7ULsbIT13uw6yPwBtSDJE1I-ow_G9Voqk3x_nvn-PGA5ocZlKSeAmh3R8-FQLhlHmpl6m-2vu55I-Ow8cdW0cuSxReibs2C4_O73HJfsxN61qU7MWTzJ9CPzPeT-6CfivLRQrToEe7iflHpY4oOi6dHGyFx1">HAL institutional ownership changes</a>
    <a class="chip" href="https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQF9tl_nyXU1gk76kTNASlYLUJpvav7rING9yn3cioD6uqjvHxbqAN0cPPzWrDVjZ5CkG5Asge1uJsmFU0GkqUiVT4wb0n9YHrpyon-ZCGrtnYlx6o0B_L00qQFeL75UrXAokKm78EQTUWFZ06WhwzDgIpUf8VJk9gfoTi_BOeUsfOycgYejCRESrb-DXn-EiJu9ityjPPLwot_xaEiDnVpCbyn9VL5wQuHS8BpX6g==">Oil and gas services industry outlook 2026</a>
  </div>
</div>
"""
  ),
  web_search_queries=[
    'HAL stock price history',
    'HAL trading volume',
    'HAL technical analysis indicators RSI MACD Bollinger Bands',
    'HAL moving averages current',
    'HAL stock news latest',
    <... 7 more items ...>,
  ]
) index=0 logprobs_result=None safety_ratings=None url_context_metadata=None
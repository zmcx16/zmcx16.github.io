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
    <a class="chip" href="https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQFMVCODVKHtLa7EL55gq3sHNzj0pt_RhmBHlzAJ-WH1IyDkyj1NmjsX45wywMCQP6NYxqEexu-yS39o09mVxl8IyVCLCiIqhjk7gKoup0xPpEcpGFDBm7L70kP4Z3prD50W9sg0AiynO_MJ1Oa70Ss5vNasX6xTHJK4FRwN87MKtw5Ss42kPvk1b1JBICuYVqS757ba0AHkBey0Hz8AJnfil5Fp77T0idY=">GLP-1 market size and growth forecast</a>
    <a class="chip" href="https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQGhTjdpU22m79GOCv0FW2JYRfZUg6Pb-gbcM6Qf0e3SleybaBwKCZsEWmYYMLBh2c86PSCWKzrnKb_vsbTnzDHiGswsJxhYw2mpFxPUajPk7n4IhyYHSmdBrrSvOsEfGS5QbikbguJ3zCt-FMfmMGN-3yjwOCkj3l9ZQt0NingE1VZPZDVAvrrqk8Jo-Ki4Gp4_BI7iidbFTLEmDGEkzhA-Mat_g8M4">Novo Nordisk NVO annual report 2025</a>
    <a class="chip" href="https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQFSMEAfM4lpjHipNC-JOjb-7u93SAQwWyByCdVBvy4mKDNdNKgJAOKf-iyCSHeFYXpIka_zMjUD_HtpOf3Mq1G32rHXaCMhOTwT2PfHHjjZXRSNVCs-tdducy6x91zHSiH1RoGaJBXGLuqSO-CS31KrBwcL0SEJoaTPXRY0b9TrjNbUcqTiep8hOTRqvTuUx29vmIIaS8iFJpsuxBkOewI=">Novo Nordisk NVO latest news</a>
    <a class="chip" href="https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQENzi0lj_wa9In2VCUfTYw0NN5ZOErYbA9sItrWLd6Lqwd1QNGO7nuFkj-o_hTp_VvNNEGWPnatqhFYsEYSXvsNs4cWWsbloKI_0mddWhPurYsQRxntXoct5vTxNHTFWOS6JcTJEKGv6Q_vQ05eOvqsxUF5QOETbwYVUODfh6NPesgSLpkNo4XFZSeye3nY2hITDihodGlwh0kizrqHH3aaTQktVr5RD-y6lN0=">Novo Nordisk NVO Q4 2025 earnings report</a>
    <a class="chip" href="https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQFQZ5r1aNC83kDBH0HpawwwZ5v8s0SAPiL5V5iQQNS0iRcVwFDXFzq0cf7ZgAcc62sxLtdMHvHC1a2Gfh4i9mLlCesyK_7zsedkvBjwKhoGGpEnnOvXXl7NLXd4fbWee6CCVs7ZZphFDjnu63uwY6tZr35eFjEgZX-qtKKToXXp-AkeeK2-m46eceid1Khdbv9yCJl1Ne0ggb_J_5ca8oi7KdRi9puFHRaeDh2lGR9JbyYqb-XHp1VmXzo=">Obesity drug market competition Novo Nordisk Eli Lilly</a>
    <a class="chip" href="https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQHiNqh49pCKjg-F2EMhQOyeAvw4rf2Sa4tNmr8lorYVylGCSl2rhnjFGnX3OyxpGgRkAkSnbQIYYzBQlYYQ-0nMDw4vKbBORZCr6NH2JngS3mPqz_kpm-ojllLHPxISmYorwbXAKZwD0l2iJxooOUb7AZRKm0IKzj1sVp8-WPMNXhRsQVGUW7at70qf7OpkZVBW6xaPM84tHmtFPpHlimjcrNxNVMjZYJg=">Diabetes treatment market trends 2025</a>
    <a class="chip" href="https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQE40aKBw0hAs42w4V12NnE9ulX6jdJa4vNq-gMQowBCzqgWZl3iQsoXUuQ3iW_pUWA7DQmoLV5arTa4fsVTcC_2Y6Bh4gIcVNZAzohbWcSyIQXVCCJuic93p_1LfecAhwqwvDt4kvkq1MdeY7l2NRvSEUEQhIH7VlmXJDnPD-SwDdZoWSFTPiqQx_1zCqG_lNefqmxvgq7uwPRlpPJh_3cFXwqTeCxhoCxtLRunuYE=">Novo Nordisk Ozempic Wegovy sales data 2025</a>
    <a class="chip" href="https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQGt3I6PzcfNlHcmS-V6DqG_tZSqB4yMYjnkUXudub4fdXw-yMEesU5t8KVa4kJ1O37vgp6LV9P1WnCWnOkxl3lz9SpyplRH88y3xyy_hLbFeSr_CHFu1c-2vII1z3i4m33d1QoMLa9mONcxZshkpdZ1owk0hu7yuThTqvDzTLzkcbm704Ehdtvlr9F_kx7tehkeKcGi7UZVU0Wx20kMBRlMESoP5SX8ih-NS82kWmaS7SQ=">Novo Nordisk manufacturing capacity GLP-1 2025</a>
    <a class="chip" href="https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQGvYnRStD7x8zCTFUjOC_xVZs4U2macUxs7-2E5WPdh4hICe7vk-AMSVuLr9D1Uf_6PGCtjQWcQHrmQh4_WWm5yHeHYZfzal6puMB0kuKz8GPaixihnXEN0qXzrUx9qsCNfCJwoxX8dMKCbQizvF9ccpa0bQ9qXfLbcFEu_MeVdK2MtK7Suc0-VlE14otk0R1t9hRykr30_dgMWZbOMJO03Z3AYwHXXQ1EBaHpkFKK5jubcDDI=">Novo Nordisk NVO analyst ratings and target price</a>
    <a class="chip" href="https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQEh2rrHEITnuvyAmNnwLttSahGat-MwkLAI8GlftOYTMpR1piaaEKAkJ4Br78pPl_FURDoSEs4dOszQ2ucLhGJZGk0p51iGDaH6VS_sblRdNru_LeeUsVZ-sl4CVeRsxTMLfsFl-hwGxoldyfBOyjLBE1vHPGA08gL3eNlrAHUaGQyTidE5PA4tUTuJQ4GK--1N-eFc-HOZoMSC5wPwqM4Fg_nk">Novo Nordisk pipeline drugs 2025</a>
  </div>
</div>
"""
  ),
  web_search_queries=[
    'Novo Nordisk NVO latest news',
    'Novo Nordisk NVO Q4 2025 earnings report',
    'Novo Nordisk NVO annual report 2025',
    'GLP-1 market size and growth forecast',
    'Obesity drug market competition Novo Nordisk Eli Lilly',
    <... 5 more items ...>,
  ]
) index=0 logprobs_result=None safety_ratings=None url_context_metadata=None
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
    <a class="chip" href="https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQFlqjWlsiMLsWOAaGNzLOZcQQdBTZ-SsuJtWqv_iaBM8dZvNvyICDf07ui7fS-GrOKFslOi6PyLKiEbH3rozcLU-ElaIGmobBTuWGf_oPVyJZvAf0zdWMdXb2_MAOOd-ZEHAhyFpkXwzG5LXbxosFQuOT2yW4F93kN3xZyf07aM_e2Z2nZZx-PV6kEDC5I1kkEG52WSNR4KDiaA_XUuiH3_WwlocH1qXppCpszogA==">APA (APA) stock multiples P/E P/S EV/EBITDA</a>
    <a class="chip" href="https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQH7qVxlV44nAb9zOBToakNLZSjrpccxixOLl_SEONqVw_v3qWYDtgU7G82FVkYcc_3Iou0BuhLUYMKroKWqRvrXoMWDZyOHYVxn7d7y1vOBqbCrkl1U4B7DCRr0uE8FuEGqqY4L65sF38Dxd9AXukmA5XIwBn1h2WBF9QWbP-EYRMeWRQRvXEWw0QrO4vo-C5KGIQGTQWcFUkhJ93yoCn_790Bc5MkaKj-ZgE4vfPGzOALo2S218mH0tdR4jiBcQA==">YPF Sociedad Anonima (YPF) stock multiples P/E P/S EV/EBITDA</a>
    <a class="chip" href="https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQHCJUdTQuHhqVQ9kAzEgrO0NhUry7GruQhY4ecooGy2J073QDDQFwbKg1uYB9mbOmxO4idwgiN66pUJNoOeoLd0lNmtQHILyrMvL7NYyIbt_VNzs6VgnoOx_hbbA9wytJOa2mBkSt91GscnmWq9LWcdNrWeMgcqVJajvUbAsunjv-nQsUW5NugQuwcaNivX4V6_ccggWuIjb6UWjFOVOiqnZRD7uwOz-9FuMeUZz6HaRafK0eCqmUzl">Viper Energy (VNOM) stock multiples P/E P/S EV/EBITDA</a>
    <a class="chip" href="https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQHn2i0IihI-qc80ALKNfPBsK0vSpWaKuAXCGm5tdqvPyW7Qb7_9pZWWaWlxk-lDZWcGfwrC18M9xlI73bU9iMIjKUMwVjRMb5npspV44Qgg_CBkjUoeBqeXoOK-Hsw93z9tkEPe6nTweKL91k6Gnt8A5UWijydmKoOU9yxFXUNPVBPPjsnlKYtt-BA-mGRqrcmF1g6izZjVumiNxoKtLE3P2L-lGlbksAJ0JxCqt03vCFR2">Ecopetrol (EC) stock multiples P/E P/S EV/EBITDA</a>
    <a class="chip" href="https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQE7F6HJC3mfuP_04WkIdYlTFDmQ0fyJcPKdrrChLfgKCNH82dYtpAFdDyV_vFiXNvm0IFtTkntdzEzeUuqzrybe-uY_m1fSIa8JEQoBA0lq7ytHvF8WdJMfw4SSv0H4MlQpfn7xbj49yoaHWhcygijmDjb78ta8u6CStXR-czar__ZWhYEjjiktGtLCAXcJ4dVzeM53aSgZelh3sbcgytAdUk-k5dLqX-Jm5o1xiE5GtRwYv23KzMrbTMY=">Coterra Energy (CTRA) stock multiples P/E P/S EV/EBITDA</a>
    <a class="chip" href="https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQEcysiE_MwMhlsBWulQWz4f3Kn-ARi49TB7pKjNvytTUFY-qWeJSN6_yhb2Jm4eRaHqQ0DSYDKcymiGJt4j5oQ3KDVvoTB-ZJ-tmT5YryHBvTiAosWWpiIXzlxgAbzkqRGgIr_qkZhTNpSW6qyiZE8ELchMfkzfHHtqV48xKCJeX6AucQJpJ8UP-i1IeVEmdFMonUWHewhknVVcvHCmCL2Les_z9s3Y57pSY8biGBT8npgox7mnp6PdKqw=">Antero Resources (AR) stock multiples P/E P/S EV/EBITDA</a>
    <a class="chip" href="https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQHdcS6JDC3fydO03d0VkTVBmkKGrmor0ed4niobsDmJTf5WPnWQ9VvG6kmv2A3GdBnVy793dSRNgXpulNGGvHDsGvj1F5TAsLQJiBI_ixN2GYjrpO5W5mttdZCivhu192UdvK2MyLgTSagkYr9kEO71OsTr9iZSvdKpV7adoAF2WBK3SYV51hgCMsrhvIE2cQzLBUt7dMTJbKr7SeztSUOhJ_RL5J5468mfSSJiwSJ4Gvw=">Ovintiv (OVV) stock multiples P/E P/S EV/EBITDA</a>
    <a class="chip" href="https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQG0Q4Y2uAFH6XRLNpBrCELlODpm4MWIwpSPjKurV2zCidHffMCqT6LJDE77iYBtEN3mZ8nQmEq4y6NQDWXv-XazNOn1wOV_zmxEetmOX7dNHmlvpZFOHwejVG2DAans0OdldgwDSOTZYu4CX1otRcz4TOu_I5jQxu7LxN2g2JQAcbMHo9HUFeN-aW6I53ZNF__vvcshC29Epwt91PiCsplhTNXxhzQb7d1PGoh2Cfov_ikB7EXWRpXtrg32">Permian Resources (PR) stock multiples P/E P/S EV/EBITDA</a>
  </div>
</div>
"""
  ),
  web_search_queries=[
    'VIST stock latest news',
    'VIST earnings report 2025',
    'VIST financial statements 2025',
    'VIST investor relations',
    'VIST competitors',
    <... 11 more items ...>,
  ]
) index=0 logprobs_result=None safety_ratings=None url_context_metadata=None
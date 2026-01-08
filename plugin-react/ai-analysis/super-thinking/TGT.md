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
    <a class="chip" href="https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQEGAQHDZKlfMPpzujgcvQfsnXLYeQjwCD60CfInhFzpfUo7AhsTeFFxNhAJM_pN061eihyAn9ReXRwscEiq1oMvzMQNWzQaiExncC2B-e9B1B77VHISlj6r1RxccgnuWGjni_BDdffB57jVNyGdPcx-m04cawxanOBORMs6RDAg4W4g_0lQOaMZmt9YalJN-SGvs-hQ8JFf9qwkk4BY3_lYBAN1lMk=">Target (TGT) competitive advantages</a>
    <a class="chip" href="https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQG_ES_xB2gEThfofHbtNtFV-_vhkdrCkzrVdYEp3850neXRAPPRhTP7BIyj_tNlprFazdjOUIEM2ptcIVMT1U-ekgD5sbOEokZBvXSZYPcqNH1LumCtia2LFyUp66jfu9M1D2zhDRVTBhEetNg7I3Q2VqpX1160z7nHIAhEPzr0EvrDYTDCVfJeSWSkgC0hHx84i-SYoyPYMO8Ww-NI9aav9hHiRP7FXW-Sag==">Target (TGT) future strategy and outlook</a>
    <a class="chip" href="https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQHXTsO2kfAvfU3EAB9TZRQ-a3SiIsHjIy73i0Rgup6kUlVS0GjeIYKs-GXmwKGsJwOhRDWvq_RTZbhf_kY7WMtThur21XXEc7okMEpDQ4GCCqE9wJAG-nY7J7EC3Ason0z6yG9oqXIbvF29-vc_gqy8c65dRVNOgVM0uP7cil-2PUc4w640S0VD27YeQ4H5TJyVmiY4ziuWY1Qt">Target (TGT) latest news</a>
    <a class="chip" href="https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQHrTsG9_uv2rY9arZYLRUDb80Wghmngzf5j5JcHLZv8JVuVlm56FvQVDurFyh4awv2dIFMno4OKF-noViGECNZdJ_7c4ZgfFOXsJyKStgb0j0uVAMacI1VpGzQaI5CQTWZY3QzG1jRC0cpzS_VELkiYa0Soi6wwyn-3vYQFXbi6X9W0mS8ab6XKKb7Avwpu8EHm6DNtcl69YI1dqebjijmOszZ26roh">Target (TGT) Q4 2023 earnings report</a>
    <a class="chip" href="https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQGjoO1jB8u-Zc_ke6KiaisxNxG6dt-lT6sbqVtcMS1Q-mzjSVqyzgGl3qHhGl61xi4DxmaTTU4LvjK4oNvVmktDavqjghjkakGCG-3XTKovrTTVosfFhVp4obpSFiTuehNHRyO00Slk1mQEg1l0BrCtxwv1RS7JMMOW0Ofrxp7CJwZxecFo0NtKW5OdR-w9gCPKUrkWcPAsgfChTmKc9VjQLTpQYA==">Target (TGT) supply chain strategy</a>
    <a class="chip" href="https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQEap2E1MWtCG0FFPTaz3uvZWgMaWiWgScZLfzfMthBgn41X1EUcTeV47h77tqoe-eJu68xZNM4SasNR56MqmrovPRZEIqOSmFgYes4At6qcl412hkZkFdJPLZsd1pS01ywylTUYPlrKXYUaOD78DMnaiEQaoh50l94U5rH_DA5asNgoWIBOMcmC_Ax7OWSu3pM7kR61WR732W4IVeEGw40D3JWJcTPvVg==">Target (TGT) consumer spending impact</a>
    <a class="chip" href="https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQHiPW18ZAY_I_ukGSfWrAdITcJynNs1F7qaI6FSsdXgMm7IFXc-xWazkePPNvv-2AJzMtv1V3gw4vo_NstHHlAA7l05i7vF8o1pXnSx8dTOEh4tKLNAziaiFLUynfggQ4FmC2UcwOaj2Kq6lB5Kmu_FRF3LVScT3QRBf7VopgiG21JpaU44my4iRFT6p1nE2NW3bCOiX0UbMP-b6gkkp_sh">US retail industry trends 2024</a>
  </div>
</div>
"""
  ),
  web_search_queries=[
    'Target (TGT) latest news',
    'Target (TGT) Q4 2023 earnings report',
    'Target (TGT) future strategy and outlook',
    'US retail industry trends 2024',
    'Target (TGT) competitive advantages',
    <... 2 more items ...>,
  ]
) index=0 logprobs_result=None safety_ratings=None url_context_metadata=None
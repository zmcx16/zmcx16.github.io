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
    <a class="chip" href="https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQG8EKXNJOpmbGIYo7haqVcX2qlbXd6FljCkiNxKMOhyX_FSakt_-gyGSEV0RFycKZ6N3OaQ_olqNCN2rKqS4IzjyUdvoEXsTRtMTixL5FxogGwBq8asutBx8_CSemibCvbzxnGGsJPNOuBxMvsjp05OJAmMXDRjEq80_efQjhNmoBygKH4Brai6Wl2aBV0uZYkf9lIhIDc-">VALE analyst ratings</a>
    <a class="chip" href="https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQHzsjgOXYPf6HBHy6m5TsS-7OEToVA948Qajp_5qeVc-3So1yTZpXoxU0lCJdvygb1bm9yh4yWGkGEgHryvO0Fv1UjPLvziWM5Jiw-PpDAlMa6IOpx9iDL9uTKXCvKzYnJBpStpJ2zoVeIV3gdm8fxNDExPnWo3wX81NCliL5ZyRQeru7Z0-gv6cyURkgEAScIbK0S5lmODZBcvpqV9jKaQ">VALE recent financial reports</a>
    <a class="chip" href="https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQE_D0RI3nzBUy4vI2_3yfBDg93D6yb3kJP8IU8h-ATGABQke0FBGF4Fxm-En2JdKU9yjjFx3V4JIINik4HEJ1KNrnpYOgTSCYse2HKok6HnibsWWvO0HLi6n_Qpr5nxhefzWAPxlgl4B-l_iZDZ4OLMR95q1b3jxpgX2LTDBPi6-y3ul730G5Ui8p9duXk_7pTd4AE=">VALE latest news</a>
    <a class="chip" href="https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQGd0LsT3PjhnDAZ5B8Cw6a1boNq1O78PYP86ArSYIUulLOH8z0_lNS-md7Y_PEndqQxRvORWUFsGLqlXJwLHEEaesJcr37p5LIlSO33lEsU1A9f3v3KHBlncEcMqQ9NLdRmnWAZj1DF6DoiA_ixSzTt1VC3OIaW59zuWjS4BuubV3wdt2IRgkCf705R5m2BbTgYAEMAXW-T">VALE market dynamics</a>
    <a class="chip" href="https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQGZ2I7CqDG_Lm6TKAZo1RccDUZDxJ0XHlAUgK4taMcyFp755U8lC78skMC57lW7uQmSqwhKlo2Uoyaoneq0uLAGZc-_fNvF556qqlEISlLTW6TOw5h4Tk6ngXJrlzItJuAo9ZDMZfKkm1xrAtigCel_YxG6MAzH890gLNAwDniZsCFK9GhdvSkfiLyTnSGvFZBUzNtlsV2zlpZvJg==">VALE stock forecast 2026</a>
    <a class="chip" href="https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQHGkV0PI-m4EcxtRevVlLSkoMUY2vJzEn5oHPYdTooIt8uv-5I4WW_rwK_KBYq-SZyhcuZyd3dZoYmVVJcOTaqGg1jB1iYqQx4iRpnkBP3Ytkff4YDBhnBwtsNRQO2AXVkCx6H7CaZHCC8z46QmyKJmLIZWRviNcbIJW5HvNzJBYGDzikisnApD0jV7W9wH2QiUbH3Khk66UPCJ-rjIceuA">VALE industry trends iron ore</a>
  </div>
</div>
"""
  ),
  web_search_queries=[
    'VALE latest news',
    'VALE recent financial reports',
    'VALE market dynamics',
    'VALE industry trends iron ore',
    'VALE stock forecast 2026',
    <... 1 more items ...>,
  ]
) index=0 logprobs_result=None safety_ratings=None url_context_metadata=None
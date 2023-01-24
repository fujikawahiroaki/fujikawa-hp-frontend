component Pages.Papers {
  fun render : Html {
    <div>
      <h2>"報文・短報など"</h2>

      <Ui.Box title=<{ "" }>>
        <p>"※各報の説明に含まれる学名・和名は出版当時のものです。現在は変更されている可能性があることにご注意ください。"</p>

        <Ui.DefinitionList
          rows=[
            {
              "田之岡綾花・藤川浩明, 2022. 沖縄県本部町におけるアサギマダラマーキング報告. 琉球の昆虫, (46): 78.", [
                Ui.Cell::Html(
                  <div>
                    "アサギマダラ"
                    <i>"Parantica"</i>
                    <i>" sita"</i>
                    " (Kollar, [1844])"
                    " の沖縄県本部町における2021年のマーキング調査報告です。"
                  </div>),
                Ui.Cell::HtmlItems(
                  items =
                    [
                      <div/>
                    ],
                  breakOnMobile = false)
              ]
            },
            {
              "青井光太郎・福田悠人・藤川浩明・伊藤直哉, 2022. 南西諸島におけるハイイロテントウの分布. さやばねニューシリーズ, (45): 37-39.", [
                Ui.Cell::Html(
                  <div>
                    "ハイイロテントウ"
                    <i>"Olla"</i>
                    <i>" v-nigrum"</i>
                    " (Mulsant, 1866)"
                    " の南西諸島における分布をまとめました。本種の奄美大島、徳之島、沖永良部島、伊平屋島、伊江島、平安座島、津堅島、藪地島、西表島における初記録は本報となります。また本種の分布や生態についての若干の考察も含まれています。"
                  </div>),
                Ui.Cell::HtmlItems(
                  items =
                    [
                      <div>
                        <a href="http://kochugakkai.sakura.ne.jp/publication/sayabane/SayabaneNS(45).html">
                          "日本甲虫学会HP"
                        </a>
                      </div>,
                      <div>
                        <a href="https://jglobal.jst.go.jp/detail?JGLOBAL_ID=202202227782159723&rel=1#%7B%22category%22%3A%220%22%2C%22keyword%22%3A%22%5C%22202250000788509100%5C%22%22%7D">
                          "J-GLOBAL"
                        </a>
                      </div>
                    ],
                  breakOnMobile = false)
              ]
            },
            {
              "藤川浩明・緒方裕大, 2022. 西表島および石垣島におけるフチグロチビオオキノコの記録. さやばねニューシリーズ, (45): 34.", [
                Ui.Cell::Html(
                  <div>
                    "フチグロチビオオキノコ"
                    <i>"Tritoma "</i>
                    "("
                    <i>"Tritoma"</i>
                    ")"
                    <i>" andoi"</i>
                    " Narukawa, 2003"
                    " の西表島初記録および石垣島における原記載以来の追加記録です。"
                  </div>),
                Ui.Cell::HtmlItems(
                  items =
                    [
                      <div>
                        <a href="http://kochugakkai.sakura.ne.jp/publication/sayabane/SayabaneNS(45).html">
                          "日本甲虫学会HP"
                        </a>
                      </div>,
                      <div>
                        <a href="https://jglobal.jst.go.jp/detail?JGLOBAL_ID=202202289858901406&rel=1#%7B%22category%22%3A%220%22%2C%22keyword%22%3A%22%5C%22202250000788509100%5C%22%22%7D">
                          "J-GLOBAL"
                        </a>
                      </div>
                    ],
                  breakOnMobile = false)
              ]
            },
            {
              "藤川浩明・吉武啓, 2022. 奄美群島におけるアカツヤツツヒラタムシおよび先島諸島におけるクロツヤツツヒラタムシの新産地. さやばねニューシリーズ, (45): 2-3.", [
                Ui.Cell::Html(
                  <div>
                    "アカツヤツツヒラタムシ"
                    <i>"Passandra"</i>
                    <i>" tenuicornis"</i>
                    " (Grouvelle, 1913)"
                    " の徳之島における初記録、および"
                    "クロツヤツツヒラタムシ"
                    <i>"Passandra"</i>
                    <i>" okinawana"</i>
                    " Aoki, 2008"
                    " の伊良部島と西表島における初記録です。"
                    "奄美大島におけるクロツヤツツヒラタムシの記録の問題点についても言及しています。"
                  </div>),
                Ui.Cell::HtmlItems(
                  items =
                    [
                      <div>
                        <a href="http://kochugakkai.sakura.ne.jp/publication/sayabane/SayabaneNS(45).html">
                          "日本甲虫学会HP"
                        </a>
                      </div>,
                      <div>
                        <a href="https://jglobal.jst.go.jp/detail?JGLOBAL_ID=202202248049142810&rel=1#%7B%22category%22%3A%220%22%2C%22keyword%22%3A%22%5C%22202250000788509100%5C%22%22%7D">
                          "J-GLOBAL"
                        </a>
                      </div>
                    ],
                  breakOnMobile = false)
              ]
            },
            {
              "藤川浩明, 2022. 沖縄島および渡嘉敷島におけるアシグロアオゴミムシの記録. さやばねニューシリーズ, (45): 1-2.", [
                Ui.Cell::Html(
                  <div>
                    "アシグロアオゴミムシ"
                    <i>"Chlaenius"</i>
                    <i>" leucops"</i>
                    " (Waterhouse, 1823)"
                    " の沖縄島および渡嘉敷島における初記録です。本種の沖縄諸島における初記録となります。"
                  </div>),
                Ui.Cell::HtmlItems(
                  items =
                    [
                      <div>
                        <a href="http://kochugakkai.sakura.ne.jp/publication/sayabane/SayabaneNS(45).html">
                          "日本甲虫学会HP"
                        </a>
                      </div>,
                      <div>
                        <a href="https://jglobal.jst.go.jp/detail?JGLOBAL_ID=202202224084769737">
                          "J-GLOBAL"
                        </a>
                      </div>
                    ],
                  breakOnMobile = false)
              ]
            },
            {
              "小松拓実・藤川浩明, 2021. 沖縄島にてクロツツマグソコガネを採集. さやばねニューシリーズ, (44): 20-21.", [
                Ui.Cell::Html(
                  <div>
                    "クロツツマグソコガネ"
                    <i>"Saprosites"</i>
                    <i>" japonicus"</i>
                    " Waterhouse, 1875"
                    " の沖縄島における追加記録です。"
                  </div>),
                Ui.Cell::HtmlItems(
                  items =
                    [
                      <div>
                        <a href="http://kochugakkai.sakura.ne.jp/publication/sayabane/SayabaneNS(44).html">
                          "日本甲虫学会HP"
                        </a>
                      </div>,
                      <div>
                        <a href="https://jglobal.jst.go.jp/detail?JGLOBAL_ID=202202258926911915&rel=1#%7B%22category%22%3A%220%22%2C%22keyword%22%3A%22%5C%22202250000788509100%5C%22%22%7D">
                          "J-GLOBAL"
                        </a>
                      </div>
                    ],
                  breakOnMobile = false)
              ]
            },
            {
              "藤川浩明・森井隆文, 2020. ヤンバルキモンヒメクチキムシ2例目の記録および♂の初記録. 月刊むし, (587): 46-47.", [
                Ui.Cell::Html(
                  <div>
                    "ヤンバルキモンヒメクチキムシ"
                    <i>"Mycetochara "</i>
                    "("
                    <i>"Ernocharis"</i>
                    ")"
                    <i>" nakanoi"</i>
                    " Akita & Masumoto, 2017 の2例目の記録および♂の初記録です。"
                    "発生時期、生息環境、同属多種との棲み分けについての断片的な知見と推測を述べていますが、調査不足のため確実性に欠けています。あくまで今後の調査を促進する叩き台となるための速報的な報告として受け取って頂きたいです。"
                  </div>),
                Ui.Cell::HtmlItems(
                  items =
                    [
                      <div/>
                    ],
                  breakOnMobile = false)
              ]
            },
            {
              "藤川浩明・松村雅史, 2019. 沖縄島におけるウケンナミクチキムシの記録. 月刊むし, (583): 60-61.", [
                Ui.Cell::Html(
                  <div>
                    "ウケンナミクチキムシ"
                    <i>"Upinella"</i>
                    <i>" ukenensis"</i>
                    " (Akita & Masumoto, 2012)"
                    " の沖縄島における初記録です。"
                  </div>),
                Ui.Cell::HtmlItems(
                  items =
                    [
                      <div/>
                    ],
                  breakOnMobile = false)
              ]
            },
            {
              "藤川浩明・徳重典英, 2019. 沖縄島におけるクワガタツツキノコムシの記録. 月刊むし, (582): 60.", [
                Ui.Cell::Html(
                  <div>
                    "クワガタツツキノコムシ"
                    <i>"Cis"</i>
                    <i>" capricornis"</i>
                    " Kawanabe, 1997"
                    " の沖縄島における初記録です。"
                  </div>),
                Ui.Cell::HtmlItems(
                  items =
                    [
                      <div/>
                    ],
                  breakOnMobile = false)
              ]
            },
            {
              "中野文尊・藤川浩明・青井光太郎・緒方裕大, 2019. 採集例の極めて少ない琉球列島産メツブテントウ類3種の記録. 月刊むし, (582): 30-33.", [
                Ui.Cell::Html(
                  <div>
                    "ナナホシメツブテントウ"
                    <i>"Nesolotis"</i>
                    <i>" amabilis"</i>
                    " (H. Kamiya, 1965)、"
                    "キイロメツブテントウ"
                    <i>"Nesolotis"</i>
                    <i>" azumai"</i>
                    " Sasaji, 1967、"
                    "クロメツブテントウ"
                    <i>"Nesolotis"</i>
                    <i>" impunctata"</i>
                    " Miyatake, 1966"
                    " を追加記録しました。このうちナナホシメツブテントウおよびキイロメツブテントウについては生態面・形態面ともにいくらかの新知見も含む内容となっています。"
                  </div>),
                Ui.Cell::HtmlItems(
                  items =
                    [
                      <div>
                        <a href="https://cir.nii.ac.jp/crid/1521417753438325120">
                          "CiNii Research"
                        </a>
                      </div>
                    ],
                  breakOnMobile = false)
              ]
            },
            {
              "藤川浩明・松村雅史・杉野廣一, 2019. ヘリアカデオキノコムシの沖縄島からの初記録. さやばねニューシリーズ, (34): 56-57.", [
                Ui.Cell::Html(
                  <div>
                    "ヘリアカデオキノコムシ"
                    <i>"Scaphidium"</i>
                    <i>" reitteri"</i>
                    " Lewis, 1879 の沖縄島における初記録です。"
                    "本土産との形態的特徴の差異についても触れた上で、保科英人博士の見解に基づき亜種として位置づけるのは適切ではないと結論付けています。"
                  </div>),
                Ui.Cell::HtmlItems(
                  items =
                    [
                      <div>
                        <a href="http://kochugakkai.sakura.ne.jp/publication/sayabane/SayabaneNS(34).html">
                          "日本甲虫学会HP"
                        </a>
                      </div>
                    ],
                  breakOnMobile = false)
              ]
            },
            {
              "藤川浩明, 2019. オキナワキモンヒメクチキムシの追加記録および発生時期について. 月刊むし, (580): 54.", [
                Ui.Cell::Html(
                  <div>
                    "これまで原記載以降の正式な記録が無かったオキナワキモンヒメクチキムシ"
                    <i>"Mycetochara "</i>
                    "("
                    <i>"Ernocharis"</i>
                    ")"
                    <i>" hiranoi"</i>
                    " Akita & Masumoto, 2014 の追加記録です。"
                    "本種の♂を初めて図示した報告となりますが、写真は白黒で交尾器の図も無いため、♂の形態の資料としては不十分です。"
                    "発生時期についての考察を含みますが、今思えば十分な調査と適切な考察をしたとは言い難い出来ですので、参考程度に留めて頂きたいです。"
                  </div>),
                Ui.Cell::HtmlItems(
                  items =
                    [
                      <div>""</div>
                    ],
                  breakOnMobile = false)
              ]
            },
            {
              "藤川浩明, 2018. 久米島におけるオキナワカタモンヒメクチキムシの記録. 月刊むし, (574): 12.", [
                Ui.Cell::Html(
                  <div>
                    "これまで模式産地である沖縄島からのみ記録されていたオキナワカタモンヒメクチキムシ "
                    <i>"Mycetochara "</i>
                    "("
                    <i>"Ernocharis"</i>
                    ")"
                    <i>" okinawaensis"</i>
                    " Akita & Masumoto, 2014 の久米島初記録です。"
                  </div>),
                Ui.Cell::HtmlItems(
                  items =
                    [
                      <div>""</div>
                    ],
                  breakOnMobile = false)
              ]
            },
            {
              "藤川浩明, 2016. ズバケデオネスイを西表島で採集. 月刊むし, (542): 43.", [
                Ui.Cell::Html(
                  <div>
                    "ズバケデオネスイ "
                    <i>"Mimemodes caenifrons"</i>
                    " Grouvelle, 1913 "
                    "の西表島初記録です。"
                  </div>),
                Ui.Cell::HtmlItems(
                  items =
                    [
                      <div>""</div>
                    ],
                  breakOnMobile = false)
              ]
            }
          ]
          size={Ui.Size::Inherit}
          headers=["概要", "関連リンク"]/>
      </Ui.Box>
    </div>
  }
}

component Pages.Papers {
  fun render : Html {
    <div>
      <h2>"報文・短報など"</h2>

      <Ui.Box title=<{ "" }>>
        <p>"※各報の説明に含まれる学名・和名は出版当時のものです。現在は変更されている可能性があることにご注意ください。"</p>

        <Ui.DefinitionList
          rows=[
            {
              "藤川浩明, 2019. オキナワキモンヒメクチキムシの追加記録および発生時期について. 月刊むし(580): 54.", [
                Ui.Cell::String("これまで"),
                Ui.Cell::HtmlItems(
                  items =
                    [
                      <div>""</div>
                    ],
                  breakOnMobile = false)
              ]
            },
            {
              "藤川浩明, 2018. 久米島におけるオキナワカタモンヒメクチキムシの記録. 月刊むし(574): 12.", [
                Ui.Cell::Html(
                  <div>
                    "これまで模式産地である沖縄島からのみ記録されていたオキナワカタモンヒメクチキムシ "
                    <i>"Mycetochara (Ernocharis) okinawaensis"</i>
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
              "藤川浩明, 2016. ズバケデオネスイを西表島で採集. 月刊むし(542): 43.", [
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

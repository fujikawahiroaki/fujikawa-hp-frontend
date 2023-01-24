component Pages.Home {
  fun render : Html {
    <div>
      <h2>"ようこそ"</h2>

      <Ui.Box title=<{ "本HPについて" }>>
        <p>
          "沖縄の甲虫愛好家・藤川浩明のホームページです。"
          <br/>
          "虫や計算機いじりなどの趣味についてのんびりと書いていこうと思います。"
        </p>
      </Ui.Box>
    </div>
  }
}

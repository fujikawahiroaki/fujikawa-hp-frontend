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

      <Ui.Box title=<{ "新着情報" }>>
        <p>
          <ul>
            <li>"2023/02/09: AtCoderのヒューリスティックレーティングが水色になりました"</li>
            <li>"2023/01/24: 報文・短報一覧を更新しました"</li>
          </ul>
        </p>
      </Ui.Box>
    </div>
  }
}

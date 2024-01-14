component Pages.Computer {
  style a {
    color: #404040;
  }

  fun render : Html {
    <div>
      <h2>"計算機遊び"</h2>

      <Ui.Box title=<{ "もうひとつの趣味" }>>
        <p>
          "　昆虫採集に次ぐ第二の趣味として、プログラミングやLinux環境いじりなどのコンピュータ遊びを中学二年生の頃から細々と楽しんでいます。"
          <br/>

          <ul>
            <li>
              "GitHub: "

              <a::a href="https://github.com/fujikawahiroaki">
                "fujikawahiroaki"
              </a>
            </li>

            <li>"好きな言語: Crystal, Ruby"</li>
            <li>"好きではないがよく使う言語: Python, JavaScript"</li>
            <li>"ある程度使ったことのある言語: C, Common Lisp (SBCL), Emacs Lisp, Mint"</li>
            <li>"好きなエディタ: 数年置きに変わりますが、今はVimが好きです"</li>
            <li>"好きなOS: 数年置きに変わりますが、今はArch Linuxが好きです"</li>
          </ul>

          <p>
            "　最近は開発のみならず競技プログラミングも楽しむようになりました。正直なところ私は非常に弱く、平均的なプレイヤーよりかなり成長が遅いのですが、その高いゲーム性に魅せられて毎週のようにコンテストに参加しています。長期のヒューリスティックコンテストが特に好きです。"
            <br/>
            "　AtCoderのアルゴは緑、ヒューリスティックは水です。IDは"

            <a::a href="https://atcoder.jp/users/fujikawahiroaki">
              "fujikawahiroaki"
            </a>
          </p>
        </p>
      </Ui.Box>

      <Ui.Box title=<{ "開発したサービス・ソフトウェア" }>>
        <p>
          <strong>"WebSpecimanager"</strong>
          <br/>

          <a::a href="https://www.webspecimanager.net/">
            "https://www.webspecimanager.net/"
          </a>

          <br/>
          "昆虫標本のデータベース管理を支援するWebサービスです。"
          <br/>
          "バックエンドはPythonとDjango REST Framework、フロントエンドはJavaScriptとReactで書きました。"
        </p>

        <strong>"AtCoder Diet"</strong>
        <br/>

        <a::a href="https://atcoder-diet.fly.dev/">
          "https://atcoder-diet.fly.dev/"
        </a>

        <br/>
        "前日に解いたAtCoder問題の点数の合計で翌日の摂取可能カロリーを決定するジョークサイトです。"
        <br/>
        "CrystalとKemalで書きました。簡素な静的サイトなのでフロントエンドはECRテンプレートエンジンで済ませています。"
      </Ui.Box>
    </div>
  }
}

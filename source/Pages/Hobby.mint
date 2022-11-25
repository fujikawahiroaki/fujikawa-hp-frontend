component Pages.Hobby {
  style a {
    color: #404040;
  }

  fun render : Html {
    <div>
      <h2>"趣味"</h2>

      <Ui.Box title=<{ "昆虫採集" }>>
        <p>
          "　調査業務としての昆虫採集とは別に、趣味としても昆虫採集を楽しんでいます。"
          <br/>
          "　主な採集対象は枯死木に棲息する微小な甲虫類です。"
          <br/>
          "　採集、同定、GIS上でのデータ整理、報文や短報の執筆などの作業を通して、この趣味を楽しみながら環境調査員としてのスキル向上を目指しています。"
        </p>
      </Ui.Box>

      <Ui.Box title=<{ "プログラミング" }>>
        <p>
          "昆虫採集に次ぐ第二の趣味として中学二年生の頃から細々と楽しんでいます。"
          <br/>

          <ul>
            <li>
              "GitHub: "

              <a::a href="https://github.com/fujikawahiroaki">
                "fujikawahiroaki"
              </a>
            </li>

            <li>"好きな言語: Ruby, Crystal"</li>
            <li>"好きではないがよく使う言語: Python, JavaScript"</li>
            <li>"ある程度使ったことのある言語: C, Common Lisp (SBCL), Emacs Lisp, Mint"</li>
            <li>"好きなエディタ: 数年置きに変わりますが、今はVimが好きです"</li>
            <li>"好きなOS: 数年置きに変わりますが、今はArch Linuxが好きです"</li>
          </ul>
        </p>

        <p>
          "　趣味として開発した昆虫標本データベース管理Webサービス"

          <a::a href="https://www.webspecimanager.net/">
            "WebSpecimanager"
          </a>

          "を無償でご提供しております。昆虫標本のデータベース管理を始めてみたい方は是非ご利用をご検討ください。"
        </p>

        <p>
          "　最近は開発のみならず競技プログラミングも楽しむようになりました。正直なところ私は非常に弱く平均的なプレイヤーより成長がかなり遅いのですが、その高いゲーム性に魅せられて毎週のようにコンテストに参加して楽しんでいます。現時点ではAtCoderのアルゴは茶、ヒューリスティックは緑です。ユーザーIDは"

          <a::a href="https://atcoder.jp/users/fujikawahiroaki">
            "fujikawahiroaki"
          </a>
        </p>
      </Ui.Box>
    </div>
  }
}

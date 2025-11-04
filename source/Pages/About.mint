component Pages.About {
  style prof {
    width: 300px;
    height: 300px;
  }

  fun render : Html {
    <div>
      <h2>"自己紹介"</h2>

      <Ui.Box title=<{ "藤川浩明" }>>
        <img::prof src={@asset(../../images/fujikawa_400x400.jpg)}/>

        <p>"生年: 1994年"</p>
        <p>"出身: 山口県大畠町（現・柳井市）"</p>
        <p>"居住地: 沖縄県本部町"</p>
        <p>"好きな虫: ゴミムシダマシや旧ホソカタムシなどの枯れ木につく甲虫全般、旧タテヅノマルバネクワガタ"</p>
        <p>"2013年4月より沖縄に移住し、甲虫の採集をほそぼそと続けている。本業は会社員のプログラマー。"</p>
      </Ui.Box>
    </div>
  }
}

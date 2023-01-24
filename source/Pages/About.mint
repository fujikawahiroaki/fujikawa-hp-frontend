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
        <p>"出身: 山口県"</p>
        <p>"居住地: 沖縄県本部町"</p>
        <p>"好きな虫: ゴミムシダマシや旧ホソカタムシなどの枯れ木につく甲虫全般、旧タテヅノマルバネクワガタ"</p>
      </Ui.Box>
    </div>
  }
}

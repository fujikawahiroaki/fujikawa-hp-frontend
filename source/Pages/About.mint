component Pages.About {
  style prof {
    width: 300px;
    height: 300px;
  }

  fun render : Html {
    <div>
      <h2>"事業概要"</h2>

      <Ui.Box title=<{ "沖丸環境調査について" }>>
        <p>"屋号: 沖丸環境調査（おきまるかんきょうちょうさ）"</p>
        <p>"事業形態: 個人事業主"</p>
        <p>"設立: 2021年8月26日"</p>
        <p>"代表: 藤川浩明（ふじかわひろあき）"</p>
        <p>"連絡先: fhir0aki3 アットマーク gmail.com"</p>
        <p>"所在地: 沖縄県国頭郡本部町（藤川の住所でもあるため、詳細はHP上では非公表としますが、ご必要でしたらメールにてお問い合わせください）"</p>
      </Ui.Box>

      <Ui.Box title=<{ "藤川浩明" }>>
        <img::prof src={@asset(../../images/fujikawa_400x400.jpg)}/>

        <p>"生年: 1994年"</p>
        <p>"出身: 山口県"</p>
        <p>"学歴: 2013年に名桜大学国際学群入学、2014年退学"</p>
        <p>"所属学会・団体など: 日本甲虫学会、沖縄昆虫同好会"</p>
        <p>"環境調査員歴: 2018年12月から2021年8月まで環境調査会社のアルバイト、2021年8月末に個人事業主として沖丸環境調査を開業"</p>
        <p>"業務経験: 守秘義務があるので詳細は書けませんが、水質調査や重要種を対象とした陸域および陸水域の生物調査の経験があります"</p>
        <p>"趣味経験: 南西諸島の甲虫類に関する報文や短報を専門誌に投稿、博物館の昆虫標本整理補助、研究者への標本提供や現地調査補助、QGISの基本的な操作（高度な分析経験は無し）、標本データベース管理Webサービスの提供など"</p>
        <p>"好きな虫: ゴミムシダマシ、ホソカタムシ、マルバネクワガタ"</p>
        <br/>
        <p>"　諸般の事情により業務経験が浅いまま独立したので、正直なところ環境調査員としてはまだまだ力不足ではございますが、趣味として長年沖縄の自然環境に関わってきた経験を活かして精一杯頑張りますので、お仕事のご依頼よろしくお願いいたします。"</p>
      </Ui.Box>
    </div>
  }
}
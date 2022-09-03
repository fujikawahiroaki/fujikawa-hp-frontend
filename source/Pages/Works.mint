component Pages.Works {
  fun render : Html {
    <div>
      <h2>"業務内容"</h2>

      <Ui.Box title=<{ "環境調査" }>>
        <p>
          "　環境アセスメントの現地調査を主な業務としています。現時点で実績のある業務は以下の通りです。"
          <br/>

          <ul>
            <li>"環境水質監視調査"</li>
            <li>"陸域・陸水域における重要動物種調査"</li>
            <li>"実体顕微鏡による微小甲虫の同定"</li>
          </ul>

          <br/>
          "　現時点で動物相調査の実務経験はございませんが、趣味として沖縄島北部の甲虫相の調査を長年継続しており、業務としての動物相調査にも内容次第では対応できると思います。是非ご相談ください。"
        </p>
      </Ui.Box>

      <Ui.Box title=<{ "研究調査支援" }>>
        <p>
          "　研究目的での採集調査の補助や標本提供や沖縄島北部地域（やんばる）の案内などを基本的に"
          <b>"無償サービス"</b>
          "として提供しております。"
          <br/>
          "　お気軽にご相談ください。"
        </p>
      </Ui.Box>
    </div>
  }
}
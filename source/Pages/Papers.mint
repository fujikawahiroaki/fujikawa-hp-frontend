component Pages.Papers {
  connect PapersStore exposing { status }

  fun render : Html {
    case (status) {
      Status::Initial =>
        <div>
          <h2>"報文・短報など"</h2>

          <Ui.Box title=<{ "" }>>
            <p>"※各報文の記録種リストに含まれる学名・和名は出版当時のものです。現在は変更されている可能性があることにご注意ください。"</p>
            <p>"データを読み込み中です......"</p>
          </Ui.Box>
        </div>

      Status::Loading =>
        <div>
          <h2>"報文・短報など"</h2>

          <Ui.Box title=<{ "" }>>
            <p>"※各報文の記録種リストに含まれる学名・和名は出版当時のものです。現在は変更されている可能性があることにご注意ください。"</p>
            <p>"データを読み込み中です......"</p>
          </Ui.Box>
        </div>

      Status::Error(message) =>
        <div>
          <h2>"報文・短報など"</h2>

          <Ui.Box title=<{ "" }>>
            <p>"※各報文の記録種リストに含まれる学名・和名は出版当時のものです。現在は変更されている可能性があることにご注意ください。"</p>
            <p>"データの読み込みに失敗しました。"</p>

            <p>
              <{ message }>
            </p>
          </Ui.Box>
        </div>

      Status::Ok(papers) =>
        <div>
          <h2>"報文・短報など"</h2>

          <Ui.Box title=<{ "" }>>
            <p>"※各報の説明に含まれる学名・和名は出版当時のものです。現在は変更されている可能性があることにご注意ください。"</p>

            for (paper of papers.results) {
              <Ui.DefinitionList
                rows=[
                  {
                    paper.name, [
                      Ui.Cell::String(paper.summary),
                      Ui.Cell::String("#{paper.publishedYear}/#{paper.publishedMonth}/#{paper.publishedDay}")
                    ]
                  }
                ]
                size={Ui.Size::Inherit}
                headers=["概要", "発行年月日", "記録種", "証拠標本", "関連リンク"]/>
            }
          </Ui.Box>
        </div>
    }
  }
}

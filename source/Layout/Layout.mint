component Layout {
  property children : Array(Html) = []

  style content {
    flex-direction: column;
    display: flex;
    border-radius: 10px;
    color: black;
    margin: 2%;
    padding: 10px;
  }

  style header {
    color: black;
    padding: 10px;
    border-bottom: solid 1px black;
  }

  style footer {
    color: #505050;
  }

  fun render : Html {
    <div>
      <link
        rel="icon"
        href={@asset(../../assets/favicon.ico)}
        id="favicon"/>

      <Ui.Layout.Website
        header={
          <div::header>
            <Ui.Header
              brand={
                <Ui.Brand
                  size={Ui.Size::Em(2.0)}
                  name="沖丸環境調査"/>
              }
              items=[
                Ui.NavItem::Link(
                  iconBefore = Ui.Icons:HOME,
                  iconAfter = <{  }>,
                  label = "ホーム",
                  target = "",
                  href = "/"),
                Ui.NavItem::Link(
                  iconBefore = Ui.Icons:PERSON,
                  label = "事業概要",
                  iconAfter = <{  }>,
                  target = "",
                  href = "/about"),
                Ui.NavItem::Link(
                  iconBefore = Ui.Icons:BRIEFCASE,
                  label = "業務内容",
                  iconAfter = <{  }>,
                  target = "",
                  href = "/works"),
                Ui.NavItem::Link(
                  iconBefore = Ui.Icons:TOOLS,
                  label = "保有機材",
                  iconAfter = <{  }>,
                  target = "",
                  href = "/gears"),
                Ui.NavItem::Link(
                  iconBefore = Ui.Icons:SMILEY,
                  label = "趣味",
                  iconAfter = <{  }>,
                  target = "",
                  href = "/hobby")
              ]/>
          </div>
        }
        content={
          <div::content>
            <{ children }>
          </div>
        }
        footer={
          <div::content>
            <Ui.Footer
              infos={
                <div::footer>
                  <p>"© 2022 沖丸環境調査"</p>
                  <p>"front-end: Powered by Mint Programming Language"</p>
                  <p>"back-end: Powered by Crystal Programming Language & Lucky Web Framework"</p>
                </div>
              }
              navitems=[
                {
                  "サイト内リンク", [
                    Ui.NavItem::Link(
                      iconBefore = Ui.Icons:HOME,
                      iconAfter = <></>,
                      label = "ホーム",
                      target = "",
                      href = "/"),
                    Ui.NavItem::Link(
                      iconBefore = Ui.Icons:PERSON,
                      iconAfter = <></>,
                      href = "/about",
                      label = "事業概要",
                      target = ""),
                    Ui.NavItem::Link(
                      iconBefore = Ui.Icons:BRIEFCASE,
                      iconAfter = <></>,
                      href = "/works",
                      label = "業務内容",
                      target = ""),
                    Ui.NavItem::Link(
                      iconBefore = Ui.Icons:TOOLS,
                      iconAfter = <></>,
                      href = "/gears",
                      label = "保有機材",
                      target = ""),
                    Ui.NavItem::Link(
                      iconBefore = Ui.Icons:SMILEY,
                      iconAfter = <></>,
                      href = "/hobby",
                      label = "趣味",
                      target = "")
                  ]
                }
              ]/>
          </div>
        }/>
    </div>
  }
}

component Layout {
  property children : Array(Html) = []

  style content {
    flex-direction: column;
    display: flex;
    border-radius: 10px;
    margin: 2%;
    padding: 10px;
  }

  style header {
    padding-bottom: 40px;
    border-bottom: solid 1px black;
    font-family: "Shippori Mincho B1";
  }

  style footer {
    color: #455765;
  }

  fun render : Html {
    <div>
      <Ui.Layout.Website
        header={
          <div::header>
            <Ui.Header
              breakpoint={1320}
              brand={
                <Ui.Brand
                  size={Ui.Size::Em(4.0)}
                  href="/"
                  icon={
                    <div>
                      @svg(../../images/okimaru-circle.svg)
                    </div>
                  }
                  name="大島蝉のなく頃に"/>
              }
              items=[
                Ui.NavItem::Link(
                  iconBefore = <{  }>,
                  iconAfter = <{  }>,
                  label = "ホーム",
                  target = "",
                  href = "/"),
                Ui.NavItem::Link(
                  iconBefore = <{  }>,
                  label = "沖丸環境調査",
                  iconAfter = <{  }>,
                  target = "",
                  href = "/works"),
                Ui.NavItem::Link(
                  iconBefore = <{  }>,
                  label = "報文・短報",
                  iconAfter = <{  }>,
                  target = "",
                  href = "/papers"),
                Ui.NavItem::Link(
                  iconBefore = <{  }>,
                  label = "所蔵標本",
                  iconAfter = <{  }>,
                  target = "",
                  href = "/specimens"),
                Ui.NavItem::Link(
                  iconBefore = <{  }>,
                  label = "計算機遊び",
                  iconAfter = <{  }>,
                  target = "",
                  href = "/computer"),
                Ui.NavItem::Link(
                  iconBefore = <{  }>,
                  label = "自己紹介",
                  iconAfter = <{  }>,
                  target = "",
                  href = "/about")
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
                  <p>"© 2022 藤川浩明"</p>
                  <p>"front-end: Powered by Mint Programming Language"</p>
                  <p>"back-end: Powered by Crystal Programming Language & Marten Web Framework"</p>
                </div>
              }
              navitems=[
                {
                  "", [
                    Ui.NavItem::Link(
                      iconBefore = Ui.Icons:HOME,
                      iconAfter = <></>,
                      label = "ホーム",
                      target = "",
                      href = "/"),
                    Ui.NavItem::Link(
                      iconBefore = Ui.Icons:BRIEFCASE,
                      iconAfter = <></>,
                      href = "/works",
                      label = "沖丸環境調査",
                      target = ""),
                    Ui.NavItem::Link(
                      iconBefore = Ui.Icons:BOOK,
                      iconAfter = <></>,
                      href = "/papers",
                      label = "報文・短報",
                      target = ""),
                    Ui.NavItem::Link(
                      iconBefore = Ui.Icons:BUG,
                      iconAfter = <></>,
                      href = "/specimens",
                      label = "所蔵標本",
                      target = ""),
                    Ui.NavItem::Link(
                      iconBefore = Ui.Icons:DEVICE_DESKTOP,
                      iconAfter = <></>,
                      href = "/computer",
                      label = "計算機遊び",
                      target = ""),
                    Ui.NavItem::Link(
                      iconBefore = Ui.Icons:PERSON,
                      iconAfter = <></>,
                      href = "/about",
                      label = "自己紹介",
                      target = "")
                  ]
                }
              ]/>
          </div>
        }/>
    </div>
  }
}

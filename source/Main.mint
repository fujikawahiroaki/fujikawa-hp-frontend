component Main {
  connect Application exposing { page }

  fun render : Html {
    case (page) {
      Page::Home =>
        <Layout>
          <Pages.Home/>
        </Layout>

      Page::About =>
        <Layout>
          <Pages.About/>
        </Layout>

      Page::Works =>
        <Layout>
          <Pages.Works/>
        </Layout>

      Page::Hobby =>
        <Layout>
          <Pages.Hobby/>
        </Layout>

      Page::Papers =>
        <Layout>
          <Pages.Papers/>
        </Layout>

      Page::Specimens =>
        <Layout>
          <Pages.Specimens/>
        </Layout>

      Page::NotFound =>
        <Layout>"ご指定のURLに合致するページはございません。"</Layout>
    }
  }
}

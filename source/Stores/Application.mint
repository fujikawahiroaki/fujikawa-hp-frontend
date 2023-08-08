enum Page {
  Home
  About
  Works
  Computer
  Papers
  Articles
  Specimens
  NotFound
  Article20230808
}

store Application {
  state page : Page = Page::Home

  fun initializeWithPage (page : Page) : Promise(Never, Void) {
    sequence {
      setPage(page)
    }
  }

  fun setPage (page : Page) : Promise(Never, Void) {
    next { page = page }
  }
}

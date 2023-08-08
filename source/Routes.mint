routes {
  /?page=:page (page : String) {
    parallel {
      Application.initializeWithPage(Page::Home)
    }
  }

  / {
    parallel {
      Application.initializeWithPage(Page::Home)
    }
  }

  /about {
    parallel {
      Application.initializeWithPage(Page::About)
    }
  }

  /works {
    parallel {
      Application.initializeWithPage(Page::Works)
    }
  }

  /articles {
    parallel {
      Application.initializeWithPage(Page::Articles)
    }
  }

  /computer {
    parallel {
      Application.initializeWithPage(Page::Computer)
    }
  }

  /papers {
    parallel {
      PapersStore.load()
      Application.initializeWithPage(Page::Papers)
    }
  }

  /specimens {
    parallel {
      Application.initializeWithPage(Page::Specimens)
    }
  }

  /articles/20230808 {
    parallel {
      Application.initializeWithPage(Page::Article20230808)
    }
  }

  * {
    Application.initializeWithPage(Page::NotFound)
  }
}

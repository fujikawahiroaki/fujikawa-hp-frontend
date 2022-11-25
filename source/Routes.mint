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

  /hobby {
    parallel {
      Application.initializeWithPage(Page::Hobby)
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

  * {
    Application.initializeWithPage(Page::NotFound)
  }
}

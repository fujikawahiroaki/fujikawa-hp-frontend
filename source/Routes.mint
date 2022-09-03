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

  /gears {
    parallel {
      Application.initializeWithPage(Page::Gears)
    }
  }

  /hobby {
    parallel {
      Application.initializeWithPage(Page::Hobby)
    }
  }

  * {
    Application.initializeWithPage(Page::NotFound)
  }
}

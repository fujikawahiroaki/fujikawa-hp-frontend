record Paper {
  name : String,
  summary : String,
  id : String,
  createdAt : String,
  publishedYear : Number,
  publishedMonth : Number,
  publishedDay : Number
}

record PapersList {
  results : Array(Paper)
}

enum Status {
  Initial
  Loading
  Error(String)
  Ok(PapersList)
}

store PapersStore {
  state status : Status = Status::Initial

  fun load : Promise(Never, Void) {
    sequence {
      next { status = Status::Loading }

      response =
        @BACKEND_API + "papers"
        |> Http.get()
        |> Http.send()

      object =
        response.body
        |> Json.parse()
        |> Maybe.toResult("")

      Debug.log(object)

      decodedResults =
        decode object as PapersList

      Debug.log(decodedResults)
      next { status = Status::Ok(decodedResults) }
    } catch Http.ErrorResponse => error {
      next { status = Status::Error("Something went wrong with the request.") }
    } catch Object.Error => error {
      next { status = Status::Error("The papers data is not what is expected.") }
    } catch String => error {
      next { status = Status::Error("Invalid JSON data.") }
    }
  }
}

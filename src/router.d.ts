import { FirebaseError } from "firebase/app"
import "react-router-dom"

module "react-router-dom" {
  type ActionData = {
    error?: FirebaseError
  } | null
  function useActionData(): ActionData
}

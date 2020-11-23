// Dependencies
import { gql } from '@apollo/client'

export default gql`
  query getAppById($id: String!) {
    getAppById(id: $id) {
      id
      appName
      identifier
      icon
    }
  }
`

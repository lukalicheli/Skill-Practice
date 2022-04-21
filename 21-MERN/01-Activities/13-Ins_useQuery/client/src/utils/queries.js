// import gql function from apollo/client
import { gql } from '@apollo/client';

// Use the gql function to create a query to get all profiles and export it.
export const QUERY_PROFILES = gql`
  query allProfiles {
    profiles {
      _id
      name
      skills
    }
  }
`;

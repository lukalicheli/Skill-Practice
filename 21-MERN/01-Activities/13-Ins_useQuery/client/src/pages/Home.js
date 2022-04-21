import React from 'react';
import ProfileList from '../components/ProfileList';

// import the userQuery hook from apollo
import { useQuery } from '@apollo/client';

// Import query to get all profiles
import { QUERY_PROFILES } from '../utils/queries';

const Home = () => {
  // Send a request for the query with the userQuery hook passing it the
  // imported query. The hook returns an object with several properties. Here,
  // destructuring assignment is used to create references to `loading` and
  // `data`. `loading` is a boolean indicating the status of the async.
  // query--`true` if the query is pending. `data` will be null until the
  // request completes. Then, `data` will contain the data returned by the query
  // if the request is successful.
  const { loading, data } = useQuery(QUERY_PROFILES);

  // Use optional chaining (`?.`) to get the profiles from the query result.
  const profiles = data?.profiles || [];

  return (
    <main>
      <div className="flex-row justify-center">
        <div className="col-12 col-md-10 my-3">
          {/* If loading is true, display a loading message. If loading is false, display the profiles from the query. */}
          {loading ? (
            <div>Loading...</div>
          ) : (
            <ProfileList
              profiles={profiles}
              title="Here's the current roster of friends..."
            />
          )}
        </div>
      </div>
    </main>
  );
};

export default Home;

import { useEffect, useState } from "react";

import Loading from "./Loading";
import Tours from "./Tours";

const url = "https://course-api.com/react-tours-project";

const App = () => {
  const [tours, setTours] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [isRefetch, setIsRefetch] = useState(false);

  useEffect(() => {
    const fetchTours = async () => {
      try {
        const resp = await fetch(url);
        if (!resp.ok) {
          const msg = `Error Occured`;
          throw new Error(msg);
        }
        const data = await resp.json();
        console.log(data);
        setTours(data);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    fetchTours();
  }, [isRefetch]);

  if (isLoading) {
    return <Loading />;
  }
  const updateList = (id) => {
    const newTours = tours.filter((tour) => tour.id !== id);
    setTours(newTours);
  };
  const isRefetchfunc = () => setIsRefetch(!isRefetch);
  return (
    <main>
      <Tours
        tours={tours}
        isRefetchfunc={isRefetchfunc}
        updateList={updateList}
      />
    </main>
  );
};
export default App;

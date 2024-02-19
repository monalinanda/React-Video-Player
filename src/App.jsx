import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Home";
import CreatePlayListPage from "./components/CreatePlayListPage";
import MyPlaylistPage from "./components/MyPlaylistPage";
import { StateContext } from "./utils/StateContext";
import useMediaList from "./hooks/useMediaList";

function App() {
  useMediaList();
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/createPlaylist",
      element: <CreatePlayListPage />,
    },
    {
      path: "/myPlaylist",
      element: <MyPlaylistPage />,
    },
  ]);
  return (
    <StateContext>
      <RouterProvider router={appRouter} />
    </StateContext>
  );
}

export default App;

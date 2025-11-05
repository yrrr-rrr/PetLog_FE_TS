import { MakeGroup } from "@/features/makeGroup/ui/makeGroup/makeGroup";
import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
  {
    path: "/makegroup",
    element: <MakeGroup />,
  },
]);

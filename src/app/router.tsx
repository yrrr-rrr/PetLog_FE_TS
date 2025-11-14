import { GroupEtry } from "@/features/groupEntry/ui/groupEntry";
import { JoinGroup } from "@/features/joinGroup/ui/joinGroup";
import { MakeGroup } from "@/features/makeGroup/ui/makeGroup/makeGroup";
import { Setting } from "@/features/setting/ui/setting";
import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
  {
    path: "/groupentry",
    element: <GroupEtry />,
  },
  {
    path: "/makegroup",
    element: <MakeGroup />,
  },
  {
    path: "/joingroup",
    element: <JoinGroup />,
  },
  {
    path: "/setting",
    element: <Setting />,
  },
]);

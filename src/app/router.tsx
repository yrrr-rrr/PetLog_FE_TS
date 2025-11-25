import { AddContent } from "@/features/diary/add/ui/addContent/addContent";
import { AddPicture } from "@/features/diary/add/ui/addPicture/addPicture";
import { DiaryDetail } from "@/features/diary/detail/ui/diaryDetail";
import { Home } from "@/features/diary/home/ui/home";
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
  {
    path: "/diary",
    element: <Home />,
  },
  {
    path: "diary/:diaryId",
    element: <DiaryDetail />,
  },
  {
    path: "adddiary/pictures",
    element: <AddPicture />,
  },
  {
    path: "adddiary/content",
    element: <AddContent />,
  },
]);

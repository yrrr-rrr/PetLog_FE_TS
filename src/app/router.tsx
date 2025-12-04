import { GroupEtry } from "@/pages/grouEentry/groupEntry";
import { JoinGroup } from "@/pages/joinGroup/joinGroup";
import { createBrowserRouter } from "react-router-dom";
import { RootEntry } from "./rootEntry";
import { MakeGroup } from "@/pages/makeGroup/makeGroup/makeGroup";
import { Setting } from "@/pages/setting/setting";
import { Home } from "@/pages/diaryHome/home";
import { AddPicture } from "@/pages/diaryAdd/addPicture/addPicture";
import { DiaryDetail } from "@/pages/diaryDetail/diaryDetail";
import { AddContent } from "@/pages/diaryAdd/addContent/addContent";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootEntry />,
  },
  {
    path: "/start",
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
  {
    path: "editdiary/pictures",
    element: <AddPicture />,
  },
  {
    path: "editdiary/content",
    element: <AddContent />,
  },
]);

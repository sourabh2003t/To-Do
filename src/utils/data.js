
import { ReactComponent as Nopriority } from "../icons_FEtask/No-priority.svg";
import { ReactComponent as Lowpriority } from "../icons_FEtask/Img - Low Priority.svg";
import { ReactComponent as Medpriority } from "../icons_FEtask/Img - Medium Priority.svg";
import { ReactComponent as Highpriority } from "../icons_FEtask/Img - High Priority.svg";
import { ReactComponent as Urgentpriority } from "../icons_FEtask/SVG - Urgent Priority colour.svg";
import { ReactComponent as Backlog } from "../icons_FEtask/Backlog.svg";
import { ReactComponent as Todo } from "../icons_FEtask/To-do.svg";
import { ReactComponent as InProg } from "../icons_FEtask/in-progress.svg";
import { ReactComponent as Done } from "../icons_FEtask/Done.svg";
import { ReactComponent as Cancelled } from "../icons_FEtask/Cancelled.svg";

const bgColors = ["#B57136", "#868728", "#4D9446", "#5F80E4"];

export const priorities = [
    { title: "no priority", color: "gray", icon: <Nopriority /> },
    { title: "low", color: "lightgray", icon: <Lowpriority /> },
    { title: "medium", color: "gray", icon: <Medpriority /> },
    { title: "high", color: "black", icon: <Highpriority /> },
    { title: "urgent", color: "orange", icon: <Urgentpriority /> }
];
export const status = [
    { title: "backlog", color: "black", icon: <Backlog /> },
    { title: "todo", color: "lightgrey", icon: < Todo /> },
    { title: "in progress", color: "#EBCB62", icon: <InProg /> },
    { title: "done", color: "#606ACB", icon: <Done /> },
    { title: "cancelled", color: "gray", icon: <Cancelled /> },
];

export const statusIcons = {
    backlog: {
        color: "black",
        icon: <Backlog />,
    },
    todo: {
        color: "lightgrey",
        icon: <Todo />,
    },
    "in progress": {
        color: "#EBCB62",
        icon: <InProg />,
    },
    done: {
        color: "#606ACB",
        icon: <Done />,
    },
    cancelled: {
        color: "gray",
        icon: <Cancelled />,
    },
};
export const generateIntials = (name) => {
    return name.split(' ').map(word => word.charAt(0)).join('');
}
export const getRandomColor = () => {
    const randomIndex = Math.floor(Math.random() * bgColors.length);
    return bgColors[randomIndex];
};
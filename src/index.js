import { greeting } from "./greeting.js";
import "./styles.css";
import {toDo} from "./toDo.js";
import homepage from "./homepage.js";
import { project } from "../project.js";

let myToDo = toDo("my todo","go to the place, do the thing", "denver", "9/2", "high");

console.log(myToDo);

let defaultProject = project("default")
defaultProject.list.push(myToDo);
console.log("project: " + defaultProject, defaultProject.name, defaultProject.list);
homepage(defaultProject);

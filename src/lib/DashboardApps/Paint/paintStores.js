import { writable } from "svelte/store";
import { createGrid } from "./utils";

const size = 120;

export const gridSize = writable(size);
export const color = writable("#ff3e00");
export const grid = writable(createGrid(size));

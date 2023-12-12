import { Origin } from "./origin.model";

export class Character {
    id: number | undefined;
    name: string | undefined;
    image: string | undefined;
    status: string | undefined;
    species: string | undefined;
    gender: string | undefined;
    origin: Origin | undefined;
}

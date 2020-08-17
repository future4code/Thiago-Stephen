import { v4 } from "uuid";

const id = v4();

console.log("generated Id:, id");

export class IdGenerator {
    public generate(): string {
        return v4();
    }
};


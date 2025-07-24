import { Entity } from "../../core/entities/entity"
import { UniqueEntityID } from "../../core/entities/unique-entity-id"

interface InstrcutorProps {
    name: string
}

export class Instrcutor extends Entity<InstrcutorProps> {
    static create(props: InstrcutorProps, id?: UniqueEntityID) {
        const instructor = new Instrcutor(props, id)

        return instructor
    }
}
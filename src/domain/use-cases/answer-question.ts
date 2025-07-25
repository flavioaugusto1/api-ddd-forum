import { UniqueEntityID } from "@/core/entities/unique-entity-id"
import { AnswersRepository } from "@/repositories/answers-repositories"
import { Answer } from "../entities/answer"

interface AnswerQuestionUseCaseRequest {
    instructorId: string
    questionId: string
    content: string
}

export class AnswerQuestionUseCase {
    constructor(private answersRepository: AnswersRepository) { }

    async execute({ instructorId, questionId, content }: AnswerQuestionUseCaseRequest) {
        const answer = Answer.create({
            authorId: new UniqueEntityID(instructorId),
            questionId: new UniqueEntityID(questionId),
            content
        })

        await this.answersRepository.create(answer)

        return answer
    }
}

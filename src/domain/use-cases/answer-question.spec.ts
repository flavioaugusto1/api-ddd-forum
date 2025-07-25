import { AnswerQuestionUseCase } from "./answer-question"
import { AnswersRepository } from "@/repositories/answers-repositories"
import { Answer } from "../entities/answer"

const fakeAnswersRepository: AnswersRepository = {
    create: async (answer: Answer) => {
        return;
    }
}

test("create an answer", async () => {
    const answerQuestion = new AnswerQuestionUseCase(fakeAnswersRepository)
    const answer = await answerQuestion.execute({ content: "Nova resposta", questionId: "1", instructorId: "1" })

    expect(answer.content).toEqual("Nova resposta")
})
import questionsJson from "@/assets/questions.json"

interface Question {
    id: number
    question: string
    noAnswerShuffle?: boolean
    answers: Answer[]
}

interface Answer {
    id: number
    answer: string
    correct?: boolean
}

const questions: Question[] = questionsJson

export default questions

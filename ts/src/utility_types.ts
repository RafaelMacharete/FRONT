// Utility types

// Partial

interface Assignment {
    studentId: string,
    title: string,
    grade: number,
    verified?: boolean,
}

const updateAssignment = (
    assign: Assignment,
    propsToUpdate: Partial<Assignment>
): Assignment => {
    return { ...assign, ...propsToUpdate }
}

const assign1: Assignment = {
    studentId: '123',
    title: '123',
    grade: 123,
}

console.log(updateAssignment(assign1, { grade: 95 }))
const assignGranded: Assignment = updateAssignment(assign1, { grade: 95 })

// Required and Readonly

const recordAssignment = (
    assign: Required<Assignment>
): Assignment => {
    // Send to database.....
    return assign
}

const assignVerified: Readonly<Assignment> = {
    ...assignGranded, verified: true
}

recordAssignment({ ...assignGranded, verified: true })

// Record
const hexColorMap: Record<string, string> = {
    red: 'FF0000',
    green: '00FF00',
    blue: '0000FF',
}

type Students = 'Rafael' | 'Macharete'
type LetterGrades = 'A' | 'B' | 'C' | 'D' | 'U'

const finalGrades: Record<Students, LetterGrades> = {
    Rafael: 'A',
    Macharete: 'A'
}

interface Grades {
    assign1: number,
    assign2: number,
}

const gradeData: Record<Students, Grades> = {
    Rafael: { assign1: 100, assign2: 100 },
    Macharete: { assign1: 100, assign2: 99 },
}

// Pick and Omit

type AssignResult = Pick<Assignment, 'studentId' | 'grade'>

const score: AssignResult = {
    studentId: '123',
    grade: 100,
}

type AssignPreview = Omit<Assignment, 'grade' | 'verified'>

const preview: AssignPreview = {
    studentId: '123',
    title: 'title'
}

// Exclude and extract

type adjustGrade = Exclude<LetterGrades, 'U'>

type highGrades = Extract<LetterGrades, 'A' | 'B'>

// Nonnullable

type AllPossibleGrades = 'Leafar' | 'Lucas' | 'null' | 'undefined'
type NamesOnly = NonNullable<AllPossibleGrades>

// ReturnType

// type NewAssign = {
//     title: string,
//     points: number
// }

const createNewAssign = (title: string, points: number) => {
    return { title, points }
}

type NewAssign = ReturnType<typeof createNewAssign>

const tsAssign: NewAssign = createNewAssign('Title', 100)
console.log(tsAssign);

// Parameters
type AssignParams = Parameters<typeof createNewAssign>

const assignArgs: AssignParams = ['Title', 20]

const tsAssign2: NewAssign = createNewAssign(...assignArgs)
console.log(tsAssign2);

// Awaited - helps us with the ReturnType of a Promise

interface User {
    id: number,
    name: string,
    username: string,
    email: string
}

const fetchUsers = async (): Promise<User[]> => {
    try {
        const data = await fetch('https://jsonplaceholder.typicode.com/users')
        const body = await data.json();

        return body
    } catch (err) {
        if (err instanceof Error) {
            console.log(err.message)
        }
        return []
    }
}

type FetchUsersReturnType = Awaited<ReturnType<typeof fetchUsers>>

fetchUsers().then(users => console.log(users))
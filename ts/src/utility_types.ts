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
const assignGranded: Assignment = updateAssignment(assign1, {grade: 95})
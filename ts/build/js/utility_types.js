"use strict";
// Utility types
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const updateAssignment = (assign, propsToUpdate) => {
    return Object.assign(Object.assign({}, assign), propsToUpdate);
};
const assign1 = {
    studentId: '123',
    title: '123',
    grade: 123,
};
console.log(updateAssignment(assign1, { grade: 95 }));
const assignGranded = updateAssignment(assign1, { grade: 95 });
// Required and Readonly
const recordAssignment = (assign) => {
    // Send to database.....
    return assign;
};
const assignVerified = Object.assign(Object.assign({}, assignGranded), { verified: true });
recordAssignment(Object.assign(Object.assign({}, assignGranded), { verified: true }));
// Record
const hexColorMap = {
    red: 'FF0000',
    green: '00FF00',
    blue: '0000FF',
};
const finalGrades = {
    Rafael: 'A',
    Macharete: 'A'
};
const gradeData = {
    Rafael: { assign1: 100, assign2: 100 },
    Macharete: { assign1: 100, assign2: 99 },
};
const score = {
    studentId: '123',
    grade: 100,
};
const preview = {
    studentId: '123',
    title: 'title'
};
// ReturnType
// type NewAssign = {
//     title: string,
//     points: number
// }
const createNewAssign = (title, points) => {
    return { title, points };
};
const tsAssign = createNewAssign('Title', 100);
console.log(tsAssign);
const assignArgs = ['Title', 20];
const tsAssign2 = createNewAssign(...assignArgs);
console.log(tsAssign2);
const fetchUsers = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = yield fetch('https://jsonplaceholder.typicode.com/users');
        const body = yield data.json();
        return body;
    }
    catch (err) {
        if (err instanceof Error) {
            console.log(err.message);
        }
        return [];
    }
});
fetchUsers().then(users => console.log(users));

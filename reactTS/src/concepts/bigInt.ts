let int: number = 1111;
let bigInt: bigint = 111n; 
let bigIntExpl1: bigint = BigInt(100)
let bigIntExpl2: bigint = BigInt("9876543210987654321n")

// bigInt = int;
bigInt = BigInt(int);

const previousMaxSafe: bigint = BigInt(Number.MAX_SAFE_INTEGER); // 9.007.199.254.740.991n
const maxPlusOne: bigint = previousMaxSafe + 1n;

// 0n === 0; // false
// 0n == 0; // true
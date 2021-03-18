export default function fermatFactors(n: number): { foundIn: number; factors: number[] } {
    let foundIn = 1
    if (n <= 0)
        return {factors: [n], foundIn}

    if (!(n % 2))
        return {factors: [n / 2, 2], foundIn}

    let a = Math.ceil(Math.sqrt(n))

    if (a * a === n)
        return {factors: [a, a], foundIn}

    let b = 0
    for (; foundIn > 0; foundIn++) {
        const c = a * a - n
        b = Math.floor(Math.sqrt(c))

        if (b * b === c)
            break
        else
            a += 1
    }

    return {factors: [a - b, a + b], foundIn}
}

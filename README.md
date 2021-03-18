# RTS labs

<details>
  <summary><b>Lab 1</b> <i>"Fermat's Factors"</i></summary>

### Code

```typescript
function fermatFactors(n: number): number[] {
    if (n <= 0)
        return [n]

    if (!(n % 2))
        return [n / 2, 2]

    let a = Math.ceil(Math.sqrt(n))

    if (a * a === n)
        return [a, a]

    let b = 0
    while (1) {
        const c = a * a - n
        b = Math.floor(Math.sqrt(c))

        if (b * b === c)
            break
        else
            a += 1
    }

    return [a - b, a + b]
}
```

### Screenshots

![screenshot1](./examples/fermatFactors/screenshot1.jpeg)

![screenshot2](./examples/fermatFactors/screenshot2.jpeg)

![screenshot3](./examples/fermatFactors/screenshot3.jpeg)

</details> 

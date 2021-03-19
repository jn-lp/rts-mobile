# RTS labs

## <b>Lab 2</b> <i>"Perceptron"</i>

### Code

```typescript
type Input = number[]

const activations = {
    default: (x: number): number => x,
    ReLu: (x: number): number => Math.max(0, x),
    Sigmoid: (x: number): number => 1 / (1 + Math.exp(-x)),
}

class Perceptron {
    public weights: number[] = [0, 0]
    public accuracy: number = 0

    protected threshold: number = 1
    protected learningRate: number = .1

    private activation = activations.default
    private bias: number = 1

    private error = 1 / 1e6

    constructor(opts: {
        threshold?: number,
        learningRate?: number,
    }) {
        Object.assign(this, opts);
    }

    public guess(point: Input): boolean {
        return this.predict(point) > this.threshold
    }

    public predict(point: Input): number {
        return this.activation(this.sum(point))
    }

    public train(points: Input[]): boolean {
        let success = true
        points.forEach((point, i) => {
            success = this.adjustWeights(point, i) && success
        })

        return success
    }

    public learn(points: Input[], deadline: number = 100) {
        while (true) {
            if (deadline / points.length <= 0 || this.train(points))
                break;
            deadline--
        }

        return this.accuracy
    }

    private adjustWeights(point: Input, i: number): boolean {
        const delta = this.delta(this.predict(point));

        if (Math.abs(delta) < this.error || delta * Math.pow(-1, i) < 0)
            return true

        this.weights =
            this.weights.map((w, i) => {
                return w + delta * point[i] * this.learningRate

            });

        this.accuracy = 1 - delta

        return false
    }

    private sum(point: Input): number {
        return point.reduce((sum, x, i) => sum + x * this.weights[i], 0) + this.bias
    }

    private delta(y: number): number {
        return this.threshold - y
    }
}
```

### Screenshots

![screenshot1](./examples/perceptron/screenshot1.jpeg)

![screenshot2](./examples/perceptron/screenshot2.jpeg)

![screenshot3](./examples/perceptron/screenshot3.jpeg)

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

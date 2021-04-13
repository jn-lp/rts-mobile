const random = (min: number, max: number): number =>
    ~~(Math.random() * (max - min) + min)

class Chromosome {
    public genes: number[] = []
    public fitness: number = Infinity

    protected task: number[] = []
    protected target: number = 0

    constructor(opts: {
        genes: number[],
        task: number[],
        target: number
    }) {
        Object.assign(this, opts);
        this.calcFitness()
    }

    public crossover(partner: Chromosome): Chromosome {
        const child = this.clone()

        const fromParent = child.genes.length / 2
        child.genes = [...child.genes.slice(0, fromParent), ...partner.genes.slice(child.genes.length - fromParent)]

        child.calcFitness()

        return child
    }

    private calc = () =>
        this.genes.reduce((a, gene, i) => a + (gene * this.task[i]))

    private calcFitness() {
        this.fitness = Math.abs(this.target - this.calc())
    }

    private clone(): Chromosome {
        return Object.assign(Object.create(Object.getPrototypeOf(this)), this);
    }
}

class GeneticDiophantus {
    public population: Chromosome[] = []
    public iterations: number = 0

    constructor({task, target, populationSize}: { task: number[], target: number, populationSize?: number }) {
        const {length} = task
        this.population =
            Array.from(
                {length: populationSize || length},
                () => new Chromosome({
                    genes: Array.from({length}, () => random(1, target / 2)),
                    task: task,
                    target: target,
                })
            )
    }

    public solve(solveFor: number = Infinity): number[] | void {
        while (solveFor--) {
            ++this.iterations
            const chromosome = this.crossover()
            if (chromosome)
                return chromosome.genes
        }
    }

    private crossover() {
        const children: Chromosome[] = []
        for (let i = 0; i < this.population.length; i++) {
            const parents = this.population
                .map((chromosome) => ({chromosome, probability: Math.random() * (chromosome.fitness * 1000)}))
                .sort((a, b) => a.probability - b.probability)

            const parent = parents[0].chromosome
            const partner = parents[1].chromosome

            const child = parent.crossover(partner)

            if (child.fitness === 0)
                return child

            children.push(child)
        }

        this.population = children
    }
}

(() => {
    const POPULATION_SIZE = 3

    const test: { [size: number]: any } = {};
    for (let size = POPULATION_SIZE; size <= POPULATION_SIZE * 2; size++) {
        const start = new Date().getTime();

        (new GeneticDiophantus({task: [1, 2, 3, 4], target: 20, populationSize: size})).solve()

        test[size] = new Date().getTime() - start;
    }

    console.table(test)
})()

export default GeneticDiophantus

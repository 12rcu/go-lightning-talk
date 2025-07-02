import {Code, Layout, lines, makeScene2D} from '@motion-canvas/2d';
import {createRef, DEFAULT, waitFor, waitUntil} from "@motion-canvas/core";

export default makeScene2D(function* (view) {
    const code = createRef<Code>()

    view.add(
        <Layout direction={'column'} width={1200} layout gap={15}>
            <Code
                ref={code}
                fontSize={28}
                offsetX={-1}
                x={-400}
                code={`\
func main() {
    ci := make(chan int, 100)
    go work(ci)
	
    time.Sleep(3 * time.Second) //some work
}

func work(results chan<- int) {
    for i := 1; i <= 5; i++ {
        time.Sleep(1 * time.Second)
        results <- i
    }
    results <- -1
}
`}
            />
        </Layout>
    )

    yield* waitFor(4)

    yield* code().selection(lines(8, 11), 0.6)

    yield* waitFor(2)

    yield* code().selection(lines(4), 0.6)

    yield* waitFor(2)

    yield* code().selection(DEFAULT, 0.6)

    yield* waitFor(2)

    yield* code().code.insert([4, 43], `\n\n    for {
        value := <-ci
        fmt.Printf("Accept value %s\\n", strconv.Itoa(value))

        if value == -1 {
            break
        }
    }`, 0.8)

    yield* waitUntil('exampl_fin');
});
import {makeScene2D, Code, Layout, Txt, word, Rect, lines} from '@motion-canvas/2d';
import {all, createRef, waitFor} from "@motion-canvas/core";

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
    
}
`}
            />
        </Layout>
    )

    yield* waitFor(4)

    yield* code().code.replace(lines(1, 2), `    ci := make(chan int)
}

func someWork(ci chan int) {

}
`, 0.8)

    yield* waitFor(1)

    yield* code().code.insert([1, 24], `\n    go someWork(ci)`, 0.6)

    yield* waitFor(3)

    yield* code().code.insert([2, 19], `\n\n    first := <-ci
    second := <-ci`, 0.6)

    yield* waitFor(2)

    yield* code().code.insert([9, 0], `    ci <- 1
    ci <- 2`, 0.6)

    yield* waitFor(7)

    yield* all(
        code().code.insert([8, 28], `\n    time.Sleep(5 * time.Second)`, 0.6),
        code().code.insert([4, 18], `  //blocked by sleep\n`, 0.6),
    )


    yield* waitFor(11)

    yield* all(
        code().code.insert([4, 38], `\n    time.Sleep(5 * time.Second)`, 0.6),
        code().code.insert([11, 11], `  //blocked by sleep`, 0.6),
    )

    yield* waitFor(12)
});
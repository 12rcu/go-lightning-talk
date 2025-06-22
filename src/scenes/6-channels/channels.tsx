import {makeScene2D, Code, Layout, Txt, word, Rect} from '@motion-canvas/2d';
import {createRef, waitFor} from "@motion-canvas/core";

export default makeScene2D(function* (view) {
    const code = createRef<Code>()
    const terminal = createRef<Code>()

    view.add(
        <Layout direction={'column'} width={1200} layout gap={15}>
            <Rect width={1200} height={800} fill={'#1a1a1a'} radius={10} layout padding={20}>
                <Code
                    ref={code}
                    fontSize={28}
                    offsetX={-1}
                    x={-400}
                    code={`\
func main() {
    ci := make(chan int)
    go someWork(ci)

    fmt.Println("1")
    first := <-ci
    time.Sleep(5 * time.Second)
    fmt.Println("3")
    second := <-ci
    time.Sleep(1 * time.Second)
    fmt.Printf("first: %d second %d\\n", first, second)
}

func someWork(ci chan int) {
    time.Sleep(5 * time.Second)
    fmt.Println("2")
    ci <- 1
    ci <- 2
    fmt.Println("4")
}
                `}
                />
            </Rect>
            <Rect width={1200} height={100} fill={'#1a1a1a'} radius={10} layout padding={20}>
                <Code
                    ref={terminal}
                    fontSize={28}
                    offsetX={-1}
                    x={-400}
                    code={`>_ shell
                    `}
                />
            </Rect>
        </Layout>
    )

    yield* waitFor(4)

    yield* code().code.insert([7,4], ``, 0.8)

    yield* waitFor(1)
});
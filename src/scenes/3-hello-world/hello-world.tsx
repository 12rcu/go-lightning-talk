import {makeScene2D, Code, Layout, Txt, word, Rect} from '@motion-canvas/2d';
import {all, createRef, waitFor} from "@motion-canvas/core";

export default makeScene2D(function* (view) {
    const code = createRef<Code>()
    const terminal = createRef<Code>()

    view.add(
        <Layout direction={'column'} width={1200} layout gap={15}>
            <Rect width={1200} fill={'#1a1a1a'} height={800} radius={10} layout padding={20}>
                <Code
                    ref={code}
                    fontSize={28}
                    offsetX={-1}
                    x={-400}
                    code={`package main`}
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

    yield* waitFor(1.2)

    yield* code().code.append(`\n \nfunc main() {    
}`, 0.6)

    yield* code().code.insert([1, 0], `\nimport("fmt") \n`, 0.8)
    yield* waitFor(0.2)

    yield* code().code.insert([5, 0], `    fmt.Println("Hello World!")\n`, 0.8)
    yield* waitFor(1.2)

    yield* code().code.insert([6, 0], `    var x int = 4\n`, 0.8)
    yield* waitFor(1.2)

    yield* all(
        code().code.replace(word(6, 4, 4), ``, 0.8),
        code().code.replace(word(6, 10, 6), `:= `, 0.8),
    )
    yield* waitFor(1)

    yield* code().code.insert([7, 0], `    if x < 5 {}\n`, 0.8)
    yield* waitFor(1.2)

    yield* code().code.insert([8, 0], `    for i := 0; i < x; i++ {}\n`, 0.8)
    yield* waitFor(1.2)

    yield* code().code.insert([9, 0], `    for x > 4 {   //no while keyword
        x--
    }\n`, 0.8)

    yield* waitFor(2.2)
});
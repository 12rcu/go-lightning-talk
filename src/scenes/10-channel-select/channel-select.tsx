import {Code, Layout, makeScene2D} from '@motion-canvas/2d';
import {createRef, DEFAULT, waitFor} from "@motion-canvas/core";

export default makeScene2D(function* (view) {
    const code = createRef<Code>()

    view.add(
        <Layout direction={'column'} width={1200} layout gap={15}>
            <Code
                ref={code}
                fontSize={28}
                offsetX={-1}
                x={-400}
                code={`c1 := make(chan string)
c2 := make(chan string)`}
            />
        </Layout>
    )

    yield* waitFor(5)

    yield* code().code.append(`\n \nmsg1 := <- c1 //blocks c2
msg2 := <- c2`, 0.6)

    yield* waitFor(5)


    yield* waitFor(30)
});
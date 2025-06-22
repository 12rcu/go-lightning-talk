import {makeScene2D, Code, Txt, Layout, Rect} from '@motion-canvas/2d';
import {createRef, waitFor} from "@motion-canvas/core";

export default makeScene2D(function* (view) {
    const code = createRef<Code>()

    view.add(
        <Layout direction={'column'} width={1200} layout gap={15}>
            <Rect width={1200} height={500} fill={'#1a1a1a'} radius={10}/>
            <Rect width={1200} height={300} fill={'#1a1a1a'} radius={10} layout padding={20}>
                <Code
                    ref={code}
                    fontSize={28}
                    offsetX={-1}
                    x={-400}
                    code={`>_ shell
                    `}
                />
            </Rect>
        </Layout>
    )

    yield* waitFor(1)

    yield* code().code.append(`\n>cd ~/documents`, 0.6)

    yield* waitFor(1)

    yield* code().code.append(`\n>mkdir lighting-talk && cd lighting-talk`, 0.6)

    yield* waitFor(1)

    yield* code().code.append(`\n>touch hello.go`, 0.6)

    yield* waitFor(1.2)

    yield* code().code.append(`\n>go mod init lighting-talk/sample`, 0.6)

    yield* waitFor(1.2)
});
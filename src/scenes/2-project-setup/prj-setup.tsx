import {makeScene2D, Code, Txt, Layout} from '@motion-canvas/2d';
import {createRef, waitFor} from "@motion-canvas/core";

export default makeScene2D(function* (view) {
    const code = createRef<Code>()

    view.add(
        <Layout>
            <Txt text={">_"} fontSize={20} x={-500} y={-300} fill={"#fff"}/>
            <Code
                ref={code}
                fontSize={28}
                offsetX={-1}
                x={-400}
                code={`cd ~/documents`}
            />
        </Layout>
    )

    yield* waitFor(1)

    yield* code().code.append(`\nmkdir lighting-talk && cd lighting-talk`, 0.6)

    yield* waitFor(1)

    yield* code().code.append(`\ntouch hello.go`, 0.6)

    yield* waitFor(1.2)

    yield* code().code.append(`\ngo mod init lighting-talk/sample`, 0.6)

    yield* waitFor(1.2)
});
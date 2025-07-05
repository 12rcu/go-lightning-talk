import {Code, Layout, makeScene2D, Txt} from '@motion-canvas/2d';
import {createRef, waitFor} from "@motion-canvas/core";

export default makeScene2D(function* (view) {
    const code = createRef<Code>()

    view.add(
        <Layout direction={'column'} width={1200} layout gap={15}>
            <Txt fill={"#fff"} fontSize={32}>Close Channels</Txt>
            <Code
                ref={code}
                fontSize={28}
                offsetX={-1}
                x={-400}
                code={`c1 := make(chan string)`}
            />
        </Layout>
    )

    yield* waitFor(15)

    yield* code().code.append(`\nclose(c1)`, 0.6)

    yield* waitFor(15)

    yield* code().code.append(`\nmsg, ok := <- c1`, 0.6)

    yield* waitFor(18)

    yield* code().code.append(`\nif !ok {
    return
}`, 0.6)

    yield* waitFor(5)

    yield* code().code.append(`\nfmt.Println(msg)`, 0.6)

    yield* waitFor(7)
});
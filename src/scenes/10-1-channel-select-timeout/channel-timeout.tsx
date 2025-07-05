import {Code, Layout, lines, makeScene2D, Txt} from '@motion-canvas/2d';
import {createRef, waitFor, waitUntil} from "@motion-canvas/core";

export default makeScene2D(function* (view) {
    const code = createRef<Code>()

    view.add(
        <Layout direction={'column'} width={1200} layout gap={15}>
            <Txt fill={"#fff"} fontSize={32}>Select</Txt>
            <Code
                ref={code}
                fontSize={28}
                offsetX={-1}
                x={-400}
                code={`c1 := make(chan string)
c2 := make(chan string)

select {
case msg1 := <- c1: 
    fmt.Println(msg1)
case msg2 := <- c2: 
    fmt.Println(msg2)
}`}
            />
        </Layout>
    )

    yield* waitFor(19)

    yield* code().code.replace(lines(6, 7), `case <- time.After(2 * time.Second): 
    fmt.Println("timeout")
`, 0.8)

    yield* waitFor(15)
});
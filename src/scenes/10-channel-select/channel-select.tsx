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
c2 := make(chan string)`}
            />
        </Layout>
    )

    yield* waitUntil('yapping');

    yield* code().code.append(`\n \nmsg1 := <- c1 //blocks c2
msg2 := <- c2`, 0.6)

    yield* waitFor(9)

    yield* code().code.replace(code().findAllRanges(`msg1 := <- c1 //blocks c2
msg2 := <- c2`)[0], `select {
case msg1 := <- c1: 
    fmt.Println(msg1)
case msg2 := <- c2: 
    fmt.Println(msg2)
}`, 0.8)

    yield* waitFor(52)

    yield* code().code.replace(lines(3, 8), `for {
    select {
    case msg1 := <- c1: 
        fmt.Println(msg1)
    case msg2 := <- c2: 
        fmt.Println(msg2)
    }
}`, 0.8)

    yield* waitFor(5)
});
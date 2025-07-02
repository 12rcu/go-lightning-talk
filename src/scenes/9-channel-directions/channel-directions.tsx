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
                code={`func main() {
    msgChan := make(chan string)                
}`}
            />
        </Layout>
    )

    yield* waitFor(5)

    yield* code().code.append(`\n \nfunc asyncWork() {
        
}`, 0.6)

    yield* waitFor(5)

    yield* code().code.insert([1, 37], `\n    asyncWork(msgChan)`, 0.8)
    yield* code().code.insert([5, 15], `msgChan chan string`, 0.8)

    yield* waitFor(11)

    yield* code().code.insert([5, 27], ` <-`, 0.8)

    yield* waitFor(2)

    yield* code().selection(code().findAllRanges("chan <- string"), 0.8)

    yield* waitFor(6)

    yield* code().selection(DEFAULT, 0.8)

    yield* waitFor(3)

    yield* code().code.replace(code().findAllRanges("chan <- string")[0], `<- chan string`, 0.8)

    yield* waitFor(2)

    yield* code().selection(code().findAllRanges("<- chan string"), 0.8)

    yield* waitFor(5)

    yield* code().selection(DEFAULT, 0.8)

    yield* waitFor(2)
});
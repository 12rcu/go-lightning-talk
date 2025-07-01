import {makeScene2D, Code, Layout, Txt, word, Rect} from '@motion-canvas/2d';
import {createRef, waitFor, waitUntil} from "@motion-canvas/core";

export default makeScene2D(function* (view) {
    const code = createRef<Code>()
    const topic = createRef<Txt>()
    const slogan = createRef<Txt>()

    view.add(
        <Layout direction={'column'} width={1200} layout gap={15}>
            <Txt fill={"#fff"} ref={topic}></Txt>
            <Txt fill={"#fff"} ref={slogan} fontSize={26}></Txt>
            <Code
                ref={code}
                fontSize={28}
                offsetX={-1}
                x={-400}
                code={`\
                `}
            />
        </Layout>
    )

    topic().text("Channels")

    yield* waitFor(14)

    yield* slogan().text("Do not communicate by sharing memory; instead, share memory by communicating.", 0.8)

    yield * waitUntil('yapping');

    yield* slogan().text("")
    topic().text("")

    yield* code().code.insert([0, 0], `func main() {

}

func someWork() {
    time.Sleep(5 * time.Second)
}
`, 0.8)

    yield* waitFor(5)

    yield* code().code.insert([1, 0], `    go someWork()`, 0.8)

    yield* waitFor(5)
    yield* code().code.insert([1, 0], `    ci := make(chan int)\n`, 0.8)

    yield* waitFor(8)

    yield* code().code.insert([2, 16], `ci`, 0.8)
    yield* code().code.insert([5, 14], `ci chan int`, 0.8)

    yield* waitFor(5)

    yield* code().code.insert([6, 31], `\n    ci <- 1 //write to channel`, 0.8)

    yield* waitFor(8)

    yield* code().code.insert([2, 24], `\n\n    //do some other suff\n\n    <-ci //wait\n`, 0.8)

    yield* waitFor(15)
});
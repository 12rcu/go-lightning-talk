import {makeScene2D, Code, Layout, Txt, Img, lines} from '@motion-canvas/2d';
import {all, createRef, waitFor, waitUntil} from "@motion-canvas/core";
import goConc from "./goConc.drawio.png"

export default makeScene2D(function* (view) {
    const code = createRef<Code>()
    const topic = createRef<Txt>()
    const slogan = createRef<Txt>()
    const imgRef = createRef<Img>()

    view.add(
        <Layout direction={'column'} width={1200} layout gap={15}>
            <Txt fill={"#fff"} ref={topic}>Channels</Txt>
            <Txt fill={"#fff"} ref={slogan} fontSize={26}>Do not communicate by sharing memory; instead, share memory by communicating.</Txt>
            <Img ref={imgRef} src={goConc}></Img>
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

    yield* all(
        imgRef().scale(0, 0),
        slogan().text("", 0)
    )

    yield* waitFor(4)

    yield* slogan().text("Do not communicate by sharing memory; instead, share memory by communicating.", 0.8)

    yield* waitUntil('yapping');

    yield* all(
        slogan().text("", 0),
        topic().text("", 0)
    )

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

    yield* all(
        code().code.insert([2, 16], `ci`, 0.8),
        code().code.insert([5, 14], `ci chan int`, 0.8),
    )

    yield* waitFor(5)

    yield* code().code.insert([6, 31], `\n    ci <- 1 //write to channel`, 0.8)

    yield* waitFor(8)

    yield* code().code.insert([2, 24], `\n\n    //do some other suff\n\n    <-ci //wait\n`, 0.8)

    yield* waitFor(15)

    //yield* topic().text("Channels", 0.6)

    yield* all(
        code().code.remove(lines(0, 12), 0),
        imgRef().scale(1, 0),
    )

    yield* waitUntil('expl_fin');
});
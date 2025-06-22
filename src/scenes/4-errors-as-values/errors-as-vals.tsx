import {makeScene2D, Code, Layout, Txt, word, Rect} from '@motion-canvas/2d';
import {createRef, waitFor} from "@motion-canvas/core";

export default makeScene2D(function* (view) {
    const code = createRef<Code>()
    const terminal = createRef<Code>()

    view.add(
        <Layout direction={'column'} width={1200} layout gap={15}>
            <Rect width={1200} height={800} fill={'#1a1a1a'} radius={10} layout padding={20}>
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
                    code={`>_ shell`}
                />
            </Rect>
        </Layout>
    )

    yield* waitFor(1.2)

    yield* code().code.append(`\n \nfunc main() {    
}`, 0.6)

    yield* code().code.append(`\n \nfunc getUserName() {
    
}`, 0.6)

    yield* code().code.insert([5,17], `userid int`, 0.8) //take arg
    yield* waitFor(1)
    yield* code().code.insert([5,28], ` string`, 0.8)     //ret string
    yield* waitFor(1)
    yield* code().code.insert([6,4], `return "Foo"`, 0.8)
    yield* waitFor(1)

    yield* code().code.insert([3,0], `    username := getUserName(-28) \n`, 0.8)
    yield* waitFor(3.2)

    yield* code().code.insert([2,0], `import("errors")\n\n`, 0.8)
    yield* waitFor(1)

    yield* code().code.insert([9,0], `    if userid < 0 {
        return errors.New("Provided negative userid!")
    }\n`, 0.8)
    yield* waitFor(3.2)

    yield* code().code.replace(word(8, 28, 7), ` (string, error)`, 0.8)
    yield* waitFor(1)

    yield* code().code.insert([10,15], `"", `, 0.8)
    yield* waitFor(1)

    yield* code().code.insert([12,16], `, nil`, 0.8)
    yield* waitFor(3)

    yield* code().code.insert([5,12], `, err`, 0.8)
    yield* waitFor(1)

    yield* code().code.insert([6,0], `    if err != nil {
        panic(err)
    }\n`, 0.8)
    yield* waitFor(1)

    yield* waitFor(4)
});
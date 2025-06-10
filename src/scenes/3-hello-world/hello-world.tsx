import {makeScene2D, Code, Layout, Txt, word} from '@motion-canvas/2d';
import {all, createRef, waitFor} from "@motion-canvas/core";

export default makeScene2D(function* (view) {
    const code = createRef<Code>()

    view.add(
        <Layout>
            <Txt text={"hello.go"} fontSize={20} x={-500} y={-300} fill={"#fff"}/>
            <Code
                ref={code}
                fontSize={28}
                offsetX={-1}
                x={-400}
                code={`package main`}
            />
        </Layout>
    )

    yield* waitFor(1.2)

    yield* code().code.append(`\n \nfunc main() {    
}`, 0.6)

    yield* code().code.insert([1, 0], `\nimport("fmt") \n`, 0.8)
    yield* waitFor(0.2)

    yield* code().code.insert([5,0], `    fmt.Println("Hello World!")\n`, 0.8)
    yield* waitFor(1.2)

    yield* code().code.insert([6,0], `    var x int = 4\n`, 0.8)
    yield* waitFor(1.2)

    yield* all(
        code().code.replace(word(6, 4, 4), ``, 0.8),
        code().code.replace(word(6, 10, 6), `:= `, 0.8),
    )
    yield* waitFor(1)

    yield* code().code.insert([7,0], `    if x < 5 {}\n`, 0.8)
    yield* waitFor(1.2)

    yield* code().code.insert([8,0], `    for i := 0; i < x; i++ {}\n`, 0.8)
    yield* waitFor(1.2)

    yield* code().code.insert([9,0], `    for x > 4 {   //no while keyword
        x--
    }\n`, 0.8)

    yield* waitFor(2.2)
});
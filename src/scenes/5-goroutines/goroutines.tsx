import {makeScene2D, Code, Layout, Txt, word, Rect} from '@motion-canvas/2d';
import {createRef, waitFor, waitUntil} from "@motion-canvas/core";

export default makeScene2D(function* (view) {
    const code = createRef<Code>()
    const terminal = createRef<Code>()

    view.add(
        <Code
            ref={code}
            fontSize={28}
            offsetX={-1}
            x={-400}
            code={`\
package main

func main() {

}
                `}
        />
    )

    yield * waitUntil('main_expl_finished');

    yield* code().code.insert([5,2], `\nfunc task() {\n\n}`, 0.8)

    yield* waitFor(1)

    yield* code().code.insert([1,0], `\nimport("time")\n`, 0.8)

    yield* code().code.insert([9,0], `    time.Sleep(6 * time.Second)`, 0.8)

    yield* waitFor(1)

    yield* code().code.insert([5,0], `    task()`, 0.8)

    yield * waitUntil('go_ev');

    yield* code().code.insert([5,4], `go `, 0.8)

    yield* waitFor(8)

    yield* code().code.insert([5,13], `\n    go func() {\n        time.Sleep(2 * time.Second)\n    }() //- must call the function`, 0.8)

    yield * waitUntil('go_fin');
});
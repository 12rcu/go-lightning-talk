import {makeScene2D, Code, Layout, Txt, word} from '@motion-canvas/2d';
import {createRef, waitFor} from "@motion-canvas/core";

export default makeScene2D(function* (view) {
    const code = createRef<Code>()

    view.add(
        <Layout>
            <Txt text={"goroutines.go"} fontSize={20} x={-700} y={-300} fill={"#fff"}/>
            <Code
                ref={code}
                fontSize={28}
                offsetX={-1}
                x={-600}
                code={`\
package main

import (
    "time"
)

func main() {
    crackPassword("202cb962ac59075b964b07152d234b70")
}

func crackPassword(hash string) {
    time.Sleep(50)
}
  
                `}
            />
        </Layout>
    )

    yield* waitFor(4)

    yield* code().code.insert([9,4], `go `, 0.8)

    yield* waitFor(1)
});
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
                code={`package main

import (
    "fmt"
    "math/rand"
)

func main() {
    fmt.Println("Hello, World!")
    crackPassword()
}

func crackPassword() {
    const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"
    seededRand := rand.New(rand.NewSource(123)) // Seed
    for i := 0; i < 500; i++ {
        randomBytes := make([]byte, 10)
        for i := range randomBytes {
            randomBytes[i] = charset[seededRand.Intn(len(charset))]
        }
        fmt.Println(string(randomBytes))
    }
}            
                `}
            />
        </Layout>
    )

    yield* waitFor(4)

    yield* code().code.insert([9,4], `go `, 0.8)

    yield* waitFor(1)
});
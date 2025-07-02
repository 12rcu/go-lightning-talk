import {makeScene2D, Code, Layout, Img} from '@motion-canvas/2d';
import {createRef, waitFor, waitUntil} from "@motion-canvas/core";
import goConc2 from './goConc2.drawio.png'

export default makeScene2D(function* (view) {
    const code = createRef<Code>()
    const imgRef = createRef<Img>()

    view.add(
        <Layout direction={'column'} width={1200} layout gap={15}>
            <Img ref={imgRef} src={goConc2}></Img>
            <Code
                ref={code}
                fontSize={28}
                offsetX={-1}
                x={-400}
                code={`\
ci := make(chan int)
                `}
            />
        </Layout>
    )

    imgRef().scale(0)

    yield* waitFor(4)

    yield* code().code.insert([0, 19], `, 100`, 0.8)

    yield * waitFor(6)

    code().code.reset()
    imgRef().scale(1)

    yield* waitUntil('buff_fin');
});
import {makeScene2D, Code, Txt, Layout, Rect} from '@motion-canvas/2d';
import {createRef, waitFor} from "@motion-canvas/core";

export default makeScene2D(function* (view) {
    view.add(
        <Layout direction={'column'} width={1200} layout gap={15}>
            <Txt fill={"#fff"}>Goroutines and Channels in GO</Txt>
        </Layout>
    )

    yield* waitFor(44.0)
})
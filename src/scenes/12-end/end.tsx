import {Layout, makeScene2D, Txt} from "@motion-canvas/2d";
import {waitFor} from "@motion-canvas/core";

export default makeScene2D(function* (view) {
    view.add(
        <Layout direction={'column'} width={1200} layout gap={15}>
            <Txt fill={"#fff"}>Goroutines and Channels in GO</Txt>
            <Txt fill={"#fff"} fontSize={28}>Valentin Kolb, Matthias Klenz</Txt>
        </Layout>
    )

    yield* waitFor(14.0)
})
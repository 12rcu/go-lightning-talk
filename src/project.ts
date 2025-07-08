import {makeProject} from '@motion-canvas/core';
import audio from './assets/voice_transitions.mp3';

import {Code, LezerHighlighter} from "@motion-canvas/2d";

import {HighlightStyle} from '@codemirror/language';

import {parser} from '@lezer/go';
import prjSetup from "./scenes/2-project-setup/prj-setup?scene";
import {tags as t} from "@lezer/highlight";
import helloWorld from "./scenes/3-hello-world/hello-world?scene";
import channels from "./scenes/6-channels/channels?scene";
import bufferedChannels from "./scenes/8-buffered-channels/buffered-channels?scene";
import intro from "./scenes/1-intro/intro?scene";
import channelDirections from "./scenes/9-channel-directions/channel-directions?scene";
import channelSelect from "./scenes/10-channel-select/channel-select?scene";
import closeChannel from "./scenes/11-close-channel/close-channel?scene";
import channelsBlocking from "./scenes/7-channels/channels-blocking?scene";
import bufferedChannelsExample from "./scenes/8-1-buffered-channels-example/buffered-channels-example?scene";
import channelTimeout from "./scenes/10-1-channel-select-timeout/channel-timeout?scene";
import end from "./scenes/12-end/end?scene";

const MyStyle = HighlightStyle.define([
    {tag: [t.name, t.deleted, t.character, t.macroName], color: '#c0caf5'},
    {tag: [t.propertyName], color: '#7aa2f7'},
    {tag: [t.processingInstruction, t.string, t.inserted, t.special(t.string)], color: '#9ece6a'},
    {tag: [t.function(t.variableName), t.labelName], color: '#7aa2f7'},
    {tag: [t.color, t.constant(t.name), t.standard(t.name)], color: '#bb9af7'},
    {tag: [t.definition(t.name), t.separator], color: '#c0caf5'},
    {tag: [t.className], color: '#c0caf5'},
    {tag: [t.number, t.changed, t.annotation, t.modifier, t.self, t.namespace], color: '#ff9e64'},
    {tag: [t.typeName], color: '#0db9d7'},
    {tag: [t.operator, t.operatorKeyword], color: '#bb9af7'},
    {tag: [t.url, t.escape, t.regexp, t.link], color: '#b4f9f8'},
    {tag: [t.meta, t.comment], color: '#444b6a'},
    {tag: t.strong, fontWeight: 'bold'},
    {tag: t.emphasis, fontStyle: 'italic'},
    {tag: t.link, textDecoration: 'underline'},
    {tag: t.heading, fontWeight: 'bold', color: '#89ddff'},
    {tag: [t.atom, t.bool, t.special(t.variableName)], color: '#c0caf5'},
    {tag: t.invalid, color: '#ff5370'},
    {tag: t.strikethrough, textDecoration: 'line-through'},
]);

const Highlighter = new LezerHighlighter(
    parser,
    MyStyle,
);

Code.defaultHighlighter = Highlighter;

export default makeProject({
    scenes: [
        intro,
        prjSetup,
        helloWorld,
        //goroutines,
        channels,
        channelsBlocking,
        bufferedChannels,
        bufferedChannelsExample,
        channelDirections,
        channelSelect,
        channelTimeout,
        closeChannel,
        end
    ],
    audio: audio
});

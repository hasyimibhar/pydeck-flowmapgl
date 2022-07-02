/* global window, global */
import { FlowmapLayer } from './flowmap-layer';

const _global = typeof window === 'undefined' ? global : window;
_global.FlowmapLayerLibrary = { FlowmapLayer };

export default FlowmapLayerLibrary;

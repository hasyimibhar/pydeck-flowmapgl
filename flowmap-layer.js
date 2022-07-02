import { FlowmapLayer as Flowmap } from '@flowmap.gl/layers';
import { CompositeLayer } from '@deck.gl/layers';

const config = {
  darkMode: true,
  colorScheme: 'Teal',
  highlightColor: '#ff9b29',
  opacity: 1.0,
  fadeEnabled: Flowmap.defaultProps.fadeEnabled,
  fadeOpacityEnabled: Flowmap.defaultProps.fadeOpacityEnabled,
  fadeAmount: Flowmap.defaultProps.fadeAmount,
  clusteringEnabled: Flowmap.defaultProps.clusteringEnabled,
  clusteringAuto: Flowmap.defaultProps.clusteringAuto,
  clusteringLevel: 5,
  clusteringMethod: 'HCA',
  animationEnabled: Flowmap.defaultProps.animationEnabled,
  adaptiveScalesEnabled: Flowmap.defaultProps.adaptiveScalesEnabled,
  locationTotalsEnabled: Flowmap.defaultProps.locationTotalsEnabled,
  locationLabelsEnabled: Flowmap.defaultProps.locationLabelsEnabled,
  maxTopFlowsDisplayNum: Flowmap.defaultProps.maxTopFlowsDisplayNum,
};

class FlowmapLayer extends CompositeLayer {
  renderLayers() {
    return [
      new Flowmap({
        id: 'my-flowmap-layer',
        data: this.props.data,
        pickable: true,
        opacity: config.opacity,
        darkMode: config.darkMode,
        colorScheme: config.colorScheme,
        fadeAmount: config.fadeAmount,
        fadeEnabled: config.fadeEnabled,
        fadeOpacityEnabled: config.fadeOpacityEnabled,
        locationTotalsEnabled: config.locationTotalsEnabled,
        animationEnabled: config.animationEnabled,
        clusteringEnabled: config.clusteringEnabled,
        clusteringAuto: config.clusteringAuto,
        clusteringLevel: config.clusteringLevel,
        adaptiveScalesEnabled: config.adaptiveScalesEnabled,
        highlightColor: config.highlightColor,
        getLocationId: (loc) => loc.id,
        getLocationLat: (loc) => loc.lat,
        getLocationLon: (loc) => loc.lon,
        getFlowOriginId: (flow) => flow.origin,
        getFlowDestId: (flow) => flow.dest,
        getFlowMagnitude: (flow) => flow.count,
        getLocationName: (loc) => loc.name,
        // onHover: (info) => setTooltip(getTooltipState(info)),
        // onClick: (info) => console.log('clicked', info.type, info.object),
      }),
    ];
  }
}

FlowmapLayer.layerName = "FlowmapLayer";
FlowmapLayer.defaultProps = defaultProps;

export { FlowmapLayer };

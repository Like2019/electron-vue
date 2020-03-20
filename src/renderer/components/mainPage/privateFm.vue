<template>
  <div class="openLayers">
      <div class="operation">
    <el-select v-model="value" placeholder="请选择">
      <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"></el-option>
    </el-select>
    <span class="drawGraphics" @click="drawGraphics">开始绘制</span>
    </div>
    <div id="map" class="mapArea"></div>
  </div>
</template>

<script>
import "ol/ol.css";
import Map from "ol/Map";
import View from "ol/View";
import XYZ from "ol/source/XYZ";
import { Tile as TileLayer, Vector as VectorLayer } from "ol/layer";
import { Vector as VectorSource } from "ol/source";
import { Fill, Stroke, Style, Icon, Circle } from "ol/style";

export default {
  name: "privateFm",
  data() {
    return {
      options: [
        {
          value: "Point",
          label: "点"
        },
        {
          value: "Line",
          label: "线"
        },
        {
          value: "Circle",
          label: "圆"
        },
        {
          value: "Polygon",
          label: "多边形"
        }
      ],
      value:'Point'
    };
  },
  async mounted() {
    await this.initMap();
  },
  methods: {
    initMap() {
      let that = this;
      let baseLayer = new TileLayer({
        source: new XYZ({
          url: "http://www.google.cn/maps/vt?lyrs=m@189&gl=cn&x={x}&y={y}&z={z}"
        })
      });

      new Map({
        layers: [baseLayer],
        target: "map",
        view: new View({
          projection: "EPSG:3857",
          center: [12119999, 4063999],
          zoom: 11,
          maxZoom: 22
        })
      });
    }
  }
};
</script>
<style>
.mapArea {
  height: 300px;
  margin-top: 20px;
}
.operation{
    width: 100%;
    height: 70px;
    display: flex;
    align-items: center;
    margin-top: 30px;
}
.openLayers .el-select{
    float: left;
}
.drawGraphics{
    display: block;
    float: left;
    margin-left: 10px;
    width: 80px;
    height: 40px;
    line-height: 40px;
    text-align: center;
    border: 1px solid #e1e1e1;
    color: #666;
}
</style>
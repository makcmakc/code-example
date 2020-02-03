<template>
  <div class="app-loader">
      <div class="ellipse-container">
        <div class="ellipse ellipse-outer">
          <div class="ellipse ellipse-outer-thick"></div>
        </div>

        <div class="circle"></div>
        
        <div class="ellipse ellipse-inner">
          <div class="ellipse ellipse-inner-thick"></div>
        </div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'loader'
}
</script>


<style>
.ellipse-container {
  top: 240px;
  left: 340px;
  position: absolute;
  z-index: 9999;
  transition: all .3s ease;
}
.circle {
  position: absolute;
  width: 30px;
  height: 30px;
  background: rgba(91, 18, 149, .9); 
  border-radius: 50%;
  margin: 35px;
}
.ellipse-outer {
  position: absolute;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  border: 1px solid rgba(91, 18, 149, .8); 
  animation: ellipseOuter 1.5s linear infinite;
}
.ellipse-outer-thick {
  position: absolute;
  margin: 9px;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: #5B1295;
}
.ellipse-inner {
  position: absolute;
  width: 70px;
  height: 70px;
  border-radius: 50%;
  border: 1px solid rgba(91, 18, 149, .8); 
  margin: 15px 15px;
  animation: ellipseInner 1s linear infinite;
}
.ellipse-inner-thick {
  position: absolute;
  margin: 5px;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: #5B1295;
}
@keyframes ellipseOuter {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
@keyframes ellipseInner {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
</style>
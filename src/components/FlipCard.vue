<template>
  <div class="flip h-24">
    <div class="flip-inner">
      <div class="flip-front">
        <slot name="front"></slot>
      </div>
      <div class="flip-back">
        <slot name="back"></slot>
      </div>
    </div>
  </div>
</template>

<style scoped>
  .flip {
    background-color: transparent;
    perspective: 5.5cm;
  }

  .flip-inner {
    position: relative;
    width: 100%;
    height: 100%;
    text-align: center;
    transition: transform 0.3s;
    transform-style: preserve-3d;
  }

  .flip:hover .flip-inner {
    transform: rotateX(-180deg);
    -webkit-transform: rotateX(-180deg);
  }

  .flip-front,
  .flip-back {
    position: absolute;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    backface-visibility: hidden;
    -webkit-backface-visibility: hidden;
    transform: rotateX(0deg);
    -webkit-transform: rotateX(0deg);
  }

  .flip-back {
    transform: rotateX(-180deg);
    -webkit-transform: rotateX(-180deg);
  }
</style>

class AnimationMovement {
  animation(variable) {
    variable.draw();
    variable.animation();
    variable instanceof Character ? variable.applyGravity() : null;
  }
}

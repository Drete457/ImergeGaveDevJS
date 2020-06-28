class AnimationMovement {
  animation(variable) {
    variable.draw();
    variable.animation();
    variable instanceof Character ? variable.applyGravity() : null;
  }

  animationBoss(variable) {
    variable.draw();
    variable.animation();
    variable.playerPositionVerification(character);
  }
}

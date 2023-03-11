import kaboom from "kaboom";
import { useEffect, useRef } from "react";
import { Center } from "@mantine/core";

const Game: React.FC = () => {
  const canvasRef = useRef(null);

  // just make sure this is only run once on mount so your game state is not messed up
  useEffect(() => {
    const k = kaboom({
      // if you don't want to import to the global namespace
      global: false,

      // set window size
      width: 640,
      height: 480,
      scale: 2,
      clearColor: [0, 0, 0, 1],

      // if you don't want kaboom to create a canvas and insert under document.body
      // @ts-ignore
      canvas: canvasRef.current,
    });
    // Speed identifiers
    const MOVE_SPEED = 120;
    const JUMP_FORCE = 360;
    const BIG_JUMP_FORCE = 550;
    let CURRENT_JUMP_FORCE = JUMP_FORCE;
    const FALL_DEATH = 400;
    const ENEMY_SPEED = 20;

    // Game logic

    let isJumping = true;

    // Load assets
    k.loadRoot("assets/game/sounds/");
    k.loadSound("big_jump", "big_jump.ogg");
    k.loadSound("small_jump", "small_jump.ogg");
    k.loadSound("bump", "bump.ogg");
    k.loadSound("coin", "coin.ogg");
    k.loadSound("stomp", "stomp.ogg");
    k.loadSound("powerup", "powerup.ogg");
    k.loadSound("powerup_appears", "powerup_appears.ogg");
    k.loadSound("pipe", "pipe.ogg");
    k.loadRoot("assets/game/music/");
    k.loadSound("death", "death.wav");
    k.loadSound("gameover", "game_over.ogg");
    k.loadSound("win", "world_clear.wav");
    k.loadSound("main_theme", "main_theme.ogg");
    k.loadSound("stage_clear", "stage_clear.wav");
    k.loadRoot("https://i.imgur.com/");
    k.loadSprite("bg", "jPJzaRT.png");
    k.loadSprite("coin", "wbKxhcd.png");
    k.loadSprite("evil-shroom", "KPO3fR9.png");
    k.loadSprite("brick", "pogC9x5.png");
    k.loadSprite("block", "M6rwarW.png");
    k.loadSprite("mario", "Wb1qfhK.png");
    k.loadSprite("mushroom", "0wMd92p.png");
    k.loadSprite("surprise", "gesQ1KP.png");
    k.loadSprite("unboxed", "bdrLpi6.png");
    k.loadSprite("pipe-top-left", "ReTPiWY.png");
    k.loadSprite("pipe-top-right", "hj2GK4n.png");
    k.loadSprite("pipe-bottom-left", "c1cYSbt.png");
    k.loadSprite("pipe-bottom-right", "nqQ79eI.png");
    k.loadSprite("blue-block", "fVscIbn.png");
    k.loadSprite("blue-brick", "3e5YRQd.png");
    k.loadSprite("blue-steel", "gqVoI2b.png");
    k.loadSprite("blue-evil-shroom", "SvV4ueD.png");
    k.loadSprite("blue-surprise", "RMqCc1G.png");
    k.loadSprite("border", "/border.png");

    k.add([k.text("oh hi"), k.pos(40, 20)]);

    // write all your kaboom code here
  }, []);

  return (
    <Center>
      <canvas ref={canvasRef} />
    </Center>
  );
};

export default Game;
